import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import View from '../../components/view';
import { useDispatch, useSelector } from 'react-redux';
import { getTaxById } from '../../store/actions/tax';
import { statefilter, transactionfilter } from '../../store/actions/filter';
import { filterName } from '../../utils/Utils';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import TextAreaFields from '../../components/textAreaFields';
import { Button, CircularProgress, Grid } from '@mui/material';
import ButtonContainer from '../../components/buttonContainer';
import { useForm } from 'react-hook-form';
import { checkertachangerequest } from '../../store/actions/merchantWallets';

const MerchantTrustAccountTAView = (props) => {
    const { data, setOpen } = props
    const { stateFilter, transactionFilter, mccFilter } = useSelector(state => state.filter)
    const [viewData, setViewData] = useState({})
    const [isApproveLoading, setIsApproveLoading] = useState(false)
    const [isRejectLoading, setIsRejectLoading] = useState(false)

    const type = [{ label: "Flat", value: 1 }, { label: "Percentage", value: 2 }, { label: "Slab", value: 3 }]
    const dispatch = useDispatch();
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    const defaultValues = useForm({
        defaultValues: {
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

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const taxData = await dispatch(getTaxById({ tax: data.taxid, "audittrace": breadCrumCtxt.breadCrumSelector.join('|') }));
        const updatedData = { ...taxData.payload };
        updatedData.status = updatedData.isactive === '1' ? 'Active' : 'Inactive';
        updatedData['requestcode'] = filterName(transactionFilter, updatedData.requestcode);
        updatedData['state'] = filterName(stateFilter, updatedData.state)
        updatedData['mccValue'] = filterName(mccFilter, updatedData.mccid)
        updatedData['taxtypename'] = type.find(val => val.value == updatedData.taxtype)?.label
        delete updatedData.isactive;
        setViewData(updatedData);
    };

    const viewFields = [
        'Name',
        'Description',
        'Value',
        'Tax Type',
        'Lower Amount',
        'Upper Amount',
        'Apply',
        'Expiry Date',
        'Created On',
        'User Name',
        'Transaction',
        'State',
        'MCC',
        'Status'
    ]

    const verifyParam = [
        'name',
        'taxdescription',
        'taxvalue',
        'taxtypename',
        'lowerlimit',
        'upperlimit',
        'appliedfrom',
        'expiryfrom',
        'creationdate',
        'username',
        'requestcode',
        'state',
        'mccValue',
        'status'
    ]

    const approve = () => {
        setIsApproveLoading(true)
        const obj = {
            requeststatus: 3,
            mid: data.mid,
            requestid: data.tacrid,
            checkercomments: watch('comments'),
            audittrace: breadCrumCtxt.breadCrumSelector.join('|') + '|Approve'
        }
        dispatch(checkertachangerequest(obj)).then((res) => {
            setIsApproveLoading(false)
            setOpen(false)
        });

    }
    const reject = () => {
        setIsRejectLoading(true)
        const obj = {
            requeststatus: 4,
            mid: data.mid,
            requestid: data.tacrid,
            checkercomments: watch('comments'),
            audittrace: breadCrumCtxt.breadCrumSelector.join('|') + '|Reject'
        }
        dispatch(checkertachangerequest(obj)).then((res) => {
            setIsRejectLoading(false)
            setOpen(false)
        });
    }

    return <>
        <View viewFields={viewFields} viewData={viewData} verifyParam={verifyParam} />
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
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
                    <ButtonContainer>
                        <Button size="medium" variant="contained" color="primary"
                            disabled={isApproveLoading}
                            onClick={handleSubmit(approve)}>
                            {isApproveLoading && (
                                <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                            )}
                            Approve
                        </Button>
                        <Button size="medium" variant="contained" color="secondary"
                            disabled={isRejectLoading}
                            onClick={handleSubmit(reject)}>
                            {isRejectLoading && (
                                <CircularProgress size={20} sx={{ marginRight: 1, color: "#fff" }} />
                            )}
                            Reject
                        </Button>
                    </ButtonContainer>
                </Grid>
            </Grid >
        </form>
    </>
}
export default MerchantTrustAccountTAView;