import React from 'react';
import Header from '../components/Header';
import PortfolioMain from '../components/portfolio-main/PortfolioMain';
import Footer from '../components/Footer';
import { useMediaQuery } from '@mui/material';
import HeaderMobile from '../components/HeaderMobile';
import FooterMobile from '../components/FooterMobile';

function PortfolioPage() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <>
            {
                isSmallScreen ?
                    <HeaderMobile />
                :
                    <Header />
            }
            <PortfolioMain />
            {
                isSmallScreen ?
                    <FooterMobile />
                :
                    <Footer />
            }
        </>
    );
}

export default PortfolioPage;
