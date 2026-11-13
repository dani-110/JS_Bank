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
            addButton={<PermissionComp list={['User Management', 'Roles', 'Create']}>
                <ModalButton open={openCreate} setOpen={setOpenCreate} tooltip={'Create'} createLabel={'Create Role'} >
                    <RolesUpdateForm open={openCreate} setOpen={setOpenCreate} />
                </ModalButton>
            </PermissionComp>}
        />
    </>
}
export default DataGrid;



const TableAction = (data) => {
    const [openEdit, setOpenEdit] = React.useState(false);
    const item = data.id
    return (
        <Box>
            <PermissionComp list={['User Management', 'Roles', 'Edit']}>
                <ModalButton open={openEdit} setOpen={setOpenEdit} tooltip={'Edit'} img={edit} width={'60%'} >
                    <RolesUpdateForm data={item} setOpen={setOpenEdit} type={'Edit'} />
                </ModalButton>
            </PermissionComp>
        </Box>
    )
}