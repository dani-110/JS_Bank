import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import InputFields from "../../../components/InputFields";
import SelectFields from "../../../components/SelectFields";
import { setDataObject } from "../../../utils/Utils";
import { useSelector } from "react-redux";
import DateTimePickerFields from "../../../components/dateTimePickerField";
import ButtonContainer from "../../../components/buttonContainer";

const SearchPanel = (props) => {
    const { fetchList, data, getValues, control, handleSubmit, reset } = props

    const submit = () => {
        let obj = setDataObject(getValues())
        obj['cid'] = data.cid
        obj['tid'] = data?.tid
        obj['sanctionstid'] = data?.sanctionstid
        console.log(obj)
        fetchList(obj)
    }


    return <form>
        <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
                <DateTimePickerFields
                    fieldName="activitydatefrom"
                    type="date"
                    label="Activity Date From"
                    control={control}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <DateTimePickerFields
                    fieldName="activitydateto"
                    type="date"
                    label="Activity Date To"
                    control={control}
                />
            </Grid>

            <Grid item xs={12}>
                <ButtonContainer>
                    <Button size="medium" variant="contained" color="primary" onClick={handleSubmit(submit)}>Search</Button>
                    <Button size="medium" variant="contained" color="secondary" onClick={() => reset()}>Reset</Button>
                </ButtonContainer>
            </Grid>
        </Grid>
    </form>
};

export default SearchPanel;
