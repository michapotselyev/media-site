import React from 'react';
import HomeMainHeader from './main-components/HomeMainHeader';
import AboutUs from './main-components/AboutUs';
import OurServices from './main-components/OurServices';
import Client from './main-components/Client';
import Portfolio from './main-components/Portfolio';

function HomeMain() {
    return (
        <main>
            <div style={{ background: 'linear-gradient(170deg, #0c0b63 64%, #110f8a 30%)', position: 'relative' }}>
                <div style={{ position: 'absolute', width: '100%', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} ></div>

                <HomeMainHeader />
            </div>
            
            <div style={{ backgroundColor: 'rgb(17,15,138)', width: '100%', height: '15vh' }}>
                <div style={{ position: 'absolute', width: '100%', height: '15vh', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} ></div>
            </div>

            <div style={{ backgroundColor: 'rgb(17,15,138)' }}>
                <div style={{ position: 'absolute', width: '100%', height: '130vh', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} ></div>
                <AboutUs />
            </div>

            <div style={{ backgroundColor: 'rgb(17,15,138)', width: '100%', height: '35vh' }}>
                <div style={{ position: 'absolute', width: '100%', height: '35vh', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} ></div>
            </div>

            <div style={{ background: 'linear-gradient(170deg, #110f8a 64%, #0C0B63 30%)' }}> 
                <div style={{ position: 'absolute', width: '100%', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} ></div> 
                <OurServices />
            </div>

            <div style={{ backgroundColor: '#0C0B63', width: '100%', height: '35vh' }}>
                <div style={{ position: 'absolute', width: '100%', height: '35vh', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} ></div>
            </div>

            <div style={{ backgroundColor: '#0C0B63' }}>
                <div style={{ position: 'absolute', width: '100%', height: '50vh', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} ></div> 
                <Client />
            </div>

            <div style={{ backgroundColor: '#0C0B63', width: '100%', height: '40vh' }}>
                <div style={{ position: 'absolute', width: '100%', height: '40vh', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} ></div>
            </div>

            <div style={{ backgroundColor: '#0C0B63', position: 'relative' }}>
                <div style={{ position: 'absolute', width: '100%', minHeight: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} ></div> 
                <Portfolio />
            </div>

            <div style={{ backgroundColor: '#0C0B63', width: '100%', height: '30vh' }}>
                <div style={{ position: 'absolute', width: '100%', height: '30vh', backgroundColor: 'rgba(0, 0, 0, 0.2)' }} ></div> 
            </div>
        </main>
    );
}

export default HomeMain;
// 0C0B63