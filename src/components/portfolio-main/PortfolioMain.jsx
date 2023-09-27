import React, { useEffect } from 'react';
import portfolio from '../../styles/portfolio-prop';
import { Box, Container, Grid, Typography } from '@mui/material';
import TEXT_CONSTANTS from '../../text-constants';

function PortfolioMain() {
    // eslint-disable-next-line
    useEffect(() => {
        document.title = localStorage.getItem('lung') === 'uk' ?
            TEXT_CONSTANTS.UK.PAGE_TITLES.PORTFOLIO
        :
            TEXT_CONSTANTS.ENG.PAGE_TITLES.PORTFOLIO
    }, []);

    return (
        <main style={{ background: 'linear-gradient(170deg, #0c0b63 64%, #110f8a 30%)' }}>
            <Container maxWidth='xl' sx={ portfolio.container }>
                <Grid container sx={ portfolio.grid }>
                    <Grid item xs={6} sx={ portfolio.grid.wrapper }>
                        <Box sx={[ portfolio.grid.item, { backgroundImage: 'url(bank-and-finance.jpeg)' } ]}>
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

                    <Grid item xs={6} sx={ portfolio.grid.wrapper }>
                        <Box sx={[ portfolio.grid.item, { backgroundImage: 'url(education.jpeg)' } ]}>
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

                    <Grid item xs={6} sx={ portfolio.grid.wrapper }>
                        <Box sx={[ portfolio.grid.item, { backgroundImage: 'url(mettalurg.jpeg)' } ]}>
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

                    <Grid item xs={6} sx={ portfolio.grid.wrapper }>
                        <Box sx={[ portfolio.grid.item, { backgroundImage: 'url(sales.png)' } ]}>
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
            </Container>
        </main>
    );
}

export default PortfolioMain;
