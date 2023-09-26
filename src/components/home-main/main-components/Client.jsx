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
                <img src="../logo.png" alt="background" style={{ opacity: '0.5' }} />
            </Box>

            <Box component='section' id='our-services' sx={ client.section }>
                <Box sx={{ width: '47%' }}>
                    <img src="../removed-back-gifter.gif" alt="work-place" />
                </Box>

                <Box sx={{ width: '50%', marginLeft: '3%' }}>
                    <Typography sx={ client.title }>КОЖЕН КЛІЄНТ - НАШ ПРІОРИТЕТ</Typography>

                    <Typography sx={ client.description }>
                        Ми цінуємо довіру наших клієнтів і завжди прагнемо відповідати їхнім очікуванням.
                        Наша команда зосереджена на вашому успіху, адаптуючись до ваших потреб і швидко
                        реагуючи на запити. Ваше задоволення - наша мета
                    </Typography>

                    <Typography sx={ client.author }>
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
