import React, { useEffect } from 'react';
import Header from '../components/Header';
import HomeMain from '../components/home-main/HomeMain';
import Footer from '../components/Footer';
import TEXT_CONSTANTS from '../text-constants';

function MainPage() {
    useEffect(() => {
        document.title = localStorage.getItem('lung') === 'uk' ?
            TEXT_CONSTANTS.UK.PAGE_TITLES.HOME
        :
            TEXT_CONSTANTS.ENG.PAGE_TITLES.HOME
    }, []);

    return (
        <>
            <Header />
            <HomeMain />
            <Footer />
        </>
    );
}

export default MainPage;
