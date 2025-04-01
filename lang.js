const langArr = {
    unit: {
        ru: "Мария Терентьева CV!",
        en: "Maria Terenteva CV!",
        fr: "Marie Terenteva CV!"
    },
    "name": {
        "ru": "Мария Терентьева",
        "en": "Maria Terenteva",
        "fr": "Marie Terenteva",
    },
    "place": {
        "ru": "<i>Минск, Беларусь | maria.trntva@gmail.com</i>",
        "en": "<i>Minsk, Belarus | maria.trntva@gmail.com</i>",
        "fr": "<i>Minsk, Biélorussie | maria.trntva@gmail.com</i>",
    },
    "aboutme": {
        "ru": "Обо мне",
        "en": "About me",
        "fr": "A propos de moi",
    },
    "aboutme1": {
        "ru": "Опытный специалист службы поддержки с международным опытом, владением английским и французским языками и глубокой экспертизой в клиентском сервисе и digital-рекламе.",
        "en": "Experienced customer service manager with international expertise, proficiency in English and French and deep understanding of customer service and digital advertising.",
        "fr": "Responsable expérimenté du service clientèle avec une expertise internationale, une maîtrise de l'anglais et du français et une connaissance approfondie du service clientèle et de la publicité numérique.",
    },
    "aboutme2": {
        "ru": "Работала с крупными рекламными платформами (Google Ads, Meta Business Suite, Bigo Ads), помогала клиентам решать технические и организационные вопросы, проводила анализ рекламных кампаний и работала с CRM-системами. Обладаю навыками аналитика, автоматизации процессов и эффективного взаимодействия с клиентами.",
        "en": "I have worked with large advertising platforms (Google Ads, Meta Business Suite, Bigo Ads), helped clients solve technical and organisational issues, analysed advertising campaigns and worked with CRM systems. I have analytical, process automation and efficient customer relations skills.",
        "fr": "J'ai travaillé avec de grandes plateformes publicitaires (Google Ads, Meta Business Suite, Bigo Ads), aidé des clients à résoudre des problèmes techniques et organisationnels, analysé des campagnes publicitaires et travaillé avec des systèmes de gestion de la relation client. Je possède des compétences en matière d'analyse, d'automatisation des processus et de relations efficaces avec les clients.",
    },
    "aboutme3": {
        "ru": "Ищу позицию в компании, где смогу развиваться в сфере клиентского сервиса, рекламных технологий и Customer Success.",
        "en": "Looking for a position within a company where I can grow in Customer Service, Advertising Technologies and Customer Success.",
        "fr": "Je recherche un poste au sein d'une entreprise où je pourrai évoluer dans les domaines du service à la clientèle, des technologies de la publicité et de la réussite des clients.",
    },
    "skills": {
        "ru": "Навыки",
        "en": "Skills",
        "fr": "Compétences",
    },
    "skills0": {
        "ru": "<b>Иностранные языки: Английский (С1)</b> - деловое общение, переписка, звонки; Французский (В1) - чтение, перевод;",
        "en": "<b>Foreign Languages: English (C1)</b> - business communication, mail, calls; French (B1) - reading, translation;",
        "fr": "<b>Langues étrangères : Anglais (C1)</b> - communication professionnelle, courrier, appels ; français (B1) - lecture, traduction ;",
    },
    "skills1": {
        "ru": "<b>Клиентский сервис и поддержка:</b> консультации клиентов в чатах, мессенджерах, по email и телефону (русский, английский); обработка до 150+ заявок в день, работа с возражениями; поддержка рекламных аккаунтов (Google Ads, Meta Business Suite, Bigo Ads); решение технических и организационных вопросов.",
        "en": "<b>Customer support services:</b> client consultations in live chat, messengers, email and phone (Russian, English); processing up to 150+ requests per day, handling objections; supporting advertising accounts (Google Ads, Meta Business Suite, Bigo Ads); solving technical and organisational issues.",
        "fr": "<b>Services d'assistance à la clientèle : </b> consultations des clients par chat en direct, messageries, courrier électronique et téléphone (russe, anglais) ; traitement de plus de 150 demandes par jour, traitement des objections ; prise en charge des comptes publicitaires (Google Ads, Meta Business Suite, Bigo Ads) ; résolution des problèmes techniques et organisationnels.",
    },
    "skills2": {
        "ru": "<b>Рекламные технологии и аналитика:</b> создание и ведение рекламных кампаний в Google Ads, Meta Ads; настройка, пополнение баланса, верификация рекламных аккаунтов; работа с отчетностью, анализ эффективности кампаний.",
        "en": "<b>Advertising technologies and analytics:</b> creation and maintenance of advertising ad campaigns in Google Ads, Meta Ads; setup, top-up, verification of advertising accounts; work with accounts, analyses of campaign efficiency.",
        "fr": "<b>Technologies publicitaires et analyses : </b> création et maintenance de campagnes publicitaires dans Google Ads, Meta Ads ; mise en place, recharge, vérification de comptes publicitaires ; travail avec les comptes, analyses de l'efficacité des campagnes.",
    },
    "skills3": {
        "ru": "<b>Инструменты:</b> CRM (Bitrix24, 1C), Google Sheets (формулы, сводные таблицы); AI-чаты и автоматизация клиентского сервиса; аналитика рекламных кампаний и оптимизация стратегий продвижения.",
        "en": "<b>Tools:</b> CRM (Bitrix24, 1C), Google Sheets (formulas, summary tables); AI chats and customer service automation; analytics of advertising campaigns and optimisation of promotional strategies.",
        "fr": "<b>Instruments:</b> CRM (Bitrix24, 1C), Google Sheets (formules, tableaux récapitulatifs) ; chats AI et automatisation du service clientèle ; analyse des campagnes publicitaires et optimisation des stratégies promotionnelles.",
    },
    "skills4": {
        "ru": "<b>Soft-skills:</b> тайм-менеджмент, многозадачность, аналитическое мышление, адаптивность.",
        "en": "<b>Soft-skills:</b> time management, multi-tasking, analytical thinking, adaptability.",
        "fr": "<b>Soft-skills:</b> gestion du temps, multitâches, esprit d'analyse, capacité d'adaptation.",
    },
    "expertise": {
        "ru": "Опыт",
        "en": "Expertise",
        "fr": "L'expertise",
    },
    "position": {
        "ru": "Специалист службы поддержки пользователей",
        "en": "Customer Support Specialist",
        "fr": "Spécialiste de l'assistance à la clientèle",
    },
    "company": {
        "ru": "<i>Гроу Медиа | Сентябрь 2024 - Март 2025</i>",
        "en": "<i>Grow Media | September 2024 - March 2025</i>",
        "fr": "<i>Grow Media | septembre 2024 - mars 2025</i>",
    },
    "expertise1": {
        "ru": "Консультировала клиентов по продукту компании в чатах (русский, английский);",
        "en": "Consulted customers on company's product in live chat (Russian, English);",
        "fr": "Consultation des clients sur les produits de la société par chat en direct (russe, anglais) ;",
    },
    "expertise2": {
        "ru": "Помогала в настройке и управлении рекламными аккаунтами в Google Ads, Bigo Ads;",
        "en": "Helped in setting up and managing advertising accounts in Google Ads, Bigo Ads;",
        "fr": "Aide à la mise en place et à la gestion de comptes publicitaires dans Google Ads, Bigo Ads ;",
    },
    "expertise3": {
        "ru": "Обрабатывала запросы в CRM-системе (Bitrix24), работала с внутренними базами данных;",
        "en": "Processed queries in CRM system (Bitrix24), worked with internal databases;",
        "fr": "Traitement des requêtes dans le système CRM (Bitrix24), travail avec les bases de données internes ;",
    },
    "expertise4": {
        "ru": "Урегулировала технические и организационные вопросы, повышая уровень удовлетворенности клиентов.",
        "en": "Resolved technical and organisational issues, increasing customer loyalty.",
        "fr": "Résolution des problèmes techniques et organisationnels, ce qui a permis de fidéliser les clients.",
    },
    "company1": {
        "ru": "Специалист поддержки пользователей (международное направление)",
        "en": "Customer Support Specialist (International Direction)",
        "fr": "Spécialiste de l'assistance à la clientèle (Direction internationale)",
    },
    "position2": {
        "ru": "<i>Квери Сапп | Июнь 2024 - Август 2024</i>",
        "en": "<i>Query Supp | June 2024 - August 2024</i>",
        "fr": "<i>Query Supp | juin 2024 - août 2024</i>",
    },
    "expertise5": {
        "ru": "Вела поддержку иностранных клиентов в мессенджерах и LiveChat (английский);",
        "en": "Provided support to international clients in messengers and LiveChat (English);",
        "fr": "Assistance aux clients internationaux dans les messageries et LiveChat (anglais) ;",
    },
    "expertise6": {
        "ru": "Обрабатывала до 150+ обращений в день, оперативно решая проблемы пользователей;",
        "en": "Handled up to 150+ requests per day, resolving user issues rapidly;",
        "fr": "Il a traité jusqu'à plus de 150 demandes par jour, résolvant rapidement les problèmes des utilisateurs ;",
    },
    "expertise7": {
        "ru": "Вела отчетность, помогала в улучшении процессов клиентского сервиса.",
        "en": "Conducted reporting, helped in improving customer service workflows.",
        "fr": "Il a établi des rapports et contribué à l'amélioration des flux de travail du service à la clientèle.",
    },
    "company2": {
        "ru": "Специалист по работе с клиентами | Digital Advertising",
        "en": "Client Services Specialist | Digital Advertising",
        "fr": "Spécialiste des services à la clientèle - Publicité numérique",
    },
    "position3": {
        "ru": "<i>ТВК | Январь 2023 - Октябрь 2023</i>",
        "en": "<i>TVK | January 2023 - October 2023</i>",
        "fr": "<i>TVK | janvier 2023 - octobre 2023</i>",
    },
    "expertise8": {
        "ru": "Работала с рекламными кампаниями в Meta Business Suite: запуск, настройка, аудит;",
        "en": "Worked with advertising campaigns in Meta Business Suite: launching, setting up, auditing;",
        "fr": "A travaillé sur des campagnes publicitaires dans Meta Business Suite : lancement, mise en place, audit ;",
    },
    "expertise9": {
        "ru": "Увеличила число подписчиков компании на 30% за 3 месяца благодаря оптимизации контента;",
        "en": "Increased the company's subscribers in Instagram by 30% in 3 months through optimised content;",
        "fr": "Augmentation du nombre d'abonnés de l'entreprise sur Instagram de 30% en 3 mois grâce à un contenu optimisé ;",
    },
    "expertise10": {
        "ru": "Консультировала клиентов, оформляла договора, работала с CRM и отчетностью.",
        "en": "Advised clients, prepared contracts, worked with CRM and accounting.",
        "fr": "Conseiller les clients, préparer les contrats, travailler avec le CRM et la comptabilité.",
    },
    "company3": {
        "ru": "Практика в ЮНЕСКО",
        "en": "Internship at UNESCO",
        "fr": "Stage à l'UNESCO",
    },
    "position4": {
        "ru": "<i>Университетская стажировка | 2022</i>",
        "en": "<i>University internship | 2022</i>",
        "fr": "<i>Stage universitaire | 2022</i>",
    },
    "expertise11": {
        "ru": "Работала с информационными материалами и отчетами;",
        "en": "Dealt with data materials and reports;",
        "fr": "Traitement des données et des rapports ;",
    },
    "expertise12": {
        "ru": "Анализ и систематизация данных по международным проектам;",
        "en": "Analysis and systematisation of data on international projects;",
        "fr": "Analyse et systématisation des données sur les projets internationaux ;",
    },
    "expertise13": {
        "ru": "Ознакомление с внутренними процессами компании.",
        "en": "Getting acquainted with the company's internal processes.",
        "fr": "Se familiariser avec les processus internes de l'entreprise.",
    },
    "company5": {
        "ru": "Практика в АКС-Мебель (международные продажи и коммуникации)",
        "en": "Internship at AKS-Mebel (international sales and communications)",
        "fr": "Stage chez AKS-Mebel (ventes et communications internationales)",
    },
    "position5": {
        "ru": "<i>Университетская стажировка | 2022</i>",
        "en": "<i>University internship | 2022</i>",
        "fr": "<i>Stage universitaire | 2022</i>",
    },
    "expertise14": {
        "ru": "Проведение холодных звонков на английском и французском языках;",
        "en": "Making cold calls in English and French;",
        "fr": "Effectuer des appels à froid en Français et en Anglais ;",
    },
    "expertise15": {
        "ru": "Рассылка коммерческих предложений и деловая переписка с клиентами;",
        "en": "Mailing of business proposals and correspondence with clients;",
        "fr": "Envoi des propositions commerciales et de la correspondance avec les clients ;",
    },
    "expertise16": {
        "ru": "Продвижение продукта компании среди зарубежных клиентов.",
        "en": "Promoting the company's product to foreign customers.",
        "fr": "Promouvoir les produits de l'entreprise auprès des clients étrangers.",
    },
    "education": {
        "ru": "Образование",
        "en": "Education",
        "fr": "L'éducation",
    },
    "university": {
        "ru": "<i>Минский Государственный Лингвистический Университет:</i>",
        "en": "<i>Minsk State Linguistic University:</i>",
        "fr": "<i>Université linguistique d'État de Minsk:</i>",
    },
    "bachelor": {
        "ru": "Переводчик с английского и французского языков",
        "en": "Translator from English and French",
        "fr": "Traductrice de l'anglais et du français",
    },
    "additional": {
        "ru": "Дополнительные курсы и сертификаты",
        "en": "Additional courses and certificates",
        "fr": "Cours et certificats supplémentaires",
    },
    "certificate": {
        "ru": "Сертификат об уровне английского языка (2025) - <b>C1 Продвинутый</b>",
        "en": "The Certificate of English Level (2025) - <b>C1 Advanced</b>",
        "fr": "Le certificat d'anglais (2025) - <b>C1 avancé</b>",
    },
    "workshop": {
        "ru": "<b>The Art of Business Email</b> <i>(Streamline, 2023)</i> - оффлайн воркшоп.",
        "en": "<b>The Art of Business Email</b> <i>(Streamline, 2023)</i> - an offline workshop.",
        "fr": "<b>L'art de l'e-mail professionnel</b> <i>(Streamline, 2023)</i> - un atelier hors ligne.",
    },
    "references": {
        "ru": "Рекомендации",
        "en": "References",
        "fr": "Références",
    },
    "references1": {
        "ru": "Предоставлю по запросу",
        "en": "Available upon request",
        "fr": "Disponibles sur demande",
    },
}
