import React from 'react';
import HomeMainHeader from './main-components/HomeMainHeader';
import AboutUs from './main-components/AboutUs';
import OurServices from './main-components/OurServices';

function HomeMain() {
    return (
        <main>
            <div style={{ background: 'linear-gradient(170deg, #0c0b63 64%, #110f8a 30%)' }}>
                <HomeMainHeader />
            </div>

            <div style={{ backgroundColor: 'rgb(17,15,138)' }}>  
                <AboutUs />
            </div>

            <div style={{ background: 'linear-gradient(170deg, #110f8a 64%, #0C0B63 30%)' }}>  
                <OurServices />
            </div>
        </main>
    );
}

export default HomeMain;
// 0C0B63