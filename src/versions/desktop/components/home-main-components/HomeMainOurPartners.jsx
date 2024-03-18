import React from 'react';
import { Box } from '@mui/material';

function HomeMainOurPartners() {
    return (
        <Box
          component={'section'}
          sx={
            {
              width: '100%',
              height: '30vh',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }
          }>
            <img width={110} src='assets/partners/Dtek-logo.png' alt='dtek' />
            <img width={160} src='assets/partners/Metinvest_Logo.png' alt='metinvest' />
            <img width={110} src='assets/partners/syavo.jpeg' alt='syavo' />
            <img width={90} src='assets/partners/kmz-cropped.svg' alt='kmz' />
        </Box>
    );
}

export default HomeMainOurPartners;
