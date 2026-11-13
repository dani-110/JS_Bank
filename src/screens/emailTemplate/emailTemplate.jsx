import React, { useContext, useEffect, useRef, useState } from "react";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Typography } from "@mui/material";
import './emailTemplate.scss'
import ButtonContainer from "../../components/buttonContainer";
import SelectFields from "../../components/SelectFields";
import { useForm } from "react-hook-form";
import DateTimePickerFields from "../../components/dateTimePickerField";
import ModeSelection from "./modeSelection";
import SearchBar from "../../components/searchBar/searchBar";
import { useTheme } from "@emotion/react";
import InputFields from "../../components/InputFields";
import { uiActions } from "../../store/reducers/ui-slice";
import { setDataObject } from "../../utils/Utils";
import { setnotificationconfig } from "../../store/actions/notification";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import Editor from "../../components/editor/editor";
import { createTransactionNotificationRecord, updateTransactionNotificationRecord } from "../../store/reducers/notification-slice";
const EmailTemplate = () => {
    const theme = useTheme();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const breadCrumCtxt = useContext(BreadCrumSelectorContext);
    const location = useLocation();
    const { state } = location

    const { notificationtokenFilter, channelFilter, transactionFilter } = useSelector(state => state.filter)

    const [whatsappText, setWhatsappText] = useState('')
    const [smsText, setSmsText] = useState('')
    const [inappText, setInappText] = useState('')
    const [emailText, setEmailText] = useState('')
    const [search, setSearch] = useState('')
    const [selectedMode, setSelectedMode] = useState('')
    const textareaRef = useRef(null);
    const [openPreview, setOpenPreview] = useState(false);
    const [prevMode, setPrevMode] = useState('');

    const yesNo = [
        {
            label: 'Yes',
            value: '1'
        },
        {
            label: 'No',
            value: '0'
        },
    ]

    const defaultValues = useForm({
        defaultValues: {
            channelid: "",
            requestcode: "",
            fromdate: "",
            todate: "",
            smstext: "",
            emailsubject: "",
            emailbody: "",
            appnotifysubject: "",
            appnotifybody: "",
            whatsapptext: "",
            smsflag: "",
            whatsappflag: "",
            emailflag: "",
            appflag: "",
            issource: "",
            isdestination: ""
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



    useEffect(() => {
        if (state?.notifytype) {
            if (state.whatsapp == '1') {
                setSelectedMode('Whatsapp')
                return;
            }
            if (state.sms == '1') {
                setSelectedMode('SMS')
                return;
            }
            if (state.email == '1') {
                setSelectedMode('Email')
                return;
            }
            if (state.app == '1') {
                setSelectedMode('In App')
                return;
            }
        } else {
            setSelectedMode('Whatsapp')
        }
    }, [])

    useEffect(() => {
        if (state?.notifytype) {
            if (state.whatsapp == '1') {
                setWhatsappText(state.whatsapptext)
            }
            if (state.sms == '1') {
                setSmsText(state.smstext)
            }
            if (state.email == '1') {
                setEmailText(state.emailbody)
            }
            if (state.app == '1') {
                setInappText(state.appnotifybody)
            }
            reset({
                channelid: state.channelid || "",
                requestcode: state.reqcode || "",
                fromdate: state.appfrom || "",
                todate: state.appto || "",
                smstext: state.smstext || "",
                emailsubject: state.emailsubject || "",
                emailbody: state.emailbody || "",
                appnotifysubject: state.appnotifysubject || "",
                appnotifybody: state.appnotifybody || "",
                whatsapptext: state.whatsapptext || "",
                smsflag: state.smsflag || "",
                whatsappflag: state.whatsappflag || "",
                emailflag: state.emailflag || "",
                appflag: state.appflag || "",
                issource: state.issource || "",
                isdestination: state.isdestination || "",
            });
        }

    }, [])

    const submit = () => {
        if (emailText && !watch('emailsubject')) {
            setError('emailsubject', 'Email Subject is required')
            setSelectedMode('Email')
            return;
        }
        if (inappText && !watch('appnotifysubject')) {
            setError('appnotifysubject', 'App Notify Subject')
            setSelectedMode('In App')
            return;
        }

        const temp = getValues()
        reset({
            smstext: smsText ? smsText : "",
            emailbody: emailText ? emailText : "",
            appnotifybody: inappText ? inappText : "",
            whatsapptext: whatsappText ? whatsappText : "",
            smsflag: smsText ? 1 : 0,
            whatsappflag: whatsappText ? 1 : 0,
            emailflag: emailText ? 1 : 0,
            appflag: inappText ? 1 : 0,
            emailsubject: emailText ? temp.emailsubject : '',
            appnotifysubject: inappText ? temp.appnotifysubject : '',
        })
        let data = { ...temp, ...getValues() }
        Object.keys(data).filter(item => {
            if (item.includes('date') || item.includes('create') || item.includes('from') || item.includes('to')) {
                if (data[item] == '') {
                    data[item] = ""
                } else {
                    data[item] = moment(data[item]).format('YYYYMMDDHHmmss')
                }
            }
        })

        data["audittrace"] = breadCrumCtxt.breadCrumSelector.join('|') + '|Save'
        if (state?.notifytype) {
            data['notifytype'] = state?.notifytype
        }
        console.log(data)
        dispatch(setnotificationconfig(data)).then(res => {
            if (state?.notifytype) {
                dispatch(updateTransactionNotificationRecord(res.payload?.notificationConfigCustomList[0]))
            } else {
                dispatch(createTransactionNotificationRecord(res.payload?.notificationConfigCustomList[0]))
            }
            navigate(-1)
        })

    }


    const getTileBaseValue = () => {
        if (selectedMode == 'Whatsapp') {
            return whatsappText
        }
        if (selectedMode == 'SMS') {
            return smsText
        }
        if (selectedMode == 'In App') {
            return inappText
        }
    }

    const setTileBaseValue = (value) => {
        if (selectedMode == 'Whatsapp') {
            setWhatsappText(value)
        }
        if (selectedMode == 'SMS') {
            setSmsText(value)
        }
        if (selectedMode == 'In App') {
            setInappText(value)
        }
    }

    const componentClickHandler = (item) => {
        if (selectedMode == 'Whatsapp') {
            setWhatsappText((prev) => `${prev} $${item}$ `)
        }
        if (selectedMode == 'SMS') {
            setSmsText((prev) => `${prev} $${item}$ `)
        }
        if (selectedMode == 'In App') {
            setInappText((prev) => `${prev} $${item}$ `)
        }
        textareaRef.current.focus();
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Backspace' || e.keyCode === 8) {
            if (getTileBaseValue()[getTileBaseValue().length - 1] == '$' && getTileBaseValue()[getTileBaseValue().length - 2] != ' ') {
                let str = getTileBaseValue().slice(0, -1);
                const lastPercentIndex = str.lastIndexOf('$');
                if (lastPercentIndex !== -1) {
                    str = str.slice(0, lastPercentIndex);
                }
                setTileBaseValue(str)
            }
        }
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault();
            if (selectedMode == 'Whatsapp') {
                setWhatsappText((prev) => prev + '\n')
            }
            if (selectedMode == 'SMS') {
                setSmsText((prev) => prev + '\n')
            }
            if (selectedMode == 'In App') {
                setInappText((prev) => prev + '\n')
            }
        }
    };

    const renderEmailTextWithBreaks = () => {
        return getTileBaseValue()?.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line.replace(/\$\s*([^$]+?)\s*\$/g, match => {
                    const item = notificationtokenFilter.find(comp => `$${comp.name}$` === match.trim());
                    return item ? item.sample : match;
                })}
                <br />
            </React.Fragment>
        ));
    };
    return (
        <Card style={{ height: '90vh', display: 'flex', flexDirection: 'column' }}>
            <form style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }} >
                <Box className='emailFormContainer'>
                    <ModeSelection selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
                    <Grid container spacing={1}>
                        <Grid item xs={3} md={4}>
                            <SelectFields
                                fieldName="channelid"
                                label="Channel"
                                control={control}
                                options={channelFilter.map(({ displayvalue, codevalue }) => {
                                    return { label: displayvalue, value: codevalue };
                                })}

                                rules={{
                                    required: "Channel is required",
                                }}
                                error={errors?.channelid}
                            />
                        </Grid>
                        <Grid item xs={3} md={4}>
                            <SelectFields
                                fieldName="requestcode"
                                label="Transaction"
                                control={control}
                                options={transactionFilter.map(({ displayvalue, codevalue }) => {
                                    return { label: displayvalue, value: codevalue };
                                })}

                                rules={{
                                    required: "Transaction is required",
                                }}
                                error={errors?.requestcode}
                            />
                        </Grid>
                        {selectedMode == 'Email' && <Grid item xs={3} md={4}>
                            <InputFields
                                fieldName="emailsubject"
                                type="text"
                                label="Email Subject"
                                control={control}
                                rules={{
                                    required: "Email Subject is required",
                                }}
                                error={errors?.emailsubject}
                            />
                        </Grid>}
                        {selectedMode == 'In App' && <Grid item xs={3} md={4}>
                            <InputFields
                                fieldName="appnotifysubject"
                                type="text"
                                label="App Notify Subject"
                                control={control}
                                rules={{
                                    required: "App Notify Subject is required",
                                }}
                                error={errors?.appnotifysubject}
                            />
                        </Grid>
                        }
                        <Grid item xs={3} md={4}>
                            <DateTimePickerFields
                                fieldName="fromdate"
                                type="date"
                                label="Applicable From"
                                control={control}
                                rules={{
                                    required: "Applicable From is required",
                                }}
                                error={errors?.fromdate}
                            />
                        </Grid>
                        <Grid item xs={3} md={4}>
                            <DateTimePickerFields
                                fieldName="todate"
                                type="date"
                                label="Applicable To"
                                control={control}
                                rules={{
                                    required: "Applicable To is required",
                                }}
                                error={errors?.todate}
                            />
                        </Grid>
                        <Grid item xs={3} md={4}>
                            <SelectFields
                                fieldName="issource"
                                label="Source Notification"
                                control={control}
                                options={yesNo.map(({ label, value }) => {
                                    return { label: label, value: value };
                                })}
                                rules={{
                                    required: "Source Notification is required",
                                }}
                                error={errors?.issource}
                            />
                        </Grid>
                        <Grid item xs={3} md={4}>
                            <SelectFields
                                fieldName="isdestination"
                                label="Destination Notification"
                                control={control}
                                options={yesNo.map(({ label, value }) => {
                                    return { label: label, value: value };
                                })}
                                rules={{
                                    required: "Destination Notification is required",
                                }}
                                error={errors?.isdestination}
                            />
                        </Grid>
                    </Grid>
                    {selectedMode == 'Email' ?
                        <Box style={{ flex: 1, marginTop: '10px', display: 'flex' }}>
                            <Box className='editorRightArea'>
                                <Box className='selector' sx={{ borderRight: '1px solid', borderRightColor: theme.palette.textColor }}>
                                    <SearchBar placeholder={'Search...'} handleChange={setSearch} />
                                    <Box className='selectorList'>
                                        {
                                            notificationtokenFilter.filter(val => val?.name?.toLowerCase()?.includes(search?.toLowerCase())).map(e => (
                                                <Button sx={{ width: '100%', margin: '5px 0px' }} variant="outlined" color="secondary" onClick={() => componentClickHandler(e.name)}>{e.name}</Button>
                                            ))
                                        }
                                    </Box>
                                </Box>
                                <Box className='textArea' sx={{ flexDirection: 'column', gap: '10px' }}>

                                    <Editor content={emailText} setContent={setEmailText}
                                        openPreview={openPreview} setOpenPreview={setOpenPreview}
                                    />
                                    <ButtonContainer isSingle>
                                        <Button size="medium" variant="contained" color="secondary" onClick={() => setOpenPreview(prev => !prev)} >Preview</Button>
                                    </ButtonContainer>
                                </Box>
                            </Box>
                        </Box>
                        : <Box style={{ flex: 1, marginTop: '10px', display: 'flex' }}>
                            <Box className='editorRightArea'>
                                <Box className='selector' sx={{ borderRight: '1px solid', borderRightColor: theme.palette.textColor }}>
                                    <SearchBar placeholder={'Search...'} handleChange={setSearch} />
                                    <Box className='selectorList'>
                                        {
                                            notificationtokenFilter.filter(val => val?.name?.toLowerCase()?.includes(search?.toLowerCase())).map(e => (
                                                <Button sx={{ width: '100%', margin: '5px 0px' }} variant="outlined" color="secondary" onClick={() => componentClickHandler(e.name)}>{e.name}</Button>
                                            ))
                                        }
                                    </Box>
                                </Box>
                                <Box className='textArea'>
                                    <textarea
                                        className="input"
                                        style={{ backgroundColor: theme.palette.backgroundColor, color: theme.palette.textColor }}
                                        ref={textareaRef}
                                        value={getTileBaseValue()}
                                        onChange={(e) => setTileBaseValue(e.target.value)}
                                        placeholder={"Type here!"}
                                        onKeyDown={handleKeyDown}
                                    />
                                </Box>
                            </Box>
                            <Box className='preview'>
                                <Typography variant="h4" sx={{ margin: '10px' }}>Preview:</Typography>
                                <Box className='previewArea'>
                                    <Typography variant="body1" sx={{ margin: '10px' }}>{renderEmailTextWithBreaks()}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    }


                </Box>

                <Box sx={{ margin: '10px 0px' }}>
                    <ButtonContainer isSingle>
                        <Button size="medium" variant="contained" color="primary" onClick={handleSubmit(submit)}>
                            Save</Button>
                    </ButtonContainer>
                </Box>
            </form>
        </Card>
    );
};

export default EmailTemplate;
