import React, { useRef, useState } from "react";
import { Box, Button, CircularProgress, Divider, IconButton, Typography } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import Card from "../card/Card";
import UploadImage from '../../assests/uploadImage.png'
import './merchantOnboardingDocument.scss'
import { toBase64 } from "../../utils/Utils";
import ButtonContainer from "../buttonContainer";
import { LuEye, LuTrash2, LuUpload } from "react-icons/lu";

const MerchantOnboardingDocument = (props) => {
    const { title, setImage, setFileName, file, setFile } = props

    const [imageName, setImageName] = useState('')
    const [viewImage, setViewImage] = useState(false)
    const answerAssetRef = useRef();

    const style = {
        top: '50%',
        left: '50%',
        width: '60%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const browseFileHandler = (e) => {
        answerAssetRef.current.click();
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
        if (!img) return;

        // 5MB validation
        // const maxSize = 5 * 1024 * 1024;

        // if (img.size > maxSize) {
        //     alert("File size should not exceed 5MB");
        //     e.target.value = null;
        //     return;
        // }

        if (setFileName) {
            setFileName(e.target.files[0].name)
        }
        setImageName(e.target.files[0].name)
        setFile(await toBase64(img))
    };

    const uploadImage = async (e) => {
        const img = e.target.files[0];
        if (!img) return;

        // 5MB validation
        // const maxSize = 5 * 1024 * 1024;

        // if (img.size > maxSize) {
        //     alert("File size should not exceed 5MB");
        //     e.target.value = null;
        //     return;
        // }

        if (setFileName) {
            setFileName(e.target.files[0].name)
        }
        setImageName(e.target.files[0].name)
        setFile(await toBase64(img))
    };

    const removeFile = () => {
        setImage('')
        setFileName('')
        setFile('')
        setImageName('')
    }
    return (
        <>
            {file ?
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    {/* <img src={file} style={{ height: '100px', objectFit: 'contain' }} alt="ViewImage" /> */}
                    <Typography variant="body2">{imageName}</Typography>
                    <ButtonContainer isSingle>
                        <Button size="medium" variant="contained" color="secondary" onClick={() => setFile('')} >Change File</Button>
                    </ButtonContainer>
                </Box>
                :

                <Box
                    className='fileUploadContainer'
                    onClick={(e) => browseFileHandler(e)}
                    onDragOver={DragOverHandler}
                    onDragLeave={DragLeaveHandler}
                    onDrop={(e) => uploadOnDrop(e)}
                >
                    <input
                        type="file"
                        id="uploadAsset"
                        hidden
                        ref={answerAssetRef}
                        multiple
                        onChange={uploadImage}
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    />
                    <Box sx={{ marginBottom: '5px' }}>
                        <LuUpload size={'25px'} color={'#99a1af'} />
                    </Box>
                    <Typography variant="body2">Select file</Typography>
                    <Typography variant="h6" >{'PNG, JPG, JPEG, Docx, PDF'}</Typography>
                </Box>
            }
        </>
    )
};

export default MerchantOnboardingDocument;
