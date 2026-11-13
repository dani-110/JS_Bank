import React, { useContext, useEffect, useState } from 'react';
import TabelContainer from './table/table';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Link } from '@mui/material';
import { getmerchantonboardingjourney } from '../store/actions/digitalIdentity';
import { BreadCrumSelectorContext } from '../store/context/breadCrumSelector';
import ModalButton from './modalButton/modalButton';
import { downloadFile, filterName } from '../utils/Utils';

const ViewApplicationJourney = (props) => {
    const { state, img, Comp } = props
    console.log(state)
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth)
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    const { kycstagestatusFilter, kycprocstageFilter, legalentityFilter } = useSelector(state => state.filter)

    const [searchData, setSearchData] = React.useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [totalcount, setTotalcount] = useState(0);
    const [submenuExpanded, setSubMenuExpanded] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleExpandClick = (title) => {
        setSubMenuExpanded((prev) => (prev === title ? "" : title));
    };

    useEffect(() => {
        if (open) {
            setDataList([])
            setTotalcount(0)
            fetchList()
        }
    }, [open])



    const fetchList = (data, rowsPerPage, page) => {
        if (Object.keys(searchData).length == 0) {
            searchData["applicationid"] = state?.id
            searchData["recordcount"] = 10
            searchData["pagenumber"] = 1
            searchData["audittrace"] = breadCrumCtxt.breadCrumSelector.join('|') + '|View Application Journey'
            setSearchData(searchData)
        }
        setIsLoading(true)
        if (rowsPerPage) {
            searchData["recordcount"] = rowsPerPage
            searchData["pagenumber"] = page + 1
        }
        dispatch(getmerchantonboardingjourney(searchData)).then((res) => {
            console.log(res.payload)
            let arr = []
            res.payload?.list.forEach((ele) => {
                const obj = { ...ele }
                console.log(ele)
                obj['newkycstagestatusvalue'] = filterName(kycstagestatusFilter, ele.newkycstagestatus);
                obj['oldkycstagestatusvalue'] = filterName(kycstagestatusFilter, ele.oldkycstagestatus);
                obj['oldprocstagevalue'] = filterName(kycprocstageFilter, ele.oldprocstage);
                obj['newprocstagevalue'] = filterName(kycprocstageFilter, ele.newprocstage);
                obj['requeststatusvalue'] = obj.requeststatus == 1 ? 'Approve' : obj.requeststatus == 2 ? 'Decline' : '';
                obj['pepflagValue'] = obj.requeststatus == 1 ? 'Yes' : obj.requeststatus == 2 ? 'No' : '';
                obj['historicComments'] = ele.comments;
                obj['legalentityvalue'] = filterName(legalentityFilter, ele.legalentity);
                obj['agentTerminalID'] = 'N/A';
                obj['sourceValue'] = ele.oldkycstagestatusvalue ? filterName(kycstagestatusFilter, ele.oldkycstagestatus) : ele.username;
                obj['stepperformedValue'] = ele.oldprocstage ? filterName(kycprocstageFilter, ele.oldprocstage) : ele.activityname;
                arr.push(obj)
            })
            setDataList(arr)
            setTotalcount(res.payload?.total)
            setIsLoading(false)
        });
    };


    const tableHeader = [
        'Activity ID',
        'MID',
        'Legal Name',
        'DBA',
        'Type',
        'Is Returned',
        'Source',
        'Step Performed',
        'Step Status',
        'Comments',
        'User',
        'Agent Terminal ID',
        'Date',
        // 'Old Stage',
        // 'New Stage',
        // 'Old Sub Stage',
        // 'New Sub Stage',
        // 'Action'
    ]

    const verifyParam = [
        'actid',
        'mid',
        'legalname',
        'dba',
        'legalentityvalue',
        'pepflagValue',
        'sourceValue',
        'stepperformedValue',
        'requeststatusvalue',
        'historicComments',
        'username',
        'agentTerminalID',
        'activitydate',
        // 'oldkycstagestatusvalue',
        // 'newkycstagestatusvalue',
        // 'oldprocstagevalue',
        // 'newprocstagevalue',
        // 'requeststatusvalue'
    ]

    return <ModalButton open={open} setOpen={setOpen} tooltip={'Journey'} title={'View Application Journey'} type={'button'} img={img ? img : ''}>
        <Box sx={{ display: 'flex', justifyContent: 'end', padding: '10px' }}>
            {Comp}
        </Box>
        <TabelContainer
            tableHeader={tableHeader}
            data={dataList}
            verifyParam={verifyParam}
            isLoading={isLoading}
            count={totalcount}
            fetchList={fetchList}
            actionText={"Historic Data"}
            extraColumnFeilds={['Uploaded Document']}
            extraColumnParams={['']} 
            extraColumn={(data) => <Link onClick={() => downloadFile(user, data?.filename, null, breadCrumCtxt.breadCrumSelector.join('|') + '|Download')}>{data.filename}</Link>}
            
        />
    </ModalButton>
}
export default ViewApplicationJourney;