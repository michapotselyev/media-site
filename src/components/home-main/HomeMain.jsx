import React from 'react';
import HomeMainHeader from './main-components/HomeMainHeader';
import AboutUs from './main-components/AboutUs';
import OurServices from './main-components/OurServices';
import Client from './main-components/Client';

function HomeMain() {
    return (
        <main>
            <div style={{ background: 'linear-gradient(170deg, #0c0b63 64%, #110f8a 30%)' }}>
                <HomeMainHeader />
            </div>
            
            <div style={{ backgroundColor: 'rgb(17,15,138)', width: '100%', height: '15vh' }}></div>

            <div style={{ backgroundColor: 'rgb(17,15,138)' }}>  
                <AboutUs />
            </div>

            <div style={{ backgroundColor: 'rgb(17,15,138)', width: '100%', height: '35vh' }}></div>

            <div style={{ background: 'linear-gradient(170deg, #110f8a 64%, #0C0B63 30%)' }}>  
                <OurServices />
            </div>

            <div style={{ backgroundColor: '#0C0B63', width: '100%', height: '35vh' }}></div>

            <div style={{ backgroundColor: '#0C0B63' }}>
                <Client />
            </div>

            <div style={{ backgroundColor: '#0C0B63', width: '100%', height: '10vh' }}></div>
        </main>
    );
}

export default HomeMain;
// 0C0B63