import React, { useContext, useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { useDispatch, useSelector } from 'react-redux';
import { getconsumerjourney, getmerchantjourney } from '../../store/actions/digitalIdentity';
import { Box, Link } from '@mui/material';
import { downloadFile, filterName } from '../../utils/Utils';
import PermissionExpandable from '../permissions/permissionExpand';
import ModalButton from '../../components/modalButton/modalButton';
import ConsumerHistoricData from '../consumerHistoricData/historicData';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';


const ConsumerJourneyView = (props) => {
    const { state, type, img, Comp, auditTrace } = props
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth)

    const { kycstagestatusFilter, kycprocstageFilter } = useSelector(state => state.filter)

    const [searchData, setSearchData] = React.useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [totalcount, setTotalcount] = useState(0);
    const [submenuExpanded, setSubMenuExpanded] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const breadCrumCtxt = useContext(BreadCrumSelectorContext)

    const handleExpandClick = (title) => {
        setSubMenuExpanded((prev) => (prev === title ? "" : title));
    };

    useEffect(() => {
        if (open) {
            fetchList()
        }
    }, [open])

    const fetchList = (data, rowsPerPage, page) => {
        if (Object.keys(searchData).length == 0) {
            searchData["cid"] = state?.cid
            searchData["recordcount"] = 10
            searchData["pagenumber"] = 1
            searchData["audittrace"] = breadCrumCtxt.breadCrumSelector.join('|') + `${auditTrace ? '|' + auditTrace : ''}` + '|Consumer Journey'
            setSearchData(searchData)
        }
        setIsLoading(true)
        if (rowsPerPage) {
            searchData["recordcount"] = rowsPerPage
            searchData["pagenumber"] = page + 1
        }
        dispatch(getconsumerjourney(searchData)).then((res) => {
            console.log(res.payload?.list)
            let arr = []
            res.payload?.list.forEach((ele) => {
                const obj = { ...ele }
                obj['newkycstagestatusvalue'] = filterName(kycstagestatusFilter, ele.newkycstagestatus);
                obj['oldkycstagestatusvalue'] = ele.oldkycstagestatusvalue ? filterName(kycstagestatusFilter, ele.oldkycstagestatus) : ele.username;
                obj['oldprocstagevalue'] = ele.oldprocstage ? filterName(kycprocstageFilter, ele.oldprocstage) : ele.activityname;
                obj['newprocstagevalue'] = filterName(kycprocstageFilter, ele.newprocstage);
                obj['requeststatusvalue'] = obj.requeststatus == 1 ? 'Approve' : obj.requeststatus == 2 ? 'Decline' : '';
                obj['requeststatusvalueIsReturn'] = obj.requeststatus == 1 ? 'No' : obj.requeststatus == 2 ? 'Yes' : '';
                obj['AgentTerminalId'] = 'N/A';
                obj['historicComments'] = ele.comments;
                arr.push(obj)
            })
            setDataList(arr)
            setTotalcount(res.payload?.total)
            setIsLoading(false)
        });
    };

    //     CustomerCaseId	-> Activity ID
    // CustomerName -> CID	
    // MobileNo -> 	
    // CNIC -> 	
    // CustomerAccountCode	-> 
    // Is Returned	-> 
    // Source -> Old Stage	
    // Step Performed -> Old Sub Stage	
    // StepStatus -> Action	
    // Comments -> Comments	
    // UserName -> User	
    // AgentTerminalId	-> 'N/A'
    // UpdatedOn -> Date

    const tableHeader = [
        'Customer Case ID',
        'Customer Name',
        'Mobile No',
        'CNIC',
        'Wallet',
        'Is Returned',
        'Source',
        'Step Performed',
        'Step Status',
        'Comments',
        'User Name',
        'Agent Terminal ID',
        'Updated On',
    ]
    const verifyParam = [
        'actid',
        'fullname',
        'mobileno',
        'nationalid',
        'accountnum',
        'requeststatusvalueIsReturn',
        'oldkycstagestatusvalue',
        'oldprocstagevalue',
        'requeststatusvalue',
        'historicComments',
        'username',
        'AgentTerminalId',
        'activitydate',
    ]




    return <>
        <ModalButton open={open} setOpen={setOpen} tooltip={'Journey'} title={'Consumer Journey'} type={type ? type : 'button'} img={img ? img : ''}>
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
                extraColumnParams={['']} //Pass the parameters in this array from which you want to get the value.
                extraColumn={(data) => <Link onClick={() => downloadFile(user, data?.filename, null, breadCrumCtxt.breadCrumSelector.join('|') + '|Download')}>{data.filename}</Link>}
                action={TableAction}
            />
        </ModalButton>
    </>
}
const TableAction = (data) => {
    const item = data.id
    console.log(item)
    return (
        <Box>
            <ConsumerHistoricData data={item} />
        </Box>
    )
}
export default ConsumerJourneyView;