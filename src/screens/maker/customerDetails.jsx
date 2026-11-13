import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import InlineInputFields from '../../components/inlineInputFields';
import InlineSelectFields from '../../components/inlineSelectFields';
import './maker.scss'
import { dateFormat, filterName } from '../../utils/Utils';
import { useDispatch, useSelector } from 'react-redux';
import { getnadrafields } from '../../store/actions/digitalIdentity';
import moment from 'moment';

const CustomerDetails = (props) => {
    const { data, control, reset, resetField, resetValue, watch, errors, nadraData } = props
    const { stateFilter, cityFilter, legalentityFilter, genderFilter } = useSelector(state => state.filter)
    const dispatch = useDispatch();

    const [checkNadra, setCheckNadra] = useState({})
    const [checker, setChecker] = useState({})




    useEffect(() => {
        checkadrafields()
        console.log(data)
        reset({
            merchantlegalname: data?.legalname || "",
            dba: data?.dba || "",
            individualname: data?.individualname || "",
            // soleproprietor: data?.nameofowner || "",
            address: data?.address || "",
            nationalid: data?.nationalid || "",
            name: data?.legalname || "",
            fathername: data?.fathername || "",
            presntaddress: data?.currentaddress || "",
            permanentaddress: data?.permanentaddress || "",
            dateofbirth: data?.dateofbirth?.split(' ')[0] || "",
            gender: data?.gender || "",
            birthplace: data?.placeofbirth || "",
            mothername: data?.mothername || "",
            nationalidexpirydate: data?.isidlifetime == 1 ? '' : data?.nationalidexpirydate?.split(' ')[0] || "",
            nationalidissuedate: data?.nationalidissuedate?.split(' ')[0] || "",
            city: data?.city || "",
            cityothers: data?.cityothers || "",
            state: data?.state || "",
            // mailingaddress: data?.mailingaddress || "",
            email: data?.emailid || "",
            mobilenumber: data?.mobileno || "",
            isidlifetime: data?.isidlifetime == 1 || "",
            type: data.legalentity
        })
    }, []);

    useEffect(() => {
        let obj = {
            nationalid: data?.nationalid == nadraData?.nationalid,
            fathername: data?.fathername == nadraData?.fathername,
            presntaddress: data?.address == nadraData?.presentaddress,
            permanentaddress: data?.address == nadraData?.permanentaddress,
            dateofbirth: data?.dateofbirth?.split(' ')[0] == nadraData?.dob,
            gender: data?.gender == nadraData?.gender,
            birthplace: data?.placeofbirth == nadraData?.pob,
            mothername: data?.mothername == nadraData?.mothername,
            nationalidexpirydate: data?.nationalidexpirydate?.split(' ')[0] == nadraData?.nationalidexpirydate,
            nationalidissuedate: dateFormat(data?.nationalidissuedate) == nadraData?.nationalidissuedate,
        }
        setChecker(obj)
    }, [nadraData])

    useEffect(() => {
        if (watch('city') && watch('city') != 0) {
            resetField('cityothers')
        }
    }, [watch('city')])


    const checkadrafields = () => {
        let obj = {
            "mid": data?.mid
        }
        dispatch(getnadrafields(obj)).then((res) => {
            if (res.payload?.responsecode == 0) {
                setCheckNadra(res.payload.nadraFieldsCustomList[0])
            }
        });
    }

    const updateName = (value) => {
        console.log(value.target.value,data.legalentity)
        resetValue('individualname', value.target.value)
        if (data.legalentity == 1 && value.target.value !== undefined) {
            resetValue('merchantlegalname', value.target.value)
            resetValue('name', value.target.value)
        }
    }

    return (
        <Box className='customerDetailsContainer'>
            <Box sx={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px', position: 'sticky',
                top: 0,
                backgroundColor: '#fff',
                zIndex: 10,
            }}>
                <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: '600' }}>Merchant Details:</Typography>
            </Box>
            <Divider sx={{ margin: '10px 0px' }} />
            <form>
                <InlineInputFields
                    fieldName="merchantlegalname"
                    type="text"
                    label="Legal Name"
                    control={control}
                    // disabled={checkNadra?.legalname == 0}
                    disabled
                />
                <InlineInputFields
                    fieldName="dba"
                    type="text"
                    label="DBA"
                    control={control}
                    // disabled={checkNadra?.dba == 0}
                    disabled
                />
                <InlineInputFields
                    fieldName="individualname"
                    type="text"
                    label="Name (as per CNIC)"
                    control={control}
                    onchange={updateName}
                // disabled={checkNadra?.dba == 0}
                // disabled
                />
                <InlineSelectFields
                    fieldName="type"
                    label="Type"
                    control={control}
                    // disabled={checkNadra?.city == 0}
                    disabled
                    options={legalentityFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}

                />
                <InlineInputFields
                    fieldName="nationalid"
                    type="text"
                    label="CNIC"
                    control={control}
                    // disabled={checkNadra?.nationalid == 0}
                    disabled
                    color={checker.nationalid ? 'green' : 'red'}
                />
                {/* <InlineInputFields
                    fieldName="soleproprietor"
                    type="text"
                    label="Individual or Sole Proprietor Name (As per CNIC)"
                    control={control}
                    // disabled={checkNadra?.soleproprietor == 0}
                    disabled
                /> */}
                {/* <InlineInputFields
                    fieldName="name"
                    type="text"
                    label="Full Name"
                    control={control}
                    disabled={checkNadra?.merchantname == 0}
                /> */}
                <InlineInputFields
                    fieldName="fathername"
                    type="text"
                    label="Father's / Husband Name"
                    control={control}
                    // disabled={checkNadra?.fathername == 0}
                    // disabled
                    color={checker.fathername ? 'green' : 'red'}
                />
                <InlineInputFields
                    fieldName="presntaddress"
                    type="text"
                    label="Present Address (as per CNIC)"
                    control={control}
                    // disabled={checkNadra?.presentaddress == 0}
                    // disabled
                    color={checker.presntaddress ? 'green' : 'red'}
                    rules={{
                        minLength: {
                            value: 5,
                            message: "Minimum 5 characters required"
                        },
                        maxLength: {
                            value: 500,
                            message: "Maximum 500 characters allowed"
                        }
                    }}
                    error={errors?.presntaddress}
                />
                <InlineInputFields
                    fieldName="permanentaddress"
                    type="text"
                    label="Permanent Address (as per CNIC)"
                    control={control}
                    // disabled={checkNadra?.Permanentaddress == 0}
                    // disabled
                    color={checker.Permanentaddress ? 'green' : 'red'}
                    rules={{
                        minLength: {
                            value: 5,
                            message: "Minimum 5 characters required"
                        },
                        maxLength: {
                            value: 500,
                            message: "Maximum 500 characters allowed"
                        }
                    }}
                    error={errors?.permanentaddress}
                />

                <InlineInputFields
                    fieldName="dateofbirth"
                    type="date"
                    label="Date Of Birth"
                    control={control}
                    // disabled={checkNadra?.dob == 0}
                    // disabled
                    color={checker.dateofbirth ? 'green' : 'red'}
                />
                <InlineSelectFields
                    fieldName="gender"
                    label="Gender"
                    control={control}
                    // disabled={checkNadra?.state == 0}
                    // disabled
                    options={genderFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}
                    color={checker.gender ? 'green' : 'red'}

                />
                <InlineInputFields
                    fieldName="birthplace"
                    type="text"
                    label="Birth Place"
                    control={control}
                    // disabled={checkNadra?.pob == 0}
                    // disabled
                    color={checker.birthplace ? 'green' : 'red'}
                />
                <InlineInputFields
                    fieldName="mothername"
                    type="text"
                    label="Mother Name"
                    control={control}
                    // disabled={checkNadra?.mothername == 0}
                    // disabled
                    color={checker.mothername ? 'green' : 'red'}
                />
                <InlineInputFields
                    fieldName="nationalidexpirydate"
                    type={watch('isidlifetime') ? 'string' : "date"}
                    label="CNIC Expiry Date"
                    control={control}
                    // disabled={checkNadra?.nationalidexpirydate == 0 || watch('isidlifetime')}
                    // disabled
                    color={checker.nationalidexpirydate ? 'green' : 'red'}
                />
                <InlineInputFields
                    fieldName="nationalidissuedate"
                    type="date"
                    label="CNIC Issuance Date"
                    control={control}
                    // disabled={checkNadra?.nationalidissuedate == 0}
                    // disabled
                    color={checker.nationalidissuedate ? 'green' : 'red'}
                />
                <InlineSelectFields
                    fieldName="city"
                    label="Business City"
                    control={control}
                    // disabled={checkNadra?.city == 0}
                    options={cityFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}

                />
                {watch('city') == 0 && <InlineInputFields
                    fieldName="cityothers"
                    type="text"
                    label="Other"
                    control={control}
                    // disabled={checkNadra?.cityothers == 0}
                    // disabled
                />}
                <InlineSelectFields
                    fieldName="state"
                    label="Province"
                    control={control}
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
                    fieldName="address"
                    type="text"
                    label="Business Address"
                    control={control}
                    // disabled={checkNadra?.address == 0}
                    disabled
                />
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
                // disabled={checkNadra?.isidlifetime == 0}
                />
                {/* <Button size="medium" variant="contained" color="secondary" onClick={handleSubmit(() => { })} >Reset</Button> */}
            </form>

        </Box>
    )
}
export default CustomerDetails;
