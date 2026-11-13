import React, { useEffect, useState } from 'react';
import View from '../../components/view';
import { filterName } from '../../utils/Utils';
import { useSelector } from 'react-redux';

const ECIBView = (props) => {
    const { data } = props
    const [viewData, setViewData] = useState({})

    const { cityFilter, countryFilter, stateFilter } = useSelector(state => state.filter)

    useEffect(() => {
        fetchData();
    }, []);
    console.log(data)

    const fetchData = async () => {
        data['statusValue'] = data?.status === '1' ? 'Active' : 'Inactive';
        data['cityValue'] = filterName(cityFilter, data.city);
        data['countryValue'] = filterName(countryFilter, data.country);
        data['stateValue'] = filterName(stateFilter, data.state);
        setViewData(data);
    };
    const viewFields = [
        'S.no',
        'CNIC no',
        'Individual or Sole Proprietor Name',
        "Father's / Husband name",
        'Present Address',
        'Permanent Address',
        'Business Address',
        'Date Of Birth',
        'Gender',
        'CNIC Expiry Date',
        'CNIC Issuance Date',
        'NTN'

    ]
    const verifyParam = [
        'S.no',
        'nationalid',
        'Individual or Sole Proprietor Name',
        "Father's / Husband name",
        'address',
        'address',
        'Business Address',
        'dateofbirth',
        'Gender',
        'nationalidexpirydate',
        'nationalidissuedate',
        'NTN'
    ]

    return <View viewFields={viewFields} viewData={viewData} verifyParam={verifyParam} />

}
export default ECIBView;