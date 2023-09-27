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
        <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #0c0b63 0%, #110f8a 70%, #0e0e30 100%)' }}>
            <Container maxWidth='xl' sx={{ padding: '1.5rem' }}>
                <Toolbar sx={ headerProp.toolBar }>
                    <Box sx={ headerProp.logos }>
                        <Link href='/' edge="start" aria-label="logo" sx={[ headerProp.iconButton, { marginRight: '2rem' } ]}>
                            <img src='../logo.png' alt="Логотип" width="70" height="70" />
                        </Link>

                        <Link target='_blank' href='https://donate.redcrossredcrescent.org/ua/500days-ad/~%D0%BC%D0%BE%D1%8F-%D0%BF%D0%BE%D0%B6%D0%B5%D1%80%D1%82%D0%B2%D0%B0?utm_source=google&utm_medium=cpc&utm_campaign=cid|20387759728|search&utm_content=gid|151064961749|aid|666302240609|placement|&utm_term=%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%20%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B5&gclid=CjwKCAjwr_CnBhA0EiwAci5sitkjTci6N3GQKRhb8o1kzxxxI98fOzk1W7E0B3M8yEIorAwa1GRDPhoCxC8QAvD_BwE' edge="start" aria-label="logo" sx={ headerProp.iconButton }>
                            <img src="../logo-text.png" alt="Підтримка України" width="130" height="130" />
                        </Link>
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
