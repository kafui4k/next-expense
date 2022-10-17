import { useState } from "react";
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
  LineWrapper,
  LinkName,
  NavDropdown,
} from "./sidebar.styles";

import { magic } from "../lib/magic-auth";

const SideBarComponent = ({ children }: any) => {
  const router = useRouter();
  const [username, setUserName] = useState("Kafui Alordo");
  const [hideShow, setHideShow] = useState(false);

  const avatarUrl =
    "https://d1wpcgnaa73g0y.cloudfront.net/7e50685729872e06c56c522b2166c3bb54b295ae_128.jpeg";

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
            sx={{ bgcolor: "turquoise", width: 50, height: 50 }}
            alt={username && username}
            src={avatarUrl}
          >
            KA
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
                <h4 style={{ fontWeight: "bold" }}>Kafui Alordo</h4>
                <span style={{ color: "lightgray" }}>kalordo7@gmail.com</span>
              </div>
              <div>
                <LinkName onClick={handleSignOut}>Sign Out</LinkName>
              </div>
            </div>
          </NavDropdown>
        )}
        <Divider light />
        <h4>{username && username}</h4>
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
