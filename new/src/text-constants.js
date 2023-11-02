import { Box, Typography,Link } from "@mui/material";
import homeMainOurAdvantagesStyle from "./globalStyles/styles/mobile/components/home-main-our-advantages-prop";
import homeMainOurServicesStyle from "./globalStyles/styles/mobile/components/home-main-our-services-prop";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TEXT_CONSTANTS = {
    UK: {
        HEADER: {
            FIRST_ROUTE: 'Про нас',
            SECOND_ROUTE: 'Наші послуги',
            THIRD_ROUTE: 'Портфоліо',
            LANGUAGE: 'Мова',
            BUTTON: 'Зв\'язатися з нами'
        },
        COMPANY_NAME: 'ОВБК Медіа',
        INDRODUCTION: 'З нами інновації для вашого бізнесу без кордонів',
        ABOUT_US: {
            title: 'Про нас',
            description: 'Команда ОВБК МЕДІА працює з 2017 року. За цей час були успішно реалізовані проекти для компаній з банківського та фінансового секторів, паливного та металургійного бізнесів, в сфері освіти',
            stack: 'Наші технології розробки',
            OUR_ADVANTAGES: {
                title: 'Наші переваги',
                slides: [
                    <Box sx={[ homeMainOurAdvantagesStyle.img, { backgroundImage: 'url(../Innovation.jpeg)' } ]}>
                        <Box sx={ homeMainOurAdvantagesStyle.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>Технологічність</Typography>
                
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
                
                    <Box sx={[ homeMainOurAdvantagesStyle.img, { backgroundImage: 'url(../experience-todo.jpeg)' } ]}>
                        <Box sx={ homeMainOurAdvantagesStyle.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>Досвід</Typography>
                
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
                
                    <Box sx={[ homeMainOurAdvantagesStyle.img, { backgroundImage: 'url(../sm.jpeg)' } ]}>
                        <Box sx={ homeMainOurAdvantagesStyle.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>Індивідуальний підхід</Typography>
                
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
                
                    <Box sx={[ homeMainOurAdvantagesStyle.img, { backgroundImage: 'url(../yakist.jpeg)' } ]}>
                        <Box sx={ homeMainOurAdvantagesStyle.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>Високі стандарти якості</Typography>
                
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
                    <Box sx={[ homeMainOurAdvantagesStyle.img, { backgroundImage: 'url(../Hnychkist.jpeg)' } ]}>
                        <Box sx={ homeMainOurAdvantagesStyle.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>Гнучкість</Typography>
                
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
                    <Box sx={[ homeMainOurAdvantagesStyle.img, { backgroundImage: 'url(../comanda-profof.jpeg)' } ]}>
                        <Box sx={ homeMainOurAdvantagesStyle.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>Команда професіоналів</Typography>
                
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
                <Box sx={[ homeMainOurServicesStyle.img, { backgroundImage: 'url(../project/project-image05.jpg)' } ]}>
                    <Box sx={ homeMainOurServicesStyle.img.wrapperText }>
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
            
                        <Link href='service/5' sx={ homeMainOurServicesStyle.img.wrapperText.arrowContainer }>
                            <ArrowForwardIosIcon sx={{ color: 'white' }} />
                        </Link>
                    </Box>
                </Box>,
                <Box sx={[ homeMainOurServicesStyle.img, { backgroundImage: 'url(../project/project-image01.jpg)' } ]}>
                    <Box sx={ homeMainOurServicesStyle.img.wrapperText }>
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
            
                        <Link href='service/1' sx={ homeMainOurServicesStyle.img.wrapperText.arrowContainer }>
                            <ArrowForwardIosIcon sx={{ color: 'white' }} />
                        </Link>
                    </Box>
                </Box>,
                <Box sx={[ homeMainOurServicesStyle.img, { backgroundImage: 'url(../project/project-image02.jpg)' } ]}>
                    <Box sx={ homeMainOurServicesStyle.img.wrapperText }>
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
            
                        <Link href='service/2' sx={ homeMainOurServicesStyle.img.wrapperText.arrowContainer }>
                            <ArrowForwardIosIcon sx={{ color: 'white' }} />
                        </Link>
                    </Box>
                </Box>,
                <Box sx={[ homeMainOurServicesStyle.img, { backgroundImage: 'url(../project/project-image03.jpg)' } ]}>
                    <Box sx={ homeMainOurServicesStyle.img.wrapperText }>
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
            
                        <Link href='service/3' sx={ homeMainOurServicesStyle.img.wrapperText.arrowContainer }>
                            <ArrowForwardIosIcon sx={{ color: 'white' }} />
                        </Link>
                    </Box>
                </Box>,
                <Box sx={[ homeMainOurServicesStyle.img, { backgroundImage: 'url(../project/project-image04.jpg)' } ]}>
                    <Box sx={ homeMainOurServicesStyle.img.wrapperText }>
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
            
                        <Link href='service/4' sx={ homeMainOurServicesStyle.img.wrapperText.arrowContainer }>
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
                    p1: 'Наша кваліфікована команда готова забезпечити вам передові рішення для оптимізації вашого бізнесу за допомогою найсучасніших технологій, таких як React та Node.js, а також використання агільних методологій розробки',
                    p2: 'Кожен веб-сайт, створений нашою командою, втілює в собі найвищу майстерність та передові інновації в дії, застосовуючи сучасні стеки розробки, такі як MERN або MEAN, а також використовуючи високоефективні інструменти Frontend та Backend розробки',
                    p3: 'Ми пристосовуємо наші рішення до ваших бізнес-потреб, здійснюючи докладне дослідження та аналіз вашого бізнесу, щоб забезпечити найвищий стандарт та ефективність реалізації проектів за допомогою DevOps та Continuous Integration / Continuous Deployment (CI / CD)'
                }
            },
            "2": {
                url: '../project/project-image02.jpg',
                title: 'Ліцензування: Ключ до програм',
                description: {
                    p1: 'Забезпечте легке відстеження ліцензій, оновлень та активацій завдяки нашим сучасним системам управління ліцензіями, що використовують технології DRM (Digital Rights Management) та SaaS (Software as a Service)',
                    p2: 'Ми пропонуємо високоефективні послуги ліцензування ключів до програмного забезпечення, які гарантують максимальний рівень захисту та зручності, використовуючи передові методи шифрування та аутентифікації',
                    p3: 'Наші інтегровані системи ліцензування дозволяють вам здійснювати повний контроль над розповсюдженням та використанням програм, використовуючи механізми автоматичної активації та управління дозволами'
                }
            },
            "3": {
                url: '../project/project-image03.jpg',
                title: 'Кібербезпека: Цифровий щит',
                description: {
                    p1: 'Наші цифрові оборонні системи постійно оновлюються, щоб вести перевагу над потенційними загрозами та забезпечувати безпеку вашого бізнесу',
                    p2: 'Ми використовуємо передові технології та інноваційні методи для виявлення та запобігання кіберзагрозам, застосовуючи інструменти, такі як машинне навчання та аналіз поведінки',
                    p3: 'Наша спеціалізація - розробка надійних цифрових бар\'єрів, які забезпечують комплексний захист вашого бізнесу від сучасних кіберзагроз та зловмисників.'
                }
            },
            "4": {
                url: '../project/project-image04.jpg',
                title: 'Розробка UI: Десктопні рішення',
                description: {
                    p1: 'Наша команда професіоналів у галузі розробки користувацьких інтерфейсів (UI) спрямована на створення не лише ефективних, але й захоплюючих рішень, які відзначаються надзвичайною користувацькою дружністю та естетикою, використовуючи найновітніші технології, такі як React та Angular',
                    p2: 'Ми маємо багаторічний досвід у створенні десктопних інтерфейсів користувача для широкого спектру галузей, що дозволяє нам мати унікальну перспективу на кожен проект і підходити до нього індивідуально з метою забезпечити максимальну задоволеність користувачів',
                    p3: 'Ми використовуємо передові дизайнерські методики та тренди, такі як Material Design та адаптивний дизайн, для створення користувацьких інтерфейсів, які не лише виглядають сучасно, але і максимально практичні та зручні для кінцевих користувачів'
                }    
            },
            "5": {
                url: '../project/project-image05.jpg',
                title: 'Мобільні додатки: Мобільний світ',
                description: {
                    p1: 'Ми спеціалізуємося на створенні передових та інноваційних мобільних додатків, що відзначаються високою функціональністю та продуманим дизайном, використовуючи технології, такі як React Native та Flutter',
                    p2: 'Наша команда зосереджена на створенні зручних та інтуїтивно зрозумілих інтерфейсів, спеціально розроблених для вашої цільової аудиторії, щоб спростити їх взаємодію з додатком та підвищити загальний рівень задоволення від користування',
                    p3: 'Ми надаємо комплексну підтримку у визначенні вашої мобільної стратегії, розробці додатка та забезпеченні його стабільної та безперебійної роботи, включаючи регулярне оновлення та адаптацію до змінних потреб ринку'
                }
            }
        },
        CLIENT: {
            title: 'КОЖЕН КЛІЄНТ - НАШ ПРІОРИТЕТ',
            description: 'Ми цінуємо довіру наших клієнтів і завжди прагнемо відповідати їхнім очікуванням. Наша команда зосереджена на вашому успіху, адаптуючись до ваших потреб і швидко реагуючи на запити. Ваше задоволення - наша мета',
            author: 'ТОВ'
        },
        PORTFOLIO: {
            TITLE: 'Реалізовані проекти',
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
            place: 'Вулиця Алмазова Генерала буд. 4, оф. 6, м Київ',
            route1: 'Історії',
            route2: 'Співпраця',
            route3: 'Конфедіційність',

        }
    },
    ENG: {
        HEADER: {
            FIRST_ROUTE: 'About us',
            SECOND_ROUTE: 'Our Services',
            THIRD_ROUTE: 'Portfolio',
            LANGUAGE: 'Language',
            BUTTON: 'Contact with us'
        },
        COMPANY_NAME: 'OVBK MEDIA',
        INDRODUCTION: 'With us, innovation knows no boundaries for your business',
        ABOUT_US: {
            title: 'About us',
            description: 'The ОВБК МЕДІА team has been working since 2017. During this time, successful projects have been implemented for companies in the banking and financial sectors, as well as in the fuel and metallurgical industries, and in the field of education',
            stack: 'Our development technologies',
            OUR_ADVANTAGES: {
                title: 'Our advantages',
                slides: [
                    <Box sx={[ homeMainOurAdvantagesStyle.img, { backgroundImage: 'url(../Innovation.jpeg)' } ]}>
                        <Box sx={ homeMainOurAdvantagesStyle.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>Technological Excellence</Typography>
                
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
                
                    <Box sx={[ homeMainOurAdvantagesStyle.img, { backgroundImage: 'url(../experience-todo.jpeg)' } ]}>
                        <Box sx={ homeMainOurAdvantagesStyle.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>Experience</Typography>
                
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
                
                    <Box sx={[ homeMainOurAdvantagesStyle.img, { backgroundImage: 'url(../sm.jpeg)' } ]}>
                        <Box sx={ homeMainOurAdvantagesStyle.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>Individual Approach</Typography>
                
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
                
                    <Box sx={[ homeMainOurAdvantagesStyle.img, { backgroundImage: 'url(../yakist.jpeg)' } ]}>
                        <Box sx={ homeMainOurAdvantagesStyle.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>High Quality Standards</Typography>
                
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
                    <Box sx={[ homeMainOurAdvantagesStyle.img, { backgroundImage: 'url(../Hnychkist.jpeg)' } ]}>
                        <Box sx={ homeMainOurAdvantagesStyle.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>Flexibility</Typography>
                
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
                    <Box sx={[ homeMainOurAdvantagesStyle.img, { backgroundImage: 'url(../comanda-profof.jpeg)' } ]}>
                        <Box sx={ homeMainOurAdvantagesStyle.img.wrapperText }>
                            <Typography sx={{ color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>Professional Team</Typography>
                
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
                <Box sx={[ homeMainOurServicesStyle.img, { backgroundImage: 'url(../project/project-image05.jpg)' } ]}>
                    <Box sx={ homeMainOurServicesStyle.img.wrapperText }>
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
            
                        <Link href='service/5' sx={ homeMainOurServicesStyle.img.wrapperText.arrowContainer }>
                            <ArrowForwardIosIcon sx={{ color: 'white' }} />
                        </Link>
                    </Box>
                </Box>,
                <Box sx={[ homeMainOurServicesStyle.img, { backgroundImage: 'url(../project/project-image01.jpg)' } ]}>
                    <Box sx={ homeMainOurServicesStyle.img.wrapperText }>
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
            
                        <Link href='service/1' sx={ homeMainOurServicesStyle.img.wrapperText.arrowContainer }>
                            <ArrowForwardIosIcon sx={{ color: 'white' }} />
                        </Link>
                    </Box>
                </Box>,
                <Box sx={[ homeMainOurServicesStyle.img, { backgroundImage: 'url(../project/project-image02.jpg)' } ]}>
                    <Box sx={ homeMainOurServicesStyle.img.wrapperText }>
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
            
                        <Link href='service/2' sx={ homeMainOurServicesStyle.img.wrapperText.arrowContainer }>
                            <ArrowForwardIosIcon sx={{ color: 'white' }} />
                        </Link>
                    </Box>
                </Box>,
                <Box sx={[ homeMainOurServicesStyle.img, { backgroundImage: 'url(../project/project-image03.jpg)' } ]}>
                    <Box sx={ homeMainOurServicesStyle.img.wrapperText }>
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
            
                        <Link href='service/3' sx={ homeMainOurServicesStyle.img.wrapperText.arrowContainer }>
                            <ArrowForwardIosIcon sx={{ color: 'white' }} />
                        </Link>
                    </Box>
                </Box>,
                <Box sx={[ homeMainOurServicesStyle.img, { backgroundImage: 'url(../project/project-image04.jpg)' } ]}>
                    <Box sx={ homeMainOurServicesStyle.img.wrapperText }>
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
            
                        <Link href='service/4' sx={ homeMainOurServicesStyle.img.wrapperText.arrowContainer }>
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
                    p1: 'Our skilled team is ready to provide you with cutting-edge solutions to optimize your business using the latest technologies such as React and Node.js, along with the implementation of agile development methodologies',
                    p2: 'Each website created by our team embodies the highest craftsmanship and cutting-edge innovation, employing modern development stacks such as MERN or MEAN, as well as leveraging high-performance Frontend and Backend development tools',
                    p3: 'We tailor our solutions to your business needs, conducting in-depth research and analysis of your business to ensure the highest standard and efficiency in project implementation through DevOps and Continuous Integration/Continuous Deployment (CI/CD)'
                }
            },
            "2": {
                "url": '../project/project-image02.jpg',
                "title": 'Licensing: Key to Software',
                "description": {
                    p1: 'Facilitate easy tracking of licenses, updates, and activations through our modern license management systems that utilize DRM (Digital Rights Management) and SaaS (Software as a Service) technologies',
                    p2: 'We offer highly efficient software key licensing services that guarantee the highest level of protection and convenience, employing advanced encryption and authentication methods',
                    p3: 'Our integrated licensing systems allow you to have complete control over the distribution and use of programs, using mechanisms for automated activation and permission management'
                }
            },
            "3": {
                "url": '../project/project-image03.jpg',
                "title": 'Cybersecurity: Digital Shield',
                "description": {
                    p1: 'Our digital defense systems are constantly updated to stay ahead of potential threats and ensure the security of your business',
                    p2: 'We utilize advanced technologies and innovative methods to detect and prevent cyber threats, employing tools such as machine learning and behavior analysis',
                    p3: 'Our specialization lies in the development of reliable digital barriers that provide comprehensive protection for your business against modern cyber threats and adversaries'
                }
            },
            "4": {
                "url": '../project/project-image04.jpg',
                "title": 'UI Development: Desktop Solutions',
                "description": {
                    p1: 'Our team of professionals in the field of User Interface (UI) development is dedicated to creating not only efficient but also engaging solutions distinguished by exceptional user-friendliness and aesthetics, utilizing cutting-edge technologies such as React and Angular',
                    p2: 'We have years of experience in creating desktop user interfaces for a wide range of industries, which allows us to have a unique perspective on each project and approach it individually to ensure maximum user satisfaction',
                    p3: 'We employ advanced design methodologies and trends such as Material Design and responsive design to create user interfaces that not only look modern but are also highly practical and convenient for end users'
                }
            },
            "5": {
                "url": '../project/project-image05.jpg',
                "title": 'Mobile Apps: Mobile World',
                "description": {
                    p1: 'We specialize in creating advanced and innovative mobile applications characterized by high functionality and thoughtful design, using technologies such as React Native and Flutter',
                    p2: 'Our team is focused on creating convenient and intuitive interfaces specially designed for your target audience to simplify their interaction with the application and enhance overall user satisfaction',
                    p3: 'We provide comprehensive support in defining your mobile strategy, developing the application, and ensuring its stable and uninterrupted operation, including regular updates and adaptation to changing market needs'
                }
            }
        },
        CLIENT: {
            title: 'CUSTOMER SATISFACTION IS OUR PRIORITY',
            description: 'We value the trust of our clients and always strive to meet their expectations. Our team is dedicated to your success, adapting to your needs and responding promptly to requests. Your satisfaction is our goal',
            author: 'LLC'
        },
        PORTFOLIO: {
            TITLE: 'Implemented projects',
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
