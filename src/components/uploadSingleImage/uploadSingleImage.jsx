import React, { useRef, useState } from "react";
import { Box, Button, CircularProgress, Divider, IconButton, Typography } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import Card from "../card/Card";
import UploadImage from '../../assests/uploadImage.png'
// import './Upload.scss'
import { toBase64 } from "../../utils/Utils";
import ButtonContainer from "../buttonContainer";
import { LuEye, LuTrash2, LuUpload } from "react-icons/lu";

const UploadSingleImage = (props) => {
    const { title, setImage, setFileName } = props

    const [file, setFile] = useState('')
    const [imageName, setImageName] = useState('')
    const [viewImage, setViewImage] = useState(false)

    const style = {
        top: '50%',
        left: '50%',
        width: '60%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const uploadRef = useRef();
    const browseFileHandler = (e) => {
        uploadRef.current.click();
    };
    const DragOverHandler = (e) => {
        e.preventDefault();
        e.currentTarget.classList.add("dragOver");
    };
    const DragLeaveHandler = (e) => {
        e.currentTarget.classList.remove("dragOver");
    };

    const uploadOnDrop = async (e, type) => {

        e.preventDefault();
        const img = e.dataTransfer.files[0];
        if (setFileName) {
            setFileName(e.target?.files[0]?.name)
        }
        setViewImage(false)
        setImageName(e.target.files[0].name)
        setFile(img)
        setImage(img)
    };

    const uploadImage = async (e) => {
        const img = e.target.files[0];
        if (setFileName) {
            setFileName(e.target.files[0].name)
        }
        setViewImage(false)
        setImageName(e.target.files[0].name)
        setFile(img)
        setImage(img)
    };

    const removeFile = () => {
        setImage('')
        setFileName('')
        setFile('')
        setImageName('')
    }
    return (
        <>
            <Box style={{ width: '100%', border: '1px solid rgb(145, 89, 255)', borderRadius: '5px', padding: '10px 0px', }}>
                {file ? <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0px 10px' }}>
                    <Box style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Typography variant="body1" color="#155dfc" >{imageName}</Typography>
                        {/* <LuEye size={'25px'} color={'#99a1af'} /> */}
                    </Box>
                    <Box onClick={removeFile}>
                        <LuTrash2 size={'25px'} color={'#e7000b'} />
                    </Box>
                </Box>
                    // <img src={file} style={{ objectFit: 'contain', height: '100%', width: '100%' }} alt="ViewImage" onClick={() => setViewImage(true)} />
                    : <Box onClick={(e) => browseFileHandler(e)}
                                onDragOver={DragOverHandler}
                                onDragLeave={DragLeaveHandler}
                                onDrop={(e) => uploadOnDrop(e, 'answer')} style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <input
                            type="file"
                            name="uploadAsset"
                            id="uploadAsset"
                            hidden
                            onChange={uploadImage}
                            ref={uploadRef}
                            accept=".pdf,.doc,.docx,.zip,.rar"
                        />
                        <LuUpload size={'25px'} color={'#99a1af'} />
                        <Typography variant="body1" color="#155dfc" >Upload Image</Typography>
                    </Box>}
            </Box>
            {/* <Typography onClick={() => setViewImage(true)}>Upload Image</Typography> */}
            {viewImage && <Box style={{ height: '100vh', width: '100vw', background: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: '0px', left: '0px', zIndex: '1000', display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Box style={style}>
                    <Card >
                        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                            <Typography variant="h2">{title}</Typography>
                            <IconButton size="large" onClick={() => setViewImage(false)}>
                                <IoMdClose color="rgb(94, 53, 177)" size={25} />
                            </IconButton>
                        </Box>
                        <Divider sx={{ margin: '10px' }} />
                        {file ?
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <img src={file} style={{ height: '50vh', objectFit: 'contain' }} alt="ViewImage" />
                                <ButtonContainer>
                                    <Button size="medium" variant="contained" color="secondary" onClick={() => setFile('')} >Change Image</Button>
                                    <Button size="medium" variant="contained" color="primary" onClick={() => {
                                        setImage(file)
                                        setViewImage(false)
                                    }} >Submit</Button>
                                </ButtonContainer>
                            </Box>
                            : <div
                                className="uploadArea"
                                onClick={(e) => browseFileHandler(e)}
                                onDragOver={DragOverHandler}
                                onDragLeave={DragLeaveHandler}
                                onDrop={(e) => uploadOnDrop(e, 'answer')}
                            >
                                <input
                                    type="file"
                                    name="uploadAsset"
                                    id="uploadAsset"
                                    hidden
                                    onChange={uploadImage}
                                    ref={uploadRef}
                                    accept=".pdf,.doc,.docx,.zip,.rar"
                                />
                                <img src={UploadImage} className="uploadImage" alt="upload" />
                                <Typography textAlign="center" className="heading">
                                    drag &amp; drop
                                </Typography>
                                <Typography textAlign="center" className="subHeading">
                                    fill file from your computer here
                                </Typography>
                            </div>
                        }
                    </Card>
                </Box>
            </Box>}
        </>
    )
};

export default UploadSingleImage;
