// import React, { useEffect, useRef, useState } from "react";
// import { Box, Button, CircularProgress, Divider, Grid, IconButton, Tooltip, Typography } from "@mui/material";
// import { IoMdClose } from "react-icons/io";
// import Card from "../card/Card";
// import { useDispatch } from "react-redux";
// import { consumersetimage, getconsumerphotos, getimage, setimage } from "../../store/actions/digitalIdentity";
// import uploadImage from '../../assests/upload_image.png'
// import './Upload.scss'
// import SetImageModal from "../imageModal/setImageModal";
// import ImageView from "../imageModal/imageModal";
// import { Link } from "react-router-dom";
// import { getbusinessphotosstaging } from "../../store/actions/merchants";

// const ImageViewCard = (props) => {
//     const { title, obj, uploadButtonLabel, iscrm, type } = props

//     const [isLoading, setIsLoading] = useState(false)
//     const [open, setOpen] = useState(false);
//     const [openUpload, setOpenUpload] = useState(false);
//     const [image, setImage] = useState('');
//     const dispatch = useDispatch();


//     useEffect(() => {
//         imageViewHandler()
//     }, [])

//     const imageViewHandler = () => {
//         setIsLoading(true)
//         if ('cid' in obj) {
//             dispatch(getconsumerphotos(obj)).then((res) => {
//                 if (res.payload?.responsecode == 0 && res.payload?.consumerKycRealCustomList?.length > 0) {
//                     setImage('data:image/png;base64,' + res.payload?.consumerKycRealCustomList[0]?.image)
//                 }
//                 setIsLoading(false)
//             });
//         }
//         if ('mid' in obj) {
//             if (type && type == 'merchantEDD') {
//                 console.log(obj)
//                 dispatch(getbusinessphotosstaging(obj)).then((res) => {
//                     if (res.payload?.responsecode == 0 && res.payload?.merchantKycCustomList?.length > 0) {
//                         setImage('data:image/png;base64,' + res.payload?.merchantKycCustomList[0].image)
//                     }
//                     setIsLoading(false)
//                 });
//             } else {
//                 // dispatch(getimage(obj)).then((res) => {
//                 //     if (res.payload?.responsecode == 0 && res.payload?.merchantKycCustomList.length > 0) {
//                 //         setImage('data:image/png;base64,' + res.payload.merchantKycCustomList[0].image)
//                 //     }
//                 //     setIsLoading(false)
//                 // });
//             }

//         }



//     }
//     const submitImage = (img) => {
//         setIsLoading(true)
//         let saveObj = {
//             ...obj,
//             "image": img
//         }
//         if ('cid' in obj) {
//             dispatch(consumersetimage(saveObj)).then((res) => {
//                 if (res.payload?.responsecode == 0) {
//                     setImage(saveObj.image.replace('data:image/png;base64,', ''))
//                     setOpenUpload(false)
//                 }
//                 setIsLoading(false)
//             });
//         }
//         if ('mid' in obj) {
//             dispatch(setimage(saveObj)).then((res) => {
//                 if (res.payload?.responsecode == 0) {
//                     setImage(saveObj.image.replace('data:image/png;base64,', ''))
//                     setOpenUpload(false)
//                 }
//                 setIsLoading(false)
//             });
//         }
//     }
//     return (
//         <>
//             {iscrm ? <Box style={{ height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: ' rgba(0, 0, 0, 2) 0px 1px 5px', padding: '10px 10px 0px', borderRadius: '10px' }}>
//                 {
//                     isLoading ? <Box className='tableLoadingContainer'>
//                         <CircularProgress color='secondary' size={50} sx={{ margin: '20px' }} />
//                     </Box> :
//                         <>
//                             <Box style={{ height: '200px', width: '100%', border: '1px solid rgb(145, 89, 255)', borderRadius: '5px', }}>
//                                 {image ? <img src={image} style={{ objectFit: 'cover', height: '100%', width: '100%' }} alt="ViewImage" onClick={() => setOpen(true)} /> : <Box style={{ height: '100%', width: '100%' }}></Box>}
//                             </Box>
//                             <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                 <Typography variant="h4" sx={{ alignItems: 'center' }}>{title}</Typography>
//                             </Box>
//                         </>
//                 }
//                 <Typography onClick={uploadButtonLabel?.includes('Upload') ? () => { setOpenUpload(true) } : null}>{uploadButtonLabel}</Typography>
//                 {open && <ImageView setOpen={setOpen} isLoading={isLoading} title={title} image={image} />}
//                 {openUpload && <SetImageModal title={title} setOpen={setOpenUpload} isLoading={isLoading} submitImage={submitImage} />}
//             </Box>
//                 : <Box sx={{ height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     {
//                         isLoading ? <Box className='tableLoadingContainer'>
//                             <CircularProgress color='secondary' size={50} sx={{ margin: '20px' }} />
//                         </Box> :
//                             <Box style={{ height: '80px', width: '100%', border: '2px solid rgb(145, 89, 255)', }}>
//                                 {image ? <img src={image} style={{ objectFit: 'contain', height: '100%', width: '100%' }} alt="ViewImage" onClick={() => setOpen(true)} /> : <Box style={{ height: '100%', width: '100%' }}></Box>}

//                             </Box>
//                     }
//                     <Typography onClick={uploadButtonLabel?.includes('Upload') ? () => { setOpenUpload(true) } : null}>{uploadButtonLabel}</Typography>
//                     {open && <ImageView setOpen={setOpen} isLoading={isLoading} title={title} image={image} />}
//                     {openUpload && <SetImageModal title={title} setOpen={setOpenUpload} isLoading={isLoading} submitImage={submitImage} />}
//                 </Box>}
//         </>
//     )
// };

// export default ImageViewCard;


// import React, { useEffect, useRef, useState } from "react";
// import { Box, Button, CircularProgress, Divider, Grid, IconButton, Tooltip, Typography } from "@mui/material";
// import { IoMdClose } from "react-icons/io";
// import Card from "../card/Card";
// import { useDispatch } from "react-redux";
// import { consumersetimage, getconsumerphotos, getimage, setimage } from "../../store/actions/digitalIdentity";
// import uploadImage from '../../assests/upload_image.png'
// import './Upload.scss'
// import SetImageModal from "../imageModal/setImageModal";
// import ImageView from "../imageModal/imageModal";
// import { Link } from "react-router-dom";
// import { getbusinessphotosstaging } from "../../store/actions/merchants";

// const ImageViewCard = (props) => {
//     const { title, obj, uploadButtonLabel, iscrm, type } = props

//     const [isLoading, setIsLoading] = useState(false)
//     const [open, setOpen] = useState(false);
//     const [openUpload, setOpenUpload] = useState(false);
//     const [image, setImage] = useState('');
//     const dispatch = useDispatch();


//     useEffect(() => {
//         imageViewHandler()
//     }, [])

//     const imageViewHandler = () => {
//         setIsLoading(true)
//         if ('cid' in obj) {
//             dispatch(getconsumerphotos(obj)).then((res) => {
//                 if (res.payload?.responsecode == 0 && res.payload?.consumerKycRealCustomList?.length > 0) {
//                     setImage('data:image/png;base64,' + res.payload?.consumerKycRealCustomList[0]?.image)
//                 }
//                 setIsLoading(false)
//             });
//         }
//         if ('mid' in obj) {
//             if (type && type == 'merchantEDD') {
//                 console.log(obj)
//                 dispatch(getbusinessphotosstaging(obj)).then((res) => {
//                     if (res.payload?.responsecode == 0 && res.payload?.merchantKycCustomList?.length > 0) {
//                         setImage('data:image/png;base64,' + res.payload?.merchantKycCustomList[0].image)
//                     }
//                     setIsLoading(false)
//                 });
//             } else {
//                 // dispatch(getimage(obj)).then((res) => {
//                 //     if (res.payload?.responsecode == 0 && res.payload?.merchantKycCustomList.length > 0) {
//                 //         setImage('data:image/png;base64,' + res.payload.merchantKycCustomList[0].image)
//                 //     }
//                 //     setIsLoading(false)
//                 // });
//             }

//         }



//     }
//     const submitImage = (img) => {
//         setIsLoading(true)
//         let saveObj = {
//             ...obj,
//             "image": img
//         }
//         if ('cid' in obj) {
//             dispatch(consumersetimage(saveObj)).then((res) => {
//                 if (res.payload?.responsecode == 0) {
//                     setImage(saveObj.image.replace('data:image/png;base64,', ''))
//                     setOpenUpload(false)
//                 }
//                 setIsLoading(false)
//             });
//         }
//         if ('mid' in obj) {
//             dispatch(setimage(saveObj)).then((res) => {
//                 if (res.payload?.responsecode == 0) {
//                     setImage(saveObj.image.replace('data:image/png;base64,', ''))
//                     setOpenUpload(false)
//                 }
//                 setIsLoading(false)
//             });
//         }
//     }
//     return (
//         <>
//             {iscrm ? <Box style={{ height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: ' rgba(0, 0, 0, 2) 0px 1px 5px', padding: '10px 10px 0px', borderRadius: '10px' }}>
//                 {
//                     isLoading ? <Box className='tableLoadingContainer'>
//                         <CircularProgress color='secondary' size={50} sx={{ margin: '20px' }} />
//                     </Box> :
//                         <>
//                             <Box style={{ height: '200px', width: '100%', border: '1px solid rgb(145, 89, 255)', borderRadius: '5px', }}>
//                                 {image ? <img src={image} style={{ objectFit: 'cover', height: '100%', width: '100%' }} alt="ViewImage" onClick={() => setOpen(true)} /> : <Box style={{ height: '100%', width: '100%' }}></Box>}
//                             </Box>
//                             <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                                 <Typography variant="h4" sx={{ alignItems: 'center' }}>{title}</Typography>
//                             </Box>
//                         </>
//                 }
//                 <Typography onClick={uploadButtonLabel?.includes('Upload') ? () => { setOpenUpload(true) } : null}>{uploadButtonLabel}</Typography>
//                 {open && <ImageView setOpen={setOpen} isLoading={isLoading} title={title} image={image} />}
//                 {openUpload && <SetImageModal title={title} setOpen={setOpenUpload} isLoading={isLoading} submitImage={submitImage} />}
//             </Box>
//                 : <Box sx={{ height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     {
//                         isLoading ? <Box className='tableLoadingContainer'>
//                             <CircularProgress color='secondary' size={50} sx={{ margin: '20px' }} />
//                         </Box> :
//                             <Box style={{ height: '80px', width: '100%', border: '2px solid rgb(145, 89, 255)', }}>
//                                 {image ? <img src={image} style={{ objectFit: 'contain', height: '100%', width: '100%' }} alt="ViewImage" onClick={() => setOpen(true)} /> : <Box style={{ height: '100%', width: '100%' }}></Box>}

//                             </Box>
//                     }
//                     <Typography onClick={uploadButtonLabel?.includes('Upload') ? () => { setOpenUpload(true) } : null}>{uploadButtonLabel}</Typography>
//                     {open && <ImageView setOpen={setOpen} isLoading={isLoading} title={title} image={image} />}
//                     {openUpload && <SetImageModal title={title} setOpen={setOpenUpload} isLoading={isLoading} submitImage={submitImage} />}
//                 </Box>}
//         </>
//     )
// };

// export default ImageViewCard;



import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {
    consumersetimage,
    getconsumerphotos,
    setimage
} from "../../store/actions/digitalIdentity";

import { getbusinessphotosstaging } from "../../store/actions/merchants";
import ImageView from "../imageModal/imageModal";
import SetImageModal from "../imageModal/setImageModal";
import { base64ToBlob, base64ToBlobFile } from "../../utils/Utils";

const ImageViewCard = (props) => {
    const { title, obj, isActive, onLoaded, type } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [openUpload, setOpenUpload] = useState(false);
    const [image, setImage] = useState("");

    const dispatch = useDispatch();

    // 🔥 IMPORTANT: sequential trigger
    useEffect(() => {
        if (!isActive) return;

        loadImage().then(() => {
            onLoaded?.();
        });
    }, [isActive]);

    // -------------------------------
    // LOAD IMAGE (FIXED async flow)
    // -------------------------------
    const loadImage = async () => {
        setIsLoading(true);

        try {
            let res;

            if ("cid" in obj) {
                res = await dispatch(getconsumerphotos(obj));

                if (
                    res.payload?.responsecode === 0 &&
                    res.payload?.consumerKycRealCustomList?.length > 0
                ) {
                    setImage(
                        "data:image/png;base64," +
                        res.payload.consumerKycRealCustomList[0].image
                    );
                }
            }

            if ("mid" in obj) {
                res = await dispatch(getbusinessphotosstaging(obj));

                if (
                    res.payload?.responsecode === 0 &&
                    res.payload?.merchantKycCustomList?.length > 0
                ) {
                    setImage(
                        "data:image/png;base64," +
                        res.payload.merchantKycCustomList[0].image
                    );
                }
            }
        } finally {
            setIsLoading(false);
        }
    };

    // -------------------------------
    // UPLOAD IMAGE
    // -------------------------------
    const submitImage = async (img) => {
        setIsLoading(true);

        try {
            const saveObj = {
                ...obj,
                image: img
            };

            let res;

            if ("cid" in obj) {
                res = await dispatch(consumersetimage(saveObj));
            }

            if ("mid" in obj) {
                res = await dispatch(setimage(saveObj));
            }

            if (res?.payload?.responsecode === 0) {
                setImage(img); // already base64
                setOpenUpload(false);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const [url, setUrl] = useState('');
    const getImageURL = async () => {
        const url = await base64ToBlob(image)
        setUrl(url)
    }
    useEffect(() => {
        if (image) {
            getImageURL();
        }
    }, [image])

    return (
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

            {/* IMAGE BOX */}
            <Box
                style={{
                    height: "80px",
                    width: "100%",
                    border: "2px solid rgb(145, 89, 255)",
                    display: "flex", flexDirection: "column", alignItems: "center"
                }}
            >
                {isLoading ? (
                    <Box sx={{ display: 'flex', flex: 1, alignItems: "center" }}>
                        <CircularProgress color="secondary" size={40} />
                    </Box>
                ) : image ? (
                    <img
                        src={url}
                        style={{
                            objectFit: "contain",
                            height: "100%",
                            width: "100%",
                            cursor: "pointer"
                        }}
                        alt="View"
                        onClick={() => setOpen(true)}
                    />
                ) : (
                    <Box style={{ height: "100%", width: "100%" }} />
                )}
            </Box>

            {/* TITLE */}
            {/* <Typography sx={{ mt: 1 }}>{title}</Typography> */}

            {/* UPLOAD */}
            {/* <Typography
        sx={{ cursor: "pointer", color: "primary.main" }}
        onClick={() => setOpenUpload(true)}
      >
        Upload
      </Typography> */}

            {/* MODALS */}
            {open && (
                <ImageView
                    setOpen={setOpen}
                    isLoading={isLoading}
                    title={title}
                    image={image}
                />
            )}

            {openUpload && (
                <SetImageModal
                    title={title}
                    setOpen={setOpenUpload}
                    isLoading={isLoading}
                    submitImage={submitImage}
                />
            )}
        </Box>
    );
};

export default ImageViewCard;