import { Box, CircularProgress, Typography } from "@mui/material"
import ImageView from "./imageModal/imageModal";
import SetImageModal from "./imageModal/setImageModal";
import { useEffect, useState } from "react";
import { base64ToBlob } from "../utils/Utils";

const MerchantImageCard = (props) => {
    const { title, isLoading, image, } = props
    const [open, setOpen] = useState(false);

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
        <Box sx={{ height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {
                isLoading ? <Box className='tableLoadingContainer'>
                    <CircularProgress color='secondary' size={50} sx={{ margin: '20px' }} />
                </Box> :
                    <Box style={{ height: '80px', width: '100%', border: '2px solid rgb(145, 89, 255)', }}>
                        {image ? <img src={url} style={{ objectFit: 'contain', height: '100%', width: '100%' }} alt="ViewImage" onClick={() => setOpen(true)} /> : <Box style={{ height: '100%', width: '100%' }}></Box>}

                    </Box>
            }

            {open && <ImageView setOpen={setOpen} isLoading={isLoading} title={title} image={image} />}
            {/* {openUpload && <SetImageModal title={title} setOpen={setOpenUpload} isLoading={isLoading} submitImage={submitImage} />} */}
        </Box>
    )
}

export default MerchantImageCard;