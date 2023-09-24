import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ourServices from '../../../styles/our-services-prop';
import aboutUs from '../../../styles/about-us';
import CarouselV2 from './Carusel.V1.2';

const slides = [
    <Box>5</Box>,
    <Box>1</Box>,
    <Box>2</Box>,
    <Box>3</Box>,
    <Box>4</Box>
]

function OurServices() {
    return (
        <Container maxWidth='xl' sx={ ourServices.container }>
            <Box sx={ aboutUs.backgroundShadow }></Box>
            <Box>
                <img src="logo.png" alt="background" style={{ opacity: '0.5' }} />
            </Box>

            <Box component='section' id='about-us' sx={ aboutUs.section }>
                <Typography sx={[ aboutUs.title, { marginTop: '3.5rem' } ]}>
                    Наші послуги
                </Typography>

                <CarouselV2 slides={slides} />
            </Box>
        </Container>
    );
}

export default OurServices;
