import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import ButtonContainer from "../../components/buttonContainer";

const SearchPanel = (props) => {

    const defaultValues = useForm({
        defaultValues: {
            channelID: "",
            channelName: "",
            IP: "",
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

    return <form>
        <Grid container spacing={2}>

            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="channelID"
                    type="text"
                    label="Channel ID"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="channelName"
                    type="text"
                    label="Channel Name"
                    control={control}
                    rules={{
                        required: "Channel Name is required",
                    }}
                    error={errors?.channelName}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="IP"
                    type="text"
                    label="IP"
                    control={control}
                    rules={{
                        required: "IP is required",
                    }}
                    error={errors?.IP}
                />
            </Grid>

            <Grid item xs={12}>
                <ButtonContainer>
                    <Button size="medium" variant="contained" color="primary" >Search</Button>
                    <Button size="medium" variant="contained" color="secondary" onClick={()=>reset()}>Reset</Button>
                </ButtonContainer>
            </Grid>
        </Grid>
    </form>
};

export default SearchPanel;
