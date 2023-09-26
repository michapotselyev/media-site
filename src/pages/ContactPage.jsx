import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactMain from '../components/contact-main/ContactMain';

function ContactPage() {
    // eslint-disable-next-line
    useEffect(() => { document.title = 'Зв\'язатися з нами | ОВБК МЕДІА' }, []);

    return (
        <>
            <Header />
            <ContactMain />
            <Footer />
        </>
    );
}

export default ContactPage;
