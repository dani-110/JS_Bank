// import React, { useState } from "react";
// import { Box, CircularProgress, IconButton, Tooltip, Typography } from "@mui/material";
// import { useRef } from "react";
// import moment from "moment";
// import keenuLogo from '../../assests/keenuLogo.png'
// import accountmaintenancecertificate from '../../assests/accountmaintenancecertificate.png'
// import html2pdf from "html2pdf.js";
// import { LuGlobe, LuMail, LuSmartphone } from "react-icons/lu";
// import './consumerProfileExport.scss'
// import { base64ToBlob, dateFormat } from "../../utils/Utils";
// import { consumergetimage } from "../../store/actions/digitalIdentity";
// import { useDispatch } from "react-redux";

// const ConsumerProfileExport = (props) => {
//     const { data } = props
//     const pdfRef = useRef()
//     const [isLoading, setIsLoading] = useState(false);
//     console.log(data)
//     const [image, setImage] = useState('');
//     const dispatch = useDispatch();

//     const [cnicFrontImage, setCnicFrontImage] = useState('');
//     const [cnicBackImage, setCnicBackImage] = useState('');
//     const [livePhotoImage, setLivePhotoImage] = useState('');

//     const fetchImage = (imageid) => {
//         const obj = {
//             "cid": data?.cid,
//             "imageid": imageid
//         }
//         return dispatch(consumergetimage(obj)).then((res) => {
//             if (res.payload?.responsecode == 0 && res.payload?.consumerKycRealCustomList?.length > 0) {
//                 return 'data:image/png;base64,' + res.payload?.consumerKycRealCustomList[0]?.image;
//             }
//             return '';
//         });
//     }


//     const downloadPDF = async () => {
//         setIsLoading(true)
//         try {
//             // Teeno APIs ek sath chalao, aur teeno complete hone tak wait karo
//             const [frontImg, backImg, liveImg] = await Promise.all([
//                 await fetchImage(1),
//                 await fetchImage(2),
//                 await fetchImage(6),
//             ]);


//             setCnicFrontImage(frontImg);
//             setCnicBackImage(backImg);
//             setLivePhotoImage(liveImg);
//             console.log('heer')
//             setTimeout(() => {
//                 setIsLoading(false)
//                 if (!pdfRef.current) return;
//                 pdfRef.current.style.position = 'static';
//                 pdfRef.current.style.left = '0';
//                 pdfRef.current.style.top = '0';
//                 pdfRef.current.style.visibility = 'visible';

//                 html2pdf().set({
//                     margin: 0,
//                     filename: `${data?.fullname}_${data?.mobileno}.pdf`,
//                     image: { type: "jpeg", quality: 0.98 },
//                     html2canvas: { scale: 2, backgroundColor: "#ffffff" },
//                     jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
//                     pagebreak: {
//                         mode: ['css', 'legacy']
//                     }
//                 }).from(pdfRef.current).save().finally(() => {
//                     // pdfRef.current.style.position = 'absolute';
//                     // pdfRef.current.style.left = '-9999px';
//                     // pdfRef.current.style.top = '-9999px';
//                     // pdfRef.current.style.visibility = 'hidden';
//                 });
//             }, 2000)
//         } catch (err) {
//             console.error('Error fetching images:', err);
//             setIsLoading(false);
//         }
//     };

//     return <Box sx={{ position: 'relative' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             {isLoading && (
//                 <CircularProgress size={20} sx={{ marginRight: 1, color: "#747171" }} />
//             )}<Tooltip title={'Export Consumer Profile'}>
//                 <IconButton onClick={downloadPDF} disabled={isLoading}>
//                     <img src={accountmaintenancecertificate} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
//                 </IconButton>
//             </Tooltip>
//         </Box>
//         <div >
//         {/* <div style={{ position: 'fixed', left: '-10000px', top: '-10000px', width: '200mm', height: 'auto', overflow: 'hidden' }}> */}
//             <Box ref={pdfRef}
//                 sx={{
//                     height: '296mm',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between',
//                     padding: '15mm 10mm',
//                     boxSizing: 'border-box',
//                     background: '#fff',
//                 }}>
//                 <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', }}>
//                     <img src={keenuLogo} style={{ width: '45mm', height: 'auto', objectFit: 'contain', display: 'flex', justifyContent: 'left', marginBottom: '20px' }} />

//                     <Typography variant="h3" sx={{ textAlign: 'center', margin: '20px 0px' }} >Profile Summary</Typography>
//                     <Box sx={{ padding: '10px', display: 'flex', flex: 1, flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
//                         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//                             <Typography variant="h3" >{data?.fullname}</Typography>
//                             <TypographyContainer style={{ marginBottom: '5mm', fontWeight: '400' }} >{`Account # ${data?.accountno}`}</TypographyContainer>
//                         </Box>
//                         <Box sx={{ display: 'flex', flex: 1, width: '100%', gap: '20px' }}>
//                             <Box sx={{ display: 'flex', flex: 2, flexDirection: 'column', gap: '20px' }}>
//                                 <Box className='detailContainer' sx={{ padding: '10px', flex: 1 }}>
//                                     <Typography variant="h5" className='detailTitle' >{`Personal Information`}</Typography>

//                                     <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
//                                         <TypographyContainer>Father Name:{" "}<span className="bold-value">{data?.fathername || ''}</span></TypographyContainer>
//                                         <TypographyContainer>Email:{" "}<span className="bold-value">{data?.emailid || ''}</span></TypographyContainer>
//                                     </Box>
//                                     <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
//                                         <TypographyContainer>Mobile No:{" "}<span className="bold-value">{data?.mobileno || ''}</span></TypographyContainer>
//                                         <TypographyContainer>Gender:{" "}<span className="bold-value">{data?.genderValue || ''}</span></TypographyContainer>
//                                     </Box>
//                                 </Box>
//                                 <Box className='detailContainer' sx={{ padding: '10px', flex: 2, flexDirection: 'column' }}>
//                                     <Typography variant="h5" className='detailTitle' >{`Address Detail`}</Typography>


//                                     <Box sx={{ display: 'flex', flex: 1 }}>
//                                         <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
//                                             <TypographyContainer>City:{" "}<span className="bold-value">{data?.cityValue || ''}</span></TypographyContainer>
//                                             <TypographyContainer>District:{" "}<span className="bold-value">{data?.districtname || ''}</span></TypographyContainer>
//                                         </Box>
//                                         <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
//                                             <TypographyContainer>State:{" "}<span className="bold-value">{data?.statename || ''}</span></TypographyContainer>
//                                             <TypographyContainer>Country:{" "}<span className="bold-value">{data?.countryname || ''}</span></TypographyContainer>
//                                         </Box>
//                                     </Box>
//                                     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px' }}>
//                                         <TypographyContainer>{`Permanent Address:`}</TypographyContainer>
//                                         <Typography className="bold-value">{data?.permanentaddress || ''}</Typography>
//                                     </Box>
//                                     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px' }}>
//                                         <TypographyContainer>{`Present Address:`}</TypographyContainer>
//                                         <Typography className="bold-value">{data?.address || ''}</Typography>
//                                     </Box>
//                                 </Box>
//                             </Box>
//                             <Box className='detailContainer' sx={{ flex: 1 }}>
//                                 {livePhotoImage ? <img src={base64ToBlob(livePhotoImage)} className="imgContainer" alt="ViewImage" /> : <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                     <Typography variant="h5">Profile Picture/Selfie</Typography>
//                                 </Box>}
//                             </Box>
//                         </Box>
//                         <Box className='detailContainer' sx={{ display: 'flex', flex: 1, border: '1px solid', width: '100%', flexDirection: 'column', padding: '10px', gap: '20px' }}>
//                             <Typography variant="h5" className='detailTitle' >{`Identity Detail`}</Typography>

//                             <Box sx={{ display: 'flex', flex: 1, width: '100%', gap: '20px' }}>
//                                 <Box className='detailContainer' sx={{ flex: 1 }}>
//                                     {cnicFrontImage ? <img src={base64ToBlob(cnicFrontImage)} className="imgContainer" alt="ViewImage" /> : <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                         <Typography variant="h5">CNIC Front</Typography>
//                                     </Box>}
//                                 </Box>
//                                 <Box className='detailContainer' sx={{ flex: 1 }}>
//                                     {cnicBackImage ? <img src={base64ToBlob(cnicBackImage)} className="imgContainer" alt="ViewImage" /> : <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                         <Typography variant="h5">CNIC Back</Typography>
//                                     </Box>}
//                                 </Box>
//                             </Box>
//                             <Box sx={{ display: 'flex', flex: 1, width: '100%' }}>
//                                 <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
//                                     <TypographyContainer>CNIC #:{" "}<span className="bold-value">{data?.nationalid || ''}</span></TypographyContainer>
//                                     <TypographyContainer>CNIC Issuance:{" "}<span className="bold-value">{data?.nationalidissuedateValue || ''}</span></TypographyContainer>
//                                     <TypographyContainer>Mother Name:{" "}<span className="bold-value">{data?.mothername || ''}</span></TypographyContainer>
//                                     <TypographyContainer>Is ID Lifetime:{" "}<span className="bold-value">{data?.isidlifetimeValue || ''}</span></TypographyContainer>
//                                 </Box>
//                                 <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
//                                     <TypographyContainer>Date of Birth:{" "}<span className="bold-value">{data?.dateofbirthValue || ''}</span></TypographyContainer>
//                                     <TypographyContainer>CNIC Expiry:{" "}<span className="bold-value">{data?.nationalidexpirydateValue || ''}</span></TypographyContainer>
//                                     <TypographyContainer>Place of Birth:{" "}<span className="bold-value">{data?.placeofbirth || ''}</span></TypographyContainer>
//                                 </Box>
//                                 <Box sx={{ display: 'flex', flex: 1, }}></Box>
//                             </Box>
//                         </Box>
//                         {/* <TypographyContainer style={{ marginBottom: '10mm' }}>This is to certify that{" "}<span className="bold-value">{data?.fullname || ''}</span>, holding CNIC No.{" "}<span className="bold-value">{data?.nationalid || ''}</span>, is maintaining a wallet as {" "}<span className="bold-value">Consumer</span> with Wemsol Private Limited (Keenu) under the following particulars:</TypographyContainer>
//                         <TypographyContainer>Wallet Number:{" "}<span className="bold-value">{data?.mobileno || ''}</span></TypographyContainer>
//                         <TypographyContainer>IBAN:{" "}<span className="bold-value">{data?.walletiban}</span></TypographyContainer>
//                         <TypographyContainer>Date of Account Opening:{" "}<span className="bold-value">{dateFormat(data?.onboarding) || ''}</span></TypographyContainer>
//                         <TypographyContainer style={{ marginTop: '10mm' }}>This certificate is issued at the specific request of our customer and is provided without any risk, obligation, or liability on the part of Wemsol Private Limited (Keenu), its authorized signatories, or employees.</TypographyContainer>
//                         <TypographyContainer style={{ marginTop: '10mm' }}>*This is a system generated letter and does not require any signature. Wemsol has completed all the requirements of the KYC / Due diligence of Customer as per the State Bank of Pakistan(SBP) Directives.</TypographyContainer> */}
//                     </Box>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'center', }}>
//                     <Box sx={{ width: '95%' }}>
//                         <TypographyContainer style={{ textAlign: 'center' }}>Keenu is the payment brand of Wemsol Private Limited registered in Pakistan (https://www.keenu.pk).<br />It is regulated by the State Bank of Pakistan under the Regulations for Electronic Money Institution.</TypographyContainer>
//                         <Box sx={{ display: 'flex', marginTop: '10px', th: '80%' }}>
//                             <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
//                                 <LuSmartphone size='22px' color="rgb(94, 53, 177)" />
//                                 <TypographyContainer>(021) 111-153-368</TypographyContainer>
//                             </Box>
//                             <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
//                                 <LuGlobe size='22px' color="rgb(94, 53, 177)" />
//                                 <TypographyContainer>www.keenu.pk</TypographyContainer></Box>
//                             <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
//                                 <LuMail size='22px' color="rgb(94, 53, 177)" />
//                                 <TypographyContainer>help@keenu.pk</TypographyContainer>
//                             </Box>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>
//         </div >
//     </Box >
// };


// export default ConsumerProfileExport;


// const TypographyContainer = ({ children, style }) => {

//     return <Typography
//         variant="body1"
//         sx={{
//             //     whiteSpace: 'normal',
//             //     overflowWrap: 'break-word',
//             //     wordBreak: 'break-word',
//             //     textAlign: 'left',
//             //     fontSize: '10pt',
//             fontWeight: '700',
//             //     lineHeight: 1.35,
//             ...style
//         }}
//     >
//         {children}
//     </Typography>

// }


import React, { useState } from "react";
import { Box, CircularProgress, IconButton, Tooltip, Typography } from "@mui/material";
import { useRef } from "react";
import keenuLogo from '../../assests/keenuLogo.png'
import exportconsumerprofile from '../../assests/exportconsumerprofile.png'
import html2pdf from "html2pdf.js";
import { LuGlobe, LuMail, LuSmartphone } from "react-icons/lu";
import './consumerProfileExport.scss'
import { base64ToBlob } from "../../utils/Utils";
import { consumergetimage } from "../../store/actions/digitalIdentity";
import { useDispatch } from "react-redux";

const ConsumerProfileExport = (props) => {
    const { data } = props
    const pdfRef = useRef()
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const [cnicFrontImage, setCnicFrontImage] = useState('');
    const [cnicBackImage, setCnicBackImage] = useState('');
    const [livePhotoImage, setLivePhotoImage] = useState('');

    const fetchImage = (imageid) => {
        const obj = {
            "cid": data?.cid,
            "imageid": imageid
        }
        return dispatch(consumergetimage(obj)).then((res) => {
            if (res.payload?.responsecode == 0 && res.payload?.consumerKycRealCustomList?.length > 0) {
                return 'data:image/png;base64,' + res.payload?.consumerKycRealCustomList[0]?.image;
            }
            return '';
        });
    }


    const downloadPDF = async () => {
        setIsLoading(true)
        try {

            const [frontImg, backImg, liveImg] = await Promise.all([
                await fetchImage(1),
                await fetchImage(2),
                await fetchImage(6),
            ]);

            setCnicFrontImage(frontImg ? await base64ToBlob(frontImg) : '');
            setCnicBackImage(backImg ? await base64ToBlob(backImg) : '');
            setLivePhotoImage(liveImg ? await base64ToBlob(liveImg) : '');
            setTimeout(() => {
                setIsLoading(false)
                if (!pdfRef.current) return;
                pdfRef.current.style.position = 'static';
                pdfRef.current.style.left = '0';
                pdfRef.current.style.top = '0';
                pdfRef.current.style.visibility = 'visible';

                html2pdf().set({
                    margin: 0,
                    filename: `${data?.fullname}_${data?.mobileno}.pdf`,
                    image: { type: "jpeg", quality: 0.98 },
                    html2canvas: { scale: 2, backgroundColor: "#ffffff" },
                    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
                    pagebreak: {
                        mode: ['css', 'legacy']
                    }
                }).from(pdfRef.current).save().finally(() => {
                    pdfRef.current.style.position = 'absolute';
                    pdfRef.current.style.left = '-9999px';
                    pdfRef.current.style.top = '-9999px';
                    pdfRef.current.style.visibility = 'hidden';
                });
            }, 2000)
        } catch (err) {
            console.error('Error fetching images:', err);
            setIsLoading(false);
        }
    };

    return <Box sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isLoading && (
                <CircularProgress size={20} sx={{ marginRight: 1, color: "#747171" }} />
            )}<Tooltip title={'Export Consumer Profile'}>
                <IconButton onClick={downloadPDF} disabled={isLoading}>
                    <img src={exportconsumerprofile} style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
                </IconButton>
            </Tooltip>
        </Box>
        <div style={{ position: 'fixed', left: '-10000px', top: '-10000px', width: '200mm', height: 'auto', overflow: 'hidden' }}>

            <Box ref={pdfRef}
                sx={{
                    height: '296mm',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '15mm 10mm',
                    boxSizing: 'border-box',
                    background: '#fff',
                }}>
                <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', }}>
                    <img src={keenuLogo} style={{ width: '45mm', height: 'auto', objectFit: 'contain', display: 'flex', justifyContent: 'left', marginBottom: '20px' }} />

                    <Typography variant="h3" sx={{ textAlign: 'center', }} >Profile Summary</Typography>
                    <Box sx={{ padding: '10px', display: 'flex', flex: 1, flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="h3" >{data?.fullname}</Typography>
                            <TypographyContainer style={{ marginBottom: '5mm', fontWeight: '400' }} label={'Account #'} value={data?.accountno} />
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1, width: '100%', gap: '20px' }}>
                            <Box sx={{ display: 'flex', flex: 2, flexDirection: 'column', gap: '20px' }}>
                                <Box className='detailContainer' sx={{ padding: '10px', flex: 1 }}>
                                    <Typography variant="h5" className='detailTitle' >{`Personal Information`}</Typography>

                                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                                        <TypographyContainer label={'Father Name:'} value={data?.fathername} />
                                        <TypographyContainer label={'Email:'} value={data?.emailid} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                                        <TypographyContainer label={'Mobile No:'} value={data?.mobileno} />
                                        <TypographyContainer label={'Gender:'} value={data?.genderValue} />
                                    </Box>
                                </Box>
                                <Box className='detailContainer' sx={{ padding: '10px', flex: 2, flexDirection: 'column' }}>
                                    <Typography variant="h5" className='detailTitle' >{`Address Detail`}</Typography>


                                    <Box sx={{ display: 'flex', flex: 1 }}>
                                        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                                            <TypographyContainer label={'City:'} value={data?.cityValue} />
                                            <TypographyContainer label={'District:'} value={data?.districtname} />
                                        </Box>
                                        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                                            <TypographyContainer label={'State:'} value={data?.statename} />
                                            <TypographyContainer label={'Country:'} value={data?.countryname} />
                                        </Box>

                                    </Box>
                                    <TypographyContainer style={{ flexDirection: 'column' }} label={'Permanent Address:'} value={data?.permanentaddress} />
                                    <TypographyContainer style={{ flexDirection: 'column' }} label={'Present Address:'} value={data?.address} />
                                </Box>
                            </Box>
                            <Box className='detailContainer' sx={{ flex: 1, display: 'flex' }}>
                                {livePhotoImage ? <img src={livePhotoImage} className="imgContainer" alt="ViewImage" /> : <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant="h5">Profile Picture/Selfie</Typography>
                                </Box>}
                            </Box>
                        </Box>
                        <Box className='detailContainer' sx={{ display: 'flex', flex: 1, border: '1px solid', width: '100%' }}>
                            <Typography variant="h5" className='detailTitle' >{`Identity Detail`}</Typography>
                            <Box sx={{ display: 'flex', flex: 1, margin: '10px', flexDirection: 'column', gap: '20px' }}>
                                <Box sx={{ display: 'flex', flex: 1, width: '100%', gap: '20px' }}>
                                    <Box className='detailContainer' sx={{ flex: 1 }}>
                                        {cnicFrontImage ? <img src={cnicFrontImage} className="imgContainer" alt="ViewImage" /> : <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant="h5">CNIC Front</Typography>
                                        </Box>}
                                    </Box>
                                    <Box className='detailContainer' sx={{ flex: 1 }}>
                                        {cnicBackImage ? <img src={cnicBackImage} className="imgContainer" alt="ViewImage" /> : <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant="h5">CNIC Back</Typography>
                                        </Box>}
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', flex: 1, width: '100%', gap: '20px' }}>
                                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
                                        <TypographyContainer label={'CNIC #:'} value={data?.nationalid} />
                                        <TypographyContainer label={'CNIC Issuance:'} value={data?.nationalidissuedateValue} />
                                        <TypographyContainer label={'Mother Name:'} value={data?.mothername} />
                                        <TypographyContainer label={'Is ID Lifetime:'} value={data?.isidlifetimeValue} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
                                        <TypographyContainer label={'Date of Birth:'} value={data?.dateofbirthValue} />
                                        <TypographyContainer label={'CNIC Expiry:'} value={data?.nationalidexpirydateValue} />
                                        <TypographyContainer label={'Place of Birth:'} value={data?.placeofbirth} />
                                    </Box>
                                    {/* <Box sx={{ display: 'flex', flex: 1, }}></Box> */}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                    <Box sx={{ width: '95%' }}>
                        <Typography variant="body1">Keenu is the payment brand of Wemsol Private Limited registered in Pakistan (https://www.keenu.pk).</Typography>
                        <Typography variant="body1">It is regulated by the State Bank of Pakistan under the Regulations for Electronic Money Institution.</Typography>
                        <Box sx={{ display: 'flex', marginTop: '10px', th: '80%' }}>
                            <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                <LuSmartphone size='22px' color="rgb(94, 53, 177)" />
                                <Typography variant="body1">(021) 111-153-368</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                <LuGlobe size='22px' color="rgb(94, 53, 177)" />
                                <Typography variant="body1">www.keenu.pk</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                <LuMail size='22px' color="rgb(94, 53, 177)" />
                                <Typography variant="body1">help@keenu.pk</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div >
    </Box >
};


export default ConsumerProfileExport;


const TypographyContainer = ({ style, label, value }) => {

    return <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '5px', ...style }}>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>{label}</Typography>
        {value && <Typography className="bold-value">{value || ''}</Typography>}
    </Box>

}

