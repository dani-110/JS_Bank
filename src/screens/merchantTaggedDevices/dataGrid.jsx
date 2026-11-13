import React, { useContext, useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import SelectFields from '../../components/SelectFields';
import { useForm } from 'react-hook-form';
import save from '../../assests/save.png'
import { setmerchantdevicestatus } from '../../store/actions/merchants';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import { downloadExcel } from '../../utils/Utils';
import excelExport from '../../assests/excel_export.png'

const DataGrid = (props) => {
    const { isLoading, fetchList } = props

    const tableHeader = ['Tag Device Name', 'Tag Device IMEI', 'Tag Device Type', 'Tag Device Date']
    const verifyParam = ['devicename', 'deviceimei', 'deviceTypeValue', 'tagdateValue']
    const extraHeader = [
        'Action',
    ]

    const tableExportHeader = ['Tag Device Name', 'Tag Device IMEI', 'Tag Device Type', 'Tag Device Date', 'Status']
    const verifyExportParam = ['devicename', 'deviceimei', 'deviceTypeValue', 'tagdateValue', 'statusVlaue']

    const { merchantsTaggedDevice, totalcount } = useSelector(state => state.merchantsTaggedDevice)

    const [dataList, setDataList] = useState([])
    const [exportDataList, setExportDataList] = useState([])

    const taggedDeviceType = [
        {
            label: 'Active',
            value: '1'
        },
        {
            label: 'Device Change',
            value: '2'
        },
        {
            label: 'Lost',
            value: '3'
        },
        {
            label: 'Stolen',
            value: '4'
        },
        {
            label: 'Unregister From App',
            value: '5'
        },
    ]

    useEffect(() => {
        let arr = []
        let arr2 = []
        merchantsTaggedDevice?.map((ele) => {
            const obj = { ...ele }
            const obj2 = { ...ele }

            obj['deviceTypeValue'] = obj.devicetype == 1 ? 'Android' : obj.devicetype == 2 ? 'IOS' : '';
            obj['tagdateValue'] = ele?.tagdate?.split(' ')[0]

            obj2['deviceTypeValue'] = obj2.devicetype == 1 ? 'Android' : obj2.devicetype == 2 ? 'IOS' : '';
            obj2['statusVlaue'] = taggedDeviceType.find(e => e?.value == ele?.status)?.label;
            obj2['tagdateValue'] = ele?.tagdate?.split(' ')[0]
            arr.push(obj)
            arr2.push(obj2)
        })
        setDataList(arr)
        setExportDataList(arr2)

    }, [merchantsTaggedDevice])

    const filteredData = exportDataList?.map((item) => {
        return verifyExportParam?.reduce((obj, key, index) => {
            obj[tableExportHeader[index]] = item[key] ? item[key] : ""
            return obj;
        }, {});
    });

    return <>
        <TabelContainer
            tableHeader={tableHeader}
            // action={TableAction}
            extraColumnFeilds={extraHeader}
            extraColumnParams={['tdid']} //Pass the parameters in this array from which you want to get the value.
            extraColumn={(data) => <TableAction data={data} />}
            data={dataList}
            verifyParam={verifyParam}
            isLoading={isLoading}
            count={totalcount}
            fetchList={fetchList}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Tooltip title={'Export'}>
                <IconButton onClick={() => downloadExcel(filteredData)} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={excelExport} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                    <Typography variant='body1' sx={{ marginLeft: '10px' }}>Export</Typography>
                </IconButton>
            </Tooltip>
        </Box>
    </>
}
export default DataGrid;

const TableAction = ({ data }) => {
    const [isLoading, setIsLoading] = useState(false)
    const breadCrumCtxt = useContext(BreadCrumSelectorContext);

    const dispatch = useDispatch();
    const defaultValues = useForm({
        defaultValues: {
            status: "",
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

    const taggedDeviceType = [
        {
            label: 'Active',
            value: '1'
        },
        {
            label: 'Device Change',
            value: '2'
        },
        {
            label: 'Lost',
            value: '3'
        },
        {
            label: 'Stolen',
            value: '4'
        },
        {
            label: 'Unregister From App',
            value: '5'
        },
    ]

    useEffect(() => {
        reset({
            status: data?.status || "",
        })
    }, [])

    const submit = () => {
        setIsLoading(true)
        const obj = {
            ...getValues(),
            tdid: data.tdid,
            remarks: taggedDeviceType.filter((val => val.value == getValues().status))[0].label,
            audittrace: breadCrumCtxt.breadCrumSelector.join('|') + '|Save'
        }
        dispatch(setmerchantdevicestatus(obj)).then((res) => {
            if (res.payload?.responsecode == 0) {

            }
            setIsLoading(false)
        })
    }


    return (
        <Box>
            <form style={{ display: 'flex' }}>
                <Box sx={{ width: '200px' }}>
                    <SelectFields
                        fieldName="status"
                        label="Status"
                        control={control}
                        options={taggedDeviceType.map(({ label, value }) => {
                            return { label, value };
                        })}
                        rules={{
                            required: "Status is required",
                        }}
                        error={errors?.status}
                        disabled={isLoading}
                    />
                </Box>
                <IconButton onClick={handleSubmit(submit)} sx={{ width: '40px', margin: '0px auto' }} disabled={isLoading}>
                    <img src={save} style={{ width: '25px', height: '25px', objectFit: 'contain', opacity: isLoading ? '0.5' : '1' }} />
                </IconButton>
            </form>
        </Box>
    )
}