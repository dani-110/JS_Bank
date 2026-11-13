import  React, { useEffect, useState } from 'react';
import View from '../../components/view';

const UserView = (props) => {
    const { data } = props
    const [objView, setObjView] = useState({})

    useEffect(() => {
        let obj = { ...data }
        obj['isnotificationValue'] = obj.isnotification === '1' ? 'Yes' : obj.status === '0' ?'No':'';
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

    return <View viewFields={viewFields}  viewData={objView} verifyParam={verifyParam}/>
}
export default UserView;