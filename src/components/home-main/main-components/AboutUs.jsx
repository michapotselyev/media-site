import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import aboutUs from '../../../styles/about-us';
import Carousel from './Carusel';
import TEXT_CONSTANTS from '../../../text-constants';

const slides = localStorage.getItem('lung') === 'uk' ?
                    TEXT_CONSTANTS.UK.ABOUT_US.OUR_ADVANTAGES.slides
                :
                    TEXT_CONSTANTS.ENG.ABOUT_US.OUR_ADVANTAGES.slides;

function AboutUs() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible31, setIsVisible31] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    const handleScroll = () => {
        if (window.scrollY < 300) {
            setIsVisible(false);
            setIsVisible2(false);
            setIsVisible3(false);
            setIsVisible31(false);
            setIsVisible4(false);
        }

        if (window.scrollY > 300) {
            setIsVisible(true);
        }
        
        if (window.scrollY > 450) {
            setIsVisible2(true);
        }
        
        if (window.scrollY > 700) {
            setIsVisible3(true);
            setIsVisible31(true);
        }

        if (window.scrollY > 900) {
            setIsVisible4(true);
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container maxWidth='xl' sx={ aboutUs.container }>
            <Box sx={ aboutUs.backgroundShadow }></Box>
            <Box>
                <img src="../logo.png" alt="background" style={{ opacity: '0.5' }} />
            </Box>

            <Box component='section' id='about-us' sx={ aboutUs.section }>
                <Typography
                    sx={[
                        aboutUs.title,
                        isVisible ?
                            { opacity: '1', transform: 'translateY(0)' }
                        :
                            { opacity: '0', transform: 'translateY(100px)' }
                    ]}
                >
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.ABOUT_US.title
                        :
                            TEXT_CONSTANTS.ENG.ABOUT_US.title
                    }
                </Typography>

                <Typography
                    sx={[
                        aboutUs.description,
                        isVisible2 ?
                            { opacity: '1', transform: 'translateY(0)' }
                        :
                            { opacity: '0', transform: 'translateY(100px)' }
                    ]}
                >
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.ABOUT_US.description
                        :
                            TEXT_CONSTANTS.ENG.ABOUT_US.description
                    }
                </Typography>

                <Typography
                    sx={[
                        aboutUs.ourDiff,
                        isVisible3 ?
                            { opacity: '1', transform: 'translateY(0)' }
                        :
                            { opacity: '0', transform: 'translateY(100px)' }
                    ]}
                >
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.ABOUT_US.OUR_ADVANTAGES.title
                        :
                            TEXT_CONSTANTS.ENG.ABOUT_US.OUR_ADVANTAGES.title
                    }
                </Typography>
                
                <Box
                    sx={[
                        { transition: 'all 0.5s ease-in-out' },
                        isVisible31 ?
                            { opacity: '1', transform: 'translateY(0)' }
                        :
                            { opacity: '0', transform: 'translateY(100px)' }
                    ]}
                >
                    <Carousel slides={slides} />
                </Box>

                <Box
                    sx={[
                        aboutUs.bottomImage,
                        isVisible4 ?
                            { opacity: '1', transform: 'translateY(0)' }
                        :
                            { opacity: '0', transform: 'translateY(100px)' }
                    ]}
                >
                    <img src="../office-removebg-preview.png" alt="office png"  />
                </Box>
            </Box>
        </Container>
    );
}

export default AboutUs;
