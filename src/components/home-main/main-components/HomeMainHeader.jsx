import React, { useEffect, useState } from 'react';
import '../../../styles/title-styles.css';
import { Container, Typography } from '@mui/material';
import { animated, useSpring } from 'react-spring';
import homeMainProp from '../../../styles/home-main-prop';

function HomeMainHeader() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const fadeAnimation = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(100px)',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        config: { duration: 500 }
    });

    const fadeAnimation2 = useSpring({
        opacity: isVisible2 ? 1 : 0,
        transform: isVisible2 ? 'translateY(0px)' : 'translateY(100px)',
        width: '50%',
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
        if (window.screenTop === 0) {
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
        <Container maxWidth='xl' sx={ homeMainProp.container }>
            <animated.div style={ fadeAnimation }>
                <Typography sx={ homeMainProp.title } id='title'>
                    ОВБК МЕДІА
                </Typography>

                <Typography sx={ homeMainProp.text }>
                    З нами інновації для вашого бізнесу без кордонів
                </Typography>
            </animated.div>

            <animated.div style={fadeAnimation2}>
                <img src="../working-girl.png" alt="Working Girl" />
            </animated.div>
        </Container>
    );
}

export default HomeMainHeader;
