import React, { useEffect } from 'react';
import Header from '../../components/Header';
import HomeMain from '../../components/home-main/HomeMain';
import Footer from '../../components/Footer';

function MainPage() {
    useEffect(() => { document.title = 'Головна | ОВБК МЕДІА' }, []);

    return (
        <>
            <Header />
            <HomeMain />
            <Footer />
        </>
    );
}

export default MainPage;
