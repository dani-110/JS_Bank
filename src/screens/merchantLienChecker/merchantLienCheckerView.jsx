import React, { useContext, useEffect, useState } from 'react';
import View from '../../components/view';
import { useDispatch, useSelector } from 'react-redux';
import { numberRegex } from '../../utils/Utils';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import { Box, Button, Grid, Typography } from '@mui/material';
import './LienChecker.scss'
import InputFields from '../../components/InputFields';
import { useForm } from 'react-hook-form';
import ButtonContainer from '../../components/buttonContainer';
import SelectFields from '../../components/SelectFields';

const MerchantLienCheckerView = (props) => {
    const { data } = props
    const { stateFilter, transactionFilter, mccFilter } = useSelector(state => state.filter)
    const [viewData, setViewData] = useState({})
    const type = [{ label: "Flat", value: 1 }, { label: "Percentage", value: 2 }, { label: "Slab", value: 3 }]
    const dispatch = useDispatch();
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)


    const defaultValues = useForm({
        defaultValues: {
            lienamount: "",

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
    }, []);



    const action = [
        {
            label: 'Approved',
            value: 1
        },
        {
            label: 'Reject',
            value: 2
        },
    ]

    const viewFields = [
        'Merchant ID',
        'Legal Name',
        'DBA',
        'Mobile No',
        'National ID',
        'Onboarded On',
    ]

    const verifyParam = [
        'Merchant ID',
        'Legal Name',
        'DBA',
        'Mobile No',
        'National ID',
        'Onboarded On',
    ]

    const submit = () => {

    }

    return <>
        <Box className='merchantLienCheckerContainer'>
            <Box className='merchantLienCheckerHeaderContainer'>
                <Typography variant="h3" className='title' component="span">{`Merchant Information panel`}</Typography>
            </Box>
            <View viewFields={viewFields} viewData={viewData} verifyParam={verifyParam} />
        </Box>
        <Box className='merchantLienCheckerContainer'>
            <Box className='merchantLienCheckerHeaderContainer'>
                <Typography variant="h3" className='title' component="span">{`Lien Details`}</Typography>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <InputFields
                                fieldName="lienamount"
                                type="text"
                                label="Lien Amount"
                                control={control}
                                disabled
                                pattern={numberRegex}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SelectFields
                                fieldName="action"
                                label="Action"
                                control={control}
                                options={action.map(({ label, value }) => {
                                    return { label, value };
                                })}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <ButtonContainer isSingle>
                                <Button size="medium" variant="contained" color="primary" onClick={handleSubmit(submit)} >Save</Button>
                            </ButtonContainer>
                        </Grid>
                    </Grid>
                </form>

            </Box>
        </Box>
    </>
}
export default MerchantLienCheckerView;