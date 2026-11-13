import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import Tabs from "../../components/tabs/tabs";
import PepAlert from '../merchantMarkerLevelSanction/pepAlert';
import GlobalScan from '../merchantMarkerLevelSanction/globalScan';
import AdverseMedia from '../merchantMarkerLevelSanction/adverseMedia';
import SelectFields from '../../components/SelectFields';
import CheckboxButton from '../../components/checkboxButton/checkboxButton';
import PopModal from '../../components/popModal/popModal';
import ButtonContainer from '../../components/buttonContainer';
import warning from '../../assests/warning.png'
import CompanyScreening from '../merchantMarkerLevelSanction/companyScreening';

const KYCMakerSanctionScreen = (props) => {
    const [changeTab, setChangeTab] = useState(false)
    const [showError, setShowError] = useState(false)
    useEffect(() => {
        setChangeTab(false)
    }, [showError])

    // const checkData = (index, newIndex) => {
    //     if (newIndex > index) {
    //         if ((index == 0 || index == 1) && pepRecord?.length > 0) {
    //             return true
    //         }
    //         if (index == 2 && globalRecord?.length > 0) {
    //             return true
    //         }
    //         if (index == 3 && adverseRecord?.length > 0) {
    //             return true
    //         } else {
    //             setShowError(true)
    //             return false
    //         }
    //     } else {
    //         return true
    //     }
    // }

    const checkData = (index, newIndex) => {
        if (type == "Legal Name" || type == 'DBA') {
            if (newIndex > index) {
                if (index == 0 && globalRecord?.length > 0) {
                    return true
                }
                if (index == 1 && adverseRecord?.length > 0) {
                    return true
                }
                if (index == 2 && companyRecord?.length > 0) {
                    return true
                } else {
                    setShowError(true)
                    console.log('There is no data in the current screening tab. Are you sure you want to proceed without screening data?')
                    return false
                }
            } else {
                return true
            }
        }
        else if (type == 'Individual') {
            if (newIndex > index) {
                if ((index == 0 || index == 1) && pepRecord?.length > 0) {
                    return true
                }
                if (index == 2 && globalRecord?.length > 0) {
                    return true
                }
                if (index == 3 && adverseRecord?.length > 0) {
                    return true
                } else {
                    setShowError(true)
                    console.log('There is no data in the current screening tab. Are you sure you want to proceed without screening data?')
                    return false
                }
            } else {
                return true
            }
        }


    }

    const { data, control,watch, setSanctionDisable, pepRecord, setPepRecord, pepRCARecord, setPepRCARecord, globalRecord, setGlobalRecord, adverseRecord, setAdverseRecord, companyRecord, setCompanyRecord, type, tidStore, setTidStore } = props
    const childArray = [
        {
            label: "PEP Screening",
            component: <PepAlert data={data} title={'Matches found in Politically Exposed Persons (PEP) Screening'} type={'Screening'} column={'PEP Screening'} setSanctionDisable={setSanctionDisable} list={pepRecord} setList={setPepRecord} sanctionTab={type} tidStore={tidStore} setTidStore={setTidStore}  control={control} watch={watch}/>
        },
        {
            label: "PEP RCA",
            component: <PepAlert data={data} title={'Matches found in Politically Exposed Persons (PEP) RCA Screening'} type={'RCA'} column={'PEP RCA'} setSanctionDisable={setSanctionDisable} list={pepRCARecord} setList={setPepRCARecord} sanctionTab={type} tidStore={tidStore} setTidStore={setTidStore} control={control} watch={watch}/>
        },
        {
            label: "Global Sanctions",
            component: <GlobalScan data={data} title={'Matches found in Global Sanctions'} type={'Global'} column={'Global Sanctions'} setSanctionDisable={setSanctionDisable} list={globalRecord} setList={setGlobalRecord} sanctionTab={type} tidStore={tidStore} setTidStore={setTidStore} control={control} watch={watch}/>
        },
        {
            label: "Adverse Media News",
            component: <AdverseMedia data={data} title={'Matches found in Adverse Media News'} setSanctionDisable={setSanctionDisable} list={adverseRecord} setList={setAdverseRecord} sanctionTab={type} tidStore={tidStore} setTidStore={setTidStore} />
        },
        {
            label: "Company Screening",
            component: <CompanyScreening data={data} title={'Matches found in Company Screening'} column={'Company Screening'} setSanctionDisable={setSanctionDisable} list={companyRecord} setList={setCompanyRecord} sanctionTab={type} tidStore={tidStore} setTidStore={setTidStore} />
        }
    ]

    const filteredChildArray = childArray.filter((tab, index) => {
        if (type == "Individual" && (index === 4)) {
            return false;
        }
        if ((type == "Legal Name" || type == 'DBA') && (index === 0 || index === 1)) {
            return false;
        }
        return true;
    });
    const risk = [
        { label: 'Low', value: 1 },
        { label: 'Medium', value: 2 },
        { label: 'High', value: 3 },
    ]

    return <>
        <Tabs childArray={filteredChildArray} changeTab={changeTab} checkData={checkData}
            content={() => !(type == "Legal Name" || type == 'DBA') ? <Box sx={{ marginTop: '5px', border: '2px solid rgb(145, 89, 255)', borderRadius: '5px', padding: '5px 10px', flex: 1 }}>
                <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={6}>
                        <SelectFields
                            fieldName="risk"
                            label="Risk"
                            control={control}
                            options={risk.map(({ label, value }) => {
                                return { label, value };
                            })}
                        />
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <CheckboxButton
                            fieldName="pepflag"
                            lable="PEP"
                            control={control}
                        />
                    </Grid>
                </Grid>
            </Box> : null}
        />
        <PopModal open={showError} setOpen={setShowError}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={warning} style={{ height: '100px', objectFit: 'contain' }} alt="warning" />
                <Typography variant="body1" className="headingTitle">
                    There is no data in the current screening tab. Are you sure you want to proceed without screening data?
                </Typography>
                <ButtonContainer >
                    <Button size="medium" variant="contained" color="error" onClick={() => setShowError(false)} >Cancel</Button>
                    <Button size="medium" variant="contained" color="primary" onClick={() => {
                        setShowError(false)
                        setChangeTab(true)
                    }} >Proceed</Button>

                </ButtonContainer>
            </Box>
        </PopModal>
    </>

}
export default KYCMakerSanctionScreen;
