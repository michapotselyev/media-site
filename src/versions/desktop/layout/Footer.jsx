import { Box, Grid, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import ApartmentIcon from '@mui/icons-material/Apartment';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import footerStyle from '../../../globalStyles/styles/desktop/footer-prop';
import TEXT_CONSTANTS from '../../../text-constants';

function Footer() {
    const [dribble, setDribble] = useState('assets/dribble.png');
    const [behance, setBehance] = useState('assets/be.png');

    const handleHoverDribble = () => setDribble('assets/dribble-hover.png');
    const handleUnHoverDribble = () => setDribble('assets/dribble.png');

    const handleHoverBehance = () => setBehance('assets/be-hover.png');
    const handleUnHoverBehance = () => setBehance('assets/be.png');

    return (
        <Box sx={{ backgroundColor: '#171819' }}>
            <Box sx={ footerStyle.container }>
                <Box sx={ footerStyle.wrapper }>
                    <Grid container sx={ footerStyle.grid }>
                        <Grid item sx={[ footerStyle.grid.item, { height: '75%' } ]} xs={5}>
                            <Typography sx={ footerStyle.grid.item.title }>
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

                        <Grid item sx={[ footerStyle.grid.item, { height: '75%' } ]} xs={3.5}>
                            <Box sx={ footerStyle.grid.item.contactInfo }>
                                <Typography sx={ footerStyle.grid.item.contactInfo.title }>
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.FOOTER.subtitle1
                                        :
                                            TEXT_CONSTANTS.ENG.FOOTER.subtitle1
                                    }
                                </Typography>

                                <Box sx={ footerStyle.grid.item.contactInfo.contacts }>
                                    <Box sx={ footerStyle.grid.item.contactInfo.contacts.wrapper }>
                                        <CallIcon fontSize='small' sx={{ color: '#2c9ff2', marginRight: '10px' }} />

                                        <Link
                                            sx={ footerStyle.grid.item.contactInfo.contacts.link }
                                            href='tel:+380668371142'
                                            target='_blank'
                                        >
                                            +380 66 837 11 42
                                        </Link>
                                    </Box>

                                    <Box sx={ footerStyle.grid.item.contactInfo.contacts.wrapper }>
                                        <MailIcon fontSize='small' sx={{ color: '#2c9ff2', marginRight: '10px' }} />

                                        <Link
                                            sx={ footerStyle.grid.item.contactInfo.contacts.link }
                                            href='mailto:office@ovbkmedia.com'
                                            target='_blank'
                                        >
                                            office@ovbkmedia.com
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item sx={[ footerStyle.grid.item, { height: '75%' } ]} xs={3.5}>
                            <Box sx={ footerStyle.grid.item.officeInfo }>
                                <Typography sx={ footerStyle.grid.item.officeInfo.title }>
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.FOOTER.subtitle2
                                        :
                                            TEXT_CONSTANTS.ENG.FOOTER.subtitle2
                                    }
                                </Typography>

                                <Box sx={ footerStyle.grid.item.officeInfo.contacts }>
                                    <Box sx={ footerStyle.grid.item.officeInfo.contacts.wrapper }>
                                        <ApartmentIcon fontSize='small' sx={{ color: '#2c9ff2', marginRight: '10px' }} />

                                        <Link
                                            sx={ footerStyle.grid.item.officeInfo.contacts.link }
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

                        <Grid item sx={[ footerStyle.grid.item, { height: '25%' } ]} xs={4.5}>
                            <Box sx={ footerStyle.grid.item.copyright }>
                                <Typography sx={{ fontSize: '1.1rem', color: '#666262' }}>
                                    Copyright © 2023 ОВБК МЕДІА
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item sx={[ footerStyle.grid.item, { height: '25%' } ]} xs={4}>
                            <Box sx={ footerStyle.grid.item.wrapperBotomSection }>
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

                        <Grid item sx={[ footerStyle.grid.item, { height: '25%' } ]} xs={3.5}>
                            <Box sx={ footerStyle.grid.item.socialMedia }>
                                <Link sx={ footerStyle.grid.item.socialMedia.item }>
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

                                <Link sx={ footerStyle.grid.item.socialMedia.item }>
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

                                <Link sx={ footerStyle.grid.item.socialMedia.item }>
                                    <img
                                        style={{ width: '20px', height: '20px', cursor: 'pointer', marginBottom: '4px' }}
                                        src={ dribble }
                                        alt="dribble-logo"
                                        onMouseEnter={handleHoverDribble}
                                        onMouseLeave={handleUnHoverDribble}
                                    />
                                </Link>

                                <Link sx={ footerStyle.grid.item.socialMedia.item }>
                                    <img
                                        style={{ width: '20px', height: '20px', cursor: 'pointer', marginBottom: '4px' }}
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
            </Box>
        </Box>
    );
}

export default Footer;
