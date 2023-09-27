import { Box, Typography,Link } from "@mui/material";
import aboutUs from "./styles/about-us";
import ourServices from "./styles/our-services-prop";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TEXT_CONSTANTS = {
    UK: {
        PAGE_TITLES: {
            HOME: 'Головна | ОВБК МЕДІА',
            PORTFOLIO: 'Реалізовані проекти | ОВБК МЕДІА',
            CONTACT_US: 'Зв\'язатися з нами | ОВБК МЕДІА'
        },
        HEADER: {
            FIRST_ROUTE: 'Про нас',
            SECOND_ROUTE: 'Наші послуги',
            THIRD_ROUTE: 'Реалізовані проекти',
            BUTTON: 'Зв\'язатися з нами'
        },
        INDRODUCTION: 'З нами інновації для вашого бізнесу без кордонів',
        ABOUT_US: {
            title: 'Про нас',
            description: 'Команда ОВБК МЕДІА працює з 2017 року. За цей час були успішно реалізовані проекти для компаній з банківського та фінансового секторів, паливного та металургійного бізнесів, в сфері освіти',
            OUR_ADVANTAGES: {
                title: 'Наші переваги',
                slides: [
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
            }
        },
        OUR_SERVICE: {
            title: 'Наші послуги',
            slides: [
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
        },
        SERVICE_DATA: {
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
        },
        CLIENT: {
            title: 'КОЖЕН КЛІЄНТ - НАШ ПРІОРИТЕТ',
            description: 'Ми цінуємо довіру наших клієнтів і завжди прагнемо відповідати їхнім очікуванням. Наша команда зосереджена на вашому успіху, адаптуючись до ваших потреб і швидко реагуючи на запити. Ваше задоволення - наша мета',
            author: 'ТОВ'
        },
        PORTFOLIO: {
            FIRST_PROJECT: {
                title: 'Банківській та фінансовий сектор',
                p1: '- Розробка плану та модулю для забезпечення інформаційної безпеки окремих операцій',
                p2: '- Впровадження модулів та методики інформаційної безпеки',
                p3: '- Розробка реферальної програми для веб-сайту',
                p4: '- Впровадження системи криптовалютних платежів',
                p5: '- Створення smart-контракту'
            },
            SECOND_PROJECT: {
                title: 'Освіта',
                p1: '- Розробка web-додатків навчальних програм',
                p2: '- Розробка додатків для смартфонів і планшетів, які допомагають  вивчати новий матеріал та практикувати навички',
                p3: '- Створення онлайн-бібліотек, де надається доступ до навчальних матеріалів, підручників, журналів і наукових досліджень'
            },
            THIRD_PROJECT: {
                title: 'Металургія',
                p1: '- Впровадження модулю для поєднання логістичних ланцюгів різних етапів виробництва',
                p2: '- Впровадження єдиної системи керування виробничими запасами',
                p3: '- Інтеграція впроваджених модулів з обліковою системою підприємства'
            },
            FOURTH_PROJECT: {
                title: 'Торгівля',
                p1: '- Створення та впровадження клієнтського сервісу для оптової торгівлі паливом та систематизації логістичних ланцюгів (онлайн оформлення доставки замовлення до клієнта)',
                p2: '- Створення та впровадження корпоративного додатку для функціонування «електронного складу» матеріалів, створення клієнтського додатку для оптової торгівлі кольоровими металами та синхронізація обох систем',
                
            },
        },
        CONTACT_US: {
            title: 'Зв\'язатися з',
            subtitle: 'чи напишіть самостійно office@ovbkmedia.com',
            plchName: 'Ім\'я',
            plchEmail: 'Пошта',
            plchMessage: 'Повідомлення',
            button: 'Надіслати лист'
        },
        FOOTER: {
            title1: 'Тільки ',
            title2: ' рішення.',
            specialWord: 'креативні',
            subtitle1: 'КОНТАКТНА ІНФОРМАЦІЯ',
            subtitle2: 'ОФІС',
            place: 'Вул Алмазова Генерала буд. 4, оф. 6, м Київ',
            route1: 'Історії',
            route2: 'Співпраця',
            route3: 'Конфедіційність',

        }
    },
    ENG: {
        PAGE_TITLES: {
            HOME: 'Home | ОВБК МЕДІА',
            PORTFOLIO: 'Implemented projects | ОВБК МЕДІА',
            CONTACT_US: 'Contact with us | ОВБК МЕДІА'
        },
        HEADER: {
            FIRST_ROUTE: 'About us',
            SECOND_ROUTE: 'Our Services',
            THIRD_ROUTE: 'Implemented projects',
            BUTTON: 'Contact with us'
        },
        INDRODUCTION: 'With us, innovation knows no boundaries for your business',
        ABOUT_US: {
            title: 'About us',
            description: 'The ОВБК МЕДІА team has been working since 2017. During this time, successful projects have been implemented for companies in the banking and financial sectors, as well as in the fuel and metallurgical industries, and in the field of education',
            OUR_ADVANTAGES: {
                title: 'Our advantages',
                slides: [
                    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(../Innovation.jpeg)' } ]}>
                        <Box sx={ aboutUs.slider.item.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Technological Excellence</Typography>
                
                            <Box >
                                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                                    - We utilize cutting-edge technologies and tools
                                </Typography>
                
                                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                                    - Implement innovative solutions for your business
                                </Typography>
                            </Box>
                        </Box>
                    </Box>,
                
                    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(../experience-todo.jpeg)' } ]}>
                        <Box sx={ aboutUs.slider.item.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Experience</Typography>
                
                            <Box >
                                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                                    - Over 5 years in the IT outsourcing market
                                </Typography>
                
                                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                                    - Projects in various business domains
                                </Typography>
                            </Box>
                        </Box>
                    </Box>,
                
                    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(../sm.jpeg)' } ]}>
                        <Box sx={ aboutUs.slider.item.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Individual Approach</Typography>
                
                            <Box >
                                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                                    - Every client is special to us
                                </Typography>
                
                                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                                    - We develop individual strategies tailored to client preferences and our expertise
                                </Typography>
                            </Box>
                        </Box>
                    </Box>,
                
                    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(../yakist.jpeg)' } ]}>
                        <Box sx={ aboutUs.slider.item.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>High Quality Standards</Typography>
                
                            <Box >
                                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                                    - Our solutions meet all IT standards
                                </Typography>
                
                                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                                    - We regularly study and optimize projects in line with the latest trends
                                </Typography>
                            </Box>
                        </Box>
                    </Box>,
                    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(../Hnychkist.jpeg)' } ]}>
                        <Box sx={ aboutUs.slider.item.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Flexibility</Typography>
                
                            <Box >
                                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                                    - Quick adaptation to changing market conditions
                                </Typography>
                
                                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                                    - Ready for challenges of any complexity
                                </Typography>
                            </Box>
                        </Box>
                    </Box>,
                    <Box sx={[ aboutUs.slider.item.img, { backgroundImage: 'url(../comanda-profof.jpeg)' } ]}>
                        <Box sx={ aboutUs.slider.item.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>Professional Team</Typography>
                
                            <Box >
                                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                                    - We are experts in our field
                                </Typography>
                
                                <Typography sx={{ color: 'white', fontSize: '1.08rem', textAlign: 'center' }}>
                                    - We constantly learn and improve our qualifications
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ]
            }
        },
        OUR_SERVICE: {
            title: 'Our Services',
            slides: [
                <Box sx={[ ourServices.slider.item.img, { backgroundImage: 'url(../project/project-image05.jpg)' } ]}>
                    <Box sx={ ourServices.slider.item.img.wrapperText }>
                        <Box>
                            <Typography sx={{ fontSize: '0.8rem', color: '#909090' }}>
                                Mobile Apps
                            </Typography>
                            
                            <Link sx={{ textDecoration: 'none' }}>
                                <Typography sx={{ fontSize: '1.5rem', color: '#2b099c' }}>
                                    Mobile World
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
                                Websites
                            </Typography>
                            
                            <Link sx={{ textDecoration: 'none' }}>
                                <Typography sx={{ fontSize: '1.5rem', color: '#2b099c' }}>
                                    Future Websites
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
                                Licensing
                            </Typography>
                            
                            <Link sx={{ textDecoration: 'none' }}>
                                <Typography sx={{ fontSize: '1.5rem', color: '#2b099c' }}>
                                    Key to Software
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
                                Cybersecurity
                            </Typography>
                            
                            <Link sx={{ textDecoration: 'none' }}>
                                <Typography sx={{ fontSize: '1.5rem', color: '#2b099c' }}>
                                    Digital Shield
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
                                <strong>UI</strong> Development
                            </Typography>
                            
                            <Link sx={{ textDecoration: 'none' }}>
                                <Typography sx={{ fontSize: '1.5rem', color: '#2b099c' }}>
                                    Desktop Solutions
                                </Typography>
                            </Link>
                        </Box>
            
                        <Link href='service/4' sx={ ourServices.slider.item.img.wrapperText.arrowContainer }>
                            <ArrowForwardIosIcon sx={{ color: 'white' }} />
                        </Link>
                    </Box>
                </Box>
            ]
        },
        SERVICE_DATA: {
            "1": {
                "url": '../project/project-image01.jpg',
                "title": 'Websites: Websites of the Future',
                "description": {
                    "p1": 'Our team of professionals is ready to provide you with the best solutions to enhance your business through the modern and efficient web space',
                    "p2": 'Every website we create is a mastery and innovation in action',
                    "p3": 'We thoroughly study your needs and business goals to provide a solution that meets the highest standards'
                }
            },
            "2": {
                "url": '../project/project-image02.jpg',
                "title": 'Licensing: Key to Software',
                "description": {
                    "p1": 'You can easily track licenses, updates, and activations',
                    "p2": 'We offer key licensing services that provide maximum security and convenience',
                    "p3": 'Our licensing systems give you full control over the distribution and use of software'
                }
            },
            "3": {
                "url": '../project/project-image03.jpg',
                "title": 'Cybersecurity: Digital Shield',
                "description": {
                    "p1": 'Our digital shields are constantly updated to stay one step ahead of potential threats',
                    "p2": 'Our company uses advanced technologies and methods to detect and prevent cyber threats',
                    "p3": 'We specialize in creating reliable digital shields that protect your business from today\'s cyber threats'
                }
            },
            "4": {
                "url": '../project/project-image04.jpg',
                "title": 'UI Development: Desktop Solutions',
                "description": {
                    "p1": 'Our team of professionals specializes in UI development that is not only effective but also impresses with user-friendliness and aesthetics',
                    "p2": 'We have experience in developing desktop UIs for various industries, giving us a unique perspective on projects',
                    "p3": 'We use advanced design approaches and trends to create UIs that look modern, our UIs are not only beautiful but also practical'
                }
            },
            "5": {
                "url": '../project/project-image05.jpg',
                "title": 'Mobile Apps: Mobile World',
                "description": {
                    "p1": 'We develop modern and innovative mobile applications that provide functionality',
                    "p2": 'We create user-friendly interfaces for your target audience, making interaction easier and increasing user engagement',
                    "p3": 'We help define your needs, develop the application, and provide support and updates'
                }
            }
        },
        CLIENT: {
            title: 'CUSTOMER SATISFACTION IS OUR PRIORITY',
            description: 'We value the trust of our clients and always strive to meet their expectations. Our team is dedicated to your success, adapting to your needs and responding promptly to requests. Your satisfaction is our goal',
            author: 'LLC'
        },
        PORTFOLIO: {
            FIRST_PROJECT: {
                title: 'Banking and Financial Sector',
                p1: '- Development of a plan and module to ensure information security of specific transactions',
                p2: '- Implementation of information security modules and methodologies',
                p3: '- Development of a referral program for the website',
                p4: '- Implementation of a cryptocurrency payment system',
                p5: '- Creation of a smart contract'
            },
            SECOND_PROJECT: {
                title: 'Education',
                p1: '- Development of web applications for educational programs',
                p2: '- Development of applications for smartphones and tablets to facilitate learning and skill practice',
                p3: '- Creation of an online library providing access to educational materials, textbooks, journals, and research papers'
            },
            THIRD_PROJECT: {
                title: 'Metallurgy',
                p1: '- Implementation of a module to integrate logistics chains of various production stages',
                p2: '- Implementation of a unified production inventory management system',
                p3: '- Integration of the implemented modules with the company\'s accounting system'
            },
            FOURTH_PROJECT: {
                title: 'Trade',
                p1: '- Creation and implementation of a customer service for wholesale fuel trade and logistics chain organization (online order delivery to the customer)',
                p2: '- Development and implementation of a corporate application for the functioning of a "virtual warehouse" for materials, creation of a customer application for wholesale trading of non-ferrous metals, and synchronization of both systems',
            },
        },
        CONTACT_US: {
            title: 'Contact with',
            subtitle: 'or write to us at office@ovbkmedia.com',
            plchName: 'Name',
            plchEmail: 'Mail',
            plchMessage: 'Message',
            button: 'Send mail'
        },
        FOOTER: {
            title1: 'Only ',
            title2: ' solution.',
            specialWord: 'creative',
            subtitle1: 'CONTACT INFO',
            subtitle2: 'OFFICE',
            place: '4 Almazova Street, Office 6, Kyiv',
            route1: 'Stories',
            route2: 'Cooperation',
            route3: 'Privacy',

        }
    }
}

export default TEXT_CONSTANTS;
