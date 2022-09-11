import React from "react";
import Avatar from "@mui/material/Avatar";
import BalanceComponent from "../../components/balance-component";
import { Divider } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import ArticleIcon from '@mui/icons-material/Article';
import InsertDriveFileSharpIcon from '@mui/icons-material/InsertDriveFileSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function MyExpense() {
  const avatarUrl =
    "https://d1wpcgnaa73g0y.cloudfront.net/7e50685729872e06c56c522b2166c3bb54b295ae_128.jpeg";

  return (
    <div
      style={{
        display: "flex",
        background: 'white',
      }}
    >
      <div
        style={{
          display: "flex",
          width: "20%",
          padding: "20px",
          flexDirection: "column",
          background: '#0B1B34',
          height: '100vh',
          color: 'whitesmoke',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ bgcolor: "turquoise", width: 50, height: 50 }}
            alt="Kafui Alordo"
            src={avatarUrl}
          >
            KA
          </Avatar>
          <Divider light />
          <h4>Kafui Alordo</h4>
        </div>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
         }}>
          <div style={{ 
            alignItems: 'center',
            display: 'flex',
            gap: '1rem'
           }}>
            <InboxIcon />
            <span>Inbox</span>
          </div>
          <div style={{ 
            alignItems: 'center',
            display: 'flex',
            gap: '1rem'
           }}>
            <ArticleIcon />
            <span>Expenses</span>
          </div>
          <div style={{ 
            alignItems: 'center',
            display: 'flex',
            gap: '1rem'
           }}>
            <InsertDriveFileSharpIcon />
            <span>Reports</span>
          </div>
          <div style={{ 
            alignItems: 'center',
            display: 'flex',
            gap: '1rem'
           }}>
            <SettingsSharpIcon />
            <span>Settings</span>
          </div>
        </div>
        <div style={{ 
          position: 'absolute',
          bottom: '0',
        }}>
          <h1 style={{ color: 'white' }}>NextExpense</h1>
         </div>
      </div>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        width: '80%'
       }}>
        <div style={{ 
          height: '70px',
          background: 'white',
          border: 'none',
          borderBottom: '1px solid lightgrey',
          padding: '10px',
          alignItems: 'center',
          display: 'flex',
         }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.primary">
              <h1>Expenses</h1>
            </Typography>
          </Breadcrumbs>
        </div>
        <div style={{ 
          padding: '10px',
         }}>
          <BalanceComponent />
        </div>
      </div>
    </div>
  );
}

export default MyExpense;
