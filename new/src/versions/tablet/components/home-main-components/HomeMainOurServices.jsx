import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import homeMainOurServicesStyle from '../../../../globalStyles/styles/tablet/components/home-main-our-services-prop';
import TEXT_CONSTANTS from '../../../../text-constants';

const slides =  localStorage.getItem('lung') === 'uk' ?
                    TEXT_CONSTANTS.UK.SERVICE_DATA
                :
                    TEXT_CONSTANTS.ENG.SERVICE_DATA;

function HomeMainOurServices() {
    const [more, setMore] = useState(false);
    const [current, setCurrent] = useState(slides.reduce((object, value, index) => {
        return {...object, [index]: false};
    }, {}));

    const moreHandler = (event) => {
        const id = event.target.id;

        setMore(true);
        setCurrent({ ...current, [id]: !current[id] });
    }

    return (
        <Box id='our-services' component={'section'} sx={ homeMainOurServicesStyle.section }>
            <Typography sx={ homeMainOurServicesStyle.title }>
                {
                    localStorage.getItem('lung') === 'uk' ?
                        TEXT_CONSTANTS.UK.OUR_SERVICE.title
                    :
                        TEXT_CONSTANTS.ENG.OUR_SERVICE.title
                }
            </Typography>

            <Grid container>
            {
                    slides.map((element, index) => {
                        return (
                            <React.Fragment key={'' + index}>
                                <Grid item xs={12} sx={ homeMainOurServicesStyle.gridItem }>
                                    <Box component={'img'} width={'100px'} height={'100px'} src={element.src} />

                                    <Typography sx={ homeMainOurServicesStyle.gridItem.title }>
                                        { element.title }
                                        <br />
                                        { element.subtitle }
                                    </Typography>

                                    <Box
                                        sx={
                                            [
                                                { transition: 'all 0.5s ease-in-out' },
                                                {
                                                    height: more && current[index] ? '85vh' : 0,
                                                    overflow: 'hidden',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }
                                            ]
                                        }
                                    >
                                        <Typography sx={ homeMainOurServicesStyle.gridItem.moreText }>
                                            - { element.description.p1 }
                                        </Typography>

                                        <Typography sx={ homeMainOurServicesStyle.gridItem.moreText }>
                                            - { element.description.p2 }
                                        </Typography>

                                        <Typography sx={ homeMainOurServicesStyle.gridItem.moreText }>
                                            - { element.description.p3 }
                                        </Typography>
                                    </Box>

                                    <Box id={index} sx={ homeMainOurServicesStyle.gridItem.moreButton } onClick={moreHandler}>
                                        <Typography id={index}>
                                            {
                                                localStorage.getItem('lung') === 'uk' ?
                                                    more && current[index] ?
                                                        TEXT_CONSTANTS.UK.OUR_SERVICE.less
                                                    :
                                                        TEXT_CONSTANTS.UK.OUR_SERVICE.more
                                                :
                                                    more && current[index] ?
                                                        TEXT_CONSTANTS.ENG.OUR_SERVICE.less
                                                    :
                                                        TEXT_CONSTANTS.ENG.OUR_SERVICE.more
                                            }
                                        </Typography>
                                    </Box>
                                </Grid>
                            </React.Fragment>
                        );
                    })
                }
            </Grid>
        </Box>
    );
}

export default HomeMainOurServices;
