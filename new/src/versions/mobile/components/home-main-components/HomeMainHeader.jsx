import React from 'react';
import { Box, Typography } from '@mui/material';
import homeMainHeaderStyle from '../../../../globalStyles/styles/mobile/components/home-main-header-prop';
import TEXT_CONSTANTS from '../../../../text-constants';

function HomeMainHeader() {
    return (
        <Box component={'header'} sx={ homeMainHeaderStyle.header }>
            <Box component={'img'} src='assets/xlg.jpeg' alt='cover-image' />
            <Box sx={ homeMainHeaderStyle.wrapper } />

            <Box sx={ homeMainHeaderStyle.textDiv }>
                <Typography component={'h1'}>
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.COMPANY_NAME
                        :
                            TEXT_CONSTANTS.ENG.COMPANY_NAME
                    }
                </Typography>

                <Typography>
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.INDRODUCTION
                        :
                            TEXT_CONSTANTS.ENG.INDRODUCTION
                    }
                </Typography>
            </Box>
        </Box>
    );
}

export default HomeMainHeader;
