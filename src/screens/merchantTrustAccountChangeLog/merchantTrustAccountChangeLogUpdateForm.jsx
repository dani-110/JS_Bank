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

const MerchantTrustAccountChangeLogUpdateForm = (props) => {
    const { data, setOpen, type } = props
    const [isLoading, setIsLoading] = useState(false)
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)
    const { stateFilter, transactionFilter, mccFilter } = useSelector(state => state.filter)

    const dispatch = useDispatch();
    const defaultValues = useForm({
        defaultValues: {
            name: "",
            taxdescription: "",
            taxvalue: "",
            taxtype: "",
            lowerlimit: "",
            upperlimit: "",
            appliedfrom: "",
            expiryfrom: "",
            requestcode: "",
            state: "",
            isactive: "",
            mccid:"",
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
                name: data.name || "",
                taxdescription: data.taxdescription || "",
                taxvalue: data.taxvalue || "",
                taxtype: data.taxtype || "",
                lowerlimit: data.lowerlimit || "",
                upperlimit: data.upperlimit || "",
                expiryfrom: data.expiryfrom || "",
                appliedfrom: data.appliedfrom || "",
                isactive: data.isactive || "",
                state: data.state || "",
                requestcode: data.requestcode || "",
                mccid: data.mccid || "",
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
        setIsLoading(true)
        if (data?.taxid) {
            let obj = setDataObject(getValues())
            obj['taxid'] = data.taxid
            obj["audittrace"] = breadCrumCtxt.breadCrumSelector.join('|') + '|Save'
            delete obj['name']
            delete obj['taxdescription']

            dispatch(edittax(obj)).then((res) => {
                if (res.payload) {
                    delete obj['actuser']
                    obj['appliedfrom'] = setDateOnUpdateList(obj['appliedfrom'])
                    obj['expiryfrom'] = setDateOnUpdateList(obj['expiryfrom'])
                    const objSave = { ...data, ...obj }
                    dispatch(updateTaxRecord(objSave))
                    setOpen(false)
                    breadCrumCtxt.lastItemRemove()
                }
                setIsLoading(false)
            })
        } else {
            let obj = setDataObject(getValues())
            obj['apply'] = obj.appliedfrom
            obj['expiry'] = obj.expiryfrom
            obj["audittrace"] = breadCrumCtxt.breadCrumSelector.join('|') + '|Save'
            dispatch(addtax(obj)).then((res) => {
                if (res.payload) {
                    console.log(res.payload)
                    dispatch(createTaxRecord(res.payload[0]))
                    setOpen(false)
                    breadCrumCtxt.lastItemRemove()
                }
                setIsLoading(false)
            })
        }
    }

    return <form>
        <Grid container spacing={2}>
            {type == 'Create' && <>
                <Grid item xs={12} md={6} lg={4}>
                    <InputFields
                        fieldName="name"
                        type="text"
                        label="Name"
                        control={control}
                        pattern={alphaRegex}
                        rules={{
                            required: "Name is required",
                        }}
                        error={errors?.name}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <InputFields
                        fieldName="taxdescription"
                        type="text"
                        label="Tax Description"
                        control={control}
                        rules={{
                            required: "Tax Description is required",
                        }}
                        error={errors?.taxdescription}
                    />
                </Grid>
            </>}

            <Grid item xs={12} md={6} lg={4}>
                <SelectFields
                    fieldName="taxtype"
                    label="Tax Type"
                    control={control}
                    options={taxtype.map(({ label, value }) => {
                        return { label, value };
                    })}
                    rules={{
                        required: "Tax Type is required",
                    }}
                    error={errors?.taxtype}

                />
            </Grid>
            {watch('taxtype') != '3' && <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="taxvalue"
                    type="text"
                    label="Tax Value"
                    control={control}
                    pattern={twoDigitsAfterDecimal}
                    rules={{
                        required: "Tax Value is required",
                    }}
                    error={errors?.taxvalue}
                />
            </Grid>}
            {watch('taxtype') == '3' && <>
                <Grid item xs={12} md={6} lg={4}>
                    <InputFields
                        fieldName="lowerlimit"
                        type="text"
                        label="Lower Amount"
                        control={control}
                        pattern={twoDigitsAfterDecimal}
                        rules={{
                            required: "Lower Amount is required",
                        }}
                        error={errors?.lowerlimit}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <InputFields
                        fieldName="upperlimit"
                        type="text"
                        label="Upper Amount"
                        control={control}
                        pattern={twoDigitsAfterDecimal}
                        rules={{
                            required: "Upper Amount is required",
                        }}
                        error={errors?.upperlimit}
                    />
                </Grid>
            </>}
            <Grid item xs={12} md={6} lg={4}>
                <DateTimePickerFields
                    fieldName="appliedfrom"
                    type="date"
                    label="Applied From"
                    control={control}
                    rules={{
                        required: "Applied From is required",
                    }}
                    error={errors?.appliedfrom}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <DateTimePickerFields
                    fieldName="expiryfrom"
                    type="date"
                    label="Expiry From"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
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
            <Grid item xs={12} md={6} lg={4}>
                <SelectFields
                    fieldName="state"
                    label="State"
                    control={control}
                    options={stateFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}
                    rules={{
                        required: "State is required",
                    }}
                    error={errors?.state}

                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <SelectFields
                    fieldName="isactive"
                    label="Status"
                    control={control}
                    options={status.map(({ label, value }) => {
                        return { label, value };
                    })}
                    rules={{
                        required: "Status is required",
                    }}
                    error={errors?.isactive}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <SelectFields
                    fieldName="mccid"
                    label="MCC"
                    control={control}
                    options={mccFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}

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

export default MerchantTrustAccountChangeLogUpdateForm;
