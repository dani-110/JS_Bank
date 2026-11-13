// import React, { useState } from "react";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import { LuRefreshCcw, LuRotateCcw, LuRotateCw, LuZoomIn, LuZoomOut } from "react-icons/lu";

// const ImageZoomInOut = ({ image }) => {
//   const [rotation, setRotation] = useState(0);

//   return (
//     <TransformWrapper
//       initialScale={1}
//       initialPositionX={200}
//       initialPositionY={100}
//     >
//       {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
//         <>
//           <div style={{ marginBottom: '10px', display: "flex", gap: "10px", justifyContent: 'center' }}>
//             <Tooltip title={'Zoom-In'}>
//               <IconButton className='icon' onClick={() => zoomIn()} size="small">
//                 <LuZoomIn size={25} />
//               </IconButton>
//             </Tooltip>
//             <Tooltip title={'Zoom-Out'}>
//               <IconButton className='icon' onClick={() => zoomOut()} size="small">
//                 <LuZoomOut size={25} />
//               </IconButton>
//             </Tooltip>
//             <Tooltip title={'Reset'}>
//               <IconButton className='icon' onClick={() => {
//                 resetTransform()
//                 setRotation(0)
//               }} size="small">
//                 <LuRefreshCcw size={25} />
//               </IconButton>
//             </Tooltip>
//             <Tooltip title={'Rotate-Left'}>
//               <IconButton className='icon' onClick={() => setRotation(prev => prev - 90)} size="small">
//                 <LuRotateCcw size={25} />
//               </IconButton>
//             </Tooltip>
//             <Tooltip title={'Rotate-Right'}>
//               <IconButton className='icon' onClick={() => setRotation(prev => prev + 90)} size="small">
//                 <LuRotateCw size={25} />
//               </IconButton>
//             </Tooltip>

//           </div>
//           <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <TransformComponent>
//               <img
//                 src={image}
//                 alt="ViewImage"
//                 style={{
//                   height: "50vh",
//                   objectFit: "contain",
//                   transform: `rotate(${rotation}deg)`
//                 }}
//               />
//             </TransformComponent>
//           </Box>
//         </>
//       )}
//     </TransformWrapper>

//   );
// };

// export default ImageZoomInOut;

import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Box, IconButton, Tooltip } from "@mui/material";
import { LuRefreshCcw, LuRotateCcw, LuRotateCw, LuZoomIn, LuZoomOut, LuExternalLink } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

const ImageZoomInOut = ({ image, height, closeImage }) => {
  const [rotation, setRotation] = useState(0);

  const openInNewTab = () => {
    const base64Image = image.startsWith("data:")
      ? image
      : `data:image/png;base64,${image}`;

    const newWindow = window.open();

    newWindow.document.write(`
    <html>
      <body style="margin:0">
        <img src="${base64Image}" style="width:100%;height:100%; object-fit:contain" />
      </body>
    </html>
  `);
  };

  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
      wheel={{ disabled: false }}
      doubleClick={{ disabled: true }}
    >
      {({ zoomIn, zoomOut, resetTransform }) => (
        <Box sx={{ display: 'flex', flexDirection: height ? 'column' : 'row' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ marginBottom: '10px', display: "flex", flexDirection: height ? 'row' : 'column', gap: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
              <Tooltip title={'Zoom-In'}>
                <IconButton onClick={() => zoomIn()} size="small">
                  <LuZoomIn size={25} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Zoom-Out'}>
                <IconButton onClick={() => zoomOut()} size="small">
                  <LuZoomOut size={25} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Reset'}>
                <IconButton onClick={() => {
                  resetTransform();
                  setRotation(0);
                }} size="small">
                  <LuRefreshCcw size={25} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Rotate-Left'}>
                <IconButton onClick={() => setRotation(prev => prev - 90)} size="small">
                  <LuRotateCcw size={25} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Rotate-Right'}>
                <IconButton onClick={() => setRotation(prev => prev + 90)} size="small">
                  <LuRotateCw size={25} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Open in New Tab'}>
                <IconButton onClick={openInNewTab} size="small">
                  <LuExternalLink size={25} />
                </IconButton>
              </Tooltip>

            </div>
            {height && closeImage && <div style={{ display: "flex", flexDirection: 'column', }}>
              <Tooltip title={'Close'}>
                <IconButton onClick={closeImage} size="small">
                  <IoMdClose color="rgb(94, 53, 177)" size={25} />
                </IconButton>
              </Tooltip>
            </div>}
          </div>

          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TransformComponent>
              <img
                src={image}
                alt="ViewImage"
                style={{
                  maxHeight: height ? height : "65vh",
                  width: '40vw',
                  objectFit: "contain",
                  transform: `rotate(${rotation}deg)`,
                  cursor: "grab",
                }}
                draggable // This allows the user to drag and drop into other apps or tabs
                onDragStart={(e) => e.dataTransfer.setData("text/plain", image)}
              />
            </TransformComponent>
          </Box>
          {!height && closeImage && <div style={{ display: "flex", flexDirection: 'column', }}>
            <Tooltip title={'Close'}>
              <IconButton onClick={closeImage} size="small">
                <IoMdClose color="rgb(94, 53, 177)" size={25} />
              </IconButton>
            </Tooltip>
          </div>}
        </Box>
      )}
    </TransformWrapper>
  );
};

export default ImageZoomInOut;