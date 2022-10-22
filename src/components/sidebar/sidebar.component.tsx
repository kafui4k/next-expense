import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import InboxIcon from "@mui/icons-material/Inbox";
import ArticleIcon from "@mui/icons-material/Article";
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFileSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import { Avatar, Divider } from "@mui/material";
import {
  ArticleWrapper,
  Footer,
  InnboxWrapper,
  NavItemsWrapper,
  ReportWrapper,
  SettingsWrapper,
  SideBar,
  SidebarAvatar,
  SideBarAvatarGroup,
  ArrowDownIconContainer,
  LinkName,
  NavDropdown,
} from "./sidebar.styles";

import { magic } from "../../lib/magic-auth";

const SideBarComponent = ({ children }: any) => {
  const router = useRouter();
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

  return (
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
  );
};

export default SideBarComponent;
