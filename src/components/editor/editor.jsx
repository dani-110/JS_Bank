import React, { useRef } from "react";
import { Box, IconButton } from "@mui/material";
import JoditEditor from "jodit-react";
import close from '../../assests/close.png'
import './editor.scss'

const Editor = (props) => {
    const { content, setContent, openPreview, setOpenPreview } = props
    const editor = useRef(null);
    const config = {
        readonly: false,
        toolbarAdaptive: false,
        useNativeTooltip: false,
        enableDragAndDropFileToEditor: true,
        showXPathInStatusbar: false,
        showCharsCounter: false,
        showWordsCounter: false,
        askBeforePasteFromWord: false,
        askBeforePasteHTML: false,
        buttons: [
            "bold",
            "italic",
            "underline",
            "align",
            "subscript",
            "superscript",
            "font",
            "fontsize",
            "lineHeight",
            "paragraph",
            "brush",
            "link",
            "undo",
            "redo",
            // "view"
        ],
        controls: {
            // view: {
            //     icon: "eye", // Set an icon for the view button (optional)
            //     tooltip: "Preview",
            //     exec:  () => {
            //         setOpenPreview(true);
            //         setRenderKey(prev => prev + 1); // Force re-render on open
            //     }
            // },
            font: {
                list: {
                    "Roboto Medium,Arial,sans-serif": "Roboto",
                },
            },
            fontsize: {
                list: {
                    10: "10",
                    12: "12",
                    14: "14",
                    16: "16",
                    18: "18",
                    20: "20",
                    22: "22",
                    24: "24",
                    26: "26",
                    28: "28",
                    30: "30",
                    32: "32",
                    34: "34",
                    36: "36",
                    38: "38",
                    40: "40",
                },
            },
        },
    };
    const onChangeHandler = (newContent) => {
        console.log(newContent)
    };

    const HtmlStringComponent = ({ htmlString }) => {
        console.log(content)
        return (
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        );
    };

    return (
        <Box sx={{ textAlign: 'left', fontSize: '16px', textWrap:'pretty' }}>
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1}
                onBlur={newContent => setContent(newContent)}
                onChange={onChangeHandler}
            />

            {openPreview &&
                <Box className='previewMainView'>
                    <Box className='previewContainer'>
                        <Box className='closeBtnContainer'>
                            <IconButton className='icon' onClick={() => setOpenPreview(prev => !prev)} size="small">
                                <img src={close} style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                            </IconButton>
                        </Box>
                        <Box className='previewMobileContainer'>
                            <Box sx={{ position: 'relative', height: '100%' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box className='topNotch'></Box>
                                </Box>
                                <HtmlStringComponent htmlString={content} />
                                <Box className='bottomBarContainer'>
                                    <Box className='bottomBar'></Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>}
        </Box>
    )
};

export default Editor;
