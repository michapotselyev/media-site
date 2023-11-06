import React from 'react';
import { Box, Typography } from '@mui/material';
import homeMainOurClientStyle from '../../../../globalStyles/styles/desktop/components/home-main-our-client-prop';
import TEXT_CONSTANTS from '../../../../text-constants';

function HomeMainOurClient() {
    return (
        <Box component={'section'} sx={ homeMainOurClientStyle.section }>
            <Box sx={ homeMainOurClientStyle.infoDiv }>
                <Typography sx={ homeMainOurClientStyle.infoDiv.title }>
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.CLIENT.title
                        :
                            TEXT_CONSTANTS.ENG.CLIENT.title
                    }
                </Typography>
                
                <Typography sx={ homeMainOurClientStyle.infoDiv.description }>
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.CLIENT.description
                        :
                            TEXT_CONSTANTS.ENG.CLIENT.description
                    }
                </Typography>
                
                <Typography sx={ homeMainOurClientStyle.infoDiv.author }>
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.CLIENT.author
                        :
                            TEXT_CONSTANTS.ENG.CLIENT.author
                    }
                </Typography>
            </Box>
        </Box>
    );
}

export default HomeMainOurClient;
