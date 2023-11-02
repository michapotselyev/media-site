import React from 'react';
import HomeMainHeader from './home-main-components/HomeMainHeader';
import HomeMainAboutUs from './home-main-components/HomeMainAboutUs';
import HomeMainOurAdvantages from './home-main-components/HomeMainOurAdvantages';

function HomeMainMobile() {
    return (
        <main>
            <HomeMainHeader />
            <HomeMainAboutUs />
            <HomeMainOurAdvantages />
        </main>
    );
}

export default HomeMainMobile;
