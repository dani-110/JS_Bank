import React, { useContext, useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import SelectFields from '../../components/SelectFields';
import { useForm } from 'react-hook-form';
import save from '../../assests/save.png'
import { setconsumerdevicestatus } from '../../store/actions/consumer';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import { downloadExcel } from '../../utils/Utils';
import excelExport from '../../assests/excel_export.png'

const DataGrid = (props) => {
    const { isLoading, fetchList } = props
    const tableHeader = ['Tag Device Name', 'Tag Device ID', 'Tag Device Type', 'Tag Device Date']
    const verifyParam = ['devicename', 'deviceimei', 'deviceTypeValue', 'tagdate']
    const tableExportHeader = ['Tag Device Name', 'Tag Device ID', 'Tag Device Type', 'Tag Device Date', 'Status']
    const verifyExportParam = ['devicename', 'deviceimei', 'deviceTypeValue', 'tagdate', 'statusVlaue']
    const extraHeader = [
        'Action',
    ]

    const { consumersTaggedDevice, totalcount } = useSelector(state => state.consumersTaggedDevice)

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
        console.log(consumersTaggedDevice)
        let arr = []
        let arr2 = []
        consumersTaggedDevice?.map((ele) => {
            const obj = { ...ele }
            const obj2 = { ...ele }
            obj['deviceTypeValue'] = obj.devicetype == 1 ? 'Android' : obj.devicetype == 2 ? 'IOS' : '';


            obj2['deviceTypeValue'] = obj2.devicetype == 1 ? 'Android' : obj2.devicetype == 2 ? 'IOS' : '';
            obj2['statusVlaue'] = taggedDeviceType.find(e => e?.value == ele?.status)?.label;

            arr.push(obj)
            arr2.push(obj2)
        })
        setDataList(arr)
        setExportDataList(arr2)

    }, [consumersTaggedDevice])


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
        {/* <Box sx={{ display: 'flex', alignItems: 'flex-start', border: '1px solid' }}>
            <Tooltip title={'Export'}>
                <IconButton onClick={() => downloadExcel(filteredData)} sx={{ width: '100px', margin: '0px auto' }}>
                    <img src={excelExport} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                    <Typography variant='body1' sx={{ marginLeft: '10px' }}>Export</Typography>
                </IconButton>
            </Tooltip>
        </Box> */}
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

    const breadCrumCtxt = useContext(BreadCrumSelectorContext);
    const [isLoading, setIsLoading] = useState(false)

    const { devicestatusFilter } = useSelector(state => state.filter)

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
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|Save'
        }
        dispatch(setconsumerdevicestatus(obj)).then((res) => {
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
                        options={devicestatusFilter.map(({ displayvalue, codevalue }) => {
                            return { label: displayvalue, value: codevalue };
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
