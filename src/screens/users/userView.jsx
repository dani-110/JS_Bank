import React, { useEffect, useState } from 'react';
import View from '../../components/view';
import { Divider, Typography } from '@mui/material';

const UserView = (props) => {
    const { data } = props
    const [objView, setObjView] = useState({})

    useEffect(() => {
        console.log(data)
        let obj = { ...data }
        obj['isnotificationValue'] = obj.isnotification === '1' ? 'Yes' : obj.status === '0' ? 'No' : '';
        setObjView(obj)
    }, [])


    const viewFields = [
        'Username',
        'First Name',
        'Last Name',
        'Email',
        'Mobile No',
        'Created On',
        'Created By',
        'Modified On',
        'Last Logged In',
        'Status',
        'Login Status',
        'Organization',
        'Role Name',
        'Notification Allowed',
        'Department',
        'Employee ID',
    ]
    const verifyParam = [
        'username',
        'firstname',
        'lastname',
        'email',
        'mobileno',
        'creation',
        'creator',
        'modification',
        'lastLogin',
        'statusValue',
        'isloginValue',
        'organization',
        'rolename',
        'isnotificationValue',
        'departmentidValue',
        'employeeid',
    ]

    return <>
        <Typography variant='h2' sx={{ margin: '10px', textAlign: 'left', fontWeight: '500' }}>{'User details'}</Typography>
        <Typography variant="body1" sx={{ textAlign: 'left', margin: '10px 10px 20px', }} color={'#617088'}>{objView['username']}</Typography>
        <View viewFields={viewFields} viewData={objView} verifyParam={verifyParam} />
    </>
}
export default UserView;