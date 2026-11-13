import React, { useState } from "react";
import { Box, Button, Collapse, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import ImageView from "./imageModal/imageModal";
import { MdExpandMore, MdOutlineExpandLess } from "react-icons/md";
import ButtonContainer from "./buttonContainer";

const StageFiveView = (props) => {
    const { title, openCollapse, viewFields, viewData, submenuExpanded, handleExpandClick, verifyParam, data } = props

    const [open, setOpen] = useState(false);
    const [image, setImage] = useState({});
    const theme = useTheme()
    

    console.log(viewFields)

    const openImage = (img, title) => {
        setOpen(true)
        setImage({ img: checkFileType(img).file, name: title })
    }
    const handleDownload = (image, name) => {
        const link = document.createElement("a");
        link.href = checkFileType(image).file;
        link.download = `${name}.${checkFileType(image).type}`;
        link.click();
    };

    const checkFileType = (file) => {
        if (file) {
            if (file?.startsWith("0M8R")) {
                return {
                    file: 'data:application/msword;base64,' + file,
                    type: "doc"
                }
            } else if (file?.startsWith("JVBER")) {
                return {
                    file: 'data:application/pdf;base64,' + file,
                    type: "pdf"
                }
            } else if (file?.startsWith("iVBOR")) {
                return {
                    file: 'data:image/png;base64,' + file,
                    type: "png"
                }
            } else if (file?.startsWith("/9j/")) {
                return {
                    file: 'data:image/jpeg;base64,' + file,
                    type: "jpeg"
                }
            }
        } else {
            return {
                file: '',
                type: ""
            }
        }
    }
    return <>
        <Box className="searchPermissionBar" sx={{ width: '100%' }}  >
            <Typography
                variant="h4" onClick={() => handleExpandClick(openCollapse)} component="span" className="collapseableContainer" sx={{ flex: 1 }}>
                
                {title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {
                    submenuExpanded === openCollapse ? <MdOutlineExpandLess size={25} color={'#5f1ce3'} />
                        : <MdExpandMore size={25} color={'#5f1ce3'} />}
            </Box>
        </Box >
        <Collapse
            in={submenuExpanded === openCollapse}
            timeout="auto"
            unmountOnExit
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px', marginTop: '10px', gap: '10px' }}>
                {/* <Grid container spacing={1} sx={{ gap:'10px'}}> */}
                {
                    viewFields?.map((ele, i) => {
                        console.log(ele,viewData[[verifyParam[i]]])
                        const isFileAvailable = viewData[[verifyParam[i]]] ? true : false
                        return (
                            <Box key={i} item xs={12} sx={{ backgroundColor: !isFileAvailable ? '#fedfdf' : '#c1f4c1', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0px 2px 4px ${theme.palette.shadowColor} `, borderRadius: '10px', padding: '3px 10px', }}>
                                <Grid container spacing={1}>
                                    <Grid item xs={9} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="body1" color={!isFileAvailable ? '#aa1212' : '#078907'} sx={{ textWrap: 'wrap', textAlign: 'start' }}>{ele}:</Typography>
                                    </Grid>
                                    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'end', }}>
                                        {console.log(checkFileType(viewData[[verifyParam[i]]]).type)}
                                        {/* <ButtonContainer> */}
                                        {checkFileType(viewData[[verifyParam[i]]]).type == 'pdf' || checkFileType(viewData[[verifyParam[i]]]).type == 'doc' ? null : <Button size="medium" disabled={!isFileAvailable} variant="text" color="secondary" onClick={() => openImage(viewData[[verifyParam[i]]], ele)} >View</Button>}
                                        <Button size="medium" disabled={!isFileAvailable} variant="text" color="secondary" onClick={() => handleDownload(viewData[[verifyParam[i]]], ele)} >Download</Button>
                                        {/* </ButtonContainer> */}
                                        {/* {e && <Typography variant="body1" sx={{ marginLeft: '10px', textWrap: 'wrap' }}>{e[[proprietorshipConcernParam[i]]]}</Typography>} */}
                                    </Grid>
                                </Grid>
                            </Box>
                        )
                    })
                }
                {/* </Grid> */}
            </Box>
        </Collapse>
        {open && <ImageView setImage={setImage} setOpen={setOpen} isLoading={false} title={image.name} image={image.img} />}
    </>

};

export default StageFiveView;
