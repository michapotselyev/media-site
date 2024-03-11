import React from 'react';
import HomeMainHeader from './home-main-components/HomeMainHeader';
import HomeMainAboutUs from './home-main-components/HomeMainAboutUs';
import HomeMainOurAdvantages from './home-main-components/HomeMainOurAdvantages';
import HomeMainOurServices from './home-main-components/HomeMainOurServices';
import HomeMainOurClient from './home-main-components/HomeMainOurClient';
import HomeMainPortfolio from './home-main-components/HomeMainPortfolio';
import HomeMainOurPartners from './home-main-components/HomeMainOurPartners';
import HomeMainContactUs from './home-main-components/HomeMainContactUs';

function HomeMainTablet() {
    return (
        <main>
            <HomeMainHeader />
            <HomeMainAboutUs />
            <HomeMainOurAdvantages />
            <HomeMainOurServices />
            <HomeMainOurClient />
            <HomeMainPortfolio />
            <HomeMainOurPartners />
            <HomeMainContactUs />
        </main>
    );
}

export default HomeMainTablet;
