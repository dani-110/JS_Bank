import React from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import './header.scss'
import { AiOutlineMenu } from "react-icons/ai";
import Logo from '../../assests/qubitsHorizontal.png'
import UserSetting from '../../components/userSetting/userSetting';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = (props) => {
    const { menuToggleHandler, sideMenuToggle, sideMenuToggleHandler } = props
    const navigate = useNavigate()
      const { user } = useSelector(state => state.auth)
    // const openAPI = localStorage.getItem(('openAPI'));
    // const user = JSON.parse(openAPI)

    return (
        <Grid container className='headerContainer' sx={{ bgcolor: 'headerBackgroundColor' }}>
            <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                <Box className="toggleButton">
                    <IconButton className='icon' onClick={() => {
                        menuToggleHandler()
                    }} size="small">
                        <AiOutlineMenu color="rgb(94, 53, 177)"></AiOutlineMenu>
                    </IconButton>
                </Box>
                <Box className="sideToggleButton">
                    <IconButton className='icon' onClick={() => {
                        sideMenuToggleHandler()
                    }} size="small">
                        <AiOutlineMenu color="rgb(94, 53, 177)"></AiOutlineMenu>
                    </IconButton>
                </Box>
                <img src={Logo} alt="Logo" onClick={() => navigate('dashboard')} />
            </Grid>
            <Grid item xs={8} sx={{flexDirection:'column', display:'flex', justifyContent:'center'}} >
                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                    <Box sx={{ display: 'flex', marginRight: '30px', alignItems: 'end' }}>
                        {/* <Typography variant='h3'>Karachi</Typography>
                    <img src={sun} style={{width:'20px', margin:'0px 10px'}}/>
                    <Typography variant='h3'>32&deg;<sup>c</sup></Typography> */}
                        <Typography variant='h3' sx={{ marginRight: '10px' }}>Hi</Typography>
                        <Typography variant='h3' sx={{ textTransform: "capitalize" }}>{user?.username}</Typography>
                    </Box>
                    <UserSetting />
                </Box>
                
            </Grid>
        </Grid>
    );
};


export default Header;