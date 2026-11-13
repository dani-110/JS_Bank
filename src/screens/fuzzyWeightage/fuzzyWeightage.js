import React, { useEffect, useMemo, useState } from 'react';
import Card from '../../components/card/Card';
import { Box, Button, CircularProgress, Grid, Slider, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import ButtonContainer from '../../components/buttonContainer';
import SelectFields from '../../components/SelectFields';
import { useForm, useWatch } from 'react-hook-form';
import SliderBar from '../../components/slider/slider';
import { useDispatch } from 'react-redux';
import { setDataObject } from '../../utils/Utils';
import { setfuzzyscore } from '../../store/actions/digitalIdentity';
import { updateKYCMakerMerchant } from '../../store/reducers/digitalIdentity-slice';

const FuzzyWeightage = (props) => {
    const { data, setData } = props
    const theme = useTheme()

    const [value, setValue] = useState(data?.searchpercentage || 0)
    const [name, setName] = useState('Value out of range')
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)

    const defaultValues = useForm({
        defaultValues: {
            searchtype: "",
            barValue: ''
        },
    });

    const fuzzySave = () => {
        setIsLoading(true)
        const obj = {
            searchpercentage: value,
            mid: data?.mid
        }
        dispatch(setfuzzyscore(obj)).then((res) => {
            if (res.payload.responsecode == 0) {
                const saveObj = { ...data, 'searchpercentage': value }
                setData({ ...data, 'searchpercentage': value })
                dispatch(updateKYCMakerMerchant(saveObj))
            }
            setIsLoading(false)
        });
    }

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

    const level = [
        {
            min: 1,
            max: 20,
            value: 'Lowest'
        },
        {
            min: 21,
            max: 40,
            value: 'Low'
        },
        {
            min: 41,
            max: 60,
            value: 'Medium'
        },
        {
            min: 61,
            max: 80,
            value: 'High'
        },
        {
            min: 81,
            max: 100,
            value: 'Highest'
        },
    ]

    const searchtype = [
        {
            label: 'Exact',
            value: '1'
        },
        {
            label: 'Fuzzy',
            value: '2'
        },
    ]

    const handleChange = (e) => {
        setValue(e.target.value)
        const levelValue = level.find(ele => ele.min <= e.target.value && ele.max >= e.target.value);
        setName(levelValue ? levelValue.value : 'Value out of range')
    }

    const searchtypeValue = useWatch({ control, name: 'searchtype' });

    const selectFuzzyTypes = useMemo(() => {
        return (
            <SelectFields
                fieldName="searchtype"
                label="Search Type"
                control={control}
                options={searchtype.map(({ label, value }) => {
                    return { label, value };
                })}

            />
        )
    }, []);

    return <Box sx={{ padding: '20px', border: '2px solid rgb(145, 89, 255)', borderRadius: '5px', margin: '10px' }}>
        <form>
            <Box sx={{ margin: '10px 0px' }}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6} lg={4}>
                        {selectFuzzyTypes}
                    </Grid>
                    {/* {searchtypeValue == 2 && <Grid item xs={12}>
                        <Typography variant='h2'>Adjust Fuzzy weightage on the slider below</Typography>
                        <SliderBar
                            fieldName="barValue"
                            min={0}
                            max={100}
                            control={control}

                        />
                        <Typography variant='h3'>
                            Fuzzy weightage:
                            <span style={{ fontSize: '25px', fontWeight: '700', color: theme.palette.secondary, margin: '10px' }}>{watch('barValue')}</span>
                            {name}
                        </Typography>
                        <Box sx={{ margin: '20px 0px' }}>
                            <Typography variant='body1'>
                                Fuzzy weightage standard:
                            </Typography>
                            <ul>
                                {
                                    level.map((e) => (
                                        <li style={{ color: e.value == name ? theme.palette.secondary.main : '' }}>{`${e.min} - ${e.max} (${e.value})`}</li>
                                    ))
                                }
                            </ul>
                        </Box>
                    </Grid>
                    } */}

                    {watch('searchtype') == 2 && <Grid item xs={12} >
                        <Typography variant='h2'>Adjust Fuzzy weightage on the slider below</Typography>
                        <Box sx={{ margin: '20px 0px' }}>
                            <Slider
                                aria-label="default"
                                value={value}
                                onChange={handleChange}
                                min={0}
                                max={100}
                                step={5}
                                // marks={marks}
                                color="secondary"
                            />
                        </Box>
                        <Typography variant='h3'>
                            Fuzzy weightage:
                            <span style={{ fontSize: '25px', fontWeight: '700', color: theme.palette.secondary, margin: '10px' }}>{value}</span>
                            {name}
                        </Typography>
                        <Box sx={{ margin: '20px 0px' }}>
                            <Typography variant='body1'>
                                Fuzzy weightage standard:
                            </Typography>
                            <ul>
                                {
                                    level.map((e) => (
                                        <li style={{ color: e.value == name ? theme.palette.secondary.main : '' }}>{`${e.min} - ${e.max} (${e.value})`}</li>
                                    ))
                                }
                            </ul>
                        </Box>
                    </Grid>}
                </Grid>
            </Box>

            <ButtonContainer isSingle>
                <Button size="medium" variant="contained" color="primary" onClick={fuzzySave} disabled={isLoading}>
                    {isLoading && (
                        <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                    )}Save</Button>

            </ButtonContainer>

        </form>
    </Box>
}
export default FuzzyWeightage;