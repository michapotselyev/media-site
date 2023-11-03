import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import TEXT_CONSTANTS from '../../../../text-constants';
import axios from 'axios';

function HomeMainContactUs() {
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
            window.location.reload();
        } catch (error) {
            alert('При відправлені повідомлення сталася помилка, будь-ласка, спробуйте ще раз!');
            console.log('Response data:', error.response.data);
        }
    }

    return (
        <Box
            id='contact-us'
            sx={{ 
                position: 'relative',
                padding: '2rem',
                width: '100%',
                zIndex: 1000
            }}   
        >
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
                            color: 'black',
                            marginBottom: '1rem'
                        }}
                    >
                        {
                            localStorage.getItem('lung') === 'uk' ?
                                TEXT_CONSTANTS.UK.CONTACT_US.title
                            :
                                TEXT_CONSTANTS.ENG.CONTACT_US.title
                        }
                        <span
                            style={{
                                color: '#EE3030',
                                fontWeight: '600',
                            }}
                        >
                            &nbsp;ОВБК&nbsp;МЕДІА
                        </span>
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '1.35rem',
                            textAlign: 'center',
                            color: '#666666'
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
                        width: '80%',
                        display: 'flex',
                        flexDirection: 'column',
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
                            backgroundColor: 'white',
                            minHeight: '2.25rem',
                            flexGrow: 1,
                            marginRight: 0,
                            marginBottom: '1rem',
                            borderRadius: '20px',
                            border: '2px solid black',
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
                            backgroundColor: 'white',
                            minHeight: '2.25rem',
                            flexGrow: 1,
                            borderRadius: '20px',
                            border: '2px solid black',
                            padding: '1rem',
                            fontSize: '1.3rem'
                        }}
                    />
                </Box>

                <Box sx={{ width: '80%', minHeight: '25vh', zIndex: '1' }}>
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
                            backgroundColor: 'white',
                            width: '100%',
                            minHeight: '25vh',
                            resize: 'vertical',
                            borderRadius: '20px',
                            border: '2px solid black',
                            padding: '1rem',
                            outline: 'none',
                            fontSize: '1.3rem',
                        }}
                    ></textarea>
                </Box>

                <Button
                    sx={{
                        color: 'black',
                        background: 'insert',
                        borderRadius: '20px',
                        padding: '1rem 1.5rem',
                        border: '1px solid black',
                        boxShadow: '0px 0px 5px 1px #000',
                        transition: 'transform 0.3s ease-in-out',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        marginTop: '1.5rem',
                        textAlign: 'center',

                        '&:active': {
                            transform: 'scale(0.8)'
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
        </Box>
    );
}

export default HomeMainContactUs;
