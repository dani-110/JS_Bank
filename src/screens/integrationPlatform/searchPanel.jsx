import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../components/InputFields";
import SelectFields from "../../components/SelectFields";
import ButtonContainer from "../../components/buttonContainer";
import { numberRegex, numberWithPointRegex, setDataObject } from "../../utils/Utils";
import { useSelector } from "react-redux";

const SearchPanel = (props) => {
    const { fetchList } = props

    const { channelFilter } = useSelector(state => state.filter)

    const defaultValues = useForm({
        defaultValues: {
            channelid: "",
            // channelname: "",
            ipaddress: "",
            port: "",
        }
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

    const submit = () => {
        let data = setDataObject(getValues())
        fetchList(data)
    }


    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <SelectFields
                    fieldName="channelid"
                    label="Channel"
                    control={control}
                    options={channelFilter.map(({ displayvalue, codevalue }) => {
                        return { label: displayvalue, value: codevalue };
                    })}
                />
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="channelname"
                    type="text"
                    label="Channel Name"
                    control={control}
                />
            </Grid> */}
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="ipaddress"
                    type="text"
                    label="IP Address"
                    control={control}
                    pattern={numberWithPointRegex}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <InputFields
                    fieldName="port"
                    type="text"
                    label="Port"
                    control={control}
                    pattern={numberRegex}
                />
            </Grid>

            <Grid item xs={12}>
                <ButtonContainer>
                    <Button size="medium" variant="contained" color="secondary" onClick={handleSubmit(submit)}>Search</Button>
                    <Button size="medium" variant="outlined" color="secondary" onClick={() => reset()}>Reset</Button>
                </ButtonContainer>
            </Grid>
        </Grid>
    </form>
};

export default SearchPanel;
