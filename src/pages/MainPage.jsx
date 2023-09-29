import React, { useEffect } from 'react';
import Header from '../components/Header';
import HomeMain from '../components/home-main/HomeMain';
import Footer from '../components/Footer';
import TEXT_CONSTANTS from '../text-constants';
import { useMediaQuery } from '@mui/material';
import HeaderMobile from '../components/HeaderMobile';
import FooterMobile from '../components/FooterMobile';

function MainPage() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        document.title = localStorage.getItem('lung') === 'uk' ?
            TEXT_CONSTANTS.UK.PAGE_TITLES.HOME
        :
            TEXT_CONSTANTS.ENG.PAGE_TITLES.HOME
    }, []);

    return (
        <>
            {
                isSmallScreen ?
                    <HeaderMobile />
                :
                    <Header />
            }
            <HomeMain />
            {
                isSmallScreen ?
                    <FooterMobile />
                :
                    <Footer />
            }
        </>
    );
}

export default MainPage;
