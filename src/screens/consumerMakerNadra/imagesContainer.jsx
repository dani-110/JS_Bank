import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import './maker.scss'
import ImageViewCard from '../../components/imageViewCard/imageViewCard';

// const ImagesContainer = (props) => {
//     const { data } = props

//     return <Box className="scrutinyImageContainer">
//         <Grid container spacing={2} sx={{ height: '100%' }}>
//             <Grid item xs={4}>
//                 <ImageViewCard
//                     title={'CNIC Front'}
//                     obj={{
//                         "cid": data?.cid,
//                         "imageid": 1
//                     }}
//                     // uploadButtonLabel={'CNIC Front Photo'}
//                 />
//             </Grid>
//             <Grid item xs={4}>
//                 <ImageViewCard
//                     title={'CNIC Back'}
//                     obj={{
//                         "cid": data?.cid,
//                         "imageid": 2
//                     }}
//                     // uploadButtonLabel={'CNIC Back Photo'}
//                 />
//             </Grid>
//             <Grid item xs={4}>
//                 <ImageViewCard
//                     title={'Live Image'}
//                     obj={{
//                         "cid": data?.cid,
//                         "imageid": 6
//                     }}
//                     // uploadButtonLabel={'Selfie'}
//                 />
//             </Grid>
//         </Grid>
//     </Box>
// }



const ImagesContainer = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { title: 'CNIC Front', imageid: 1 },
    { title: 'CNIC Back', imageid: 2 },
    { title: 'Live Image', imageid: 6 }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  return (
    <Box className="scrutinyImageContainer">
      <Grid container spacing={2} sx={{ height: '100%' }}>

        {images.map((item, index) => (
          <Grid item xs={4} key={item.imageid}>
            <ImageViewCard
              title={item.title}
              obj={{
                cid: data?.cid,
                imageid: item.imageid
              }}
              isActive={index === activeIndex}
              onLoaded={handleNext}
            />
          </Grid>
        ))}

      </Grid>
    </Box>
  );
};
export default ImagesContainer;
