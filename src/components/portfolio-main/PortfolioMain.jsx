import React, { useEffect } from 'react';
import portfolio from '../../styles/portfolio-prop';
import { Box, Container, Grid, Typography } from '@mui/material';

function PortfolioMain() {
    // eslint-disable-next-line
    useEffect(() => { document.title = 'Реалізовані проекти | ОВБК МЕДІА' }, []);

    return (
        <main style={{ background: 'linear-gradient(170deg, #0c0b63 64%, #110f8a 30%)' }}>
            <Container maxWidth='xl' sx={ portfolio.container }>
                <Grid container sx={ portfolio.grid }>
                    <Grid item xs={6} sx={ portfolio.grid.wrapper }>
                        <Box sx={[ portfolio.grid.item, { backgroundImage: 'url(bank-and-finance.jpeg)' } ]}>
                            <Box sx={ portfolio.grid.item.textWrapper }>
                                <Typography sx={ portfolio.grid.item.title }>
                                    Банківській та фінансовий сектор
                                </Typography>

                                <Box sx={ portfolio.grid.item.desription }>
                                    <Typography sx={{ color: 'white' }}>
                                        - Розробка плану та модулю для забезпечення інформаційної безпеки окремих операцій 
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        - Впровадження модулів та методики інформаційної безпеки
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        - Розробка реферальної програми для веб-сайту
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        - Впровадження системи криптовалютних платежів
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        - Створення smart-контракту
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sx={ portfolio.grid.wrapper }>
                        <Box sx={[ portfolio.grid.item, { backgroundImage: 'url(education.jpeg)' } ]}>
                            <Box sx={ portfolio.grid.item.textWrapper }>
                                <Typography sx={ portfolio.grid.item.title }>
                                    Освіта
                                </Typography>

                                <Box sx={ portfolio.grid.item.desription }>
                                    <Typography sx={{ color: 'white' }}>
                                        - Розробка web-додатків навчальних програм 
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        - Розробка додатків для смартфонів і планшетів,
                                        які допомагають  вивчати новий матеріал та практикувати навички.
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        - Створення онлайн-бібліотек, де надається доступ до навчальних
                                        матеріалів, підручників, журналів і наукових досліджень.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sx={ portfolio.grid.wrapper }>
                        <Box sx={[ portfolio.grid.item, { backgroundImage: 'url(mettalurg.jpeg)' } ]}>
                            <Box sx={ portfolio.grid.item.textWrapper }>
                                <Typography sx={ portfolio.grid.item.title }>
                                    Металургія
                                </Typography>

                                <Box sx={ portfolio.grid.item.desription }>
                                    <Typography sx={{ color: 'white' }}>
                                        - Впровадження модулю для поєднання логістичних ланцюгів різних етапів виробництва
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        - Впровадження єдиної системи керування виробничими запасами
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        - Інтеграція впроваджених модулів з обліковою системою підприємства
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sx={ portfolio.grid.wrapper }>
                        <Box sx={[ portfolio.grid.item, { backgroundImage: 'url(sales.png)' } ]}>
                            <Box sx={ portfolio.grid.item.textWrapper }>
                                <Typography sx={ portfolio.grid.item.title }>
                                    Торгівля
                                </Typography>

                                <Box sx={ portfolio.grid.item.desription }>
                                    <Typography sx={{ color: 'white' }}>
                                        - Створення та впровадження клієнтського сервісу для оптової торгівлі
                                        паливом та систематизації логістичних ланцюгів
                                        (онлайн оформлення доставки замовлення до клієнта) 
                                    </Typography>

                                    <Typography sx={{ color: 'white' }}>
                                        - Створення та впровадження корпоративного додатку для функціонування
                                        «електронного складу» матеріалів, створення клієнтського додатку для
                                        оптової торгівлі кольоровими металами та синхронізація обох систем
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

export default PortfolioMain;
