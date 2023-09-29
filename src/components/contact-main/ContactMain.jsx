import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react';
import TEXT_CONSTANTS from '../../text-constants';

function ContactMain() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        document.title = localStorage.getItem('lung') === 'uk' ?
            TEXT_CONSTANTS.UK.PAGE_TITLES.CONTACT_US
        :
            TEXT_CONSTANTS.ENG.PAGE_TITLES.CONTACT_US
    }, []);

    return (
        <main style={{ background: 'linear-gradient(170deg, #0c0b63 64%, #110f8a 30%)' }}>
            <Container maxWidth='xl' sx={{ minHeight: '100vh' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh'
                    }}
                >
                    <Box sx={{ marginBottom: '3rem' }}>
                        <Typography
                            sx={{
                                fontSize: '2.5rem',
                                textAlign: 'center',
                                color: 'white',
                                marginBottom: '1rem'
                            }}
                        >
                            {
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.CONTACT_US.title
                                :
                                    TEXT_CONSTANTS.ENG.CONTACT_US.title
                            }
                            {
                                isSmallScreen ?
                                    <span
                                        style={{
                                            color: '#2C9FF2',
                                            fontWeight: '600',
                                        }}
                                    >
                                        &nbsp;ОВБК&nbsp;МЕДІА
                                    </span>
                                :    
                                    <span
                                        style={{
                                            color: '#2C9FF2',
                                            fontWeight: '600',
                                        }}
                                    >
                                        &nbsp;ОВБК МЕДІА
                                    </span>
                            }
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: isSmallScreen ? '1.35rem' : '1.2rem',
                                textAlign: 'center',
                                color: '#666262'
                            }}
                        >
                            {
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.CONTACT_US.subtitle
                                :
                                    TEXT_CONSTANTS.ENG.CONTACT_US.subtitle
                            }
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: isSmallScreen ? '80%' : '50%',
                            display: 'flex',
                            flexDirection: isSmallScreen ? 'column' : 'row',
                            justifyContent: 'space-between',
                            marginBottom: '1rem'
                        }}
                    >
                        <input
                            type="text"
                            name="first-name"
                            id="name"
                            placeholder={
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.CONTACT_US.plchName
                                :
                                    TEXT_CONSTANTS.ENG.CONTACT_US.plchName
                            }
                            required
                            style={{
                                backgroundColor: '#f0f8ff',
                                minHeight: '2.25rem',
                                flexGrow: 1,
                                marginRight: isSmallScreen ? 0 : '1rem',
                                marginBottom: isSmallScreen ? '1rem' : 0,
                                borderRadius: '5px',
                                padding: '1rem',
                                fontSize: '1.3rem'
                            }}
                        />
                        <input
                            type="email"
                            name="email"
                            id="eml"
                            placeholder={
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.CONTACT_US.plchEmail
                                :
                                    TEXT_CONSTANTS.ENG.CONTACT_US.plchEmail
                            }
                            required
                            style={{
                                backgroundColor: '#f0f8ff',
                                minHeight: '2.25rem',
                                flexGrow: 1,
                                borderRadius: '5px',
                                padding: '1rem',
                                fontSize: '1.3rem'
                            }}
                        />
                    </Box>

                    <Box sx={{ width: isSmallScreen ? '80%' : '50%', minHeight: '25vh' }}>
                        <textarea
                            name="message"
                            id="mess"
                            placeholder={
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.CONTACT_US.plchMessage
                                :
                                    TEXT_CONSTANTS.ENG.CONTACT_US.plchMessage
                            }
                            style={{
                                backgroundColor: '#f0f8ff',
                                width: '100%',
                                minHeight: '25vh',
                                resize: 'vertical',
                                borderRadius: '5px',
                                padding: '1rem',
                                outline: 'none',
                                border: 'none',
                                fontSize: '1.3rem'
                            }}
                        ></textarea>
                    </Box>

                    <Button
                        sx={{
                            margin: '2rem 0 2rem 0',
                            backgroundColor: '#2C9FF2',
                            color: 'white',
                            borderRadius: '100px',
                            fontSize: isSmallScreen ? '1.3rem' : '1rem',
                            textTransform: 'none',
                            padding: '0.5rem 2rem 0.5rem 2rem',
                            transition: 'transform 0.3s ease-in-out',

                            '&:hover': {
                                backgroundColor: '#2C9FF2',
                                transform: 'scale(1.1)'
                            }
                        }}
                        onClick={() => window.location.assign('/contact-us')}
                    >
                        {
                            localStorage.getItem('lung') === 'uk' ?
                                TEXT_CONSTANTS.UK.CONTACT_US.button
                            :
                                TEXT_CONSTANTS.ENG.CONTACT_US.button
                        }
                    </Button>
                </Box>
            </Container>
        </main>
    );
}

export default ContactMain;
