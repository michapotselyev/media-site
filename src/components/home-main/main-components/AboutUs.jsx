import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import aboutUs from '../../../styles/about-us';
import Carousel from './Carusel';

const slides = [
    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(Innovation.jpeg)' } ]}>
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

    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(experience-todo.jpeg)' } ]}>
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

    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(sm.jpeg)' } ]}>
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

    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(yakist.jpeg)' } ]}>
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
    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(Hnychkist.jpeg)' } ]}>
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
    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(comanda-profof.jpeg)' } ]}>
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
    return (
        <Container maxWidth='xl' sx={ aboutUs.container }>
            <Box sx={ aboutUs.backgroundShadow }></Box>
            <Box>
                <img src="logo.png" alt="background" style={{ opacity: '0.5' }} />
            </Box>

            <Box component='section' id='about-us' sx={ aboutUs.section }>
                <Typography sx={ aboutUs.title }>Про нас</Typography>

                <Typography sx={ aboutUs.description }>
                    Команда ОВБК МЕДІА працює з 2017 року. За цей час були успішно
                    реалізовані проекти для компаній з банківського та фінансового секторів,
                    паливного та металургійного бізнесів, в сфері освіти
                </Typography>

                <Typography sx={ aboutUs.ourDiff }>Наші переваги</Typography>

                <Carousel slides={slides} />

                <Box sx={ aboutUs.bottomImage }>
                    <img src="office-removebg-preview.png" alt="office png"  />
                </Box>
            </Box>
        </Container>
    );
}

export default AboutUs;
