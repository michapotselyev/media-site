import React, { useEffect, useState } from 'react';
import portfolio from '../../../styles/portfolio-prop';
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import TEXT_CONSTANTS from '../../../text-constants';
import aboutUs from '../../../styles/about-us';

function Portfolio() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isLargeScreen = useMediaQuery('(min-width:1441px)');

    const handleScroll = () => {
        if (window.scrollY < (isLargeScreen ? 3500: 2100)) {
            setIsVisible(false);
            setIsVisible2(false);
            setIsVisible3(false);
        }

        if (window.scrollY > (isLargeScreen ? 3500: 2100)) {
            setIsVisible(true);
        }

        if (window.scrollY > (isLargeScreen ? 3650: 2250)) {
            setIsVisible2(true);
        }

        if (window.scrollY > (isLargeScreen ? 3750: 2400)) {
            setIsVisible3(true);
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    // eslint-disable-next-line
    }, []);

    return (
        <Container id='implemented-projects' maxWidth='xl' sx={[ portfolio.container, { minHeight: isSmallScreen ? '400vh' : '200vh' } ]}>
            <Box sx={ aboutUs.backgroundShadow }></Box>
            <Box>
                <img src="../logo.png" alt="background" style={{ opacity: '0.5' }} />
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography sx={ portfolio.title }>
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.PORTFOLIO.TITLE
                        :
                            TEXT_CONSTANTS.ENG.PORTFOLIO.TITLE
                    }
                </Typography>
                <Grid container sx={ portfolio.grid }>
                    <Grid item xs={isSmallScreen ? 12 : 6} sx={[ portfolio.grid.wrapper, { padding: isSmallScreen ? '3rem 0 3rem 0' : 0 } ]}>
                        <Box sx={[ portfolio.grid.item, { backgroundImage: 'url(bank-and-finance.jpeg)', width: isSmallScreen ? '80vw' : '37vw', zIndex: 1 } ]}>
                            <Box sx={ portfolio.grid.item.textWrapper }>
                                <Typography sx={ portfolio.grid.item.title }>
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.PORTFOLIO.FIRST_PROJECT.title
                                        :
                                            TEXT_CONSTANTS.ENG.PORTFOLIO.FIRST_PROJECT.title 
                                    }
                                </Typography>

                                <Box sx={ portfolio.grid.item.desription }>
                                    <Typography sx={{ color: 'white' }}>
                                        {
                                            localStorage.getItem('lung') === 'uk' ?
                                                TEXT_CONSTANTS.UK.PORTFOLIO.FIRST_PROJECT.p1
                                            :
                                                TEXT_CONSTANTS.ENG.PORTFOLIO.FIRST_PROJECT.p1
                                        }
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        {
                                            localStorage.getItem('lung') === 'uk' ?
                                                TEXT_CONSTANTS.UK.PORTFOLIO.FIRST_PROJECT.p2
                                            :
                                                TEXT_CONSTANTS.ENG.PORTFOLIO.FIRST_PROJECT.p2
                                        }
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        {
                                            localStorage.getItem('lung') === 'uk' ?
                                                TEXT_CONSTANTS.UK.PORTFOLIO.FIRST_PROJECT.p3
                                            :
                                                TEXT_CONSTANTS.ENG.PORTFOLIO.FIRST_PROJECT.p3
                                        }
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        {
                                            localStorage.getItem('lung') === 'uk' ?
                                                TEXT_CONSTANTS.UK.PORTFOLIO.FIRST_PROJECT.p4
                                            :
                                                TEXT_CONSTANTS.ENG.PORTFOLIO.FIRST_PROJECT.p4
                                        }
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        {
                                            localStorage.getItem('lung') === 'uk' ?
                                                TEXT_CONSTANTS.UK.PORTFOLIO.FIRST_PROJECT.p5
                                            :
                                                TEXT_CONSTANTS.ENG.PORTFOLIO.FIRST_PROJECT.p5
                                        }
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={isSmallScreen ? 12 : 6} sx={[ portfolio.grid.wrapper, { padding: isSmallScreen ? '3rem 0 3rem 0' : 0 } ]}>
                        <Box sx={[ portfolio.grid.item, { backgroundImage: 'url(education.jpeg)', width: isSmallScreen ? '80vw' : '37vw', zIndex: 1  } ]}>
                            <Box sx={ portfolio.grid.item.textWrapper }>
                                <Typography sx={ portfolio.grid.item.title }>
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.PORTFOLIO.SECOND_PROJECT.title
                                        :
                                            TEXT_CONSTANTS.ENG.PORTFOLIO.SECOND_PROJECT.title
                                    }
                                </Typography>

                                <Box sx={ portfolio.grid.item.desription }>
                                    <Typography sx={{ color: 'white' }}>
                                        {
                                            localStorage.getItem('lung') === 'uk' ?
                                                TEXT_CONSTANTS.UK.PORTFOLIO.SECOND_PROJECT.p1
                                            :
                                                TEXT_CONSTANTS.ENG.PORTFOLIO.SECOND_PROJECT.p1
                                        } 
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        {
                                            localStorage.getItem('lung') === 'uk' ?
                                                TEXT_CONSTANTS.UK.PORTFOLIO.SECOND_PROJECT.p2
                                            :
                                                TEXT_CONSTANTS.ENG.PORTFOLIO.SECOND_PROJECT.p2
                                        }
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        {
                                            localStorage.getItem('lung') === 'uk' ?
                                                TEXT_CONSTANTS.UK.PORTFOLIO.SECOND_PROJECT.p3
                                            :
                                                TEXT_CONSTANTS.ENG.PORTFOLIO.SECOND_PROJECT.p3
                                        }
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={isSmallScreen ? 12 : 6} sx={[ portfolio.grid.wrapper, { padding: isSmallScreen ? '3rem 0 3rem 0' : 0 } ]}>
                        <Box sx={[ portfolio.grid.item, { backgroundImage: 'url(mettalurg.jpeg)', width: isSmallScreen ? '80vw' : '37vw', zIndex: 1  } ]}>
                            <Box sx={ portfolio.grid.item.textWrapper }>
                                <Typography sx={ portfolio.grid.item.title }>
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.PORTFOLIO.THIRD_PROJECT.title
                                        :
                                            TEXT_CONSTANTS.ENG.PORTFOLIO.THIRD_PROJECT.title
                                    }
                                </Typography>

                                <Box sx={ portfolio.grid.item.desription }>
                                    <Typography sx={{ color: 'white' }}>
                                        {
                                            localStorage.getItem('lung') === 'uk' ?
                                                TEXT_CONSTANTS.UK.PORTFOLIO.THIRD_PROJECT.p1
                                            :
                                                TEXT_CONSTANTS.ENG.PORTFOLIO.THIRD_PROJECT.p1
                                        }
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        {
                                            localStorage.getItem('lung') === 'uk' ?
                                                TEXT_CONSTANTS.UK.PORTFOLIO.THIRD_PROJECT.p2
                                            :
                                                TEXT_CONSTANTS.ENG.PORTFOLIO.THIRD_PROJECT.p2
                                        }
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        {
                                            localStorage.getItem('lung') === 'uk' ?
                                                TEXT_CONSTANTS.UK.PORTFOLIO.THIRD_PROJECT.p3
                                            :
                                                TEXT_CONSTANTS.ENG.PORTFOLIO.THIRD_PROJECT.p3
                                        }
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={isSmallScreen ? 12 : 6} sx={[ portfolio.grid.wrapper, { padding: isSmallScreen ? '3rem 0 3rem 0' : 0 } ]}>
                        <Box sx={[ portfolio.grid.item, { backgroundImage: 'url(sales.png)', width: isSmallScreen ? '80vw' : '37vw', zIndex: 1  } ]}>
                            <Box sx={ portfolio.grid.item.textWrapper }>
                                <Typography sx={ portfolio.grid.item.title }>
                                    {
                                        localStorage.getItem('lung') === 'uk' ?
                                            TEXT_CONSTANTS.UK.PORTFOLIO.FOURTH_PROJECT.title
                                        :
                                            TEXT_CONSTANTS.ENG.PORTFOLIO.FOURTH_PROJECT.title
                                    }
                                </Typography>

                                <Box sx={ portfolio.grid.item.desription }>
                                    <Typography sx={{ color: 'white' }}>
                                        {
                                            localStorage.getItem('lung') === 'uk' ?
                                                TEXT_CONSTANTS.UK.PORTFOLIO.FOURTH_PROJECT.p1
                                            :
                                                TEXT_CONSTANTS.ENG.PORTFOLIO.FOURTH_PROJECT.p1
                                        } 
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        {
                                            localStorage.getItem('lung') === 'uk' ?
                                                TEXT_CONSTANTS.UK.PORTFOLIO.FOURTH_PROJECT.p2
                                            :
                                                TEXT_CONSTANTS.ENG.PORTFOLIO.FOURTH_PROJECT.p2
                                        }
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Portfolio;
