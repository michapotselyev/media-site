import React, { useEffect, useState } from 'react';
import { Box, Collapse, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import headerStyle from '../../../globalStyles/styles/tablet/header-prop';
import { Link } from 'react-router-dom';
import TEXT_CONSTANTS from '../../../text-constants';

function HeaderTablet() {
    const [fadeAnimation, setFadeAnimation] = useState(false);
    const [open, setOpen] = useState(false);

    const openHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setFadeAnimation(true);
    }

    const closeHandler = () => {
        setFadeAnimation(false);
        setOpen(false);
    }

    const handleClick = () => {
        setOpen(!open);
    };

    const reloadHandler = () => {
        window.location.assign('/');
    }

    const handleLungChange = (currentLung) => {
        if (currentLung === 'uk') {
            localStorage.setItem('lung', 'eng');
            return window.location.assign(window.location.pathname);
        }

        if (currentLung === 'eng') {
            localStorage.setItem('lung', 'uk');
            return window.location.assign(window.location.pathname);
        }
    }

    const linkHandler = (event) => {
        switch (event.target.id) {
            case 'first':
                closeHandler();
                window.location.assign('/#about-us');
                return;

            case 'second':
                closeHandler();
                window.location.assign('/#our-services');
                return;

            case 'third':
                closeHandler();
                window.location.assign('/#portfolio');
                return;

            case 'button':
                closeHandler();
                window.location.assign('/#contact-us');
                return;
        
            default:
                return;
        }
    }

    useEffect(() => {
        const currentLung = localStorage.getItem('lung');

        if (!currentLung) {
            localStorage.setItem('lung', 'eng');
            window.location.reload();
        }
    }, []);

    useEffect(() => {
        document.body.style = fadeAnimation ? 'overflow: hidden;' : 'overflow: scroll;';
    });

    return (
        <Box component={'header'} sx={ headerStyle.header }>
            <Box sx={ headerStyle.logoBox } onClick={reloadHandler}>
                <Box component={'img'} src={'/assets/logo.png'} alt='logo' />
            </Box>

            <Box component={'section'} sx={ headerStyle.nav } onClick={openHandler}>
                <MenuIcon />
            </Box>

            <Box
                component={'nav'}
                sx={
                    [
                        headerStyle.menuProp,
                        {
                            opacity: fadeAnimation ? 1 : 0,
                            transform: fadeAnimation ? 'translateY(0)' : 'translateY(100%)'
                        }
                    ]
                }
            >
                <Box sx={ headerStyle.menuProp.header }>
                    <Box component={'section'} sx={ headerStyle.menuProp.header.logoDiv } onClick={reloadHandler}>
                        <Box component={'img'} src={'/assets/logo-shadow.png'} />
                    </Box>

                    <Box component={'section'} sx={ headerStyle.menuProp.header.closeIco } onClick={closeHandler}>
                        <CloseIcon />
                    </Box>
                </Box>

                <Box component={'section'} sx={ headerStyle.menuProp.propDiv } >
                    <Box component={'ul'} sx={ headerStyle.menuProp.propDiv.list }>
                        <Box
                            component={'li'}
                            sx={
                                [
                                    {
                                        transition: 'all 0.3s ease-in-out'
                                    },
                                    fadeAnimation ?
                                        { opacity: '1', transform: 'translateY(0)' }
                                    :
                                        { opacity: '0', transform: 'translateY(100px)' }
                                ]
                            }
                        >
                            <Link id='first' onClick={linkHandler}>
                                <Typography id='first'>
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.HEADER.FIRST_ROUTE
                                        :
                                            TEXT_CONSTANTS.ENG.HEADER.FIRST_ROUTE
                                    }
                                </Typography>
                            </Link>
                        </Box>

                        <Box
                            component={'li'}
                            sx={
                                [
                                    {
                                        transition: 'all 0.4s ease-in-out'
                                    },
                                    fadeAnimation ?
                                        { opacity: '1', transform: 'translateY(0)' }
                                    :
                                        { opacity: '0', transform: 'translateY(100px)' }
                                ]
                            }
                        >
                            <Link id='second' onClick={linkHandler}>
                                <Typography id='second'>
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.HEADER.SECOND_ROUTE
                                        :
                                            TEXT_CONSTANTS.ENG.HEADER.SECOND_ROUTE
                                    }
                                </Typography>
                            </Link>
                        </Box>

                        <Box
                            component={'li'}
                            sx={
                                [
                                    {
                                        transition: 'all 0.5s ease-in-out'
                                    },
                                    fadeAnimation ?
                                        { opacity: '1', transform: 'translateY(0)' }
                                    :
                                        { opacity: '0', transform: 'translateY(100px)' }
                                ]
                            }
                        >
                            <Link id='third' onClick={linkHandler}>
                                <Typography id='third'>
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.HEADER.THIRD_ROUTE
                                        :
                                            TEXT_CONSTANTS.ENG.HEADER.THIRD_ROUTE
                                    }
                                </Typography>
                            </Link>
                        </Box>

                        <Box
                            component={'li'}
                            sx={
                                [
                                    {
                                        transition: 'all 0.6s ease-in-out'
                                    },
                                    fadeAnimation ?
                                        { opacity: '1', transform: 'translateY(0)' }
                                    :
                                        { opacity: '0', transform: 'translateY(100px)' }
                                ]
                            }
                        >
                            <Box onClick={handleClick} sx={ headerStyle.menuProp.propDiv.list.button }>
                                <Typography>
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.HEADER.LANGUAGE
                                        :
                                            TEXT_CONSTANTS.ENG.HEADER.LANGUAGE
                                    }
                                </Typography>
                                { open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
                            </Box>
                            
                            <Collapse
                                in={open}
                                timeout={{ enter: 500, exit: 500 }}
                                unmountOnExit
                                sx={{ width: '30vw' }}
                            >
                                <Box
                                    sx={
                                        [
                                            headerStyle.menuProp.propDiv.list.collapseItem,
                                            {
                                                opacity: open ? 1 : 0,
                                                transition: 'all 0.4s ease-out',
                                            }
                                        ]
                                    }
                                    onClick={() => handleLungChange('uk')}
                                >
                                    <Box component={'img'} src='/assets/usa.png' alt='usa' />
                                    <Typography>English</Typography>
                                </Box>

                                <Box
                                    sx={
                                        [
                                            headerStyle.menuProp.propDiv.list.collapseItem,
                                            {
                                                opacity: open ? 1 : 0,
                                                transition: 'all 0.4s ease-out 0.2s'
                                            }
                                        ]
                                    }
                                    onClick={() => handleLungChange('eng')}
                                >
                                    <Box component={'img'} src='/assets/ukraine.png' alt='ukraine' />
                                    <Typography>Українська</Typography>
                                </Box>
                            </Collapse>
                        </Box>
                    </Box>

                    <Box sx={ headerStyle.menuProp.propDiv.signButtons } component={'section'}>
                        <Box
                            sx={
                                [
                                    headerStyle.menuProp.propDiv.signButtons.signUp,
                                    fadeAnimation ?
                                        { opacity: '1', transform: 'translateY(0)' }
                                    :
                                        { opacity: '0', transform: 'translateY(100px)' }
                                ]
                            }
                            id='button'
                            onClick={linkHandler}
                        >
                            <Typography id='button'>
                                {
                                    localStorage.getItem('lung') === 'uk' ?
                                        TEXT_CONSTANTS.UK.HEADER.BUTTON
                                    :
                                        TEXT_CONSTANTS.ENG.HEADER.BUTTON
                                }
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default HeaderTablet;
