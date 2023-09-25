import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import aboutUs from '../../../styles/about-us';
import ourServices from '../../../styles/our-services-prop';
import client from '../../../styles/client-prop';

function Client() {
    return (
        <Container maxWidth='xl' sx={ ourServices.container }>
            <Box sx={ aboutUs.backgroundShadow }></Box>
            <Box>
                <img src="logo.png" alt="background" style={{ opacity: '0.5' }} />
            </Box>

            <Box component='section' id='our-services' sx={ client.section }>
                <Box sx={{ width: '47%' }}>
                    <img preload="auto" loop autoplay src="removed-back-gifter.gif" alt="work-place" />
                </Box>

                <Box sx={{ width: '50%', marginLeft: '3%' }}>
                    <Typography sx={{ color: '#909090', fontSize: '1.1rem', marginBottom: '2rem' }}>КОЖЕН КЛІЄНТ - НАШ ПРІОРИТЕТ</Typography>

                    <Typography sx={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>
                        Ми цінуємо довіру наших клієнтів і завжди прагнемо відповідати їхнім очікуванням.
                        Наша команда зосереджена на вашому успіху, адаптуючись до ваших потреб і швидко
                        реагуючи на запити. Ваше задоволення - наша мета
                    </Typography>

                    <Typography sx={{ color: '#666262', fontSize: '0.8rem' }}><span style={{ color: '#2c9ff2', fontSize: '1.1rem' }}>ТОВ</span> / ОВБК МЕДІА</Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default Client;
