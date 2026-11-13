import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import Card from "../../components/card/Card";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
const CryptographyUpdateForm = (props) => {

    const defaultValues = useForm({
        defaultValues: {
            keyType: "",
            keyValue: "",
            keyLength: ""
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
        formState: { errors },
    } = defaultValues;

    const keyType = ['ZMK', 'TPK', 'LMK']
    return <form>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                    <SelectFields
                        fieldName="keyType"
                        label="Key Type"
                        control={control}
                        rules={{
                            required: "Key Type is required",
                        }}
                        options={keyType.map((e) => {
                            return { label: e, value: e };
                        })}
                        error={errors?.keyType}
                        
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputFields
                        fieldName="keyValue"
                        type="text"
                        label="Key Value"
                        control={control}
                        rules={{
                            required: "Key Value is required",
                        }}
                        error={errors?.keyValue}
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputFields
                        fieldName="keyLength"
                        type="text"
                        label="Key Length"
                        control={control}
                        rules={{
                            required: "Key Length is required",
                        }}
                        error={errors?.keyLength}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ButtonContainer isSingle>
                        <Button size="medium" variant="contained" color="primary" >Save</Button>
                    </ButtonContainer>
                </Grid>
            </Grid>
        </form>
};

export default CryptographyUpdateForm;
