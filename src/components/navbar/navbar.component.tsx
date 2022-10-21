import { useRef, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

import { NavBar } from "./navbar.component.styles";
import ModalComponent from "../modal/modal.component";

const expenseOptions = [
  "Manually Create",
  "Scan Receipt",
  "Create Multiple",
  "Time",
];
const distanceOptions = ["Manually Create", "Create from Map"];

const NavBarComponent = ({ heading }: any) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [displayModalComponent, setDisplayModalComponent] = useState(false);

  const handleMenuItemClick = (event: any, index: number) => {
    event.preventDefault();

    setSelectedIndex(index);
    setOpen(false);

    setDisplayModalComponent(true);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <NavBar>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary">
          <h1>{heading}</h1>
        </Typography>
      </Breadcrumbs>
      {heading && heading.toLowerCase() === "expenses" && (
        <>
          <ButtonGroup
            variant="contained"
            ref={anchorRef}
            // aria-label="split button"
          >
            <Button
              size="small"
              color="success"
              // aria-controls={open ? "split-button-menu" : undefined}
              // aria-expanded={open ? "true" : undefined}
              aria-label="New Expense"
              // aria-haspopup="menu"
              onClick={handleToggle}
            >
              New Expense
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            sx={{
              // zIndex: 1,
              width: "250px",
              paddingRight: "0.5rem",
            }}
            open={open}
            anchorEl={anchorRef.current}
            // role={undefined}
            transition
            // disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper
                  sx={{
                    padding: "1rem",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  <span>EXPENSE</span>

                  <MenuList id="add-new-expense" autoFocusItem>
                    {expenseOptions.map((option, index) => (
                      <MenuItem
                        sx={{
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                        key={option}
                        // selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>

                  <span>DISTANCE</span>

                  <MenuList id="add-new-expense-distance" autoFocusItem>
                    {distanceOptions.map((option, index) => (
                      <MenuItem
                        sx={{
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Paper>
              </Grow>
            )}
          </Popper>
          {displayModalComponent && displayModalComponent ? (
            <ModalComponent
              index={selectedIndex}
              setDisplayModalComponent={setDisplayModalComponent}
            />
          ) : null}
        </>
      )}
    </NavBar>
  );
};

export default NavBarComponent;
