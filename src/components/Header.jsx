import { AppBar, Box, Button, Container, IconButton, Link, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import headerProp from '../styles/header-prop';
import TEXT_CONSTANTS from '../text-constants';

function Header() {
    const [currentLunguage, setCurrentLunguage] = useState(
        localStorage.getItem('lung') === 'uk' ? true : false
    );

    const handleLungChange = () => {
        const currentLung = localStorage.getItem('lung'); 
        
        if (currentLung === 'uk') {
            setCurrentLunguage(false);
            localStorage.setItem('lung', 'eng');
            return window.location.assign(window.location.pathname);
        }

        if (currentLung === 'eng') {
            setCurrentLunguage(true);
            localStorage.setItem('lung', 'uk');
            return window.location.assign(window.location.pathname);
        }
    }

    useEffect(() => {
        const currentLung = localStorage.getItem('lung');

        if (!currentLung) {
            localStorage.setItem('lung', 'uk');
        }
    }, []);

    return (
        <AppBar
            position="relative"
            sx={{
                background: 'linear-gradient(45deg, #0c0b63 0%, #110f8a 70%, #0e0e30 100%)',
                '-webkit-box-shadow': '0px 5px 18px 15px rgba(0,0,0,0.1)',
                '-moz-box-shadow': '0px 5px 18px 15px rgba(0,0,0,0.1)',
                boxShadow: '0px 5px 18px 15px rgba(0,0,0,0.1)',
                zIndex: 999
            }}
        >
            <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} ></div>
            <Container maxWidth='xl' sx={{ padding: '1.5rem' }}>
                <Toolbar sx={ headerProp.toolBar }>
                    <Box sx={ headerProp.logos }>
                        <Link href='/' sx={[ headerProp.iconButton, { marginRight: '2rem' } ]}>
                            <img src='../logo.png' alt="Логотип" width="70" height="70" />
                        </Link>

                        <Box sx={ headerProp.iconButton2 }>
                            <img src="../logo-text.png" alt="Підтримка України" width="120" height="70" />
                        </Box>
                    </Box>
                    
                    <Box component='nav' sx={ headerProp.nav }>
                        <Link href='/#about-us' sx={ headerProp.nav.link }>
                            {
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.HEADER.FIRST_ROUTE
                                :
                                    TEXT_CONSTANTS.ENG.HEADER.FIRST_ROUTE
                            }
                        </Link>

                        <Link href='/#our-services' sx={ headerProp.nav.link }>
                            {
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.HEADER.SECOND_ROUTE
                                :
                                    TEXT_CONSTANTS.ENG.HEADER.SECOND_ROUTE
                            }
                        </Link>

                        <Link href='/#implemented-projects' sx={ headerProp.nav.link }>
                            {
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.HEADER.THIRD_ROUTE
                                :
                                    TEXT_CONSTANTS.ENG.HEADER.THIRD_ROUTE
                            }
                        </Link>

                        <Button
                            disableRipple
                            disableElevation
                            disableFocusRipple
                            disableTouchRipple
                            variant='outlined'
                            sx={ headerProp.button }
                            onClick={() => window.location.assign('/contact-us')}
                        >
                            {
                                localStorage.getItem('lung') === 'uk' ?
                                    TEXT_CONSTANTS.UK.HEADER.BUTTON
                                :
                                    TEXT_CONSTANTS.ENG.HEADER.BUTTON
                            }
                        </Button>

                        <IconButton
                            sx={{
                                border: '1px solid #2c9ff2',
                                transition: 'transform 0.3s ease-in-out',
                                ":hover": {
                                    transform: 'scale(1.1)'
                                }
                            }}
                            onClick={handleLungChange}
                        >
                            {
                                currentLunguage ?
                                    <img src="../usa_flag_united_states_america_icon_228698.png" alt="Eng Flag" />
                                :
                                    <img src="../ukraine_flag_flags_18063.png" alt="Ukr Flag" />
                            }
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
