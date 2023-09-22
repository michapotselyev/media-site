import React, { useEffect } from 'react';
import Header from '../../components/Header';
import HomeMain from '../../components/home-main/HomeMain';

function MainPage() {
    useEffect(() => { document.title = 'Головна | ОВБК МЕДІА' }, []);

    return (
        <>
            <Header />
            <HomeMain />
        </>
    );
}

export default MainPage;
