import React from 'react';
import TabelContainer from '../../components/table/table';
import { Box } from '@mui/material';
import ModalButton from '../../components/modalButton/modalButton';
import RolesUpdateForm from './rolesUpdateForm';
import edit from '../../assests/edit.png'
import create from '../../assests/create.png'
import ButtonContainer from '../../components/buttonContainer';
import { useSelector } from 'react-redux';
import PermissionComp from '../../components/permissionComp/permissionComp';
import ViewModal from '../../components/viewModal/viewModal';

const DataGrid = (props) => {
    const { isLoading, fetchList, tableHeading } = props
    const [openCreate, setOpenCreate] = React.useState(false);
    const { roles, totalcount } = useSelector(state => state.roles)
    const tableHeader = [
        'Role Name',
        'Created On',
        'Modified On',
    ]
    const verifyParam = [
        'rolename',
        'creaton',
        'modification',
    ]

    return <>

        <TabelContainer
            tableHeader={tableHeader}
            action={TableAction}
            data={roles}
            verifyParam={verifyParam}
            isLoading={isLoading}
            count={totalcount}
            fetchList={fetchList}
            tableHeading={tableHeading}
            tableDescription="Role records"
            addButton={<PermissionComp list={['User Management', 'Roles', 'Create']}>
                <ViewModal open={openCreate} setOpen={setOpenCreate} tooltip={'Create'} heading={'USER MANAGEMENT'} >
                    <RolesUpdateForm open={openCreate} setOpen={setOpenCreate} />
                </ViewModal>
            </PermissionComp>}
        />
    </>
}
export default DataGrid;



const TableAction = (data) => {
    const [openEdit, setOpenEdit] = React.useState(false);
    const item = data.id
    return (
        <Box sx={{display:"flex",justifyContent:"center"}}>
            <PermissionComp list={['User Management', 'Roles', 'Edit']}>
                <ViewModal open={openEdit} setOpen={setOpenEdit} tooltip={'Edit'} width={'60%'} type={'Edit'} >
                    <RolesUpdateForm data={item} setOpen={setOpenEdit} type={'Edit'} />
                </ViewModal>
            </PermissionComp>
        </Box>
    )
}