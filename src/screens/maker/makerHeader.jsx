import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
// import './maker.scss'
import '../merchantScrutinyMakerLevel/merchantScrutinyMakerLevel.scss'
import MerchantJourneyView from '../merchantScrutinyMakerLevel/viewMerchantJourney';

const MakerHeader = ({ state, fbrATLStatus, fbrATLStatusLoading }) => {
    return <Box className='merchantScrutinyMakerLevelHeaderContainer'>
        {/* <Box>
            <Typography variant="body1" component="span"></Typography>
        </Box>
        <Typography variant="h3" className='title' component="span">{`Nadra Verisys For Verification`}</Typography>
        <Box className='type'>
            <MerchantJourneyView auditTrace={'NADRA Verisys'} state={state} />
        </Box> */}

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }} >
            <Typography variant="h3" className='title' component="span">{`Nadra Verisys For Verification`}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: 1, width: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                    <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'center', border: '1px solid #9855ff', padding: '5px', backgroundColor: fbrATLStatus == 'Non-Active' ? '#f23230' : fbrATLStatus == 'Active' ? '#77bc6c' : '', alignItems: 'center' }}>
                        <Typography color={fbrATLStatus ? '#fff' : '#000'} variant="h4" component="span">FBR ATL Status:</Typography>
                        {fbrATLStatusLoading ? <CircularProgress size={12} /> : <Typography color={fbrATLStatus ? '#fff' : '#000'} variant="h5" component="span">{fbrATLStatus ? fbrATLStatus : 'No Data Found'}</Typography>}
                    </Box>
                    <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'center', border: '1px solid #9855ff', padding: '5px' }}>
                        <Typography variant="h4" component="span">Is Manual SignUp:</Typography>
                        <Typography sx={{ color: state?.ismanualsignupentry == 1 ? 'red' : state?.ismanualsignupentry == 0 ? '#9855ff' : '' }} variant="h4" component="span">{state?.ismanualsignupentry == 1 ? 'Yes' : state?.ismanualsignupentry == 0 ? 'No' : ''}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'center', border: '1px solid #9855ff', padding: '5px' }}>
                        <Typography variant="h4" component="span">OCR Attempts:</Typography>
                        <Typography variant="h4" component="span">{state?.ocrattempts || ''}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'center', border: '1px solid #9855ff', padding: '5px' }}>
                        <Typography variant="h4" component="span">Liveliness Attempts:</Typography>
                        <Typography variant="h4" component="span">{state?.livelinessattempts || ''}</Typography>
                    </Box>
                </Box>
                <Box className='type'>
                    <MerchantJourneyView auditTrace={'NADRA Verisys'} state={state} />
                </Box>
            </Box>
        </Box>
    </Box>
}
export default MakerHeader;
