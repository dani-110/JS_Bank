import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
const TransformationUpdateForm = (props) => {

    const defaultValues = useForm({
        defaultValues: {
            channelID: "",
            transformationID: "",
            sourceField: "",
            targetField: ""
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


    const channelID = []
    const transformationID = []

    return <form>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <SelectFields
                        fieldName="channelID"
                        label="Channel ID"
                        control={control}
                        rules={{
                            required: "Channel ID is required",
                        }}
                        options={channelID.map((e) => {
                            return { label: e, value: e };
                        })}
                        error={errors?.channelID}
                        
                    />
                </Grid>
                <Grid item xs={6}>
                    <SelectFields
                        fieldName="transformationID"
                        label="Transformation ID"
                        control={control}
                        rules={{
                            required: "Transformation ID is required",
                        }}
                        options={transformationID.map((e) => {
                            return { label: e, value: e };
                        })}
                        error={errors?.transformationID}
                        
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputFields
                        fieldName="sourceField"
                        type="text"
                        label="SourceField"
                        control={control}
                        rules={{
                            required: "Source Field is required",
                        }}
                        error={errors?.sourceField}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="targetField"
                        type="text"
                        label="Target Field"
                        control={control}
                        rules={{
                            required: "Target Field is required",
                        }}
                        error={errors?.targetField}
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

export default TransformationUpdateForm;
