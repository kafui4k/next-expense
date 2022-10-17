import { useRef, useState } from "react";
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

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
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
              aria-label="split button"
            >
              <Button
                // variant="contained"
                size="small"
                color="success"
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-label="New Expense"
                aria-haspopup="menu"
                onClick={handleToggle}
              >
                New Expense
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper
              sx={{
                zIndex: 1,
                width: "250px",
                paddingRight: "0.5rem",
              }}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
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
                    <span style={{}}>EXPENSE</span>

                    <MenuList id="split-button-menu" autoFocusItem>
                      {expenseOptions.map((option, index) => (
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

                    <span>DISTANCE</span>

                    <MenuList id="split-button-menu" autoFocusItem>
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
          </>
        )}
      </NavBar>
    </div>
  );
};

export default NavBarComponent;
