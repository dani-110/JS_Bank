import { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Divider, Grid, Radio, Tooltip, Typography } from '@mui/material';
import './services.scss'
import { decimalRegex } from '../../utils/Utils';
import ButtonContainer from '../../components/buttonContainer';
import InputFields from '../../components/InputFields';
import TextAreaFields from '../../components/textAreaFields';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getmerchantservice, postservicesrequest } from '../../store/actions/merchantMaintenance';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import ToggleButton from '../../components/toggleButton/toggleButton';
import CheckboxButton from '../../components/checkboxButton/checkboxButton';
import PopModal from '../../components/popModal/popModal';

const RAASTConfiguration = (props) => {
    const { data, setOpen, fetchList } = props
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const [isLoader, setIsLoader] = useState(false)
    const [showMsg, setShowMsg] = useState(false)
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    const defaultValues = useForm({
        defaultValues: {
            crossredemption: false,
            discount: false,
            fblloyalty: false,
            askariloyalty: false,
            networkloyalty: false,
            closeloop: false,
            kclub: false,
            mobilink: false,
            keenuwalet: false,
            raast: false,
            qrcode: false,
            raastoldvalue: false,
            email: '',
            mdr: "",
            comments: "",
            raastsqrcmdr: "",
            raastdqrcmdr: "",
            raastrtpmdr: "",
            raasttillmdr: "",
            raastsqrcmdrisglobal: "",
            raastdqrcmdrisglobal: "",
            raastrtpmdrisglobal: "",
            raasttillmdrisglobal: "",
        },
    });

    const {
        control,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        setValue: resetValue,
        reset,
        resetField,
        getValues,
        formState: { errors, dirtyFields },
    } = defaultValues;

    useEffect(() => {
        console.log(data.israastenabled, '=>raast', data.raastsqrcmdr, data.raastsqrcmdrisglobal, '=>raastsqrcmdr', data.raastdqrcmdr, data.raastdqrcmdrisglobal, '=>raastdqrcmdr', data.raastrtpmdr, data.raastrtpmdrisglobal, '=>raastrtpmdr')
        resetValue('raast', data.israastenabled == 1)

        resetValue("raastsqrcmdr", data?.raastsqrcmdr == 0 ? '' : data?.raastsqrcmdr);
        resetValue("raastdqrcmdr", data?.raastdqrcmdr == 0 ? '' : data?.raastdqrcmdr);
        resetValue("raastrtpmdr", data?.raastrtpmdr == 0 ? '' : data?.raastrtpmdr);
        resetValue("raasttillmdr", data?.raasttillmdr == 0 ? '' : data?.raasttillmdr);

        resetValue("raastrtpmdrisglobal", data?.raastrtpmdrisglobal == 1);
        resetValue("raastdqrcmdrisglobal", data?.raastdqrcmdrisglobal == 1);
        resetValue("raastsqrcmdrisglobal", data?.raastsqrcmdrisglobal == 1);
        resetValue("raasttillmdrisglobal", data?.raasttillmdrisglobal == 1);
        resetValue('raastoldvalue', data.israastenabled == 1)

    }, [])

    const convertBooleanValues = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] === 'boolean') {
                obj[key] = obj[key] ? 1 : 0;
            }
        }
        return obj;
    }

    useEffect(() => {
        if (watch('raasttillmdrisglobal')) {
            resetValue('raasttillmdr', '')
        }
    }, [watch('raasttillmdrisglobal')])

    useEffect(() => {
        if (watch('raastsqrcmdrisglobal')) {
            resetValue('raastsqrcmdr', '')
        }
    }, [watch('raastsqrcmdrisglobal')])

    useEffect(() => {
        if (watch('raastdqrcmdrisglobal')) {
            resetValue('raastdqrcmdr', '')
        }
    }, [watch('raastdqrcmdrisglobal')])

    useEffect(() => {
        if (watch('raastrtpmdrisglobal')) {
            resetValue('raastrtpmdr', '')
        }
    }, [watch('raastrtpmdrisglobal')])

    const submit = () => {
        setIsLoading(true)
        const saveObj = {
            ...convertBooleanValues(getValues()),
            "raastsqrcmdr": getValues().raastsqrcmdr == '' ? 0 : getValues().raastsqrcmdr,
            "raastdqrcmdr": getValues().raastdqrcmdr == '' ? 0 : getValues().raastdqrcmdr,
            "raastrtpmdr": getValues().raastrtpmdr == '' ? 0 : getValues().raastrtpmdr,
            "raasttillmdr": getValues().raasttillmdr == '' ? 0 : getValues().raasttillmdr,

            'raasttillmdrisglobal': watch('raasttillmdrisglobal') ? '1' : '0',
            'raastsqrcmdrisglobal': watch('raastsqrcmdrisglobal') ? '1' : '0',
            'raastdqrcmdrisglobal': watch('raastdqrcmdrisglobal') ? '1' : '0',
            'raastrtpmdrisglobal': watch('raastrtpmdrisglobal') ? '1' : '0',
            'merchanttype': data?.merchanttype,
            'audittrace': breadCrumCtxt.breadCrumSelector.join('|') + '|RAAST Service',
            mid: data?.mid,
            mccid: data.mccid,
            virtualiban: data.virtualiban,
            dba: data.dba,
            city: data.city
        }
        delete saveObj.mdr
        console.log(saveObj)
        dispatch(postservicesrequest(saveObj)).then(res => {
            breadCrumCtxt.breadCrumSelectorRemoveHandler()
            setOpen(false)
            const obj = {
                "holdingid": "",
                "salesofficerid": "",
                "merchantlegalname": "",
                "mid": "",
                "productid": "",
                "onboardingsource": "",
                "ismigrated": "",
                "onboardingdatefrom": "",
                "taxid": "",
                "nationalid": "",
                "onboardingdateto": "",
                "merchanttype": "",
                "status": "",
                "audittrace": "Merchant Management|Merchant|Search",
            }
            fetchList(obj)
            setIsLoading(false)
        })
    }

    return <>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Tooltip title={watch('raast') ? 'Enabled' : 'Disabled'}>
                <Box className='raastServiceContainer'>
                    <ToggleButton
                        fieldName="raast"
                        lable="RAAST Service"
                        control={control}
                    />
                </Box>
            </Tooltip>
            {/* <Box className='customerDetailsContainer'>
                <Radio value='1' checked={value === '1'} onChange={(e) => setValue(e.target.value)} /><Typography variant="h5" className='title' component="span">{`Single MDR for all RAAST transaction types`}</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <InputFields
                            fieldName="mdr"
                            type="text"
                            label="MDR"
                            disabled={value != '1'}
                            control={control}
                            pattern={decimalRegex}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextAreaFields
                            fieldName="comment1"
                            type="text"
                            disabled={value != '1'}
                            label="Comment"
                            control={control}
                            rows={5}
                            rules={{
                                required: value === '1' ? "Comment is required" : false
                            }}
                            error={errors?.comment1}
                        />
                    </Grid>
                </Grid>
            </Box> */}
            <Box className='customerDetailsContainer'>
                {/* <Radio value='2' checked={value === '2'} onChange={(e) => setValue(e.target.value)} /><Typography variant="h5" className='title' component="span">{`Segregated MDR for all RAAST transaction types`}</Typography> */}
                <Grid container spacing={2}>
                    {data.israastenabled == 0 && <>
                        <Grid item xs={12} sx={{ display: 'flex', gap: '10px' }}>
                            <InputFields
                                fieldName="raastsqrcmdr"
                                type="text"
                                label="RAAST SQR MDR"
                                control={control}
                                pattern={decimalRegex}
                                disabled={!watch('raast') || watch('raastsqrcmdrisglobal')}
                            />
                            <CheckboxButton
                                fieldName="raastsqrcmdrisglobal"
                                lable="Is Global"
                                control={control}
                                disabled={!watch('raast') || watch('raastsqrcmdr')}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', gap: '10px' }}>
                            <InputFields
                                fieldName="raastdqrcmdr"
                                type="text"
                                label="RAAST DQR MDR"
                                control={control}
                                pattern={decimalRegex}
                                disabled={!watch('raast') || watch('raastdqrcmdrisglobal')}
                            />
                            <CheckboxButton
                                fieldName="raastdqrcmdrisglobal"
                                lable="Is Global"
                                control={control}
                                disabled={!watch('raast') || watch('raastdqrcmdr')}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', gap: '10px' }}>
                            <InputFields
                                fieldName="raastrtpmdr"
                                type="text"
                                label="RAAST RTP MDR"
                                control={control}
                                pattern={decimalRegex}
                                disabled={!watch('raast') || watch('raastrtpmdrisglobal')}
                            />
                            <CheckboxButton
                                fieldName="raastrtpmdrisglobal"
                                lable="Is Global"
                                control={control}
                                disabled={!watch('raast') || watch('raastrtpmdr')}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', gap: '10px' }}>
                            <InputFields
                                fieldName="raasttillmdr"
                                type="text"
                                label="RAAST TILL MDR"
                                control={control}
                                pattern={decimalRegex}
                                disabled={!watch('raast') || watch('raasttillmdrisglobal')}
                            />
                            <CheckboxButton
                                fieldName="raasttillmdrisglobal"
                                lable="Is Global"
                                control={control}
                                disabled={!watch('raast') || watch('raasttillmdr')}
                            />
                        </Grid>
                    </>
                    }
                    <Grid item xs={12}>
                        <TextAreaFields
                            fieldName="comments"
                            type="text"
                            label="Comment"
                            control={control}
                            rows={5}
                            rules={{
                                required: "Comment is required"
                            }}
                            error={errors?.comments}
                        />
                    </Grid>
                </Grid>

            </Box>

        </Box>
        <Box sx={{ marginTop: '10px' }}>
            <ButtonContainer isSingle>
                {/* <Button disabled={isLoading} size="medium" variant="contained" color="secondary" onClick={handleSubmit(submit)} > */}
                <Button disabled={data.israastenabled == watch('raast')} size="medium" variant="contained" color="primary" onClick={handleSubmit(() => setShowMsg(true))} >
                    Save</Button>

            </ButtonContainer>
        </Box>

        <PopModal open={showMsg} setOpen={setShowMsg} width={'60%'}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '10px' }}>

                <Typography variant="h2" style={{ margin: '10px 0px', textAlign: 'left', width: '100%' }}>
                    {`Information`}
                </Typography>
                <Divider sx={{ margin: '10px', width: '100%' }} />
                {!watch('raast') && <Typography variant="body1" style={{ padding: '10px', textAlign: 'center', textWrap: 'wrap' }}>
                    {`You have DISABLED the RAAST services for this merchant. Click Proceed to save changes Or click Cancel to close this window without saving the changes.`}
                </Typography>}
                {watch('raast') && <>
                    <Typography variant="body1" style={{ padding: '10px', textAlign: 'center', textWrap: 'wrap' }}>
                        {`You have ENABLED the RAAST services for this merchant.`}
                    </Typography>
                    <Typography variant="body1" style={{ padding: '10px', textAlign: 'center', textWrap: 'wrap' }}>
                        {`The SQR MDR value is : ${watch('raastsqrcmdrisglobal') ? 'Global' : watch('raastsqrcmdr') || 0}`}
                    </Typography>
                    <Typography variant="body1" style={{ padding: '10px', textAlign: 'center', textWrap: 'wrap' }}>
                        {`The DQR MDR value is : ${watch('raastdqrcmdrisglobal') ? 'Global' : watch('raastdqrcmdr') || 0}`}
                    </Typography>
                    <Typography variant="body1" style={{ padding: '10px', textAlign: 'center', textWrap: 'wrap' }}>
                        {`The RTP MDR value is : ${watch('raastrtpmdrisglobal') ? 'Global' : watch('raastrtpmdr') || 0}`}
                    </Typography>
                    <Typography variant="body1" style={{ padding: '10px', textAlign: 'center', textWrap: 'wrap' }}>
                        {`The TILL MDR value is : ${watch('raasttillmdrisglobal') ? 'Global' : watch('raasttillmdr') || 0}`}
                    </Typography>
                    <Typography variant="body1" style={{ padding: '10px', textAlign: 'center', textWrap: 'wrap' }}>
                        {`Please review the above details and click Proceed to save changes Or click Cancel to close this window without saving the changes.`}
                    </Typography>
                </>}
                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end', marginTop: '10px' }}>
                    <ButtonContainer>
                        <Button disabled={isLoading} size="medium" variant="contained" color="primary" onClick={handleSubmit(submit)}>
                            {isLoading && (
                                <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                            )}Proceed</Button>
                        <Button size="medium" variant="contained" color="error" onClick={() => setShowMsg(false)} >Cancel</Button>
                    </ButtonContainer>
                </Box>
            </Box>
        </PopModal>
    </>
}
export default RAASTConfiguration;
