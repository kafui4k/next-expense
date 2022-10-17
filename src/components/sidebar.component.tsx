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
} from "./sidebar.styles";
import Link from "next/link";
import { useState } from "react";

const SideBarComponent = ({ children }: any) => {
  const [username, setUserName] = useState("Kafui Alordo");

  const avatarUrl =
    "https://d1wpcgnaa73g0y.cloudfront.net/7e50685729872e06c56c522b2166c3bb54b295ae_128.jpeg";

  return (
    <SideBar>
      <SidebarAvatar>
        <Avatar
          sx={{ bgcolor: "turquoise", width: 50, height: 50 }}
          alt={username && username}
          src={avatarUrl}
        >
          KA
        </Avatar>
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
