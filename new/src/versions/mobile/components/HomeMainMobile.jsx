import React from 'react';
import HomeMainHeader from './home-main-components/HomeMainHeader';
import HomeMainAboutUs from './home-main-components/HomeMainAboutUs';
import HomeMainOurAdvantages from './home-main-components/HomeMainOurAdvantages';
import HomeMainOurServices from './home-main-components/HomeMainOurServices';

function HomeMainMobile() {
    return (
        <main>
            <HomeMainHeader />
            <HomeMainAboutUs />
            <HomeMainOurAdvantages />
            <HomeMainOurServices />
        </main>
    );
}

export default HomeMainMobile;
