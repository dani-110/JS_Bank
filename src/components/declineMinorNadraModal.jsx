import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Button, Grid, IconButton, Tooltip, Typography, styled } from '@mui/material';
import ModalButton from './modalButton/modalButton';
import SelectFields from './SelectFields';
import { useForm } from 'react-hook-form';
import TextAreaFields from './textAreaFields';
import ButtonContainer from './buttonContainer';
import { useDispatch, useSelector } from 'react-redux';
import MultiSelectFields from './MultiSelectFields';
import { filterName } from '../utils/Utils';
import PopModal from './popModal/popModal';
import { getdeclinereasonminor } from '../store/actions/filter';

export default function DeclineMinorNadraModal(props) {
    const { decline, isMultiple, disabled, list } = props

    const [openView, setOpenView] = React.useState(false);

    const [showMsg, setShowMsg] = React.useState(false)
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState(false)
    const { declinereasonminorFilter } = useSelector(state => state.filter)
    const [declineList, setDclineList] = React.useState(list ? list : declinereasonminorFilter)
    const defaultValues = useForm({
        defaultValues: {
            declinereason: "",
            comments: "",
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

    const submit = () => {
        setIsLoading(true)
        let data = getValues()
        let obj = {
            ...data,
            declinereason: data?.declinereason?.join('|'),
            declinereasonnarration: data?.declinereason?.map(e => filterName(declinereasonminorFilter, e)).join('|')
        }
        decline(obj, setOpenView)
    }
    return (
        <ModalButton disabled={disabled} open={openView} setOpen={setOpenView} tooltip={'Decline'} title={'Decline'} type={'button'} fill width={'30%'}>
            <form>
                <Grid container spacing={2} sx={{ marginBottom: '10px' }}>
                    <Grid item xs={12} >
                        <MultiSelectFields
                            fieldName="declinereason"
                            label="Decline Reason"
                            control={control}
                            options={declineList.map(({ displayvalue, codevalue }) => {
                                return { label: displayvalue, value: codevalue };
                            })}
                            rules={{
                                required: "Decline Reason is required",
                            }}
                            error={errors?.declinereason}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
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

                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ display: 'flex', alignItems: 'end', marginTop: '10px' }}>

                        <Button size="medium" variant="contained" color="secondary" disabled={isLoading} onClick={handleSubmit(submit)}>
                            {isLoading && (
                                <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                            )}Save</Button>
                    </Grid>
                </Grid>
            </form>
            {/* <PopModal open={showMsg} setOpen={setShowMsg}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                    <Typography variant="body1" style={{ padding: '10px', textAlign: 'center', textWrap: 'wrap' }}>
                        {`Cooling Off can not be enabled from this option. Pleae contact system administrator for further information`}
                    </Typography>
                    <ButtonContainer isSingle>
                        <Button size="medium" variant="contained" color="primary" onClick={handleSubmit(submit)} >Decline</Button>
                    </ButtonContainer>
                </Box>
            </PopModal> */}
        </ModalButton >
    );
}