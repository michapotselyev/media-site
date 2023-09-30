import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import ourServices from '../../../styles/our-services-prop';
import aboutUs from '../../../styles/about-us';
import CarouselV2 from './Carusel.V1.2';
import TEXT_CONSTANTS from '../../../text-constants';

const slides = localStorage.getItem('lung') === 'uk' ?
                    TEXT_CONSTANTS.UK.OUR_SERVICE.slides
                :
                    TEXT_CONSTANTS.ENG.OUR_SERVICE.slides;

function OurServices() {
    const [isVisible, setIsVisible] = useState(false);
    
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isLargeScreen = useMediaQuery('(min-width:1441px)');

    const handleScroll = () => {
        if (window.scrollY < (isLargeScreen ? 2400 : 1400)) {
            setIsVisible(false);
        }

        if (window.scrollY > (isLargeScreen ? 2400 : 1400)) {
            setIsVisible(true);
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    // eslint-disable-next-line
    }, []);

    return (
        <Container id='our-services' maxWidth='xl' sx={ ourServices.container }>
            <Box sx={ aboutUs.backgroundShadow }></Box>
            <Box>
                <img src="../logo.png" alt="background" style={{ opacity: '0.5' }} />
            </Box>

            <Box
                component='section'
                sx={[
                    aboutUs.section,
                    { transition: 'all 0.5s ease-in-out' },
                    isVisible ?
                        { opacity: '1', transform: 'translateY(0)' }
                    :
                        { opacity: '0', transform: 'translateY(100px)' }
                ]}
            >
                <Typography sx={[ aboutUs.title, { margin: '2rem 0 2rem 0' } ]}>
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.OUR_SERVICE.title
                        :
                            TEXT_CONSTANTS.ENG.OUR_SERVICE.title
                    }
                </Typography>

                <CarouselV2 slides={slides} isSmallScreen={isSmallScreen} />
            </Box>
        </Container>
    );
}

export default OurServices;
