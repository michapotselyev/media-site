import { AppBar, Box, Button, Container, IconButton, Link, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import headerProp from '../styles/header-prop';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TEXT_CONSTANTS from '../text-constants';

function HeaderMobile() {
    const [currentLunguage, setCurrentLunguage] = useState(
        localStorage.getItem('lung') === 'uk' ? true : false
    );
    const [currentIco, setCurrentIco] = useState(true);

    const iconHandler = () => {
        setCurrentIco(!currentIco);
    }

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
        <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #0c0b63 0%, #110f8a 70%, #0e0e30 100%)' }}>
            <Container maxWidth='xl' sx={{ padding: '1rem' }}>
                <Toolbar sx={[ headerProp.toolBar, { margin: '0 0.5rem 0 0.5rem',  } ]}>
                    <Box sx={ headerProp.logos }>
                        <Link href='/' sx={[ headerProp.iconButton, { marginRight: '2rem' } ]}>
                            <img src='../logo.png' alt="Логотип" width="90" height="90" />
                        </Link>

                        <Box sx={ headerProp.iconButton2 }>
                            <img src="../logo-text.png" alt="Підтримка України" width="140" height="82.3" />
                        </Box>
                    </Box>
                    
                    <Box component='nav' sx={[ headerProp.nav, { justifyContent: 'end' } ]}>
                        <Box onClick={iconHandler}>
                            {
                                currentIco ?
                                    <MenuIcon fontSize='600' sx={{ width: '50px', height: '50px', marginRight: '0.5rem' }} />
                                :
                                    <CloseIcon fontSize='600' sx={{ width: '50px', height: '50px', marginRight: '0.5rem' }} />
                            }
                        </Box>

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

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gridGap: '2rem',
                        height: currentIco ? '0px' : '265.8px',
                        overflow: 'hidden', 
                        opacity: currentIco ? 0 : 1,
                        transition: 'opacity 1s ease-in-out, height 0.5s ease-in-out',
                        zIndex: '-1',
                        fontSize: '1rem'
                    }}
                >
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

                    <Link href='/portfolio' sx={ headerProp.nav.link }>
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
                </Box>
            </Container>
        </AppBar>
    );
}

export default HeaderMobile;
