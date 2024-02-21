import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BasicArea from "./Graph";

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={{ textTransform: "capitalize" }}
            label="Orders"
            {...a11yProps(0)}
          />
          <Tab
            style={{ textTransform: "capitalize" }}
            className="capitalize"
            label="Sales"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Orders
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="text-xs">Total Sales </div>
        <div className="flex items-center">
          <span className="text-lg font-bold">₹42450</span>
          &nbsp;
          <span
            style={{ color: "#dc2626", fontSize: "16px" }}
            class="material-icons-outlined"
          >
            arrow_downward
          </span>
          <span style={{ color: "#dc2626" }} className="text-xs">
            -62.77%
          </span>{" "}
          &nbsp;
          <span className="text-xs">vs last 7 days</span> &nbsp;{" "}
          <span className="font-bold text-xs">₹114000</span>
        </div>
        <BasicArea />
      </CustomTabPanel>
    </Box>
  );
}
