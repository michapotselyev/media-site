import React, { useEffect, useState } from 'react';
import '../../../styles/title-styles.css';
import { Container, Typography, useMediaQuery } from '@mui/material';
import { animated, useSpring } from 'react-spring';
import homeMainProp from '../../../styles/home-main-prop';
import TEXT_CONSTANTS from '../../../text-constants';

function HomeMainHeader() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const fadeAnimation = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(100px)',
        width: isSmallScreen ? '100%' : '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        config: { duration: 500 }
    });

    const fadeAnimation2 = useSpring({
        opacity: isVisible2 ? 1 : 0,
        transform: isVisible2 ? 'translateY(0px)' : 'translateY(100px)',
        width: isSmallScreen ? '100%' : '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        config: { duration: 400 }
    });

    const handleScroll = () => {
        if (window.scrollY >= 0) {
            setIsVisible(true);

            setTimeout(() => {
                setIsVisible2(true);
            }, 500)
        } else {
            setIsVisible(false);
        }
    };
    
    useEffect(() => {
        if (window.screenTop >= 0) {
            setIsVisible(true);

            setTimeout(() => {
                setIsVisible2(true);
            }, 500)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container maxWidth='xl' sx={[ homeMainProp.container, { flexDirection: isSmallScreen ? 'column' : 'row' } ]}>
            <animated.div style={ fadeAnimation }>
                <Typography sx={[ homeMainProp.title, { fontSize: isSmallScreen ? '2.5rem' : '3.2rem' } ]} id='title'>
                    ОВБК МЕДІА
                </Typography>

                <Typography sx={[ homeMainProp.text, { fontSize: isSmallScreen ? '2.1rem' : '2.8rem' } ]}>
                    {
                        localStorage.getItem('lung') === 'uk' ?
                            TEXT_CONSTANTS.UK.INDRODUCTION
                        :
                            TEXT_CONSTANTS.ENG.INDRODUCTION
                    }
                </Typography>
            </animated.div>

            <animated.div style={fadeAnimation2}>
                <img src="../men-working.jpg" alt="Working Men" />
            </animated.div>
        </Container>
    );
}

export default HomeMainHeader;
