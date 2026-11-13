import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import Card from "../../components/card/Card";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
const MicroserviceAPIUpdateForm = (props) => {

    const defaultValues = useForm({
        defaultValues: {
            name: "",
            path: "",
            method: "",
            upStreamService: "",
            downStreamServics: ""
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


  
    const method = ["Get", "Post"]

    return <form>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="name"
                        type="text"
                        label="Name"
                        control={control}
                        rules={{
                            required: "Name is required",
                        }}
                        error={errors?.name}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="path"
                        type="text"
                        label="Path"
                        control={control}
                        rules={{
                            required: "Path is required",
                        }}
                        error={errors?.path}
                    />
                </Grid>
                <Grid item xs={6}>
                    <SelectFields
                        fieldName="method"
                        label="Method"
                        control={control}
                        rules={{
                            required: "Method is required",
                        }}
                        options={method.map((e) => {
                            return { label: e, value: e };
                        })}
                        error={errors?.method}
                        
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="upStreamService"
                        type="text"
                        label="UpStream Service"
                        control={control}
                        rules={{
                            required: "UpStream Service is required",
                        }}
                        error={errors?.upStreamService}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputFields
                        fieldName="downStreamServics"
                        type="text"
                        label="DownStream Servics"
                        control={control}
                        rules={{
                            required: "DownStream Servics is required",
                        }}
                        error={errors?.downStreamServics}
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

export default MicroserviceAPIUpdateForm;
