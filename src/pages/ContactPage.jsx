import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactMain from '../components/contact-main/ContactMain';
import { useMediaQuery } from '@mui/material';
import HeaderMobile from '../components/HeaderMobile';
import FooterMobile from '../components/FooterMobile';

function ContactPage() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <>
            {
                isSmallScreen ?
                    <HeaderMobile />
                :
                    <Header />
            }
            <ContactMain />
            {
                isSmallScreen ?
                    <FooterMobile />
                :
                    <Footer />
            }
        </>
    );
}

export default ContactPage;
