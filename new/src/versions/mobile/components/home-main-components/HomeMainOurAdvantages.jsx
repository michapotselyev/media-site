import React from 'react';
import { Box, Grid } from '@mui/material';
import homeMainOurAdvantagesStyle from '../../../../globalStyles/styles/mobile/components/home-main-our-advantages-prop';
import TEXT_CONSTANTS from '../../../../text-constants';

const slides =  localStorage.getItem('lung') === 'uk' ?
                    TEXT_CONSTANTS.UK.ABOUT_US.OUR_ADVANTAGES.slides
                :
                    TEXT_CONSTANTS.ENG.ABOUT_US.OUR_ADVANTAGES.slides;

function HomeMainOurAdvantages() {
    return (
        <Box component={'section'} sx={ homeMainOurAdvantagesStyle.section }>
            <Grid container>
                {
                    slides.map((element, index) => {
                        return (
                            <React.Fragment key={'' + index}>
                                <Grid item xs={12} sx={ homeMainOurAdvantagesStyle.gridItem }>
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

export default HomeMainOurAdvantages;
