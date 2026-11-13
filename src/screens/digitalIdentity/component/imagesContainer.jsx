import React from 'react';
import { Box, Grid } from '@mui/material';
import '../digitalIdentity.scss'
import ImageViewCard from '../../components/imageViewCard/imageViewCard';

const ImagesContainer = (props) => {
    const { data, obj } = props

    return <Box className="digiimageContainer">
        <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={4}>
                <ImageViewCard
                    title={'CNIC Front'}
                    obj={{
                        ...obj,
                        "imageid": 1
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <ImageViewCard
                    title={'CNIC Back'}
                    obj={{
                        ...obj,
                        "imageid": 2
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <ImageViewCard
                    title={'Live Image'}
                    obj={{
                        ...obj,
                        "imageid": 6
                    }}
                />
            </Grid>
        </Grid>
    </Box>
}
export default ImagesContainer;
