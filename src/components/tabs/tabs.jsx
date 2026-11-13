
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import Card from "../card/Card";
import './tabs.scss'

const Tabs = (props) => {
    const { childArray, onTabClick, isNotChangeOnClick, changeTab, checkData, content, tabValue, keepMounted, setTabValue } = props
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    useEffect(() => {
        breadCrumCtxt.breadCrumSelectorAddHandler(childArray[0]?.label + " tabs")
    }, [])

    useEffect(() => {
        if (changeTab) {
            setValue(value + 1)
        }
    }, [changeTab])

    useEffect(() => {
        if (tabValue !== undefined && tabValue !== null) {
            setValue(tabValue)
        }
    }, [tabValue])

    const handleChange = (event, newValue) => {
        if (setTabValue) {
            setTabValue(newValue)
        }
        if (checkData) {
            if (checkData(value, newValue)) {
                breadCrumCtxt.onChangeTabHandler(childArray[newValue].label + " tabs")
                setValue(newValue);
            } else {
                setValue(value);
            }
        } else {
            breadCrumCtxt.onChangeTabHandler(childArray[newValue].label + " tabs")
            setValue(newValue);
        }
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', flex: 1, flexDirection: 'column', typography: 'body1', minHeight: '50vh' }}>
            <TabContext value={value}>
                <Box sx={{ display: 'flex', }}>
                    <TabList indicatorColor='secondary' textColor='secondary'
                        variant="scrollable"
                        scrollButtons="auto"
                        onChange={!isNotChangeOnClick && handleChange}
                        sx={{
                            borderBottom: `1px solid ${theme.palette.divider}`, // 👈 border line
                            minHeight: '48px'
                        }}>
                        {
                            childArray.map((item, index) => (
                                <Tab onClick={onTabClick} sx={{ fontSize: '15px', color: theme.palette.textColor }} label={item.label} value={index} />
                            ))
                        }
                    </TabList>
                </Box>
                <Box>
                    {content && content()}
                </Box>
                {
                    childArray.map((item, index) => (
                        <>
                            {keepMounted ?
                                <Box
                                    key={index}
                                    hidden={value !== index}
                                    sx={{ padding: '10px' }}
                                >
                                    {item.component}
                                </Box>
                                : <TabPanel value={index}>{item.component}</TabPanel>}
                        </>
                    ))}
            </TabContext>
        </Box>
    )
};

export default Tabs;
