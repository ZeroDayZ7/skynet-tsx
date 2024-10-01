import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import tabsData from "./tabsData";

import './generalCookies.css'


const GeneralCookies = () => {

  const { t } = useTranslation();

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTabIndex(newValue);
  };

  return (
    <div className="cookie">
      <Tabs
        className="eha1"
        value={activeTabIndex}
        onChange={handleTabChange}
        aria-label="Cookie Tabs"
        centered
      >
        {tabsData.map((tab, index) => (
          <Tab 
            className="eha2"
            key={index} 
            label={t(`cookieDescription.${tab.title}`)} />
          
        ))}
      </Tabs>
      <Box p={3} className="eha3">
        {tabsData.map((tab, index) => (
          <TabPanel className="eha4" key={index} value={activeTabIndex} index={index}>
            {tab.content}
          </TabPanel>
        ))}
      </Box>
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="eha5"
      role="tabpanel"
      hidden={value !== index}
      id={`cookie-tabpanel-${index}`}
      aria-labelledby={`cookie-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="eha6">
          {children}
        </Box>
      )}
    </div>
  );
};

export default GeneralCookies;
