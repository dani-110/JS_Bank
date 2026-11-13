import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import './maker.scss'
import ImageViewCard from '../../components/imageViewCard/imageViewCard';
import MerchantImageCard from '../../components/merchantImageCard';
import { getimage } from '../../store/actions/digitalIdentity';
import { useDispatch } from 'react-redux';
import { BreadCrumSelectorContext } from '../../store/context/breadCrumSelector';

const ImagesContainer = (props) => {
    const { data } = props
const breadCrumCtxt = useContext(BreadCrumSelectorContext);
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchFilterData()
    }, [])

    const fetchFilterData = async () => {
        setIsLoading(true);
        const obj = {
            mid: data?.mid,
            audittrace: breadCrumCtxt.breadCrumSelector.join('|') + `|Nadra Verisys`
        };
        dispatch(getimage(obj)).then((res) => {
            const fileValue = res.payload?.merchantKycCustomList[0];
            let arr = []
            arr[0] = fileValue?.natioanlidphotofront ? `data:image/png;base64,` + fileValue?.natioanlidphotofront : ''
            arr[1] = fileValue?.natioanlidphotoback ? `data:image/png;base64,` + fileValue?.natioanlidphotoback : ''
            arr[2] = fileValue?.selfie ? `data:image/png;base64,` + fileValue?.selfie : ''
            setImages(arr)
            setIsLoading(false);
        })
    };
    return <Box className="scrutinyImageContainer">
        <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={4}>
                <MerchantImageCard
                    title={'CNIC Front'}
                    isLoading={isLoading}
                    image={images[0]}
                />
            </Grid>
            <Grid item xs={4}>
                <MerchantImageCard
                    title={'CNIC Back'}
                    isLoading={isLoading}
                    image={images[1]}
                />
            </Grid>
            <Grid item xs={4}>
                <MerchantImageCard
                    title={'Live Image'}
                    isLoading={isLoading}
                    image={images[2]}
                />
            </Grid>
        </Grid>
    </Box>
}
export default ImagesContainer;
