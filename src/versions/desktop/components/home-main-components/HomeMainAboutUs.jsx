import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import homeMainAboutUsStyle from '../../../../globalStyles/styles/desktop/components/home-main-abous-us-prop';
import TEXT_CONSTANTS from '../../../../text-constants';

function HomeMainAboutUs() {
    return (
        <Box id='about-us' component={'section'} sx={ homeMainAboutUsStyle.section }>
            <Box sx={ homeMainAboutUsStyle.section.infoDiv }>
                <Typography sx={ homeMainAboutUsStyle.section.infoDiv.title }>
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.ABOUT_US.title
                        :
                            TEXT_CONSTANTS.ENG.ABOUT_US.title
                    }
                </Typography>

                <Typography sx={ homeMainAboutUsStyle.section.infoDiv.description }>
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.ABOUT_US.description
                        :
                            TEXT_CONSTANTS.ENG.ABOUT_US.description
                    }
                </Typography>

                <Typography sx={ homeMainAboutUsStyle.section.infoDiv.title }>
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.ABOUT_US.stack
                        :
                            TEXT_CONSTANTS.ENG.ABOUT_US.stack
                    }
                </Typography>

                <Grid container sx={ homeMainAboutUsStyle.section.infoDiv.works }>
                    <Grid item xs={3}>
                        <Box component={'img'} width={90} height={90} src={'assets/works/icons8-internet-of-things-100.png'} />

                        <Typography>
                            INTERNET OF &nbsp;THINGS
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Box component={'img'} width={90} height={90} src={'assets/works/icons8-location-100.png'} />

                        <Typography>
                            LOCATION BASED SERVICES
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={3}>
                        <Box component={'img'} width={90} height={90} src={'assets/works/icons8-cloud-development-100.png'} />

                        <Typography>
                            CLOUD & DEVOPS
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Box component={'img'} width={90} height={90} src={'assets/works/icons8-big-data-100.png'} />

                        <Typography>
                            BIG DATA / ANALYTICS
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Box component={'img'} width={90} height={90} src={'assets/works/icons8-ai-100.png'} />

                        <Typography>
                            ARTIFICIAL INTELLIGENCE
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={3}>
                        <Box component={'img'} width={90} height={90} src={'assets/works/icons8-rpa-100.png'} />

                        <Typography>
                            RPA
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={3}>
                        <Box component={'img'} width={90} height={90} src={'assets/works/icons8-cybersecurity-100.png'} />

                        <Typography>
                            CYBERSECURITY
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={3}>
                        <Box component={'img'} width={90} height={90} src={'assets/works/icons8-ui-design-100.png'} />

                        <Typography>
                            UI/UX DESIGN
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default HomeMainAboutUs;
