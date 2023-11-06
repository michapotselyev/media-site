import React from 'react';
import { useMediaQuery } from '@mui/material';

import Header from './desktop/layout/Header';
import HeaderTablet from './tablet/layout/HeaderTablet';
import HeaderMobile from './mobile/layout/HeaderMobile';

import Footer from './desktop/layout/Footer';
import FooterTablet from './tablet/layout/FooterTablet';
import FooterMobile from './mobile/layout/FooterMobile';

import HomeMain from './desktop/components/HomeMain';
import HomeMainTablet from './tablet/components/HomeMainTablet';
import HomeMainMobile from './mobile/components/HomeMainMobile';

import ServiceMain from './desktop/components/ServiceMain';
import ServiceMainTablet from './tablet/components/ServiceMainTablet';
import ServiceMainMobile from './mobile/components/ServiceMainMobile';

import ErrorMain from './desktop/components/ErrorMain';
import ErrorMainTablet from './tablet/components/ErrorMainTablet';
import ErrorMainMobile from './mobile/components/ErrorMainMobile';

function Versions({ page }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:960px)');
    
    switch (page) {
        case 'main':
            return (
                <>
                    { isMobile ? <HeaderMobile /> : isTablet ? <HeaderTablet /> : <Header /> }
                    { isMobile ? <HomeMainMobile /> : isTablet ? <HomeMainTablet /> : <HomeMain /> }
                    { isMobile ? <FooterMobile /> : isTablet ? <FooterTablet /> : <Footer /> }
                </>
            );
        
        case 'service':
            return (
                <>
                    { isMobile ? <HeaderMobile /> : isTablet ? <HeaderTablet /> : <Header /> }
                    { isMobile ? <ServiceMainMobile /> : isTablet ? <ServiceMainTablet /> : <ServiceMain /> }
                    { isMobile ? <FooterMobile /> : isTablet ? <FooterTablet /> : <Footer /> }
                </>
            );
        
        default:
            return (
                <>
                    { isMobile ? <HeaderMobile /> : isTablet ? <HeaderTablet /> : <Header /> }
                    { isMobile ? <ErrorMainMobile /> : isTablet ? <ErrorMainTablet /> : <ErrorMain /> }
                    { isMobile ? <FooterMobile /> : isTablet ? <FooterTablet /> : <Footer /> }
                </>
            );
    }
}

export default Versions;
