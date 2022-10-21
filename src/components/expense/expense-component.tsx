import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  UpperColumn,
  LeftContainer,
  LowerColumn,
  LowerColumnSubmitButton,
  RightContainer,
  AddReceiptButtonIcon,
  Label,
} from "./expense-component.styles";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const categories = [
  {
    value: "Car",
  },
  {
    value: "Advertising",
  },
  {
    value: "Home Office",
  },
  {
    value: "Fitness",
  },
  {
    value: "Insurance",
  },
  {
    value: "Labor",
  },
  {
    value: "Maintenance",
  },
];

const reports = [
  {
    value: "yes",
  },
  {
    value: "no",
  },
];

type ExpenseComponentProps = {
  setOpen: any;
};

function ExpenseComponent({ setOpen }: ExpenseComponentProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [merchantName, setMerchantName] = useState("");
  const [date, setDate] = useState("");
  const [total, setTotal] = useState();
  const [currency, setCurrency] = useState("EUR");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [report, setReport] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleMerchantNameChange = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    e.preventDefault();

    setMerchantName(e.target.value);
  };

  const handleDateChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDate(e.target.value);
  };

  const handleTotalChange = (e: any) => {
    setTotal(e.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleReportChange = (e: any) => {
    setReport(e.target.value);
  };

  const onFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleAddExpenseSubmit = async (e: { preventDefault: () => void }) => {
    if (merchantName && date && total && currency) {
      setIsSaving(!isSaving);

      try {
        const reponse = await fetch("/api/addExpense", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            merchant_name: merchantName,
            date,
            total: parseFloat(total),
            currency,
            category,
            description,
            report,
          }),
        });

        const data = await reponse.json();

        if (data) {
          setIsSaving(false);
          setOpen(false);
          router.push("/expenses");
        } else {
          setIsSaving(false);
        }
      } catch (error) {
        console.error("Error adding new expense ", error);
      }
    } else {
      console.error("Empty parameters provided, please try again.");
    }
  };

  return (
    <Container>
      <UpperColumn>
        <LeftContainer>
          <form onSubmit={onFormSubmit}>
            <div
              className="form-group"
              style={{
                display: "flex",
                width: "400px",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "1rem",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.1rem",
                }}
              >
                <Label htmlFor="merchant">Merchant</Label>
                <span style={{ lineHeight: "1rem" }}>*</span>
              </div>
              <TextField
                type="text"
                name="merchant"
                id="merchant"
                value={merchantName}
                onChange={handleMerchantNameChange}
                placeholder="Merchant Name"
                size="small"
                variant="outlined"
                required
              />
            </div>

            <div
              className="form-group"
              style={{
                display: "flex",
                width: "360px",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "1rem",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.1rem",
                }}
              >
                <Label htmlFor="date">Date</Label>
                <span style={{ lineHeight: "1rem" }}>*</span>
              </div>
              <TextField
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={handleDateChange}
                placeholder="date"
                size="small"
                variant="outlined"
                required
              />
            </div>

            <div
              className="form-group"
              style={{
                display: "flex",
                width: "510px",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "1rem",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.1rem",
                }}
              >
                <Label htmlFor="total">Total</Label>
                <span style={{ lineHeight: "1rem" }}>*</span>
              </div>
              <TextField
                type="text"
                name="total"
                id="total"
                value={total}
                onChange={handleTotalChange}
                placeholder="Total"
                size="small"
                variant="outlined"
                required
              />

              <TextField
                id="outlined-select-currency"
                select
                name="currency"
                value={currency}
                onChange={handleChange}
                size="small"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value} {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div
              className="form-group"
              style={{
                display: "flex",
                width: "390px",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "1rem",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.1rem",
                }}
              >
                <Label htmlFor="category">Category</Label>
              </div>
              <TextField
                sx={{ width: "200px" }}
                select
                value={category}
                onChange={handleCategoryChange}
                size="small"
                name="category"
                id="category"
                placeholder="Type to Search"
                variant="outlined"
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div
              className="form-group"
              style={{
                display: "flex",
                width: "400px",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "1rem",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.1rem",
                }}
              >
                <Label htmlFor="merchant">Description</Label>
              </div>
              <TextField
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Description"
                size="small"
                variant="outlined"
              />
            </div>

            <div
              className="form-group"
              style={{
                display: "flex",
                width: "390px",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "1rem",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.1rem",
                }}
              >
                <Label htmlFor="report">Report</Label>
              </div>
              <TextField
                sx={{ width: "200px" }}
                select
                value={report}
                onChange={handleReportChange}
                size="small"
                name="report"
                id="report"
                placeholder="Type to Search"
                variant="outlined"
              >
                {reports.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <LowerColumnSubmitButton onClick={handleAddExpenseSubmit}>
              {isSaving && isSaving ? "Saving..." : "Save"}
            </LowerColumnSubmitButton>
          </form>
        </LeftContainer>
        <RightContainer>
          <Image
            src="/static/receipt.svg"
            width={100}
            height={150}
            alt="receipt-icon"
          />
          <AddReceiptButtonIcon>+</AddReceiptButtonIcon>
        </RightContainer>
      </UpperColumn>
      <LowerColumn></LowerColumn>
    </Container>
  );
}

export default ExpenseComponent;
