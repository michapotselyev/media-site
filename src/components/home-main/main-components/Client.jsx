import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import aboutUs from '../../../styles/about-us';
import ourServices from '../../../styles/our-services-prop';
import client from '../../../styles/client-prop';
import TEXT_CONSTANTS from '../../../text-constants';

function Client() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isLargeScreen = useMediaQuery('(min-width:1441px)');

    const handleScroll = () => {
        if (window.scrollY < (isLargeScreen ? 3800: 2400)) {
            setIsVisible(false);
            setIsVisible2(false);
            setIsVisible3(false);
        }

        if (window.scrollY > (isLargeScreen ? 3800: 2400)) {
            setIsVisible(true);
        }

        if (window.scrollY > (isLargeScreen ? 3950: 2550)) {
            setIsVisible2(true);
        }

        if (window.scrollY > (isLargeScreen ? 4050: 2650)) {
            setIsVisible3(true);
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
        <Container maxWidth='xl' sx={ ourServices.container }>
            <Box sx={ aboutUs.backgroundShadow }></Box>
            <Box>
                <img src="../logo.png" alt="background" style={{ opacity: '0.5' }} />
            </Box>

            <Box component='section' id='our-services' sx={ client.section }>
                {
                    isSmallScreen ?
                        <></>
                    :
                        <Box
                            sx={[
                                { width: '47%' },
                                { transition: 'all 0.5s ease-in-out' },
                                isVisible ?
                                    { opacity: '1', transform: 'translateY(0)' }
                                :
                                    { opacity: '0', transform: 'translateY(100px)' }
                            ]}
                        >
                            <img src="../removed-back-gifter.gif" alt="work-place" />
                        </Box>
                }
                

                <Box sx={{ width: isSmallScreen ? '100%' : '50%', marginLeft: isSmallScreen ? '0%' : '3%', textAlign: 'center' }}>
                    <Typography
                        sx={[
                            client.title,
                            { transition: 'all 0.5s ease-in-out' },
                            isVisible ?
                                { opacity: '1', transform: 'translateY(0)' }
                            :
                                { opacity: '0', transform: 'translateY(100px)' }
                        ]}
                    >
                        {
                            localStorage.getItem('lung') === 'uk' ?
                                TEXT_CONSTANTS.UK.CLIENT.title
                            :
                                TEXT_CONSTANTS.ENG.CLIENT.title
                        }
                    </Typography>

                    <Typography
                        sx={[
                            client.description,
                            { transition: 'all 0.5s ease-in-out', fontSize: isSmallScreen ? '1.7rem' : '2rem' },
                            isVisible2 ?
                                { opacity: '1', transform: 'translateY(0)' }
                            :
                                { opacity: '0', transform: 'translateY(100px)' }
                        ]}
                    >
                        {
                            localStorage.getItem('lung') === 'uk' ?
                                TEXT_CONSTANTS.UK.CLIENT.description
                            :
                                TEXT_CONSTANTS.ENG.CLIENT.description
                        }
                    </Typography>

                    <Typography
                        sx={[
                            client.author,
                            { transition: 'all 0.5s ease-in-out' },
                            isVisible3 ?
                                { opacity: '1', transform: 'translateY(0)' }
                            :
                                { opacity: '0', transform: 'translateY(100px)' }
                        ]}
                    >
                        <span style={{ color: '#2c9ff2', fontSize: '1.1rem', fontWeight: '600' }}>
                            {
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.CLIENT.author
                                :
                                    TEXT_CONSTANTS.ENG.CLIENT.author
                            }
                        </span>

                        <span style={{ fontSize: '1.1rem' }}>&nbsp; / &nbsp;</span>

                        ОВБК МЕДІА
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default Client;
