import React from 'react';
import { Box, Typography } from '@mui/material';
import homeMainHeaderStyle from '../../../../globalStyles/styles/mobile/components/home-main-header-prop';

function HomeMainHeader() {
    return (
        <Box component={'header'} sx={ homeMainHeaderStyle.header }>
            <Box component={'img'} src='assets/xlg.jpeg' alt='cover-image' />
            <Box sx={ homeMainHeaderStyle.wrapper } />

            <Box sx={ homeMainHeaderStyle.textDiv }>
                <Typography component={'h1'}>
                    ОВБК МЕДІА
                </Typography>

                <Typography>
                    З нами інновації для вашого бізнесу без кордонів
                </Typography>
            </Box>
        </Box>
    );
}

export default HomeMainHeader;
