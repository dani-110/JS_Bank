import React from 'react';
import { Box, Grid } from '@mui/material';
import './ecib.scss'
import ImageViewCard from '../../components/imageViewCard/imageViewCard';

const ImagesContainer = (props) => {
    const { data } = props

    return <Box className="scrutinyImageContainer">
        <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={4}>
                <ImageViewCard
                    title={'CNIC Front'}
                    obj={{
                        "mid": data?.mid,
                        "imageid": 1
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <ImageViewCard
                    title={'CNIC Back'}
                    obj={{
                        "mid": data?.mid,
                        "imageid": 2
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <ImageViewCard
                    title={'Live Image'}
                    obj={{
                        "mid": data?.mid,
                        "imageid": 6
                    }}
                />
            </Grid>
        </Grid>
    </Box>
}
export default ImagesContainer;
