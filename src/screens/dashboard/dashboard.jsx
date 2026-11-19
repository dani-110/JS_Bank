import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { Box, Typography, useTheme, Zoom } from "@mui/material";
import consumers from '../../assests/consumers.png'
import merchants from '../../assests/merchants.png'
import ActivePOSMerchant from '../../assests/ActivePOSMerchant.png'
import ActiveWalletMerchants from '../../assests/ActiveWalletMerchants.png'
import './dashboard.scss'
import Chart from "react-apexcharts";
import { getdashboarddata } from "../../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import DynamicStackedBarChart from "./stackedBarChart";
import BarChart from "./barChart";
import DonutChart from "./donutChart";
import PieChart from "./pieChart";
import { LuUsers } from "react-icons/lu";
import { CiShop } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";

const Dashboard = () => {
    const dispatch = useDispatch()
    const theme = useTheme()
    const [activeConsumer, setActiveConsumer] = useState(0)
    const [activeWalletMerchantCount, setActiveWalletMerchantCount] = useState(0)
    const [activeMerchant, setActiveMerchant] = useState(0)
    const [transactionMISCustomList, setTransactionMISCustomList] = useState([])
    const [serviceWiseMerchantMISCustomList, setServiceWiseMerchantMISCustomList] = useState([])
    const [productWiseConsumerMISCustomList, setProductWiseConsumerMISCustomList] = useState([])
    const [productWiseMerchantMISCustomList, setProductWiseMerchantMISCustomList] = useState([])
    const { user, isLoggedIn } = useSelector(state => state.auth)
    useEffect(() => {
        console.log('dashboard')
        if (isLoggedIn) {
            dispatch(getdashboarddata({ "audittrace": 'Qubits|Admin Panel|Dashboard' })).then(res => {
                let data = res.payload
                console.log(data.serviceWiseMerchantMISCustomList)
                setActiveConsumer(data?.activeconsumercount)
                setActiveWalletMerchantCount(data?.activewalletmerchantcount)
                setActiveMerchant(data?.activemerchantcount)
                setTransactionMISCustomList(data?.transactionMISCustomList)
                setServiceWiseMerchantMISCustomList(data?.serviceWiseMerchantMISCustomList)
                setProductWiseMerchantMISCustomList(data?.productWiseMerchantMISCustomList)
                setProductWiseConsumerMISCustomList(data?.productWiseConsumerMISCustomList)
            })
        }
    }, [])


    return (
        <>
            <Box sx={{ height: '100%', overflow: 'scroll', display: 'flex', flexDirection: 'column', padding: '10px', gap: '10px' }}>
                <Box sx={{ display: 'flex', gap: '10px', }}>
                    <Card style={{ padding: '10px', flex: 1 }}>
                        <Typography variant="h4">
                            Home Dashboard
                        </Typography>
                    </Card>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', }}>
                    <Card classes="detailCard" style={{ '--hover-border-color': theme.palette.darkBaseColor, background: theme.palette.lightBaseColor, borderTop: `2px solid ${theme.palette.darkBaseColor}` }}>
                        <Box sx={{ display: 'flex' }}>
                            <Card style={{ padding: '10px' }}>
                                <LuUsers size={25} color={theme.palette.darkBaseColor} />
                            </Card>
                        </Box>
                        <Typography variant="h1">{activeConsumer}</Typography>
                        <Typography variant="body1">Active Consumers</Typography>
                        <Typography variant="body1">View module</Typography>
                    </Card>

                    <Card classes="detailCard" style={{ '--hover-border-color': theme.palette.darkBaseColor, background: theme.palette.lightBaseColor, borderTop: `2px solid ${theme.palette.darkBaseColor}` }}>
                        <Box sx={{ display: 'flex' }}>
                            <Card style={{ padding: '10px' }}>
                                <CiShop size={25} color={theme.palette.darkBaseColor} strokeWidth={1} />
                            </Card>
                        </Box>
                        <Typography variant="h1">{activeMerchant}</Typography>
                        <Typography variant="body1">Active POS Merchants</Typography>
                        <Typography variant="body1">View module</Typography>
                    </Card>

                    <Card classes="detailCard" style={{ '--hover-border-color': theme.palette.darkBaseColor, background: theme.palette.lightBaseColor, borderTop: `2px solid ${theme.palette.darkBaseColor}` }}>
                        <Box sx={{ display: 'flex' }}>
                            <Card style={{ padding: '10px' }}>
                                <LuWallet size={25} color={theme.palette.darkBaseColor} />
                            </Card>
                        </Box>
                        <Typography variant="h1">{activeWalletMerchantCount}</Typography>
                        <Typography variant="body1">Active Wallet Merchants</Typography>
                        <Typography variant="body1">View module</Typography>
                    </Card>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', }}>
                    <Card classes="detailCard">
                        <Typography variant="h4">Daily Throughout</Typography>
                        <Typography variant="body2">Transaction count for the selected day</Typography>
                        {serviceWiseMerchantMISCustomList?.length > 0 ?
                            <DynamicStackedBarChart data={serviceWiseMerchantMISCustomList} />
                            : <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography variant="h3">No Data Found</Typography>
                            </Box>
                        }
                    </Card>
                    <Card classes="detailCard">
                        <Typography variant="h4">Monthly Throughout</Typography>
                        <Typography variant="body2">Transaction count over time</Typography>
                        {transactionMISCustomList?.length > 0 ?
                            <BarChart data={transactionMISCustomList} />
                            : <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography variant="h3">No Data Found</Typography>
                            </Box>
                        }
                    </Card>
                </Box>

                <Box sx={{ display: 'flex', gap: '10px', }}>
                    <Card classes="detailCard">
                        <Typography variant="h4">Product Wise Merchant Distribution</Typography>
                        <Typography variant="body2">Product breakdown</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            {productWiseMerchantMISCustomList?.length > 0 ?
                                <DonutChart data={productWiseMerchantMISCustomList} />
                                :
                                <Typography variant="h3">No Data Found</Typography>
                            }
                        </Box>
                    </Card>
                    <Card classes="detailCard">
                        <Typography variant="h4">Product Wise Consumer Distribution</Typography>
                        <Typography variant="body2">Product breakdown</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            {productWiseConsumerMISCustomList?.length > 0 ?
                                <PieChart data={productWiseConsumerMISCustomList} />
                                :
                                <Typography variant="h3">No Data Found</Typography>
                            }
                        </Box>
                    </Card>
                </Box>

            </Box>
            {/* <Box className='dashboardContainer'>
                <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', overflow: 'hidden', }}>
                    <Box sx={{ height: '200px', display: 'flex' }}>
                        <Card classes='cardContainer'>
                            <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <img src={consumers} />

                                    <Typography variant="h5" component="text">
                                        Active Consumers
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }} >
                                    <Typography variant="h1" component="text" sx={{ fontSize: '60px' }}>
                                        {activeConsumer}
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>

                        <Box sx={{ flex: 1 }}>
                            <Card classes='cardContainer' style={{ flex: 1, padding: '2px 10px' }}>
                                <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <img src={ActivePOSMerchant} style={{ height: '75px', width: '75px' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '1px', gap: '10px' }} >
                                        <Typography variant="h4" component="text" sx={{ fontSize: '30px' }}>
                                            {activeMerchant}
                                        </Typography>
                                        <Typography variant="body2" component="text" sx={{ textAlign: 'center' }}>
                                            Active POS Merchants
                                        </Typography>
                                    </Box>
                                </Box>

                            </Card>
                            <Card classes='cardContainer' style={{ flex: 1, padding: '1px 10px' }}>
                                <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <img src={ActiveWalletMerchants} style={{ height: '75px', width: '75px' }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'column', padding: '1px', gap: '10px' }} >
                                        <Typography variant="h4" component="text" sx={{ fontSize: '30px' }}>
                                            {activeWalletMerchantCount}
                                        </Typography>
                                        <Typography variant="body2" component="text" sx={{ textAlign: 'center' }}>
                                            Active Wallet Merchants
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>

                    </Box>
                    <Card style={{ flex: 1, borderRadius: '10px', padding: '10px 10px', bgcolor: 'backgroundColor', margin: '15px' }}>
                        {serviceWiseMerchantMISCustomList?.length > 0 ?
                            <DynamicStackedBarChart data={serviceWiseMerchantMISCustomList} />
                            : <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography variant="h3">No Data Found</Typography>
                            </Box>
                        }
                        <Typography variant="h5" sx={{ textAlign: 'center' }}>Daily Throughout — Transaction Count</Typography>
                    </Card>
                </Box>
                <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', overflow: 'hidden', }}>
                    <Card style={{ flex: 1, borderRadius: '10px', padding: '10px 10px', bgcolor: 'backgroundColor', margin: '15px' }}>
                        {transactionMISCustomList?.length > 0 ?
                            <BarChart data={transactionMISCustomList} />
                            : <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography variant="h3">No Data Found</Typography>
                            </Box>
                        }
                        <Typography variant="h5" sx={{ textAlign: 'center' }}>Monthly Throughout — Transaction Count</Typography>
                    </Card>
                    <Box sx={{ height: '400px', display: 'flex' }}>
                        <Card classes='cardContainer'>
                            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {productWiseMerchantMISCustomList?.length > 0 ?
                                    <DonutChart data={productWiseMerchantMISCustomList} />
                                    :
                                    <Typography variant="h3">No Data Found</Typography>
                                }
                            </Box>
                            <Typography variant="h5" sx={{ textAlign: 'center' }}>Product Wise Merchant Distribution</Typography>
                        </Card>
                        <Card classes='cardContainer' >
                            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {productWiseConsumerMISCustomList?.length > 0 ?
                                    <PieChart data={productWiseConsumerMISCustomList} />
                                    :
                                    <Typography variant="h3">No Data Found</Typography>
                                }
                            </Box>
                            <Typography variant="h5" sx={{ textAlign: 'center' }}>Product Wise Consumer Distribution</Typography>
                        </Card>
                    </Box>
                </Box>
            </Box> */}
        </>
    );
};

export default Dashboard;
