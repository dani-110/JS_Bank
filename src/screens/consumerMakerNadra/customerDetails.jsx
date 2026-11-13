import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InlineInputFields from '../../components/inlineInputFields';
import InlineSelectFields from '../../components/inlineSelectFields';
import './maker.scss'
import { dateFormat, filterName, isEmptyObject } from '../../utils/Utils';
import { useDispatch, useSelector } from 'react-redux';
import { consumergetnadrafields, getconsumernadradata, getnadrafields } from '../../store/actions/digitalIdentity';
import moment from 'moment';

const CustomerDetails = (props) => {
    const { data, control, reset, watch, nadraData } = props
    const { stateFilter, cityFilter, genderFilter } = useSelector(state => state.filter)
    const dispatch = useDispatch();

    const [checkNadra, setCheckNadra] = useState({})

    const [checker, setChecker] = useState({})


    useEffect(() => {
        checkadrafields()
        console.log(data, "sdjahs")
        reset({
            nationalid: data?.nationalid || "",
            name: data?.fullname || "",
            fathername: data?.fathername || "",
            presntaddress: data?.address || "",
            permanentaddress: data?.permanentaddress || "",
            dateofbirth: data?.dateofbirth?.split(' ')[0] || "",
            gender: data?.gender || "",
            birthplace: data?.placeofbirth || "",
            mothername: data?.mothername || "",
            nationalidexpirydate: data?.nationalidexpirydate?.split(' ')[0] || "",
            nationalidissuedate: data?.nationalidissuedate?.split(' ')[0] || "",
            city: data?.city || "",
            cityothers: data?.cityothers || "",
            state: data?.state || "",
            mailingaddress: data?.mailingadress || "",
            mobilenumber: data?.mobileno || "",
            email: data?.emailid || "",
            isidlifetime: data?.isidlifetime == 1 || "",
        })
    }, []);

    useEffect(() => {
        console.log(data, nadraData)
        if (nadraData) {
            let obj = {
                nationalid: data?.nationalid == nadraData?.nationalid,
                fullname: data?.name == nadraData?.fullname,
                fathername: data?.fathername == nadraData?.fathername,
                presntaddress: data?.address == nadraData?.presentaddress,
                permanentaddress: data?.address == nadraData?.permanentaddress,
                dateofbirth: data?.dateofbirth?.split(' ')[0] == nadraData?.dob,
                gender: filterName(genderFilter, data?.gender)?.toLowerCase() == nadraData?.gender?.toLowerCase(),
                birthplace: data?.placeofbirth == nadraData?.pob,
                mothername: data?.mothername == nadraData?.mothername,
                nationalidexpirydate: data?.nationalidexpirydate?.split(' ')[0] == nadraData?.nationalidexpirydate,
                nationalidissuedate: dateFormat(data?.nationalidissuedate) == nadraData?.nationalidissuedate,
            }
            setChecker(obj)
        }
    }, [nadraData])

    const checkadrafields = (id) => {
        let obj = {
            "cid": data?.cid
        }
        dispatch(consumergetnadrafields(obj)).then((res) => {
            if (res.payload?.responsecode == 0) {
                console.log(res.payload.nadraFieldsCustomList)
                setCheckNadra(res.payload.nadraFieldsCustomList[0])
            }
        });
    }

    console.log(Object.keys(checker).length)

    return (
        <Box className='customerDetailsContainer'>
            <Box sx={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px', position: 'sticky',
                top: 0,
                backgroundColor: '#fff',
                zIndex: 10,
            }}>
                <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: '600' }}>Consumer Details:</Typography>
            </Box>
            <Divider sx={{ margin: '10px 0px' }} />
            <form>
                <InlineInputFields
                    fieldName="nationalid"
                    type="text"
                    label="CNIC"
                    control={control}
                    disabled
                    color={isEmptyObject(checker) ? "" : checker.nationalid ? 'green' : 'red'}

                />
                <InlineInputFields
                    fieldName="name"
                    type="text"
                    label="Full Name"
                    control={control}
                    // disabled
                    color={isEmptyObject(checker) ? "" : checker.fullname ? 'green' : 'red'}
                />
                <InlineInputFields
                    fieldName="fathername"
                    type="text"
                    label="Father's / Husband Name"
                    control={control}
                    // disabled={checkNadra?.fathername == 0}

                    color={isEmptyObject(checker) ? "" : checker.fathername ? 'green' : 'red'}
                />
                <InlineInputFields
                    fieldName="presntaddress"
                    type="text"
                    label="Present Address"
                    control={control}
                    // disabled={checkNadra?.presentaddress == 0}
                    color={isEmptyObject(checker) ? "" : checker.presntaddress ? 'green' : 'red'}
                />
                <InlineInputFields
                    fieldName="permanentaddress"
                    type="text"
                    label="Permanent Address"
                    control={control}
                    // disabled={checkNadra?.Permanentaddress == 0}
                    color={isEmptyObject(checker) ? "" : checker.Permanentaddress ? 'green' : 'red'}
                />
                <InlineInputFields
                    fieldName="dateofbirth"
                    type="date"
                    label="Date Of Birth"
                    control={control}
                    // disabled={checkNadra?.dob == 0}

                    color={isEmptyObject(checker) ? "" : checker.dateofbirth ? 'green' : 'red'}
                />
                <InlineSelectFields
                    fieldName="gender"
                    label="Gender"
                    control={control}

                    options={genderFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}
                    color={isEmptyObject(checker) ? "" : checker.gender ? 'green' : 'red'}

                />
                <InlineInputFields
                    fieldName="birthplace"
                    type="text"
                    label="Birth Place"
                    control={control}
                    // disabled
                    color={isEmptyObject(checker) ? "" : checker.birthplace ? 'green' : 'red'}
                />
                <InlineInputFields
                    fieldName="mothername"
                    type="text"
                    label="Mother Name"
                    control={control}
                    // disabled={checkNadra?.mothername == 0}
                    // disabled
                    color={isEmptyObject(checker) ? "" : checker.mothername ? 'green' : 'red'}
                />
                <InlineInputFields
                    fieldName="nationalidexpirydate"
                    type="date"
                    label="CNIC Expiry Date"
                    control={control}
                    // disabled={checkNadra?.nationalidexpirydate == 0 || watch('isidlifetime') == 1}
                    disabled={watch('isidlifetime') == 1}
                    color={isEmptyObject(checker) ? "" : checker.nationalidexpirydate ? 'green' : 'red'}
                />
                <InlineInputFields
                    fieldName="nationalidissuedate"
                    type="date"
                    label="CNIC Issuance Date"
                    control={control}
                    // disabled={checkNadra?.nationalidissuedate == 0}
                    color={isEmptyObject(checker) ? "" : checker.nationalidissuedate ? 'green' : 'red'}
                />
                <InlineSelectFields
                    fieldName="city"
                    label="City Or Other For International"
                    control={control}
                    // disabled
                    options={cityFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}
                />
                {watch('city') == 0 && <InlineInputFields
                    fieldName="cityothers"
                    type="text"
                    label="Other"
                    control={control}
                    // disabled
                />}
                <InlineSelectFields
                    fieldName="state"
                    label="Province"
                    control={control}
                    // disabled={checkNadra?.state == 0}
                    disabled
                    options={stateFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}
                />
                {/* <InlineInputFields
                    fieldName="mailingaddress"
                    type="text"
                    label="Mailing Address"
                    control={control}
                    disabled={checkNadra?.mailingaddress == 0}
                /> */}
                <InlineInputFields
                    fieldName="mobilenumber"
                    type="text"
                    label="Mobile Number"
                    control={control}
                    disabled
                />
                <InlineInputFields
                    fieldName="email"
                    type="text"
                    label="Email Address"
                    control={control}
                    disabled
                />
                <InlineInputFields
                    fieldName="isidlifetime"
                    type="checkbox"
                    label=" CNIC Lifetime Expiry"
                    control={control}
                />
                {/* <Button size="medium" variant="contained" color="secondary" onClick={handleSubmit(() => { })} >Reset</Button> */}
            </form>

        </Box>
    )
}
export default CustomerDetails;
