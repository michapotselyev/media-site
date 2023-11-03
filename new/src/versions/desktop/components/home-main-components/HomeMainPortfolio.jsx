import React from 'react';
import { Box, Typography } from '@mui/material';
import homeMainPortfolioStyle from '../../../../globalStyles/styles/desktop/components/home-main-portfolio';
import TEXT_CONSTANTS from '../../../../text-constants';
import HomeMainPortfolioSlider from './HomeMainPortfolioSlider';

const slides = [
    <Box sx={[ homeMainPortfolioStyle.slider.item.img, { backgroundImage: 'url(assets/portfolio/education.jpeg)' } ]}>
        <Box sx={ homeMainPortfolioStyle.slider.item.img.wrapperText }>
            <Typography>
                {
                    localStorage.getItem('lung') === 'uk' ?
                        TEXT_CONSTANTS.UK.PORTFOLIO.SECOND_PROJECT.title
                    :
                        TEXT_CONSTANTS.ENG.PORTFOLIO.SECOND_PROJECT.title
                }
            </Typography>
        </Box>
    </Box>,
    <Box sx={[ homeMainPortfolioStyle.slider.item.img, { backgroundImage: 'url(assets/portfolio/sietDevelopment.jpeg)' } ]}>
        <Box sx={ homeMainPortfolioStyle.slider.item.img.wrapperText }>
            <Typography>
                {
                    localStorage.getItem('lung') === 'uk' ?
                        TEXT_CONSTANTS.UK.PORTFOLIO.FIFTH_PROJECT.title
                    :
                        TEXT_CONSTANTS.ENG.PORTFOLIO.FIFTH_PROJECT.title
                }
            </Typography>
        </Box>
    </Box>,
    <Box sx={[ homeMainPortfolioStyle.slider.item.img, { backgroundImage: 'url(assets/portfolio/bank-and-finance.jpeg)' } ]}>
        <Box sx={ homeMainPortfolioStyle.slider.item.img.wrapperText }>
            <Typography>
                {
                    localStorage.getItem('lung') === 'uk' ?
                        TEXT_CONSTANTS.UK.PORTFOLIO.FIRST_PROJECT.title
                    :
                        TEXT_CONSTANTS.ENG.PORTFOLIO.FIRST_PROJECT.title
                }
            </Typography>
        </Box>
    </Box>,
    <Box sx={[ homeMainPortfolioStyle.slider.item.img, { backgroundImage: 'url(assets/portfolio/sales.png)' } ]}>
        <Box sx={ homeMainPortfolioStyle.slider.item.img.wrapperText }>
            <Typography>
                {
                    localStorage.getItem('lung') === 'uk' ?
                        TEXT_CONSTANTS.UK.PORTFOLIO.FOURTH_PROJECT.title
                    :
                        TEXT_CONSTANTS.ENG.PORTFOLIO.FOURTH_PROJECT.title
                }
            </Typography>
        </Box>
    </Box>,
    <Box sx={[ homeMainPortfolioStyle.slider.item.img, { backgroundImage: 'url(assets/portfolio/mettalurg.jpeg)' } ]}>
        <Box sx={ homeMainPortfolioStyle.slider.item.img.wrapperText }>
            <Typography>
                {
                    localStorage.getItem('lung') === 'uk' ?
                        TEXT_CONSTANTS.UK.PORTFOLIO.THIRD_PROJECT.title
                    :
                        TEXT_CONSTANTS.ENG.PORTFOLIO.THIRD_PROJECT.title
                }
            </Typography>
        </Box>
    </Box>,
]

function HomeMainPortfolio() {
    return (
        <Box id='portfolio' component={'section'} sx={ homeMainPortfolioStyle.section }>
            <Typography sx={ homeMainPortfolioStyle.title }>
                {
                    localStorage.getItem('lung') === 'uk' ?
                        TEXT_CONSTANTS.UK.PORTFOLIO.TITLE
                    :
                        TEXT_CONSTANTS.ENG.PORTFOLIO.TITLE
                }
            </Typography>

            <HomeMainPortfolioSlider slides={slides} isSmallScreen={false} />
        </Box>
    );
}

export default HomeMainPortfolio;
