import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

function ContactMain() {
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
                            Зв'язатися з
                            <span
                                style={{
                                    color: '#2C9FF2',
                                    fontWeight: '600',
                                }}
                            >
                                &nbsp;ОВБК МЕДІА
                            </span>
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: '1.2rem',
                                textAlign: 'center',
                                color: '#666262'
                            }}
                        >
                            чи напишіть самостійно office@ovbkmedia.com
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: '1rem'
                        }}
                    >
                        <input
                            type="text"
                            name="first-name"
                            id="name"
                            placeholder="Ім'я"
                            required
                            style={{
                                backgroundColor: '#f0f8ff',
                                minHeight: '2.25rem',
                                flexGrow: 1,
                                marginRight: '1rem',
                                borderRadius: '5px',
                                padding: '1rem'
                            }}
                        />
                        <input
                            type="email"
                            name="email"
                            id="eml"
                            placeholder='Пошта'
                            required
                            style={{
                                backgroundColor: '#f0f8ff',
                                minHeight: '2.25rem',
                                flexGrow: 1,
                                borderRadius: '5px',
                                padding: '1rem'
                            }}
                        />
                    </Box>

                    <Box sx={{ width: '50%', minHeight: '25vh' }}>
                        <textarea
                            name="message"
                            id="mess"
                            placeholder='Повідомлення'
                            style={{
                                backgroundColor: '#f0f8ff',
                                width: '100%',
                                minHeight: '25vh',
                                resize: 'vertical',
                                borderRadius: '5px',
                                padding: '1rem',
                                outline: 'none',
                                border: 'none'
                            }}
                        ></textarea>
                    </Box>

                    <Button
                        sx={{
                            margin: '2rem 0 2rem 0',
                            backgroundColor: '#2C9FF2',
                            color: 'white',
                            borderRadius: '100px',
                            fontSize: '1rem',
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
                        Надіслати лист
                    </Button>
                </Box>
            </Container>
        </main>
    );
}

export default ContactMain;
