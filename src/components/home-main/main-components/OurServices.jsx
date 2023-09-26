import React, { useEffect, useState } from 'react';
import { Box, Container, Link, Typography } from '@mui/material';
import ourServices from '../../../styles/our-services-prop';
import aboutUs from '../../../styles/about-us';
import CarouselV2 from './Carusel.V1.2';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slides = [
    <Box sx={[ ourServices.slider.item.img, { backgroundImage: 'url(../project/project-image05.jpg)' } ]}>
        <Box sx={ ourServices.slider.item.img.wrapperText }>
            <Box>
                <Typography sx={{ fontSize: '0.8rem', color: '#909090' }}>
                   Мобільні додатки
                </Typography>
                
                <Link sx={{ textDecoration: 'none' }}>
                    <Typography sx={{ fontSize: '1.5rem', color: '#2b099c' }}>
                        Мобільний світ
                    </Typography>
                </Link>
            </Box>

            <Link href='service/5' sx={ ourServices.slider.item.img.wrapperText.arrowContainer }>
                <ArrowForwardIosIcon sx={{ color: 'white' }} />
            </Link>
        </Box>
    </Box>,
    <Box sx={[ ourServices.slider.item.img, { backgroundImage: 'url(../project/project-image01.jpg)' } ]}>
        <Box sx={ ourServices.slider.item.img.wrapperText }>
            <Box>
                <Typography sx={{ fontSize: '0.8rem', color: '#909090' }}>
                    Веб-сайти
                </Typography>
                
                <Link sx={{ textDecoration: 'none' }}>
                    <Typography sx={{ fontSize: '1.5rem', color: '#2b099c' }}>
                        Сайти майбутнього
                    </Typography>
                </Link>
            </Box>

            <Link href='service/1' sx={ ourServices.slider.item.img.wrapperText.arrowContainer }>
                <ArrowForwardIosIcon sx={{ color: 'white' }} />
            </Link>
        </Box>
    </Box>,
    <Box sx={[ ourServices.slider.item.img, { backgroundImage: 'url(../project/project-image02.jpg)' } ]}>
        <Box sx={ ourServices.slider.item.img.wrapperText }>
            <Box>
                <Typography sx={{ fontSize: '0.8rem', color: '#909090' }}>
                    Ліцензування
                </Typography>
                
                <Link sx={{ textDecoration: 'none' }}>
                    <Typography sx={{ fontSize: '1.5rem', color: '#2b099c' }}>
                        Ключ до програм
                    </Typography>
                </Link>
            </Box>

            <Link href='service/2' sx={ ourServices.slider.item.img.wrapperText.arrowContainer }>
                <ArrowForwardIosIcon sx={{ color: 'white' }} />
            </Link>
        </Box>
    </Box>,
    <Box sx={[ ourServices.slider.item.img, { backgroundImage: 'url(../project/project-image03.jpg)' } ]}>
        <Box sx={ ourServices.slider.item.img.wrapperText }>
            <Box>
                <Typography sx={{ fontSize: '0.8rem', color: '#909090' }}>
                    Кібербезпека
                </Typography>
                
                <Link sx={{ textDecoration: 'none' }}>
                    <Typography sx={{ fontSize: '1.5rem', color: '#2b099c' }}>
                        Цифровий щит
                    </Typography>
                </Link>
            </Box>

            <Link href='service/3' sx={ ourServices.slider.item.img.wrapperText.arrowContainer }>
                <ArrowForwardIosIcon sx={{ color: 'white' }} />
            </Link>
        </Box>
    </Box>,
    <Box sx={[ ourServices.slider.item.img, { backgroundImage: 'url(../project/project-image04.jpg)' } ]}>
        <Box sx={ ourServices.slider.item.img.wrapperText }>
            <Box>
                <Typography sx={{ fontSize: '0.8rem', color: '#909090' }}>
                    Розробка <strong>UI</strong>
                </Typography>
                
                <Link sx={{ textDecoration: 'none' }}>
                    <Typography sx={{ fontSize: '1.5rem', color: '#2b099c' }}>
                        Десктопні рішення
                    </Typography>
                </Link>
            </Box>

            <Link href='service/4' sx={ ourServices.slider.item.img.wrapperText.arrowContainer }>
                <ArrowForwardIosIcon sx={{ color: 'white' }} />
            </Link>
        </Box>
    </Box>
]

function OurServices() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY < 1600) {
            setIsVisible(false);
        }

        if (window.scrollY > 1600) {
            setIsVisible(true);
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container id='our-services' maxWidth='xl' sx={ ourServices.container }>
            <Box sx={ aboutUs.backgroundShadow }></Box>
            <Box>
                <img src="../logo.png" alt="background" style={{ opacity: '0.5' }} />
            </Box>

            <Box
                component='section'
                sx={[
                    aboutUs.section,
                    { transition: 'all 0.5s ease-in-out' },
                    isVisible ?
                        { opacity: '1', transform: 'translateY(0)' }
                    :
                        { opacity: '0', transform: 'translateY(100px)' }
                ]}
            >
                <Typography sx={[ aboutUs.title, { margin: '2rem 0 2rem 0' } ]}>
                    Наші послуги
                </Typography>

                <CarouselV2 slides={slides} />
            </Box>
        </Container>
    );
}

export default OurServices;
