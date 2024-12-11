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
              }
            }
          >
            <div
              style={
                {
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: "0 5rem",
                }
              }
            >
              <img style={{ width: "50%", padding: "1rem" }} src='assets/partners/Metinvest_Logo.png' alt='metinvest' />

              <img style={{ width: "50%", padding: "1rem"   }}  src='assets/partners/Dtek-logo.png' alt='dtek' />
            </div>

            <div
              style={
                {
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: "0 5rem",
                }
              }
            >
              <img style={{ width: "50%", padding: "1rem"  }}  src='assets/partners/syavo.jpeg' alt='syavo' />

              <img style={{ width: "50%", padding: "1rem"  }}  src='assets/partners/kmz-cropped.svg' alt='kmz' />
            </div>
        </Box>
    );
}

export default HomeMainOurPartners;
