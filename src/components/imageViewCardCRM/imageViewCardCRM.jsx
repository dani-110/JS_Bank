import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Button, CircularProgress, Divider, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { consumergetimage, consumersetimage, getimage, setimage } from "../../store/actions/digitalIdentity";
import './Upload.scss'
import SetImageModal from "../imageModal/setImageModal";
import ImageView from "../imageModal/imageModal";
import { BreadCrumSelectorContext } from "../../store/context/breadCrumSelector";
import { base64ToBlob } from "../../utils/Utils";

const ImageViewCardCRM = (props) => {
    const { title, obj, uploadButtonLabel, iscrm } = props

    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const [openUpload, setOpenUpload] = useState(false);
    const [image, setImage] = useState('');
    const dispatch = useDispatch();
    const breadCrumCtxt = useContext(BreadCrumSelectorContext);


    useEffect(() => {
        imageViewHandler()
    }, [])

    const imageViewHandler = () => {
        setIsLoading(true)
        if ('cid' in obj) {
            // obj["audittrace"] = breadCrumCtxt.breadCrumSelector.join('|') + `|${title}`
            dispatch(consumergetimage(obj)).then((res) => {
                console.log(res.payload?.consumerKycRealCustomList)
                if (res.payload?.responsecode == 0 && res.payload?.consumerKycRealCustomList?.length > 0) {
                    setImage('data:image/png;base64,' + res.payload?.consumerKycRealCustomList[0]?.image)
                }
                setIsLoading(false)
            });
        }
        if ('mid' in obj) {
            obj["audittrace"] = breadCrumCtxt.breadCrumSelector.join('|') + `|${title}`
            dispatch(getimage(obj)).then((res) => {
                console.log(res.payload)
                if (res.payload?.responsecode == 0 && res.payload?.merchantKycCustomList?.length > 0) {
                    setImage('data:image/png;base64,' + res.payload?.merchantKycCustomList[0]?.image)
                    // setMerchantImage('data:image/png;base64,' + res.payload?.merchantKycCustomList[0]?.image)
                }
                setIsLoading(false)
            });
        }



    }
    const submitImage = (img) => {
        setIsLoading(true)
        let saveObj = {
            ...obj,
            "image": img
        }
        if ('cid' in obj) {
            dispatch(consumersetimage(saveObj)).then((res) => {
                if (res.payload?.responsecode == 0) {
                    setImage(saveObj.image.replace('data:image/png;base64,', ''))
                    setOpenUpload(false)
                }
                setIsLoading(false)
            });
        }
        if ('mid' in obj) {

            dispatch(setimage(saveObj)).then((res) => {
                if (res.payload?.responsecode == 0) {
                    setImage(saveObj.image.replace('data:image/png;base64,', ''))
                    setOpenUpload(false)
                }
                setIsLoading(false)
            });
        }
    }

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
        <>
            {'cid' in obj && <Box style={{ height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: ' rgba(0, 0, 0, 2) 0px 1px 5px', padding: '10px 10px 0px', borderRadius: '10px' }}>
                {
                    isLoading ? <Box className='tableLoadingContainer'>
                        <CircularProgress color='secondary' size={50} sx={{ margin: '20px' }} />
                    </Box> :
                        <>
                            <Box style={{ height: '200px', width: '100%', border: '1px solid rgb(145, 89, 255)', borderRadius: '5px', }}>
                                {image ? <img src={url} style={{ objectFit: 'cover', height: '100%', width: '100%' }} alt="ViewImage" onClick={() => setOpen(true)} /> : <Box style={{ height: '100%', width: '100%' }}></Box>}
                            </Box>
                            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography variant="h4" sx={{ alignItems: 'center' }}>{title}</Typography>
                            </Box>
                        </>
                }
                <Typography onClick={uploadButtonLabel?.includes('Upload') ? () => { setOpenUpload(true) } : null}>{uploadButtonLabel}</Typography>
                {open && <ImageView setOpen={setOpen} isLoading={isLoading} title={title} image={image} />}
                {openUpload && <SetImageModal title={title} setOpen={setOpenUpload} isLoading={isLoading} submitImage={submitImage} />}
            </Box>}
            {'mid' in obj && image &&
                <Grid item xs={4}>
                    <Box style={{ height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: ' rgba(0, 0, 0, 2) 0px 1px 5px', padding: '10px 10px 0px', borderRadius: '10px' }}>
                        {
                            isLoading ? <Box className='tableLoadingContainer'>
                                <CircularProgress color='secondary' size={50} sx={{ margin: '20px' }} />
                            </Box> :
                                <>
                                    <Box style={{ height: '200px', width: '100%', border: '1px solid rgb(145, 89, 255)', borderRadius: '5px', }}>
                                        {image ? <img src={url} style={{ objectFit: 'cover', height: '100%', width: '100%' }} alt="ViewImage" onClick={() => setOpen(true)} /> : <Box style={{ height: '100%', width: '100%' }}></Box>}
                                    </Box>
                                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography variant="h4" sx={{ alignItems: 'center' }}>{title}</Typography>
                                    </Box>
                                </>
                        }
                        <Typography onClick={uploadButtonLabel?.includes('Upload') ? () => { setOpenUpload(true) } : null}>{uploadButtonLabel}</Typography>
                        {open && <ImageView setOpen={setOpen} isLoading={isLoading} title={title} image={image} />}
                        {openUpload && <SetImageModal title={title} setOpen={setOpenUpload} isLoading={isLoading} submitImage={submitImage} />}
                    </Box>
                </Grid>
            }
            {/* : <Box sx={{ height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {
                        isLoading ? <Box className='tableLoadingContainer'>
                            <CircularProgress color='secondary' size={50} sx={{ margin: '20px' }} />
                        </Box> :
                            <Box style={{ height: '80px', width: '100%', border: '2px solid rgb(145, 89, 255)', }}>
                                {image ? <img src={image} style={{ objectFit: 'contain', height: '100%', width: '100%' }} alt="ViewImage" onClick={() => setOpen(true)} /> : <Box style={{ height: '100%', width: '100%' }}></Box>}

                            </Box>
                    }
                    <Typography onClick={uploadButtonLabel?.includes('Upload') ? () => { setOpenUpload(true) } : null}>{uploadButtonLabel}</Typography>
                    {open && <ImageView setOpen={setOpen} isLoading={isLoading} title={title} image={image} />}
                    {openUpload && <SetImageModal title={title} setOpen={setOpenUpload} isLoading={isLoading} submitImage={submitImage} />}
                </Box>} */}
        </>
    )
};

export default ImageViewCardCRM;
