import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import './digitalIdentity.scss'
import { useSelector } from 'react-redux';
import { filterName, onlyDate } from '../../../utils/Utils';
import InlineCheckBoxFields from '../../../components/inlineCheckBoxFields';

const CustomerDetails = (props) => {
    const { control, data, type } = props
    const { stateFilter, cityFilter } = useSelector(state => state.filter)
    return (
        <Box className='digidetailsContainer'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: '600' }}>Merchant Details:</Typography>
            </Box>
            <Divider sx={{ margin: '10px 0px' }} />
            <form>
                {
                    type == 'merchant' && <>
                        <InlineCheckBoxFields
                            fieldName="legalname"
                            label="Legal Name"
                            control={control}
                            disabled
                            rules={{
                                required: "legalname is required",
                            }}
                            value={data?.legalname}
                        />
                        <InlineCheckBoxFields
                            fieldName="dba"
                            label="DBA"
                            control={control}
                            disabled
                            rules={{
                                required: "dba is required",
                            }}
                            value={data?.dba}
                        />
                    </>
                }
                <InlineCheckBoxFields
                    fieldName="nationalid"
                    label="CNIC"
                    control={control}
                    rules={{
                        required: "nationalid is required",
                    }}
                    value={data?.nationalid}
                />
                <InlineCheckBoxFields
                    fieldName="soleproprietor"
                    label="Individual or Sole Proprietor Name"
                    control={control}
                    value={data?.nameofowner}
                    disabled
                />
                {/* <InlineCheckBoxFields
                    fieldName="name"
                    label="Full Name"
                    control={control}
                    rules={{
                        required: "Full Name is required",
                    }}
                    value={data?.name}
                /> */}
                <InlineCheckBoxFields
                    fieldName="fathername"
                    label="Father's / Husband Name"
                    control={control}
                    rules={{
                        required: "Father's / Husband Name is required",
                    }}
                    value={data?.fathername}
                />
                <InlineCheckBoxFields
                    fieldName="presntaddress"
                    label="Present Address"
                    control={control}
                    rules={{
                        required: "Present Address is required",
                    }}
                    value={data?.address}
                />
                <InlineCheckBoxFields
                    fieldName="permanentaddress"
                    label="Permanent Address"
                    control={control}
                    rules={{
                        required: "Permanent Address is required",
                    }}
                    value={data?.permanentaddress}
                />
                <InlineCheckBoxFields
                    fieldName="address"
                    label="Business Address"
                    control={control}
                    value={data?.address}
                    disabled
                />
                <InlineCheckBoxFields
                    fieldName="dateofbirth"
                    type="date"
                    label="Date Of Birth"
                    control={control}
                    rules={{
                        required: "Date Of Birth is required",
                    }}
                    value={onlyDate(data?.dateofbirth)}
                />
                <InlineCheckBoxFields
                    fieldName="gender"
                    label="Gender"
                    control={control}
                    value={data?.gender}
                    disabled

                />
                <InlineCheckBoxFields
                    fieldName="birthplace"
                    label="Birth Place"
                    control={control}
                    disabled
                    value={data?.birthplace}
                />
                <InlineCheckBoxFields
                    fieldName="mothername"
                    label="Mother Name"
                    control={control}
                    disabled
                    value={data?.mothername}
                />
                <InlineCheckBoxFields
                    fieldName="CNICExpiryDate"
                    type="date"
                    label="CNIC Expiry Date"
                    control={control}
                    rules={{
                        required: "CNIC Expiry Date is required",
                    }}
                    value={onlyDate(data?.nationalidexpirydate)}
                />
                <InlineCheckBoxFields
                    fieldName="CNICIssuanceDate"
                    type="date"
                    label="CNIC Issuance Date"
                    control={control}
                    rules={{
                        required: "CNIC Issuance Date is required",
                    }}
                    value={onlyDate(data?.nationalidissuedate)}
                />
                <InlineCheckBoxFields
                    fieldName="cityOrOtherForInternational"
                    label="City Or Other For International"
                    control={control}
                    rules={{
                        required: "City Or Other For International is required",
                    }}
                    value={filterName(cityFilter, data?.city)}
                />
                <InlineCheckBoxFields
                    fieldName="province"
                    label="Province"
                    control={control}
                    disabled
                    value={filterName(stateFilter, data?.state)}
                />
                <InlineCheckBoxFields
                    fieldName="mailingaddress"
                    label="Mailing Address"
                    control={control}
                    value={data?.mailingaddress}
                />
                <InlineCheckBoxFields
                    fieldName="mobilenumber"
                    label="Mobile Number"
                    control={control}
                    value={data?.mobilenumber}
                />
                <InlineCheckBoxFields
                    fieldName="emailaddress"
                    label="Email Address"
                    control={control}
                    value={data?.emailaddress}
                />
                <InlineCheckBoxFields
                    fieldName="cniclifetimeexpiry"
                    label=" CNIC Lifetime Expiry"
                    control={control}
                    value={data?.cniclifetimeexpiry}
                />
                {/* <Button size="medium" variant="contained" color="secondary" onClick={handleSubmit(() => { })} >Reset</Button> */}
            </form>

        </Box>
    )
}
export default CustomerDetails;
