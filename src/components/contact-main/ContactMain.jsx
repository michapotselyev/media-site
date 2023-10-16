import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TEXT_CONSTANTS from '../../text-constants';
import axios from 'axios';

function ContactMain() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const changeHandler = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value  });
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        const apiKey = process.env.REACT_APP_API_KEY;
        const domain = process.env.REACT_APP_DOMAIN;

        try {
            await axios.post(`https://api.mailgun.net/v3/${domain}/messages`, null, {
                params: {
                    from: `postmaster@${domain}`,
                    to: 'office@ovbkmedia.com',
                    subject: 'Нове повідомлення з сайту ovbkmedia.com',
                    text: `Повідомлення було надіслано користувачем ${userData.name}!\n\nПовідомлення:\n${userData.message}\n\nКористувач чекає на Вашу відповідь за email: ${userData.email}`,
                }, auth: {
                    username: 'api',
                    password: apiKey,
                },
            });

            alert('Повідомлення відправлено успішно!');
            window.location.assign('/contact-us')
        } catch (error) {
            alert('При відправлені повідомлення сталася помилка, будь-ласка, спробуйте ще раз!');
            console.log('Response data:', error.response.data);
        }
    }

    useEffect(() => {
        document.title = localStorage.getItem('lung') === 'uk' ?
            TEXT_CONSTANTS.UK.PAGE_TITLES.CONTACT_US
        :
            TEXT_CONSTANTS.ENG.PAGE_TITLES.CONTACT_US
    }, []);

    return (
        <main style={{ background: 'linear-gradient(170deg, #0c0b63 64%, #110f8a 30%)', position: 'relative' }}>
            <div style={{ position: 'absolute', width: '100%', minHeight: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} ></div>
            <Container maxWidth='xl' sx={{ minHeight: '100vh' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh'
                    }}
                    component={'form'}
                    method='post'
                    onSubmit={submitHandler}
                >
                    <Box sx={{ marginBottom: '3rem', zIndex: '1' }}>
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
                            marginBottom: '1rem',
                            zIndex: '1'
                        }}
                    >
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={userData.name}
                            onChange={changeHandler}
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
                            value={userData.email}
                            onChange={changeHandler}
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

                    <Box sx={{ width: isSmallScreen ? '80%' : '50%', minHeight: '25vh', zIndex: '1' }}>
                        <textarea
                            name="message"
                            id="mess"
                            value={userData.message}
                            onChange={changeHandler}
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
                        type='submit'
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


