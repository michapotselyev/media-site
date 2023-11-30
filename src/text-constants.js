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
            title: 'ПРО НАС',
            description: 'Команда ОВБК МЕДІА працює з 2017 року. За цей час були успішно реалізовані проекти для компаній з банківського та фінансового секторів, паливного та металургійного бізнесів, в сфері освіти',
            stack: 'Наші технології розробки',
            OUR_ADVANTAGES: {
                slides: [
                    {
                        backgroundImage: 'assets/Innovation.jpeg',
                        title: 'Технологічність',
                        p1: 'Застосовуємо передові технології та інструменти',
                        p2: 'Впроваджуємо інноваційні рішення в бізнес',
                    },
                    {
                        backgroundImage: 'assets/experience-todo.jpeg',
                        title: 'Досвід',
                        p1: 'Більше 5 років на ринку IT-аутсорсингу',
                        p2: 'Успішні проекти в різних галузях бізнесу',
                    },
                    {
                        backgroundImage: 'assets/sm.jpeg',
                        title: 'Індивідуальний підхід',
                        p1: 'Кожен клієнт для нас особливий',
                        p2: 'Розробляємо стратегії за бажанням клієнта й досвідом',
                    },
                    {
                        backgroundImage: 'assets/yakist.jpeg',
                        title: 'Високі стандарти якості',
                        p1: 'Наші рішення відповідають стандартам IT',
                        p2: 'Оптимізуємо проекти відповідно до останніх тенденцій',
                    },
                    {
                        backgroundImage: 'assets/Hnychkist.jpeg',
                        title: 'Гнучкість',
                        p1: 'Швидко адаптуємося до змін у ринкових умовах',
                        p2: 'Готові до викликів будь-якої складності',
                    },
                    {
                        backgroundImage: 'assets/comanda-profof.jpeg',
                        title: 'Команда професіоналів',
                        p1: 'Ми експерти у своїй сфері',
                        p2: 'Постійно навчаємось та підвищуємо кваліфікацію',
                    },
                ]
            }
        },
        OUR_SERVICE: {
            title: 'НАШІ ПОСЛУГИ',
            more: 'Дізнатися більше...',
            less: 'Сховати'
        },
        SERVICE_DATA: [
            {
                "src": 'assets/icons8-website-100.png',
                title: 'Веб-сайти:',
                subtitle: 'Сайти майбутнього',
                description: {
                    p1: 'Наша кваліфікована команда готова забезпечити вам передові рішення для оптимізації вашого бізнесу за допомогою найсучасніших технологій, таких як React та Node.js, а також використання агільних методологій розробки',
                    p2: 'Кожен веб-сайт, створений нашою командою, втілює в собі найвищу майстерність та передові інновації в дії, застосовуючи сучасні стеки розробки, такі як MERN або MEAN, а також використовуючи високоефективні інструменти Frontend та Backend розробки',
                    p3: 'Ми пристосовуємо наші рішення до ваших бізнес-потреб, здійснюючи докладне дослідження та аналіз вашого бізнесу, щоб забезпечити найвищий стандарт та ефективність реалізації проектів за допомогою DevOps та Continuous Integration / Continuous Deployment (CI / CD)'
                }
            },
            {
                "src": 'assets/icons8-license-100.png',
                title: 'Ліцензування:',
                subtitle: 'Ключ до програм',
                description: {
                    p1: 'Забезпечте легке відстеження ліцензій, оновлень та активацій завдяки нашим сучасним системам управління ліцензіями, що використовують технології DRM (Digital Rights Management) та SaaS (Software as a Service)',
                    p2: 'Ми пропонуємо високоефективні послуги ліцензування ключів до програмного забезпечення, які гарантують максимальний рівень захисту та зручності, використовуючи передові методи шифрування та аутентифікації',
                    p3: 'Наші інтегровані системи ліцензування дозволяють вам здійснювати повний контроль над розповсюдженням та використанням програм, використовуючи механізми автоматичної активації та управління дозволами'
                }
            },
            {
                "src": 'assets/icons8-hips-100.png',
                title: 'Кібербезпека:',
                subtitle: 'Цифровий щит',
                description: {
                    p1: 'Наші цифрові оборонні системи постійно оновлюються, щоб вести перевагу над потенційними загрозами та забезпечувати безпеку вашого бізнесу',
                    p2: 'Ми використовуємо передові технології та інноваційні методи для виявлення та запобігання кіберзагрозам, застосовуючи інструменти, такі як машинне навчання та аналіз поведінки',
                    p3: 'Наша спеціалізація - розробка надійних цифрових бар\'єрів, які забезпечують комплексний захист вашого бізнесу від сучасних кіберзагроз та зловмисників.'
                }
            },
            {
                "src": 'assets/icons8-google-code-100.png',
                title: 'Розробка UI:',
                subtitle: 'Десктопні рішення',
                description: {
                    p1: 'Наша команда професіоналів у галузі розробки користувацьких інтерфейсів (UI) спрямована на створення не лише ефективних, але й захоплюючих рішень, які відзначаються надзвичайною користувацькою дружністю та естетикою, використовуючи найновітніші технології, такі як React та Angular',
                    p2: 'Ми маємо багаторічний досвід у створенні десктопних інтерфейсів користувача для широкого спектру галузей, що дозволяє нам мати унікальну перспективу на кожен проект і підходити до нього індивідуально з метою забезпечити максимальну задоволеність користувачів',
                    p3: 'Ми використовуємо передові дизайнерські методики та тренди, такі як Material Design та адаптивний дизайн, для створення користувацьких інтерфейсів, які не лише виглядають сучасно, але і максимально практичні та зручні для кінцевих користувачів'
                }    
            },
            {
                "src": 'assets/icons8-mobile-app-100.png',
                title: 'Мобільні додатки:',
                subtitle: 'Мобільний світ',
                description: {
                    p1: 'Ми спеціалізуємося на створенні передових та інноваційних мобільних додатків, що відзначаються високою функціональністю та продуманим дизайном, використовуючи технології, такі як React Native та Flutter',
                    p2: 'Наша команда зосереджена на створенні зручних та інтуїтивно зрозумілих інтерфейсів, спеціально розроблених для вашої цільової аудиторії, щоб спростити їх взаємодію з додатком та підвищити загальний рівень задоволення від користування',
                    p3: 'Ми надаємо комплексну підтримку у визначенні вашої мобільної стратегії, розробці додатка та забезпеченні його стабільної та безперебійної роботи, включаючи регулярне оновлення та адаптацію до змінних потреб ринку'
                }
            }
        ],
        CLIENT: {
            title: 'КОЖЕН КЛІЄНТ - НАШ ПРІОРИТЕТ',
            description: 'Ми цінуємо довіру наших клієнтів і завжди прагнемо відповідати їхнім очікуванням. Наша команда зосереджена на вашому успіху, адаптуючись до ваших потреб і швидко реагуючи на запити. Ваше задоволення - наша мета',
            author: 'ТОВ / ОВБК МЕДІА'
        },
        PORTFOLIO: {
            TITLE: 'Портфоліо',
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
            FIFTH_PROJECT: {
                title: 'Розробка веб-додатків',
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
            route1: '',
            route2: '',
            route3: 'Наші проекти',

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
        COMPANY_NAME: 'OVBK Media',
        INDRODUCTION: 'With us, innovation knows no boundaries for your business',
        ABOUT_US: {
            title: 'ABOUT US',
            description: 'The OVBK Media team has been working since 2017. During this time, successful projects have been implemented for companies in the banking and financial sectors, as well as in the fuel and metallurgical industries, and in the field of education',
            stack: 'Our development technologies',
            OUR_ADVANTAGES: {
                slides: [
                    {
                        backgroundImage: 'assets/Innovation.jpeg',
                        title: 'Innovation',
                        p1: 'Applying advanced tools and technologies',
                        p2: 'Introducing innovative solutions into business',
                    },
                    {
                        backgroundImage: 'assets/experience-todo.jpeg',
                        title: 'Experience',
                        p1: 'Over 5 years in the IT outsourcing market',
                        p2: 'Successful projects in various business domains',
                    },
                    {
                        backgroundImage: 'assets/sm.jpeg',
                        title: 'Individual Approach',
                        p1: 'Every client is special to us',
                        p2: 'Developing strategies based on client desires and experience',
                    },
                    {
                        backgroundImage: 'assets/yakist.jpeg',
                        title: 'High Quality Standards',
                        p1: 'Our solutions meet IT standards',
                        p2: 'Optimizing projects according to the latest trends',
                    },
                    {
                        backgroundImage: 'assets/Hnychkist.jpeg',
                        title: 'Flexibility',
                        p1: 'Quick adaptation to changes in market conditions',
                        p2: 'Ready for challenges of any complexity',
                    },
                    {
                        backgroundImage: 'assets/comanda-profof.jpeg',
                        title: 'Professional Team',
                        p1: 'We are experts in our field',
                        p2: 'Constantly learning and improving qualifications',
                    },
                ]
            }
        },
        OUR_SERVICE: {
            title: 'OUR SERVICES',
            more: 'Learn more...',
            less: 'Hide'
        },
        SERVICE_DATA: [
            {
                "src": 'assets/icons8-website-100.png',
                "title": 'Websites:',
                subtitle: 'Websites of Future',
                "description": {
                    p1: 'Our skilled team is ready to provide you with cutting-edge solutions to optimize your business using the latest technologies such as React and Node.js, along with the implementation of agile development methodologies',
                    p2: 'Each website created by our team embodies the highest craftsmanship and cutting-edge innovation, employing modern development stacks such as MERN or MEAN, as well as leveraging high-performance Frontend and Backend development tools',
                    p3: 'We tailor our solutions to your business needs, conducting in-depth research and analysis of your business to ensure the highest standard and efficiency in project implementation through DevOps and Continuous Integration/Continuous Deployment (CI/CD)'
                }
            },
            {
                "src": 'assets/icons8-license-100.png',
                "title": 'Licensing:',
                subtitle: 'Key to Software',
                "description": {
                    p1: 'Facilitate easy tracking of licenses, updates, and activations through our modern license management systems that utilize DRM (Digital Rights Management) and SaaS (Software as a Service) technologies',
                    p2: 'We offer highly efficient software key licensing services that guarantee the highest level of protection and convenience, employing advanced encryption and authentication methods',
                    p3: 'Our integrated licensing systems allow you to have complete control over the distribution and use of programs, using mechanisms for automated activation and permission management'
                }
            },
            {
                "src": 'assets/icons8-hips-100.png',
                "title": 'Cybersecurity:',
                subtitle: 'Digital Shield',
                "description": {
                    p1: 'Our digital defense systems are constantly updated to stay ahead of potential threats and ensure the security of your business',
                    p2: 'We utilize advanced technologies and innovative methods to detect and prevent cyber threats, employing tools such as machine learning and behavior analysis',
                    p3: 'Our specialization lies in the development of reliable digital barriers that provide comprehensive protection for your business against modern cyber threats and adversaries'
                }
            },
            {
                "src": 'assets/icons8-google-code-100.png',
                "title": 'UI Development:',
                subtitle: 'Desktop Solutions',
                "description": {
                    p1: 'Our team of professionals in the field of User Interface (UI) development is dedicated to creating not only efficient but also engaging solutions distinguished by exceptional user-friendliness and aesthetics, utilizing cutting-edge technologies such as React and Angular',
                    p2: 'We have years of experience in creating desktop user interfaces for a wide range of industries, which allows us to have a unique perspective on each project and approach it individually to ensure maximum user satisfaction',
                    p3: 'We employ advanced design methodologies and trends such as Material Design and responsive design to create user interfaces that not only look modern but are also highly practical and convenient for end users'
                }
            },
            {
                "src": 'assets/icons8-mobile-app-100.png',
                "title": 'Mobile Apps:',
                subtitle: 'Mobile World',
                "description": {
                    p1: 'We specialize in creating advanced and innovative mobile applications characterized by high functionality and thoughtful design, using technologies such as React Native and Flutter',
                    p2: 'Our team is focused on creating convenient and intuitive interfaces specially designed for your target audience to simplify their interaction with the application and enhance overall user satisfaction',
                    p3: 'We provide comprehensive support in defining your mobile strategy, developing the application, and ensuring its stable and uninterrupted operation, including regular updates and adaptation to changing market needs'
                }
            }
        ],
        CLIENT: {
            title: 'CUSTOMER SATISFACTION IS OUR PRIORITY',
            description: 'We value the trust of our clients and always strive to meet their expectations. Our team is dedicated to your success, adapting to your needs and responding promptly to requests. Your satisfaction is our goal',
            author: 'LLC / OVBK MEDIA'
        },
        PORTFOLIO: {
            TITLE: 'Portfolio',
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
            FIFTH_PROJECT: {
                title: 'Web App development',
                p1: '',
                p2: '',
                
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
            route1: '',
            route2: '',
            route3: 'Our projects',

        }
    }
}

export default TEXT_CONSTANTS;
