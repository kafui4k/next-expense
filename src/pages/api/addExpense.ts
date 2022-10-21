import { NextApiRequest, NextApiResponse } from "next";
import { table } from "../../lib/airtable";

export default async function addExpense(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      merchant_name,
      date,
      total,
      currency,
      category,
      description,
      report,
    } = req.body;
    try {
      const createExpense = await table.create([
        {
          fields: {
            merchant_name,
            date,
            total,
            currency,
            category,
            description,
            report,
          },
        },
      ]);

      const records = createExpense.map((record) => {
        return record.fields;
      });

      res.status(200);
      res.json({ message: "record created successfully", data: records });
    } catch (error) {
      console.error("Error creating adding a new expense, ", error);
    }
  } else {
    res.status(500);
  }
}
