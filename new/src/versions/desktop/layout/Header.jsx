import React, { useEffect, useState } from 'react';
import { Box, Collapse, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import headerStyle from '../../../globalStyles/styles/desktop/header-prop';
import { Link } from 'react-router-dom';
import TEXT_CONSTANTS from '../../../text-constants';

function Header() {
    const [open, setOpen] = useState(false);

    const closeHandler = () => {
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
            window.location.assign('/');
        }
    }

    const linkHandler = (event) => {
        switch (event.target.id) {
            case 'first':
                closeHandler();
                window.location.assign('#about-us');
                return;

            case 'second':
                closeHandler();
                window.location.assign('#our-services');
                return;

            case 'third':
                closeHandler();
                window.location.assign('#portfolio');
                return;

            case 'button':
                closeHandler();
                window.location.assign('#contact-us');
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

    return (
        <Box component={'header'} sx={ headerStyle.header }>
            <Box sx={ headerStyle.logoBox }>
                <Box id='logo' component={'img'} src={'/assets/logo.png'} alt='logo' onClick={reloadHandler} />
                <Box id='logo-text' component={'img'} src={'/assets/logo-text.png'} alt='flag' />
            </Box>

            <Box component={'section'} sx={ headerStyle.nav }>
                <Box component={'nav'} sx={ headerStyle.propDiv } >
                    <Box component={'ul'} sx={ headerStyle.propDiv.list }>
                        <Box component={'li'}>
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

                        <Box component={'li'}>
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

                        <Box component={'li'}>
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

                        <Box component={'li'}>
                            <Box onClick={handleClick} sx={ headerStyle.propDiv.list.button }>
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
                                sx={{ width: '13vw', position: 'absolute' }}
                            >
                                <Box
                                    sx={
                                        [
                                            headerStyle.propDiv.list.collapseItem,
                                            {
                                                opacity: open ? 1 : 0,
                                                transition: 'opacity 0.4s ease-out 0.2s, transform ease-in-out 0.1s'
                                            }
                                        ]
                                    }
                                    onClick={() => handleLungChange('uk')}
                                >
                                    <Box component={'img'} src='assets/usa.png' alt='usa' />
                                    <Typography>English</Typography>
                                </Box>

                                <Box
                                    sx={
                                        [
                                            headerStyle.propDiv.list.collapseItem,
                                            {
                                                opacity: open ? 1 : 0,
                                                transition: 'opacity 0.4s ease-out 0.2s, transform ease-in-out 0.1s'
                                            }
                                        ]
                                    }
                                    onClick={() => handleLungChange('eng')}
                                >
                                    <Box component={'img'} src='assets/ukraine.png' alt='ukraine' />
                                    <Typography>Українська</Typography>
                                </Box>
                            </Collapse>
                        </Box>
                    </Box>

                    <Box sx={ headerStyle.propDiv.signButtons } component={'section'}>
                        <Box
                            sx={
                                [
                                    headerStyle.propDiv.signButtons.signUp
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

export default Header;
