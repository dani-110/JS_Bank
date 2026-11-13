import React, { useContext, useEffect, useState } from 'react';

import { navData as nav } from "../../layouts/sidebar/_profileNav";
import Card from '../../components/card/Card';
import PermissionExpandable from './permissionExpand';
import { Box, Grid, Switch, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { permission } from '../../utils/permissions';
import { useTheme } from '@emotion/react';
import PermissionChildExpandable from './permissionChildExpand';
import { getrolepermissions, setrolepermissions } from '../../store/actions/roles';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
const Permissions = (props) => {
    const { role } = props
    console.log(role)
    const theme = useTheme();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = React.useState(false);
    const [submenuExpanded, setSubMenuExpanded] = React.useState("");
    const breadCrumCtxt = useContext(BreadCrumSelectorContext);

    const [permissionObj, setPermissionObj] = useState(permission)

    const { user } = useSelector(state => state.auth)
    useEffect(() => {
        if (role?.rid) {
            const obj = {

                "roleid": role.rid
            }
            dispatch(getrolepermissions(obj)).then((res) => {
                if (res.payload.responsecode == 0) {
                    console.log(JSON.parse(res.payload.permissions))
                    setPermissionObj(JSON.parse(res.payload.permissions))
                }
            })
        }
    }, [])

    const onChange = (key, val, title) => {
        console.log(title)
        const obj = {
            "username": user.username,
            "roleid": role.rid,
            "permissionid": key.PERID,
            "isenable": val.target.checked ? 1 : 0,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + `|${title}`
        }

        console.log(obj)
        dispatch(setrolepermissions(obj)).then((res) => {
            console.log(JSON.parse(res.payload.permissions))
            if (res.payload.responsecode == 0) {
                setPermissionObj(JSON.parse(res.payload.permissions))
            }
        })
    }

    const permissionTree = (navItem, title) => <>
        {navItem.Children ? <PermissionChildExpandable title={navItem.PAGEPERMISSION} headerToggle={<Switch
            onChange={(val) => onChange(navItem, val, title + '|' + navItem.PAGEPERMISSION)}
            checked={navItem.ISENABLE == 1}
            value={navItem.ISENABLE == 1}
        />}>
            {
                navItem.Children?.map((sub) => permissionTree(sub, title + '|' + navItem.PAGEPERMISSION))
            }
        </PermissionChildExpandable> :
            <Box className='toggleContainerBar' sx={{ border: `1px solid ${theme.palette.inputBorder}` }}>
                <Typography variant="body2" sx={{marginLeft:'10px'}}>{navItem?.PAGEPERMISSION}</Typography>
                <Switch
                    onChange={(val) => onChange(navItem, val, title + '|' + navItem.PAGEPERMISSION)}
                    checked={navItem.ISENABLE == 1}
                    value={navItem.ISENABLE == 1}
                />
            </Box>
        }
    </>

    const handleExpandClick = (title) => {
        setExpanded(prev => !prev);
        setSubMenuExpanded((prev) => (prev === title ? "" : title));
    };

    return <Box style={{ height: '100%', display: 'flex', flexDirection: 'column', margin: '5px 0px' }}>
        <Typography variant="h3" sx={{ textAlign: 'left', margin: '10px' }}>
            {'Permissions:'}
        </Typography>
        <Grid container spacing={2}>

            {permissionObj.map((navItem) => <Grid item xs={12}>
                {navItem.Children ? <PermissionExpandable
                    title={navItem.PAGEPERMISSION}
                    headerToggle={<Switch
                        onChange={(val) => onChange(navItem, val, navItem.PAGEPERMISSION)}
                        checked={navItem.ISENABLE == 1}
                        value={navItem.ISENABLE == 1}
                    />}
                    expanded={expanded}
                    submenuExpanded={submenuExpanded}
                    handleExpandClick={handleExpandClick}
                >
                    {
                        navItem.Children?.map((sub) =>
                            permissionTree(sub, navItem.PAGEPERMISSION)
                        )
                    }
                </PermissionExpandable> :
                    <Box className='toggleContainerBar' sx={{ border: `1px solid ${theme.palette.inputBorder}` }}>
                        <Typography variant="body2" sx={{marginLeft:'10px'}}>{navItem?.PAGEPERMISSION}</Typography>
                        <Switch onChange={(val) =>
                            onChange(navItem, val, navItem.PAGEPERMISSION)}
                            checked={navItem.ISENABLE == 1}
                            value={navItem.ISENABLE == 1}
                        />
                    </Box>
                }
            </Grid>)
            }
        </Grid>
    </Box>
}
export default Permissions;