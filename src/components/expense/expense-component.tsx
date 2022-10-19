import React, { useState } from "react";
import Image from "next/image";
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

function ExpenseComponent() {
  const dispatch = useDispatch();
  const [merchantName, setMerchantName] = useState("");
  const [date, setDate] = useState("");
  const [total, setTotal] = useState();
  const [currency, setCurrency] = useState("EUR");
  const [category, setCategory] = useState("");

  const handleMerchantNameChange = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    e.preventDefault();

    setMerchantName(e.target.value);
  };

  const handleDateChange = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    e.preventDefault();

    setDate(e.target.value);
  };

  const handleTotalChange = (e: any) => {
    e.preventDefault();

    setTotal(e.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handleMerchantChange = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <Container>
      <UpperColumn>
        <LeftContainer>
          <form>
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
                <span style={{ lineHeight: "1rem" }}>*</span>
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
                <span style={{ lineHeight: "1rem" }}>*</span>
              </div>
              <TextField
                type="text"
                name="description"
                id="description"
                value=""
                onChange={(e) => console.log(e.target.value)}
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
                <span style={{ lineHeight: "1rem" }}>*</span>
              </div>
              <TextField
                sx={{ width: "200px" }}
                select
                value={category}
                onChange={handleCategoryChange}
                size="small"
                name="report"
                id="report"
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

            <LowerColumnSubmitButton
              onClick={() => console.log("save the data")}
            >
              Save
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
      <LowerColumn>
        {/* <LowerColumnSubmitButton
          type="submit"
          onClick={() => console.log("save the data")}
        >
          Save
        </LowerColumnSubmitButton> */}
      </LowerColumn>
    </Container>
  );
}

export default ExpenseComponent;
