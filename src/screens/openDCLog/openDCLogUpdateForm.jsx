import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, CircularProgress, Grid } from "@mui/material";
import Card from "../../components/card/Card";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";
import SelectFields from "../../components/SelectFields";
import DateTimePickerFields from "../../components/dateTimePickerField";
import { alphaRegex, numberRegex, setDataObject, setDateOnUpdateList, twoDigitsAfterDecimal } from "../../utils/Utils";
import { useDispatch, useSelector } from "react-redux";
import { addtax, edittax } from "../../store/actions/tax";
import { createTaxRecord, updateTaxRecord } from "../../store/reducers/tax-slice";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import TextAreaFields from "../../components/textAreaFields";

const OpenDCLogUpdateForm = (props) => {
    const { data, setOpen, type } = props
    const [isLoading, setIsLoading] = useState(false)
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)
    const { trannatureFilter, requestFilter } = useSelector(state => state.filter)

    const dispatch = useDispatch();
    const defaultValues = useForm({
        defaultValues: {
            "nature": "",
            "amount": "",
            "stan": "",
            "transactiontype": "",
            "fee": "",
            "tax": "",
            "debitaccount": "",
            "creditaccount": "",
            "nationalid": "",
            "mobileno": "",
            "comments": "",
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
        console.log(data)
        if (data?.taxid) {
            reset({
                "nature": data || "",
                "amount": data || "",
                "stan": data || "",
                "transactiontype": data || "",
                "fee": data || "",
                "tax": data || "",
                "debitaccount": data || "",
                "creditaccount": data || "",
                "nationalid": data || "",
                "mobileno": data || "",
                "comments": data || "",

            })
        }
    }, []);

    const taxtype = [{ label: "Flat", value: '1' }, { label: "Percentage", value: '2' }, { label: "Slab", value: '3' }]
    const status = [
        {
            label: 'Active',
            value: '1'
        },
        {
            label: 'Inactive',
            value: '0'
        },
    ]

    const submit = () => {
        // setIsLoading(true)
        // if (data?.taxid) {
        //     let obj = setDataObject(getValues())
        //     obj['taxid'] = data.taxid
        //     obj["audittrace"] = breadCrumCtxt.breadCrumSelector.join('|') + '|Save'
        //     delete obj['name']
        //     delete obj['taxdescription']

        //     dispatch(edittax(obj)).then((res) => {
        //         if (res.payload) {
        //             delete obj['actuser']
        //             obj['appliedfrom'] = setDateOnUpdateList(obj['appliedfrom'])
        //             obj['expiryfrom'] = setDateOnUpdateList(obj['expiryfrom'])
        //             const objSave = { ...data, ...obj }
        //             dispatch(updateTaxRecord(objSave))
        //             setOpen(false)
        //             breadCrumCtxt.lastItemRemove()
        //         }
        //         setIsLoading(false)
        //     })
        // } else {
        //     let obj = setDataObject(getValues())
        //     obj['apply'] = obj.appliedfrom
        //     obj['expiry'] = obj.expiryfrom
        //     obj["audittrace"] = breadCrumCtxt.breadCrumSelector.join('|') + '|Save'
        //     dispatch(addtax(obj)).then((res) => {
        //         if (res.payload) {
        //             console.log(res.payload)
        //             dispatch(createTaxRecord(res.payload[0]))
        //             setOpen(false)
        //             breadCrumCtxt.lastItemRemove()
        //         }
        //         setIsLoading(false)
        //     })
        // }
    }

    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <SelectFields
                    fieldName="nature"
                    label="Nature"
                    control={control}
                    options={trannatureFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}
                    rules={{
                        required: "Nature is required",
                    }}
                    error={errors?.nature}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="amount"
                    type="text"
                    label="Amount"
                    control={control}
                    pattern={alphaRegex}
                    rules={{
                        required: "Amount is required",
                    }}
                    error={errors?.amount}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="stan"
                    type="text"
                    label="STAN"
                    control={control}
                    rules={{
                        required: "STAN is required",
                    }}
                    error={errors?.stan}
                />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
                <SelectFields
                    fieldName="transactiontype"
                    label="Transaction Type"
                    control={control}
                    options={requestFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}
                    rules={{
                        required: "Transaction Type is required",
                    }}
                    error={errors?.transactiontype}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="fee"
                    type="text"
                    label="Fee"
                    control={control}
                    rules={{
                        required: "Fee is required",
                    }}
                    error={errors?.fee}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="tax"
                    type="text"
                    label="Tax"
                    control={control}
                    rules={{
                        required: "Tax is required",
                    }}
                    error={errors?.tax}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="debitaccount"
                    type="text"
                    label="Debit Account"
                    control={control}
                    rules={{
                        required: "Debit Account is required",
                    }}
                    error={errors?.debitaccount}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="creditaccount"
                    type="text"
                    label="Credit Account"
                    control={control}
                    rules={{
                        required: "Credit Account is required",
                    }}
                    error={errors?.creditaccount}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="nationalid"
                    type="text"
                    label="National ID"
                    control={control}
                    rules={{
                        required: "National ID is required",
                    }}
                    error={errors?.nationalid}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="mobileno"
                    type="text"
                    label="Mobile No"
                    control={control}
                    rules={{
                        required: "Mobile No is required",
                    }}
                    error={errors?.mobileno}
                />
            </Grid>

            <Grid item xs={12} md={6} lg={4} >
                <TextAreaFields
                    fieldName="comments"
                    type="text"
                    label="Comment"
                    control={control}
                    rows={3}
                    rules={{
                        required: "Comments is required",
                    }}
                    error={errors?.comments}
                />

            </Grid>

            <Grid item xs={12}>
                <ButtonContainer isSingle>
                    <Button size="medium" variant="contained" color="primary"
                        disabled={isLoading}
                        onClick={handleSubmit(submit)}>
                        {isLoading && (
                            <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                        )}
                        Save
                    </Button>
                </ButtonContainer>
            </Grid>
        </Grid>
    </form>
};

export default OpenDCLogUpdateForm;
