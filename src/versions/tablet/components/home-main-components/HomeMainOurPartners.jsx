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
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }
          }>
            <img width={"65%"} src='assets/partners/Metinvest_Logo.png' alt='metinvest' />
            <div
              style={
                {
                  width: "65%",
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }
              }>
              <img width={"33.333%"} src='assets/partners/Dtek-logo.png' alt='dtek' />
              <img width={"33.333%"} src='assets/partners/syavo.jpeg' alt='syavo' />
            </div>
        </Box>
    );
}

export default HomeMainOurPartners;
