import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Grid, Skeleton, Typography } from '@mui/material';
import './services.scss'
import { useForm } from 'react-hook-form';
import ServicesHeader from './servicesHeader';
import ToggleButton from '../../components/toggleButton/toggleButton';
import { useDispatch, useSelector } from 'react-redux';
import { getmerchantservice, postservicesrequest } from '../../store/actions/merchantMaintenance';
import { findPermission } from '../../utils/Utils';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import { uiActions } from '../../store/reducers/ui-slice';
import ButtonContainer from '../../components/buttonContainer';
import ModalButton from '../../components/modalButton/modalButton';
import RAASTConfiguration from './raastConfg';

const Services = (props) => {
    const { data, setOpen } = props
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const [isLoader, setIsLoader] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [value, setValue] = useState(false)

    const [openView, setOpenView] = React.useState(false);
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    const permissions = user?.permissions

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
            comment1: "",
            comment2: "",
            raastsqrcmdr: "",
            raastdqrcmdr: "",
            raastrtpmdr: "",
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
        formState: { errors, dirtyFields },
    } = defaultValues;

    const convertBooleanValues = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] === 'boolean') {
                obj[key] = obj[key] ? 1 : 0;
            }
        }
        return obj;
    }

    useEffect(() => {
        setIsLoader(true)
        const obj = {
            "mid": data?.mid
        }
        dispatch(getmerchantservice(obj)).then(res => {
            console.log(res.payload.merchantServicesCustomList[0])
            const response = res.payload.merchantServicesCustomList[0]
            // setChangeTip(response)
            console.log(response?.raast, res.payload)
            reset({
                crossredemption: response?.crossredemption == 1,
                discount: response?.discount == 1,
                fblloyalty: response?.fblloyalty == 1,
                askariloyalty: response?.askariloyalty == 1,
                networkloyalty: response?.networkloyalty == 1,
                closeloop: response?.closeloop == 1,
                kclub: response?.kclub == 1,
                mobilink: response?.mobilink == 1,
                keenuwalet: response?.wallet == 1,
                raast: response?.raast == 1,
                qrcode: response?.qrcode == 1,
                raastoldvalue: response?.raast,
                email: data.emailid || "",

                mdr: data.mdr || "",
                raastsqrcmdr: data.raastsqrcmdr || "",
                raastdqrcmdr: data.raastdqrcmdr || "",
                raastrtpmdr: data.raastrtpmdr || "",
            })
            setIsLoader(false)
        })
    }, [])

    const submit = () => {
        if (data?.stagestatus != 20) {
            dispatch(
                uiActions.showResponseNotification({
                    status: "error",
                    title: "Failed!",
                    message: 'KYC is in progress. Can not assign services.',
                })
            )

            setIsLoading(false)
            return
        }
        setIsLoading(true)
        const changedFields = {};
        const currentValues = watch();
        const initialValues = getValues(); // ya apne default manually save kar lo if needed

        Object.keys(currentValues).forEach(key => {
            if (currentValues[key] !== initialValues[key]) {
                changedFields[key] = currentValues[key];
            }
        });
        if (data?.nationalid == null && currentValues.raast && data?.merchanttype == 1) {
            dispatch(
                uiActions.showResponseNotification({
                    status: "error",
                    title: "Failed!",
                    message: 'The National ID is not present.',
                })
            )

            setIsLoading(false)
        } else if (data?.nationaltaxid == null && currentValues.raast && data?.merchanttype == 2) {
            dispatch(
                uiActions.showResponseNotification({
                    status: "error",
                    title: "Failed!",
                    message: 'The National Tax ID is not present. Can not register RAAST Services.',
                })
            )

            setIsLoading(false)
        } else {
            if (data?.stagestatus != 20) {
                dispatch(
                    uiActions.showResponseNotification({
                        status: "error",
                        title: "Failed!",
                        message: 'KYC is in progress. Can not assign services.',
                    })
                )

                setIsLoading(false)
            } else {
                const obj = {
                    "mid": data?.mid,
                    "dba": data?.dba,
                    'merchanttype': data?.merchanttype,
                    "mccid": data?.mccid,
                    "merchantlegalname": data?.legalname,
                    "virtualiban": data?.virtualiban,
                    "city": data?.city,
                    "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|Save',
                    ...convertBooleanValues(getValues()),

                }
                const saveObj = {
                    ...obj,
                    "comments": getValues().comment1 ? getValues().comment1 : getValues().comment2 ? getValues().comment2 : '',
                    "raastsqrcmdr": value == '1' ? watch('mdr') : value == '2' ? getValues().raastsqrcmdr : "",
                    "raastdqrcmdr": value == '1' ? watch('mdr') : value == '2' ? getValues().raastdqrcmdr : "",
                    "raastrtpmdr": value == '1' ? watch('mdr') : value == '2' ? getValues().raastrtpmdr : "",
                }

                delete saveObj.comment1
                delete saveObj.comment2
                delete saveObj.mdr
                console.log(saveObj)
                dispatch(postservicesrequest(saveObj)).then(res => {
                    breadCrumCtxt.breadCrumSelectorRemoveHandler()
                    setOpen(false)
                    setOpenView(false)
                    setIsLoading(false)
                })
            }
        }
    }

    const checkPermission = (item) => {
        return findPermission(permissions, ['Merchant Management', 'Merchant', 'Edit', 'Services'])?.includes(item)
    }

    console.log(getValues().raast)
    return <Box className='customerDetailsContainer'>
        <ServicesHeader />
        <form style={{ margin: '20px 0px' }}>
            {isLoader ?
                <ServiceSkeleton />
                : <Grid container spacing={2}>
                    {checkPermission('Cross Redemption') && <Grid item xs={6}>
                        <ToggleButton
                            fieldName="crossredemption"
                            lable='Cross Redemption'
                            control={control}
                            disabled={isLoading}
                        />

                    </Grid>}
                    {checkPermission('Discount') && <Grid item xs={6}>
                        <ToggleButton
                            fieldName="discount"
                            lable='Discount'
                            control={control}
                            disabled={isLoading}
                        />

                    </Grid>}
                    {checkPermission('FBL Loyalty') && <Grid item xs={6}>
                        <ToggleButton
                            fieldName="fblloyalty"
                            lable='FBL Loyalty'
                            control={control}
                            disabled={isLoading}
                        />

                    </Grid>}
                    {checkPermission('Askari Loyalty') && <Grid item xs={6}>
                        <ToggleButton
                            fieldName="askariloyalty"
                            lable='Askari Loyalty'
                            control={control}
                            disabled={isLoading}
                        />

                    </Grid>}
                    {checkPermission('Network Loyalty') && <Grid item xs={6}>
                        <ToggleButton
                            fieldName="networkloyalty"
                            lable='Network Loyalty'
                            control={control}
                            disabled={isLoading}
                        />

                    </Grid>}
                    {checkPermission('Close Loop') && <Grid item xs={6}>
                        <ToggleButton
                            fieldName="closeloop"
                            lable='Close Loop'
                            control={control}
                            disabled={isLoading}
                        />

                    </Grid>}
                    {checkPermission('K - Club') && <Grid item xs={6}>
                        <ToggleButton
                            fieldName="kclub"
                            lable='K - Club'
                            control={control}
                            disabled={isLoading}
                        />

                    </Grid>}
                    {checkPermission('Mobilink') && <Grid item xs={6}>
                        <ToggleButton
                            fieldName="mobilink"
                            lable='Mobilink'
                            control={control}
                            disabled={isLoading}
                        />

                    </Grid>}
                    {checkPermission('Keenu Walet') && <Grid item xs={6}>
                        <ToggleButton
                            fieldName="keenuwalet"
                            lable='Keenu Walet'
                            control={control}
                            disabled={isLoading}
                        />

                    </Grid>}
                    {checkPermission('RAAST QR') && <Grid item xs={6}>
                        <ToggleButton
                            fieldName="raast"
                            lable='RAAST QR'
                            control={control}
                            disabled={isLoading}
                        />
                    </Grid>}
                    {checkPermission('QR Code') && <Grid item xs={6}>
                        <ToggleButton
                            fieldName="qrcode"
                            lable='RASST QR'
                            control={control}
                            disabled={isLoading}
                        />
                    </Grid>}
                    <Grid item xs={12}>
                        <ButtonContainer isSingle>
                            {/* <Button disabled={isLoading} size="medium" variant="contained" color="secondary" onClick={handleSubmit(submit)} > */}
                            {!watch('raast') || !dirtyFields.raast ? <Button disabled={isLoading} size="medium" variant="contained" color="primary" onClick={handleSubmit(submit)} >
                                {isLoading && (
                                    <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                                )}Save</Button>
                                : <ModalButton open={openView} setOpen={setOpenView} title={'Save'} fill tooltip={'Save'} type={'button'} width={'70%'}>
                                    <RAASTConfiguration control={control} handleSubmit={handleSubmit} submit={submit} isLoading={isLoading} value={value} setValue={setValue} errors={errors} resetField={resetField} />
                                </ModalButton>}
                        </ButtonContainer>
                    </Grid>
                </Grid>}

        </form>
    </Box>
}
export default Services;


const ServiceSkeleton = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Skeleton variant="rounded" height={40} />
            </Grid>
            <Grid item xs={6}>
                <Skeleton variant="rounded" height={40} />
            </Grid>
            <Grid item xs={6}>
                <Skeleton variant="rounded" height={40} />
            </Grid>
            <Grid item xs={6}>
                <Skeleton variant="rounded" height={40} />
            </Grid>
            <Grid item xs={6}>
                <Skeleton variant="rounded" height={40} />
            </Grid>
            <Grid item xs={6}>
                <Skeleton variant="rounded" height={40} />
            </Grid>
            <Grid item xs={6}>
                <Skeleton variant="rounded" height={40} />
            </Grid>
            <Grid item xs={6}>
                <Skeleton variant="rounded" height={40} />
            </Grid>
        </Grid>
    )
}