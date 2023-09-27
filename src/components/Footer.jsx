import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import ApartmentIcon from '@mui/icons-material/Apartment';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import footer from '../styles/footer-prop';
import TEXT_CONSTANTS from '../text-constants';

function Footer() {
    const [dribble, setDribble] = useState('../dribble.png');
    const [behance, setBehance] = useState('../be.png');

    const handleHoverDribble = () => setDribble('../dribble-hover.png');
    const handleUnHoverDribble = () => setDribble('../dribble.png');

    const handleHoverBehance = () => setBehance('../be-hover.png');
    const handleUnHoverBehance = () => setBehance('../be.png');

    return (
        <Box sx={{ backgroundColor: '#171819' }}>
            <Container maxWidth='xl' sx={ footer.container }>
                <Box sx={ footer.wrapper }>
                    <Grid container sx={ footer.grid }>
                        <Grid item sx={[ footer.grid.item, { height: '75%' } ]} xs={5}>
                            <Typography sx={ footer.grid.item.title }>
                                {
                                    localStorage.getItem('lung') === 'uk' ?
                                        TEXT_CONSTANTS.UK.FOOTER.title1
                                    :
                                        TEXT_CONSTANTS.ENG.FOOTER.title1
                                }
                                <span style={{ color: '#2c9ff2', fontWeight: '600' }}>
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.FOOTER.specialWord
                                        :
                                            TEXT_CONSTANTS.ENG.FOOTER.specialWord
                                    }
                                </span>
                                {
                                    localStorage.getItem('lung') === 'uk' ?
                                        TEXT_CONSTANTS.UK.FOOTER.title2
                                    :
                                        TEXT_CONSTANTS.ENG.FOOTER.title2
                                }
                            </Typography>
                        </Grid>

                        <Grid item sx={[ footer.grid.item, { height: '75%' } ]} xs={3.5}>
                            <Box sx={ footer.grid.item.contactInfo }>
                                <Typography sx={ footer.grid.item.contactInfo.title }>
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.FOOTER.subtitle1
                                        :
                                            TEXT_CONSTANTS.ENG.FOOTER.subtitle1
                                    }
                                </Typography>

                                <Box sx={ footer.grid.item.contactInfo.contacts }>
                                    <Box sx={ footer.grid.item.contactInfo.contacts.wrapper }>
                                        <CallIcon fontSize='small' sx={{ color: '#2c9ff2', marginRight: '10px' }} />

                                        <Link
                                            sx={ footer.grid.item.contactInfo.contacts.link }
                                            href='tel:+380950645456'
                                            target='_blank'
                                        >
                                            +380 95 064 54 56
                                        </Link>
                                    </Box>

                                    <Box sx={ footer.grid.item.contactInfo.contacts.wrapper }>
                                        <MailIcon fontSize='small' sx={{ color: '#2c9ff2', marginRight: '10px' }} />

                                        <Link
                                            sx={ footer.grid.item.contactInfo.contacts.link }
                                            href='mailto:office@ovbkmedia.com'
                                            target='_blank'
                                        >
                                            office@ovbkmedia.com
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item sx={[ footer.grid.item, { height: '75%' } ]} xs={3.5}>
                            <Box sx={ footer.grid.item.officeInfo }>
                                <Typography sx={ footer.grid.item.officeInfo.title }>
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.FOOTER.subtitle2
                                        :
                                            TEXT_CONSTANTS.ENG.FOOTER.subtitle2
                                    }
                                </Typography>

                                <Box sx={ footer.grid.item.officeInfo.contacts }>
                                    <Box sx={ footer.grid.item.officeInfo.contacts.wrapper }>
                                        <ApartmentIcon fontSize='small' sx={{ color: '#2c9ff2', marginRight: '10px' }} />

                                        <Link
                                            sx={ footer.grid.item.officeInfo.contacts.link }
                                        >
                                            {
                                                localStorage.getItem('lung') === 'uk' ?
                                                    TEXT_CONSTANTS.UK.FOOTER.place
                                                :
                                                    TEXT_CONSTANTS.ENG.FOOTER.place
                                            }
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Down row */}

                        <Grid item sx={[ footer.grid.item, { height: '25%' } ]} xs={4.5}>
                            <Box sx={ footer.grid.item.copyright }>
                                <Typography sx={{ fontSize: '1.1rem', color: '#666262' }}>
                                    Copyright © 2023 ОВБК МЕДІА
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item sx={[ footer.grid.item, { height: '25%' } ]} xs={4}>
                            <Box sx={ footer.grid.item.wrapperBotomSection }>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        color: '#666262',
                                        '&:hover': {
                                            color: '#2c9ff2'
                                        }
                                    }}
                                >
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.FOOTER.route1
                                        :
                                            TEXT_CONSTANTS.ENG.FOOTER.route1
                                    }
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        color: '#666262',
                                        '&:hover': {
                                            color: '#2c9ff2'
                                        }
                                    }}
                                >
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.FOOTER.route2
                                        :
                                            TEXT_CONSTANTS.ENG.FOOTER.route2
                                    }
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        color: '#666262',
                                        '&:hover': {
                                            color: '#2c9ff2'
                                        }
                                    }}
                                >
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.FOOTER.route3
                                        :
                                            TEXT_CONSTANTS.ENG.FOOTER.route3
                                    }
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item sx={[ footer.grid.item, { height: '25%' } ]} xs={3.5}>
                            <Box sx={ footer.grid.item.socialMedia }>
                                <Link sx={ footer.grid.item.socialMedia.item }>
                                    <InstagramIcon
                                        fontSize='small'
                                        sx={{
                                            color: '#666262',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                color: '#2c9ff2'
                                            }
                                        }}
                                    />
                                </Link>

                                <Link sx={ footer.grid.item.socialMedia.item }>
                                    <TwitterIcon
                                        fontSize='small'
                                        sx={{
                                            color: '#666262',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                color: '#2c9ff2'
                                            }
                                        }}
                                    />
                                </Link>

                                <Link sx={ footer.grid.item.socialMedia.item }>
                                    <img
                                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                                        src={ dribble }
                                        alt="dribble-logo"
                                        onMouseEnter={handleHoverDribble}
                                        onMouseLeave={handleUnHoverDribble}
                                    />
                                </Link>

                                <Link sx={ footer.grid.item.socialMedia.item }>
                                    <img
                                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                                        src={ behance }
                                        alt="behance-logo"
                                        onMouseEnter={handleHoverBehance}
                                        onMouseLeave={handleUnHoverBehance}
                                    />
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
