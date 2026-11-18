import React, { useContext, useEffect, useState } from 'react';
import TabelContainer from '../../components/table/table';
import { Box, IconButton, Tooltip } from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';
import UsersUpdateForm from './usersUpdateForm';
import ChangePassword from './changePassword';
import ForceLogout from '../../assests/force_logout.png'
import UserView from './userView';
import view from '../../assests/view.png'
import edit from '../../assests/edit.png'
import create from '../../assests/create.png'
import password from '../../assests/change_password.png'
import ButtonContainer from '../../components/buttonContainer';
import { useDispatch, useSelector } from 'react-redux';
import { filterName } from '../../utils/Utils';
import { forcelogout } from '../../store/actions/users';
import PermissionComp from '../../components/permissionComp/permissionComp';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';
import ViewModal from '../../components/viewModal/viewModal';

const DataGrid = (props) => {
    const { isLoading, fetchList, tableHeading } = props

    const [dataList, setDataList] = useState([])
    const [openCreate, setOpenCreate] = React.useState(false);
    const { users, totalcount } = useSelector(state => state.users)
    const { departmentFilter } = useSelector(state => state.filter)

    useEffect(() => {
        let arr = []
        users.forEach((ele) => {
            const obj = { ...ele }
            obj['statusValue'] = obj.status === '1' ? 'Active' : obj.status === '0' ? 'Inactive' : '';
            obj['isloginValue'] = obj.islogin === '1' ? 'Yes' : obj.islogin === '0' ? 'No' : '';
            obj['departmentidValue'] = filterName(departmentFilter, ele.departmentid);
            arr.push(obj)
        })
        setDataList(arr)

    }, [users])

    const tableHeader = [
        'Username',
        'First Name',
        'Last Name',
        'Mobile No',
        'Email',
        'Created On',
        'Status',
        'Login Status',
        'Department'
    ]
    const verifyParam = [
        'username',
        'firstname',
        'lastname',
        'mobileno',
        'email',
        'creation',
        'statusValue',
        'isloginValue',
        'departmentidValue',
    ]

    return <>
        {/* <TabelContainer tableHeader={tableHeader} action={TableAction} update /> */}
        <TabelContainer
            tableHeader={tableHeader}
            action={TableAction}
            data={dataList}
            verifyParam={verifyParam}
            update
            isLoading={isLoading}
            count={totalcount}
            fetchList={fetchList}
            tableHeading={tableHeading}
            addButton={<PermissionComp list={['User Management', 'Users', 'Create']}>
                <ModalButton open={openCreate} setOpen={setOpenCreate} tooltip={'Create'} img={create} createLabel={'Add New User'}>
                    <UsersUpdateForm open={openCreate} setOpen={setOpenCreate} type={'Create'} />
                </ModalButton>
            </PermissionComp>}
        />
    </>
}
export default DataGrid;



const TableAction = (data) => {
    const dispatch = useDispatch()
    const breadCrumCtxt = useContext(BreadCrumSelectorContext);

    const [openEdit, setOpenEdit] = React.useState(false);
    const [openView, setOpenView] = React.useState(false);
    const [openPassword, setOpenPassword] = React.useState(false);
    const item = data.id


    const { user } = useSelector(state => state.auth)
    const permissions = user?.permissions

    const forceLogoutUser = () => {
        console.log(item)
        const obj = {
            "username": item.username,
            "audittrace": breadCrumCtxt.breadCrumSelector.join('|') + '|Force Logout'
        }
        dispatch(forcelogout(obj)).then((res) => {
            if (res.payload) {
                console.log(res.payload)
            }
        })
    }
    return (
        <Box sx={{ display: 'flex', gap: '5px' }}>
            <PermissionComp list={['User Management', 'Users', 'Edit']}>
                <ViewModal open={openEdit} setOpen={setOpenEdit} tooltip={'USER MANAGEMENT'} type={'Edit'}>
                    <UsersUpdateForm data={item} setOpen={setOpenEdit} type={'Edit'} />
                </ViewModal>
            </PermissionComp>

            <PermissionComp list={['User Management', 'Users', 'View']}>
                <ViewModal open={openView} setOpen={setOpenView} tooltip={'USER MANAGEMENT'} type={'View'}>
                    <UserView data={item} />
                </ViewModal>
            </PermissionComp>

            <PermissionComp list={['User Management', 'Users', 'Change Password']}>
                <ViewModal open={openPassword} setOpen={setOpenPassword} tooltip={'Change Password'} img={password}>
                    <ChangePassword data={item} setOpen={setOpenPassword} />
                </ViewModal>
            </PermissionComp>

            <PermissionComp list={['User Management', 'Users', 'Force Logout']}>
                <Tooltip title="Force Logout">
                    <IconButton onClick={forceLogoutUser} >
                        <img src={ForceLogout} style={{ height: '25px', width: '25px', objectFit: 'contain' }} />
                    </IconButton>
                </Tooltip>
            </PermissionComp>
        </Box>
    )
}