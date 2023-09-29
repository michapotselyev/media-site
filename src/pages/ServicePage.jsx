import React from 'react';
import Header from '../components/Header';
import ServiceMain from '../components/service-main/ServiceMain';
import Footer from '../components/Footer';
import { useMediaQuery } from '@mui/material';
import HeaderMobile from '../components/HeaderMobile';
import FooterMobile from '../components/FooterMobile';

function ServicePage() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <>
            {
                isSmallScreen ?
                    <HeaderMobile />
                :
                    <Header />
            }
            <ServiceMain />
            {
                isSmallScreen ?
                    <FooterMobile />
                :
                    <Footer />
            }
        </>
    );
}

export default ServicePage;
