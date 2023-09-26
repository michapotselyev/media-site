import { Box, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import service from '../../styles/service-prop';

const serviceData = {
    "1": {
        url: '../project/project-image01.jpg',
        title: 'Веб-сайти: Сайти майбутнього',
        description: {
            p1: 'Наша команда професіоналів готова надати вам найкращі рішення для вдосконалення вашого бізнесу через сучасний та ефективний веб-простір',
            p2: 'Кожен сайт, який ми створюємо, - це майстерність та інновації в дії',
            p3: 'Ми ретельно вивчаємо ваші потреби та бізнес-цілі, щоб забезпечити рішення, яке відповідає найвищим стандартам'
        }
    },
    "2": {
        url: '../project/project-image02.jpg',
        title: 'Ліцензування: Ключ до програм',
        description: {
            p1: 'Ви можете легко відстежувати ліцензії, оновлення та активації',
            p2: 'Ми пропонуємо послуги ліцензування ключів до програм, які забезпечують максимальний рівень захисту та зручності',
            p3: 'Наші системи ліцензування дають вам повний контроль над розповсюдженням та використанням програм'
        }
    },
    "3": {
        url: '../project/project-image03.jpg',
        title: 'Кібербезпека: Цифровий щит',
        description: {
            p1: 'Наші цифрові щити постійно оновлюються, щоб бути на крок попереду перед потенційними загрозами',
            p2: 'Наша компанія використовує передові технології та методи для виявлення та запобігання кіберзагрозам',
            p3: 'Ми спеціалізуємося на створенні надійних цифрових щитів, які захищають ваш бізнес від сьогоднішніх кіберзагроз'
        }
    },
    "4": {
        url: '../project/project-image04.jpg',
        title: 'Розробка UI: Десктопні рішення',
        description: {
            p1: 'Наша команда професіоналів спеціалізується на розробці UI, які не лише ефективні, але й вражають своєю користувацькою дружністю та естетикою',
            p2: 'Ми маємо досвід у розробці десктопних UI для різних галузей, що дає нам унікальний погляд  на проекти',
            p3: 'Використовуємо передові дизайнерські підходи та тренди, щоб створювати UI, які виглядають сучасно, наші UI не лише красиві, але і практичні'
        }
    },
    "5": {
        url: '../project/project-image05.jpg',
        title: 'Мобільні додатки: Мобільний світ',
        description: {
            p1: 'Розробляємо сучасні та інноваційні мобільні додатки, які забезпечують функціональність',
            p2: 'Створюємо зручні інтерфейси для вашої цільової аудиторії, спрощуючи взаємодію та підвищуючи залученість користувачів',
            p3: 'Допомагаємо визначити ваші потреби, розробляємо додаток та забезпечуємо його підтримку та оновлення'
        }
    }
};

function ServiceMain() {
    const { id } = useParams();

    if (isNaN(id) || id <= 0 || id > 5) {
        window.location.assign('/error');
        return null;
    }

    const currentService = serviceData[id];
    
    // eslint-disable-next-line
    useEffect(() => { document.title = currentService.title }, []);

    return (
        <main style={{ background: 'linear-gradient(170deg, #0c0b63 64%, #110f8a 30%)' }}>
            <Container maxWidth='xl' sx={ service.container }>
                <Box sx={ service.wrapper }>
                    <Box sx={ service.imageWrapper }>
                        <img src={ currentService.url } alt="service-preview" />
                    </Box>

                    <Box sx={ service.textWrapper }>
                        <Typography sx={ service.title }>
                            { currentService.title }
                        </Typography>

                        <Box sx={ service.description }>
                            <Box sx={ service.description.paragraph }>
                                <span style={ service.description.paragraph.marker }>&#9737;</span>
                                <Typography>
                                    { currentService.description.p1 }
                                </Typography>
                            </Box>

                            <Box sx={ service.description.paragraph }>
                                <span style={ service.description.paragraph.marker }>&#9737;</span>
                                <Typography>
                                    { currentService.description.p2 }
                                </Typography>
                            </Box>

                            <Box sx={ service.description.paragraph }>
                                <span style={ service.description.paragraph.marker }>&#9737;</span>
                                <Typography>
                                    { currentService.description.p3 }
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </main>
    );
}

export default ServiceMain;
