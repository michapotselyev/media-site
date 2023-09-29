import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import HeaderMobile from '../components/HeaderMobile';
import FooterMobile from '../components/FooterMobile';

function ErrorPage() {
    const error = useRouteError();
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <>
            {
                isSmallScreen ?
                    <HeaderMobile />
                :
                    <Header />
            }

            <main style={{ background: 'linear-gradient(170deg, #0c0b63 64%, #110f8a 30%)' }}>
                <Container maxWidth='xl' sx={{ height: '80vh' }}>
                    <Box
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '3rem',
                                color: '#FF3333'
                            }}
                            id='title'
                        >
                            { error.status }
                        </Typography>

                        <Typography sx={{ color: 'white', fontSize: '1.2rem' }}>
                            { 
                                error.status === 404 ?
                                'The page you\'re looking for doesn\'t exist.'
                                :
                                'Something went wrong...'
                            }
                        </Typography>
                    </Box>
                </Container>
            </main>
            {
                isSmallScreen ?
                    <FooterMobile />
                :
                    <Footer />
            }
        </>
    );
}

export default ErrorPage;
