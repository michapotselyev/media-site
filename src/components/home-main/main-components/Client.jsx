import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import aboutUs from '../../../styles/about-us';
import ourServices from '../../../styles/our-services-prop';
import client from '../../../styles/client-prop';

function Client() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    const handleScroll = () => {
        if (window.scrollY < 2400) {
            setIsVisible(false);
            setIsVisible2(false);
            setIsVisible3(false);
        }

        if (window.scrollY > 2400) {
            setIsVisible(true);
        }

        if (window.scrollY > 2550) {
            setIsVisible2(true);
        }

        if (window.scrollY > 2650) {
            setIsVisible3(true);
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container maxWidth='xl' sx={ ourServices.container }>
            <Box sx={ aboutUs.backgroundShadow }></Box>
            <Box>
                <img src="../logo.png" alt="background" style={{ opacity: '0.5' }} />
            </Box>

            <Box component='section' id='our-services' sx={ client.section }>
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

                <Box sx={{ width: '50%', marginLeft: '3%' }}>
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
                        КОЖЕН КЛІЄНТ - НАШ ПРІОРИТЕТ
                    </Typography>

                    <Typography
                        sx={[
                            client.description,
                            { transition: 'all 0.5s ease-in-out' },
                            isVisible2 ?
                                { opacity: '1', transform: 'translateY(0)' }
                            :
                                { opacity: '0', transform: 'translateY(100px)' }
                        ]}
                    >
                        Ми цінуємо довіру наших клієнтів і завжди прагнемо відповідати їхнім очікуванням.
                        Наша команда зосереджена на вашому успіху, адаптуючись до ваших потреб і швидко
                        реагуючи на запити. Ваше задоволення - наша мета
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
                            ТОВ
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
