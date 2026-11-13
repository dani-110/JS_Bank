import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            style={{ flex: 1, width: '100px' }}
        >
            {value === index && (
                <Box sx={{ p: 3, }}>
                    <Typography sx={{ flex: 1 }}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function SideTab(props) {
    const { childArray, tabValue, setTabValue, searchValue, search, auditTrace, onClickChange } = props
    const theme = useTheme()
    const [value, setValue] = React.useState(tabValue >= 0 ? tabValue : 0);
    const breadCrumCtxt = React.useContext(BreadCrumSelectorContext)

    React.useEffect(() => {
        if (childArray.length > 0 && auditTrace) {
            breadCrumCtxt.breadCrumSelectorAddHandler(childArray[0]?.label + " tabs")
        }
    }, [])
    
    React.useEffect(() => {
        if (searchValue && searchValue?.length > 0) {
            setValue(null)
        }
    }, [searchValue])

    React.useEffect(() => {
        // if (auditTrace) {
        //     if (childArray.length > 0) {
        //         breadCrumCtxt.onChangeTabHandler(childArray[tabValue]?.label + " tabs")
        //     }
        // }
        setValue(tabValue || 0)

    }, [tabValue])


    const handleChange = (event, newValue) => {
        if (auditTrace) {
            if (childArray.length > 0) {
                breadCrumCtxt.onChangeTabHandler(childArray[newValue]?.label + " tabs")
            }
        }
        // setValue(newValue)
        if (onClickChange) {
            setValue(newValue);
        } else {
            setValue(tabValue >= 0 ? tabValue : newValue);
            if (setTabValue) {
                setTabValue(newValue)
            }
        }
    };

    return (
        <Box>
            <Box sx={{ maxWidth: '200px' }}>
                {search && search}
            </Box>

            <Box
                sx={{ flexGrow: 1, bgcolor: 'background', display: 'flex', flex:1}}
            >

                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: theme.palette.textColor }}
                    textColor='secondary'
                    indicatorColor='secondary'

                >

                    {
                        childArray?.map((item, index) => (
                            <Tab sx={{ fontSize: '12px', color: theme.palette.textColor, maxWidth: '200px' }} label={item?.label}{...a11yProps(index)} />
                        ))
                    }
                </Tabs>
                {
                    childArray?.map((item, index) => (
                        // { React.cloneElement(item.component, { customProp }) }
                        <TabPanel value={value} index={index} key={index} >
                            {React.cloneElement(item.component, { setValue })}
                        </TabPanel>
                        // <TabPanel value={value} index={index}>{item.component}</TabPanel>
                    ))
                }
            </Box >
        </Box>
    );
}
