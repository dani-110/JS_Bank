import React, { useEffect, useState } from 'react';
import View from '../../components/view';
import { filterName } from '../../utils/Utils';
import { useSelector } from 'react-redux';

const ScrutinyLevelView = (props) => {
    const { data } = props
    const [viewData, setViewData] = useState({})

    const { cityFilter, countryFilter, districtFilter, stateFilter, applanguageFilter, riskFilter, genderFilter } = useSelector(state => state.filter)

    useEffect(() => {
        fetchData();
    }, []);

    const filterListName = (list, id) => {
        return list?.find(val => val?.value == parseInt(id))?.label || ""
    }
    const yesNo = [
        {
            label: 'Yes',
            value: '1'
        },
        {
            label: 'No',
            value: '0'
        },
    ]
    const trueFalse = [
        {
            label: 'True',
            value: '1'
        },
        {
            label: 'False',
            value: '0'
        },
    ]
    const appthememode = [
        {
            label: 'Light',
            value: '1'
        },
        {
            label: 'Dark',
            value: '2'
        }
    ]

    const nationalID = [
        {
            label: 'CNIC',
            value: '1'
        },
        {
            label: 'NICOP',
            value: '2'
        },
        {
            label: 'Passport',
            value: '2'
        }
    ]
    const fetchData = () => {
        console.log(data)
        let obj = { ...data }
        obj['isbioverifiedvalue'] = filterListName(yesNo, obj.isbioverified)
        obj['iscreditblockvalue'] = filterListName(yesNo, obj.iscreditblock)
        obj['isdebitblockvalue'] = filterListName(yesNo, obj.isdebitblock)
        obj['iskycverifiredvalue'] = filterListName(yesNo, obj.iskycverified)
        obj['isamlverifiedvalue'] = filterListName(yesNo, obj.isamlverified)
        obj['isnationalidverifiedvalue'] = filterListName(yesNo, obj.isnationalidverified)
        obj['riskName'] = filterName(riskFilter, obj.risk)
        obj['applanguageValue'] = filterName(applanguageFilter, obj.applanguage)
        obj['appthememode'] = filterListName(appthememode, obj.appthememode)
        obj['issmsnotify'] = filterListName(yesNo, obj.issmsnotify)
        obj['isappnotify'] = filterListName(yesNo, obj.isappnotify)
        obj['estatement'] = filterListName(trueFalse, obj.estatement)
        obj['isbiometriclogin'] = filterListName(trueFalse, obj.isbiometriclogin)
        obj['isnfc'] = filterListName(trueFalse, obj.isnfc)
        obj['cityname'] = filterName(cityFilter, obj.city)
        obj['countryname'] = filterName(countryFilter, obj.country)
        obj['districtname'] = filterName(districtFilter, obj.district)
        obj['statename'] = filterName(stateFilter, obj.state)
        obj['genderValue'] = filterName(genderFilter, obj?.gender);
        obj['nationalidtypevalue'] = filterListName(nationalID, obj.nationalidtype)
        setViewData(obj)
    }
    const viewFields = [
        'First Name',
        'Last Name',
        'Father Name',
        'Mother Name',
        'Mobile No',
        'Phone No',
        'National ID',
        'Address',
        'District',
        'City',
        'State',
        'Country',
        'On-Boarded On',
        'Last Updated On',
        'National ID Issue Date',
        'National ID Expiry Date',
        'Last Transaction Date',
        'Is Bio Verified',
        'Passport No',
        'Debit Block',
        'Credit Block',
        'KYC Verification Status',
        'AML Verification Status',
        'KYC Verification Date',
        'AML Verification Date',
        'BIO Verification Date',
        'National ID Verification Date',
        'National ID Verification Status',
        'Risk Score',
        'Gender',
        'Email ',
        'National ID Type',
    ]
    const verifyParam = [
        'firstname',
        'lastname',
        'fathername',
        'mothername',
        'mobileno',
        'phoneno',
        'nationalid',
        'address',
        'districtname',
        'cityname',
        'statename',
        'countryname',
        'onboarding',
        'lastupdate',
        'nationalidissuedate',
        'nationalidexpirydate',
        'lasttrandate',
        'isbioverifiedvalue',
        'passportno',
        'isdebitblockvalue',
        'iscreditblockvalue',
        'iskycverifiredvalue',
        'isamlverifiedvalue',
        'kycverificationdate',
        'amlverificationdate',
        'bioverificationdate',
        'nationidverificationdate',
        'isnationalidverifiedvalue',
        'riskName',
        'gendervalue',
        'emailid',
        'nationalidtypevalue',
    ]

    return <View viewFields={viewFields} viewData={viewData} verifyParam={verifyParam} />

}
export default ScrutinyLevelView;