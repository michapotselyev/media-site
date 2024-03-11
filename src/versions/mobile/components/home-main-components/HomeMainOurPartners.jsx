import React from 'react';
import { Box } from '@mui/material';

function HomeMainOurPartners() {
    return (
        <Box
          component={'section'}
          sx={
            {
              width: '100%',
              height: '20vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }
          }>
            <img width={200} src='assets/partners/Metinvest_Logo.png' alt='metinvest' />
            <div
              style={
                {
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }
              }>
              <img width={150} src='assets/partners/Dtek-logo.png' alt='dtek' />
              <img width={100} src='assets/partners/syavo.jpeg' alt='syavo' />
            </div>
        </Box>
    );
}

export default HomeMainOurPartners;
