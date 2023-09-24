import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import aboutUs from '../../../styles/about-us';
import Carousel from './Carusel';

const slides = [
    <Box>16</Box>,
    <Box>11</Box>,
    <Box>12</Box>,
    <Box>13</Box>,
    <Box>14</Box>,
    <Box>15</Box>,
]

function AboutUs() {
    return (
        <Container maxWidth='xl' sx={ aboutUs.container }>
            <Box sx={ aboutUs.backgroundShadow }></Box>
            <Box>
                <img src="logo.png" alt="background" style={{ opacity: '0.5' }} />
            </Box>

            <Box component='section' id='about-us' sx={ aboutUs.section }>
                <Typography sx={ aboutUs.title }>Про нас</Typography>

                <Typography sx={ aboutUs.description }>
                    Команда ОВБК МЕДІА працює з 2017 року. За цей час були успішно
                    реалізовані проекти для компаній з банківського та фінансового секторів,
                    паливного та металургійного бізнесів, в сфері освіти
                </Typography>

                <Typography sx={ aboutUs.ourDiff }>Наші переваги</Typography>

                <Carousel slides={slides} />
            </Box>
        </Container>
    );
}

export default AboutUs;

//<Box sx={ aboutUs.slider }>
     //               {
      //                  slides.map(e => {
      //                      return (
     //                           <React.Fragment key={e.key}>
    //                                {e}
    //                            </React.Fragment>
    //                        )
    //                    })
     //               }
//                </Box>

// <Grid container>
 //                    <Grid item xs={3} sx={{ border: '1px solid black', height: '25vw' }}>
// 
   //                  </Grid>
// 
    //                 <Grid item xs={3} sx={{ border: '1px solid black', height: '25vw' }}>
// 
    //                 </Grid>
// 
    //                 <Grid item xs={3} sx={{ border: '1px solid black', height: '25vw' }}>
// 
     //                </Grid>
// 
    //                 <Grid item xs={3} sx={{ border: '1px solid black', height: '25vw' }}>
// 
      //               </Grid>
       //          </Grid>
