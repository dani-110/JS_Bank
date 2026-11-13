import React, { useEffect, useRef, useState } from 'react';
import Card from '../../components/card/Card';
import { Box, Button, CircularProgress, Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import InputFields from '../../components/InputFields';
import { useForm } from 'react-hook-form';
import './login.scss'
import Logo from '../../assests/qubitsFill.png'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/auth';
import { saveVersion, setIsLogin } from '../../store/reducers/auth-slice';
import { alphanumericWithPointRegex, fetchPublicKey } from '../../utils/Utils';
import { actstatusfilter, applanguagefilter, channelfilter, cityfilter, configfilter, countryfilter, requestfilter, currencyfilter, departmentfilter, districtfilter, mccfilter, poolactfilter, respcodefilter, riskfilter, statefilter, employeefilter, businessnaturefilter, merchantindicatorfilter, partnertypefilter, legalentityfilter, relationacqfilter, telecomfilter, notificationtoken, faqcategory, soccategory, merchanttype, getdeclinereason, getkycstagestatus, getkycprocstage, getwalletlevels, getdevicestatus, getcompliancetransactionnames, getsafstatus, getreportformats, getbillertype, getauditeventtypes, getauditmoduletypes, getrequestelements, getservicename, getrequestmanualadjustment, allfilters } from '../../store/actions/filter';
import { uiActions } from '../../store/reducers/ui-slice';
import { getconfig } from '../../store/actions/systemParameter';

const Login = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme()
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = React.useState(false);
    const defaultValues = useForm({
        defaultValues: {
            username: "",
            password: ""
        },
    });

    const {
        control,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        reset,
        resetField,
        getValues,
        formState: { errors },
    } = defaultValues;
    const fetchFilterData = async (user) => {
        const filterObj = { actuser: user?.toLowerCase() };

        await dispatch(channelfilter(filterObj));
        await dispatch(configfilter(filterObj));
        await dispatch(cityfilter(filterObj));
        await dispatch(statefilter(filterObj));
        await dispatch(countryfilter(filterObj));
        await dispatch(requestfilter(filterObj));
        await dispatch(currencyfilter(filterObj));
        await dispatch(districtfilter(filterObj));
        await dispatch(departmentfilter(filterObj));
        await dispatch(poolactfilter(filterObj));
        await dispatch(respcodefilter(filterObj));
        await dispatch(actstatusfilter(filterObj));
        await dispatch(riskfilter(filterObj));
        await dispatch(mccfilter(filterObj));
        await dispatch(applanguagefilter(filterObj));
        await dispatch(employeefilter(filterObj));
        await dispatch(businessnaturefilter(filterObj));
        await dispatch(merchantindicatorfilter(filterObj));
        await dispatch(partnertypefilter(filterObj));
        await dispatch(legalentityfilter(filterObj));
        await dispatch(relationacqfilter(filterObj));
        await dispatch(telecomfilter(filterObj));
        await dispatch(notificationtoken(filterObj));
        await dispatch(faqcategory(filterObj));
        await dispatch(soccategory(filterObj));
        await dispatch(merchanttype(filterObj));
        await dispatch(getdeclinereason(filterObj));
        await dispatch(getkycstagestatus(filterObj));
        await dispatch(getkycprocstage(filterObj));
        await dispatch(getwalletlevels(filterObj));
        await dispatch(getdevicestatus(filterObj));
        await dispatch(getcompliancetransactionnames(filterObj));
        await dispatch(getsafstatus(filterObj));
        await dispatch(getreportformats(filterObj));
        await dispatch(getbillertype(filterObj));
        await dispatch(getauditeventtypes(filterObj));
        await dispatch(getauditmoduletypes(filterObj));
        await dispatch(getrequestelements(filterObj));
        await dispatch(getservicename(filterObj));
        await dispatch(getrequestmanualadjustment(filterObj));


        // await dispatch(branchfilter(filterObj));
        // await dispatch(transactionfilter(filterObj));
        // await dispatch(productfilter(filterObj));
        // await dispatch(taxfilter(filterObj));
        // await dispatch(uirolefilter(filterObj));
        // await dispatch(uiuserfilter(filterObj));
        // await dispatch(payrollcompanyfilter(filterObj));
        // await dispatch(holdingfilter(filterObj));
        // await dispatch(terminaltypefilter(filterObj));
        // await dispatch(terminalfilter(filterObj));
        // await dispatch(merchantfilter(filterObj));
        // await dispatch(faqquestion(filterObj));
        // await dispatch(socchargetype(filterObj));
        // await dispatch(getreportlist(filterObj));
        // await dispatch(getconsumerproducts(filterObj));
        // await dispatch(crmMerchantproductfilter(filterObj));
        // await dispatch(getbanks(filterObj));
    };

    const submit = async () => {
        setIsLoading(true)
        let data = getValues()
        data["salt"] = "30"
        data["audittrace"] = 'Qubits|Admin Panel|Login'
        data["actuser"] = data.username?.toLowerCase()
        data.password = await fetchPublicKey(data.password);
        if (!data.password) {
            console.error('Encryption failed');
            setIsLoading(false);
            return;
        }
        dispatch(login(data)).then((res) => {
            console.log(res.payload?.user?.responsecode)
            if (res.payload?.user?.responsecode == 0) {
                const filterObj = { actuser: res.payload.username?.toLowerCase() };
                dispatch(allfilters(filterObj)).then(res => {
                    const data = {
                        "configid": "",
                        "audittrace": 'Qubits | Login'
                    }
                    dispatch(getconfig(data)).then((res) => {
                        const obj = res.payload.list.find(val => val.entity == 'BO Portal Version')
                        dispatch(saveVersion(obj))
                        uiActions.showNotification({
                            status: "success",
                            title: "Authorized!",
                            message: "Welcome to Qubits",
                        })
                        dispatch(setIsLogin())
                        sessionStorage.setItem('wasHidden', true);
                        setIsLoading(false);
                    });

                })
            }
            else {
                setIsLoading(false);
            }

        })
    }

    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error('Autoplay error:', error);
            });
        }
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSubmit(submit)();  // Trigger form submission
        }
    };

    return <Box style={{ display: 'flex', height: '100vh', justifyContent: 'end' }} className='loginContainer'>

        {/* <video
            ref={videoRef}
            src={video1}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                background:' rgb(226, 229, 233)',
            }}
            autoPlay
            muted
        /> */}
        <Card style={{ maxWidth: isMobile ? '80%' : '25%', padding: '50px', margintop: '200px', background: 'transparent', border: '0px ' }}>
            <Box className="logoContainer">
                <img src={Logo} alt="Logo" />
                <Typography variant="h2" component="span" color="secondary" sx={{ margin: '10px auto' }} >
                    Hi, Welcome Back
                </Typography>
                <Typography variant="h4" component="span" sx={{ margin: '10px auto' }} color={'rgb(105, 117, 134)'} >
                    Enter your credentials to continue
                </Typography>
            </Box>
            <form onKeyDown={handleKeyDown}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <InputFields
                            fieldName="username"
                            type="text"
                            label="Username"
                            control={control}
                            rules={{
                                required: "Username is required",
                            }}
                            error={errors.username}
                            pattern={alphanumericWithPointRegex}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputFields
                            fieldName="password"
                            type={showPassword ? "text" : "password"}
                            label="Password"
                            control={control}
                            rules={{
                                required: "Password is required",
                            }}
                            error={errors.password}
                            inputProps={{
                                endAdornment: (
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <AiFillEyeInvisible color={theme.palette.textColor} /> : <AiFillEye color={theme.palette.textColor} />}
                                    </IconButton>
                                ),
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="text" color="secondary" >Forgot Password?</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth size="medium" variant="contained" color="secondary" disabled={isLoading}
                            onClick={handleSubmit(submit)}>
                            {isLoading && (
                                <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                            )}Login</Button>
                    </Grid>
                </Grid>
            </form>
        </Card>
    </Box>
}
export default Login;