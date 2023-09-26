import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import aboutUs from '../../../styles/about-us';
import Carousel from './Carusel';

const slides = [
    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(../Innovation.jpeg)' } ]}>
        <Box sx={ aboutUs.slider.item.img.wrapperText }>
            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Технологічність</Typography>

            <Box >
                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                    - Використовуємо передові технології та інструменти
                </Typography>

                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                    - Впроваджуємо інноваційні рішення для вашого бізнесу
                </Typography>
            </Box>
        </Box>
    </Box>,

    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(../experience-todo.jpeg)' } ]}>
        <Box sx={ aboutUs.slider.item.img.wrapperText }>
            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Досвід</Typography>

            <Box >
                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                    - Більше 5 років на ринку IT-&nbsp;аутсорсингу
                </Typography>

                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                    - Проекти в різних напрямках бізнесу
                </Typography>
            </Box>
        </Box>
    </Box>,

    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(../sm.jpeg)' } ]}>
        <Box sx={ aboutUs.slider.item.img.wrapperText }>
            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Індивідуальний підхід</Typography>

            <Box >
                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                    - Кожен клієнт для нас особливий
                </Typography>

                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                    - Розробляємо індивідуальні стратегії з усіма побажаннями клієнта та з урахуванням нашого досвіду
                </Typography>
            </Box>
        </Box>
    </Box>,

    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(../yakist.jpeg)' } ]}>
        <Box sx={ aboutUs.slider.item.img.wrapperText }>
            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Високі стандарти якості</Typography>

            <Box >
                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                    - Наші рішення відповідають всім стандартам IT
                </Typography>

                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                    - Регулярно вивчаємо та оптимізуємо проекти у відповідності з останніми тенденціями
                </Typography>
            </Box>
        </Box>
    </Box>,
    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(../Hnychkist.jpeg)' } ]}>
        <Box sx={ aboutUs.slider.item.img.wrapperText }>
            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Гнучкість</Typography>

            <Box >
                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                    - Швидко адаптуємося до змін у ринкових умовах
                </Typography>

                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                    - Готові до викликів будь-якої складності
                </Typography>
            </Box>
        </Box>
    </Box>,
    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(../comanda-profof.jpeg)' } ]}>
        <Box sx={ aboutUs.slider.item.img.wrapperText }>
            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Команда професіоналів</Typography>

            <Box >
                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                    - Ми експерти у своїй сфері
                </Typography>

                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                    - Постійно навчаємось та підвищуємо кваліфікацію
                </Typography>
            </Box>
        </Box>
    </Box>
]

function AboutUs() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible31, setIsVisible31] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    const handleScroll = () => {
        if (window.scrollY < 300) {
            setIsVisible(false);
            setIsVisible2(false);
            setIsVisible3(false);
            setIsVisible31(false);
            setIsVisible4(false);
        }

        if (window.scrollY > 300) {
            setIsVisible(true);
        }
        
        if (window.scrollY > 450) {
            setIsVisible2(true);
        }
        
        if (window.scrollY > 700) {
            setIsVisible3(true);
            setIsVisible31(true);
        }

        if (window.scrollY > 900) {
            setIsVisible4(true);
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container maxWidth='xl' sx={ aboutUs.container }>
            <Box sx={ aboutUs.backgroundShadow }></Box>
            <Box>
                <img src="../logo.png" alt="background" style={{ opacity: '0.5' }} />
            </Box>

            <Box component='section' id='about-us' sx={ aboutUs.section }>
                <Typography
                    sx={[
                        aboutUs.title,
                        isVisible ?
                            { opacity: '1', transform: 'translateY(0)' }
                        :
                            { opacity: '0', transform: 'translateY(100px)' }
                    ]}
                >
                    Про нас
                </Typography>

                <Typography
                    sx={[
                        aboutUs.description,
                        isVisible2 ?
                            { opacity: '1', transform: 'translateY(0)' }
                        :
                            { opacity: '0', transform: 'translateY(100px)' }
                    ]}
                >
                    Команда ОВБК МЕДІА працює з 2017 року. За цей час були успішно
                    реалізовані проекти для компаній з банківського та фінансового секторів,
                    паливного та металургійного бізнесів, в сфері освіти
                </Typography>

                <Typography
                    sx={[
                        aboutUs.ourDiff,
                        isVisible3 ?
                            { opacity: '1', transform: 'translateY(0)' }
                        :
                            { opacity: '0', transform: 'translateY(100px)' }
                    ]}
                >
                    Наші переваги
                </Typography>
                
                <Box
                    sx={[
                        { transition: 'all 0.5s ease-in-out' },
                        isVisible31 ?
                            { opacity: '1', transform: 'translateY(0)' }
                        :
                            { opacity: '0', transform: 'translateY(100px)' }
                    ]}
                >
                    <Carousel slides={slides} />
                </Box>

                <Box
                    sx={[
                        aboutUs.bottomImage,
                        isVisible4 ?
                            { opacity: '1', transform: 'translateY(0)' }
                        :
                            { opacity: '0', transform: 'translateY(100px)' }
                    ]}
                >
                    <img src="../office-removebg-preview.png" alt="office png"  />
                </Box>
            </Box>
        </Container>
    );
}

export default AboutUs;
