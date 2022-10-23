import Image from "next/image";
import router from "next/router";
import Link from "next/link";
import { useRef, useState, useEffect, Fragment } from "react";
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
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";

import {
  NavBar,
  HamBurgerMenuContainer,
  HamBurgerMenu,
  SideBar,
  ArrowDownIconContainer,
  ArticleWrapper,
  Footer,
  InnboxWrapper,
  LinkName,
  NavDropdown,
  NavItemsWrapper,
  ReportWrapper,
  SettingsWrapper,
  SidebarAvatar,
  SideBarAvatarGroup,
} from "./navbar.component.styles";
import ModalComponent from "../modal/modal.component";
import { Avatar, Divider } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import ArticleIcon from "@mui/icons-material/Article";
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFileSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import { magic } from "../../lib/magic-auth";

const expenseOptions = [
  "Manually Create",
  "Scan Receipt",
  "Create Multiple",
  "Time",
];
const distanceOptions = ["Manually Create", "Create from Map"];

type Anchor = "top" | "left" | "bottom" | "right";

const NavBarComponent = ({ heading }: any) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [displayModalComponent, setDisplayModalComponent] = useState(false);
  const [state, setState] = useState(false);
  const [username, setUserName] = useState("");
  const [hideShow, setHideShow] = useState(false);
  const [email, setEmail] = useState<string>("");

  const avatarUrl = "";

  useEffect(() => {
    async function getUserData() {
      // Assumes a user is already logged in
      try {
        const { email }: any = await magic?.user.getMetadata();
        setEmail(email);
      } catch (error) {
        // Handle errors if required!
        console.error("Error fetching user", error);
      }
    }
    getUserData();
  }, []);

  const handleShowDropDown = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setHideShow(!hideShow);
  };

  const handleSignOut = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await magic?.user.logout();
      router.push("/login");
    } catch (error) {
      console.error("Error logging out", error);
      router.push("/login");
    }
  };

  const handleMenuItemClick = (event: any, index: number) => {
    event.preventDefault();

    setSelectedIndex(index);
    setOpen(false);

    setDisplayModalComponent(true);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <>
      <NavBar>
        <>
          <HamBurgerMenuContainer>
            <HamBurgerMenu onClick={toggleDrawer(true)}>
              <Image
                src="/static/menu.svg"
                width={30}
                height={30}
                alt="menu-icon"
              />
            </HamBurgerMenu>
          </HamBurgerMenuContainer>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.primary">
              <h1>{heading}</h1>
            </Typography>
          </Breadcrumbs>
        </>
        {heading && heading.toLowerCase() === "expenses" && (
          <>
            <ButtonGroup variant="contained" ref={anchorRef}>
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
      <Drawer open={state} onClose={toggleDrawer(false)}>
        <SideBar>
          <SidebarAvatar>
            <SideBarAvatarGroup>
              <Avatar
                sx={{ bgcolor: "turquoise", width: 80, height: 80 }}
                alt={username && username ? username : "place-holder-name"}
                src={
                  avatarUrl && avatarUrl
                    ? avatarUrl
                    : "/static/expensify-iconmark-reversed.svg"
                }
              >
                Ex
              </Avatar>
              <ArrowDownIconContainer onClick={handleShowDropDown}>
                <Image
                  src="/static/keyboard-arrow-down.svg"
                  width={30}
                  height={20}
                  alt="arrow-down-icon"
                />
              </ArrowDownIconContainer>
            </SideBarAvatarGroup>
            {hideShow && (
              <NavDropdown>
                <div>
                  <div style={{ lineHeight: 0, marginBottom: "1rem" }}>
                    <h4 style={{ fontWeight: "bold" }}>
                      {username && username ? username : "N/A"}
                    </h4>
                    <span style={{ color: "lightgray" }}>
                      {email && email ? email : "N/A"}
                    </span>
                  </div>
                  <div>
                    <LinkName onClick={handleSignOut}>Sign Out</LinkName>
                  </div>
                </div>
              </NavDropdown>
            )}
            <Divider light />
            <h4>{username && username ? username : "N/A"}</h4>
          </SidebarAvatar>
          <NavItemsWrapper>
            <InnboxWrapper>
              <InboxIcon />
              <Link href="/">
                <a>Inbox</a>
              </Link>
            </InnboxWrapper>
            <ArticleWrapper>
              <ArticleIcon />
              <Link href="/expenses">
                <a>Expenses</a>
              </Link>
            </ArticleWrapper>
            <ReportWrapper>
              <InsertDriveFileSharpIcon />
              <span>Reports</span>
            </ReportWrapper>
            <SettingsWrapper>
              <SettingsSharpIcon />
              <span>Settings</span>
            </SettingsWrapper>
          </NavItemsWrapper>
          <Footer>
            <h1 style={{ color: "white" }}>Expensify</h1>
          </Footer>
        </SideBar>
      </Drawer>
    </>
  );
};

export default NavBarComponent;
