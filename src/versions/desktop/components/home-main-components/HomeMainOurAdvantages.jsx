import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import homeMainOurAdvantagesStyle from '../../../../globalStyles/styles/desktop/components/home-main-our-advantages-prop';
import TEXT_CONSTANTS from '../../../../text-constants';

const slides =  localStorage.getItem('lung') === 'uk' ?
                    generateSlides(TEXT_CONSTANTS.UK.ABOUT_US.OUR_ADVANTAGES.slides)
                :
                    generateSlides(TEXT_CONSTANTS.ENG.ABOUT_US.OUR_ADVANTAGES.slides);

function HomeMainOurAdvantages() {
    return (
        <Box component={'section'} sx={ homeMainOurAdvantagesStyle.section }>
            <Grid container>
                {
                    slides.map((element, index) => {
                        return (
                            <React.Fragment key={'' + index}>
                                <Grid item xs={4} sx={ homeMainOurAdvantagesStyle.gridItem }>
                                    { element }
                                </Grid>
                            </React.Fragment>
                        );
                    })
                }
            </Grid>
        </Box>
    );
}

function generateSlides(slidesData) {
    const slides = slidesData.map((element) => {
        return (
            <Box sx={[ homeMainOurAdvantagesStyle.img, { backgroundImage: `url(${ element.backgroundImage })`} ]}>
                <Box sx={ homeMainOurAdvantagesStyle.img.wrapperText }>
                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            textAlign: 'center',
                            width: '80%'
                        }}
                    >
                        { element.title }
                    </Typography>
        
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'center',
                            width: '90%',
                            gap: '0.5rem'
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                }}
                            >
                                -
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: '500'
                                }}
                            >
                                { element.p1 }
                            </Typography>

                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: '500'
                                }}
                            >
                                -
                            </Typography>
                            
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: '500'
                                }}
                            >
                                { element.p2 }
                            </Typography>

                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    });

    return slides;
}

export default HomeMainOurAdvantages;
