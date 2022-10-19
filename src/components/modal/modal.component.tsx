import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ExpenseComponent from "../expense/expense-component";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 910,
  height: 600,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface ModalComponentProps {
  index: number;
}

const ModalComponent = ({ index }: ModalComponentProps) => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(index);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    // <div style={{ display: "block" }}>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ borderBottom: 1 }}>
          <span>New Expense</span>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Expense" {...a11yProps(0)} />
            <Tab label="Distance" {...a11yProps(1)} />
            <Tab label="Time" {...a11yProps(2)} />
            <Tab label="Multiple" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ExpenseComponent />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Distance
        </TabPanel>
        <TabPanel value={value} index={2}>
          Time
        </TabPanel>
        <TabPanel value={value} index={3}>
          Multiple
        </TabPanel>
      </Box>
    </Modal>
    // </div>
  );
};

export default ModalComponent;
