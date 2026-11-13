import React, { useEffect, useRef, useState } from "react";
import { Box, Button, CircularProgress, Divider, IconButton, Typography } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import Card from "../card/Card";
import { base64ToBlob } from "../../utils/Utils";

const ImageView = (props) => {
    const { setOpen, isLoading, title, image, file } = props
    const style = {
        top: '50%',
        left: '50%',
        width: '60%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const [url, setUrl] = useState('');
    const [isImgLoading, setIsImgLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        let createdUrl = '';

        const getImageURL = async () => {
            setIsImgLoading(true); // Process start hone par loader show hoga
            if (file) {
                createdUrl = URL.createObjectURL(file);
                if (isMounted) setUrl(createdUrl);
            } else if (image) {
                const blobUrl = await base64ToBlob(image);
                if (isMounted) setUrl(blobUrl);
            }
        };

        getImageURL();

        // Memory leak se bachne ke liye cleanup
        return () => {
            isMounted = false;
            if (createdUrl) {
                URL.revokeObjectURL(createdUrl);
            }
        };
    }, [image, file]);

    const handleDownload = (image) => {
        const link = document.createElement("a");
        link.href = image;
        link.download = "image.png"; // file ka naam
        link.click();
    };

    return (
        <Box style={{ height: '100vh', width: '100vw', background: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: '0px', left: '0px', zIndex: '1000', display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Box style={style}>
                <Card >
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0px 10px' }}>
                        <Typography variant="h2" sx={{ textWrap: 'wrap' }}>{title}</Typography>
                        <IconButton size="large" onClick={() => {
                            setOpen(false)
                        }}>
                            <IoMdClose color="rgb(94, 53, 177)" size={25} />
                        </IconButton>
                    </Box>
                    <Divider sx={{ margin: '10px' }} />
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        {(isLoading || isImgLoading) && (
                            <Box className='tableLoadingContainer' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <CircularProgress color='secondary' size={50} sx={{ margin: '20px' }} />
                            </Box>
                        )}
                        {url && (
                            <img src={file ? URL.createObjectURL(file) : url} style={{ height: '50vh', objectFit: 'contain' }} alt={title}
                                onLoad={() => setIsImgLoading(false)}
                                onError={() => setIsImgLoading(false)} />
                        )}
                        {/* {
                            isLoading ? <Box className='tableLoadingContainer'>
                                <CircularProgress color='secondary' size={50} sx={{ margin: '20px' }} />
                            </Box> :
                                <img src={file ? URL.createObjectURL(file) : url} style={{ height: '50vh', objectFit: 'contain' }} alt={title} />
                        } */}
                    </Box>
                </Card>
            </Box>
        </Box>
    )
};

export default ImageView;
