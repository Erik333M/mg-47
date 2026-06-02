import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'mg47-language'

const translations = {
  en: {
    nav: {
      products: 'Product',
      about: 'About',
      contact: 'Contact',
    },
    language: {
      label: 'Language',
      english: 'English',
      russian: 'Russian',
    },
    home: {
      aboutTitle: 'ABOUT US',
      aboutBody:
        'MG-47 LLC has more than 30 years of experience in the development, modeling, design, and production of military equipment and tactical gear.',
      aboutCta: 'About Us',
      technologyTitle: 'TECHNOLOGY',
      technologyBody:
        'MG-47 combines advanced equipment, precise modeling, and professional sewing techniques to produce durable tactical gear. Every product is made with carefully selected materials, reinforced stitching, and strict quality control to ensure reliability, protection, and long-term performance in real operational conditions.',
      productTitle: 'PRODUCT',
      productBody:
        'MG-47 products are designed for military use with attention to durability, reliable materials, and practical field performance. Our production combines long-term experience, precise sewing, modern equipment, and controlled manufacturing standards.',
      productCta: 'Open Product Page',
      carouselTitle: 'Operational Gallery',
      carouselAltPrefix: 'Technology process image',
      carouselLabelPrefix: 'Technology',
      productCardArmorAlt: 'MG-47 tactical armor',
      productCardArmorLightAlt: 'MG-47 lightweight armor',
    },
    about: {
      factory: 'MILITARY FACTORY',
      intro: [
        'MG-47 LLC has more than 30 years of experience in the development, modeling, design, and production of military equipment and tactical gear. The company specializes in manufacturing bulletproof vests, tactical bags, pouches, and other military-use equipment designed for durability, functionality, and reliable performance in demanding conditions.',
        'Our production process combines long-standing industry experience with modern technologies and professional craftsmanship. Each product is carefully developed from the initial design and modeling stage to cutting, sewing, assembly, and final quality control. Special attention is given to material selection, reinforced stitching, ergonomic structure, and practical usability to ensure that every item meets high operational standards.',
        'MG-47 LLC uses high-quality raw materials and modern high-tech equipment to achieve precision, consistency, and strength in every stage of production. Our team continuously works to improve product quality, enhance comfort, and provide reliable tactical solutions for defense, security, and professional field use.',
        'With decades of expertise and a strong commitment to quality, MG-47 LLC delivers military equipment built to perform in real-world conditions.',
      ],
      videoTitle: 'MG-47 Product Video',
      partnersTitle: 'OUR PARTNERS',
      partnersBody:
        'MG47 Military Factory proudly collaborates with the Armed Forces of Armenia, the National Security Service, and the Police of the Republic of Armenia. Through innovation, quality, and professionalism, we support the development of reliable solutions that contribute to national defense, security, and public safety.',
      partnerCards: [
        {
          name: 'Defense Integrators',
          description: 'Joint execution on protective system deployment, field adaptation, and program delivery.',
        },
        {
          name: 'Materials Suppliers',
          description: 'Stable sourcing relationships for ballistic-grade inputs and production-critical components.',
        },
        {
          name: 'Research Teams',
          description: 'Applied collaboration on testing methods, design validation, and performance refinement.',
        },
      ],
    },
    products: {
      title: 'MG 47 Product Details',
      imageAlt: 'MG-47 product presentation',
      body: [
        'The MG 47 concealable body armor vest is designed for reliable everyday protection in a low-profile and comfortable format. Built for discreet wear under clothing, it combines a streamlined shape with ergonomic construction to provide effective torso coverage without restricting movement.',
        'The vest features front and back ballistic protection, a flexible structure for improved comfort, and adjustable shoulder and waist fasteners for a secure fit. Its lightweight, body-contouring design makes it suitable for extended wear in professional and operational environments.',
        'Designed with practicality in mind, this vest offers a balance of protection, comfort, and concealability, making it a strong choice for security personnel, law enforcement, and users who require discreet personal protection.',
      ],
      backToProducts: 'Back to Products',
      notFoundTitle: 'Product not found',
      descriptionHeading: 'Description',
      setHeading: 'Set',
      cards: [
        {
          slug: 'vest-1',
          title: 'Special purpose plate carrier with detachable belt',
          overview:
            'A configurable tactical carrier built for modular loadout control, armored protection coverage, and stable field use.',
          description: [
            'Protective class according to to GOST R 34286-2017 Br 1/2',
            'Molle system',
            'Pouches for armor plates in the front, back and the side',
          ],
          set: [
            'Double pouches for magazines AK - 3 pcs',
            'Pistol magazine pouch - 2 pcs',
            'Triple pouches for VOG-25 - 2 pcs',
            'Hand-grenade pouch - 2 pcs',
            'Magazine dispenser',
            'Individual bag - 2 pcs.',
            'Radio pouch - 2 pcs',
            'Medical kit',
            'Water bottle pouch',
            'Pistol pouch',
            'Size and height adjustment with belts and shoulder pads',
            'Cordura 1000 D fabric',
          ],
        },
        {
          slug: 'vest-2',
          title: 'Bulletproof vest with collar protection',
          overview:
            'A protective vest configuration designed for expanded upper-area coverage, integrated support pouches, and operational comfort.',
          description: [
            'Protective class according to GOST R 34286-2017 BR 4',
            'Soft ballistic insert Br 1/2',
            'Protective class of the collar area Br1/2',
            'Molle system',
            'A shock-absorption and ventilation system in the inner part.',
          ],
          set: [
            'Pouch for magazines AK, RPK - 3 pcs',
            'Double hand-grenade pouch - 1 pc',
            'Radio pouch - 1 pc',
          ],
        },
        {
          slug: 'vest-3',
          title: 'Tank Top Body Armor Protection Level',
          overview:
            'A durable tactical vest configuration built for reliable field wear, balanced load distribution, and protective consistency.',
          description: [
            'Protective class according to GOST 34286-2017 Br 5',
            'Soft ballistic insert br 1/br 2',
            'Molle system',
            'collar protection',
            'protective girdle',
            'protective apron',
            'Partial shoulder, elbow and cyst protection',
            'partial hip protection',
          ],
          set: [
            'pouches for magazines AK - 5 pcs',
            'Hand-grenade pouch - 1 pcs',
            'Radio pouch - 1 pcs',
            'size and height adjustment with belts and shoulder pads',
          ],
        },
        {
          slug: 'vest-4',
          title: 'Knight',
          overview:
            'A structured vest platform focused on dependable fit, reinforced construction, and repeatable operational performance.',
          description: [
            'Protective class according to GOST R 34286-2017: BR 4',
            'Soft ballistic insert: BR 1/2',
            'Assault-type body armor designed for active tactical and field operations',
            'Full MOLLE system on the front panel for modular pouch attachment',
            'Adjustable shoulder and side fastening system for secure fitting',
            'Extended side protection panels for increased coverage',
            'Reinforced textile structure for durability and long service life',
            'Internal shock-absorption and ventilation system for improved comfort during prolonged use.',
          ],
          set: [
            'Pouch for AK / RPK magazines - 4 pcs',
            'Side utility pouch - 1 pc',
            'Radio pouch - 1 pc',
          ],
        },
        {
          slug: 'vest-5',
          title: 'Assault Body Armor',
          overview:
            'A reinforced tactical vest arrangement designed for long service life, practical use, and stable component integration.',
          description: [
            'Protective class according to GOST R 34286-2017: BR 4',
            'Soft ballistic insert: BR 1/2',
            'Quick-release system for fast removal in emergency situations',
            'Full MOLLE system for attaching tactical pouches and additional equipment',
            'Adjustable shoulder and side straps for secure and comfortable fitting',
            'Internal shock-absorption and ventilation system for improved comfort during long-term use',
            'Cordura 1000D Fabric',
          ],
          set: [
            'Pouch for AK / RPK magazines - 3 pcs',
            'Double hand-grenade pouch - 1 pc',
            'Radio pouch - 1 pc.',
          ],
        },
        {
          slug: 'vest-6',
          title: 'Quick-Release Bulletproof Vest',
          overview:
            'A production-finished protective vest system prepared for demanding field use and long-term reliability.',
          description: [
            'Protective class according to GOST R 34286-2017: BR 4',
            'Soft ballistic insert: BR 1/2',
            'Quick-release system for fast removal in emergency situations',
            'Full MOLLE system for attaching tactical pouches and additional equipment',
            'Adjustable shoulder and side straps for secure and comfortable fitting',
            'Internal shock-absorption and ventilation system for improved comfort during long-term use',
            'Cordura 1000D Fabric',
          ],
          set: [
            'Pouch for AK / RPK magazines - 3 pcs',
            'Double hand-grenade pouch - 1 pc',
            'Radio pouch - 1 pc',
          ],
        },
      ],
    },
    contact: {
      eyebrow: 'Contact MG-47',
      title: 'Procurement and Partnership Inquiries',
      body:
        'For commercial communication, product requests, and cooperation discussions, use the official contact channels below.',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      website: 'Official Website: www.mg-47.com',
    },
    technologies: {
      title: 'Technologies',
      body:
        'Our stack includes ceramic matrix composites, UHMWPE, and layered steel alloys validated under NATO and NIJ test standards.',
    },
    footer: {
      company: 'MG-47 Military Armor Systems',
    },
  },
  ru: {
    nav: {
      products: 'Продукция',
      about: 'О нас',
      contact: 'Контакты',
    },
    language: {
      label: 'Язык',
      english: 'English',
      russian: 'Русский',
    },
    home: {
      aboutTitle: 'О НАС',
      aboutBody:
        'MG-47 LLC имеет более 30 лет опыта в разработке, моделировании, проектировании и производстве военного снаряжения и тактической экипировки.',
      aboutCta: 'Открыть страницу о нас',
      technologyTitle: 'ТЕХНОЛОГИИ',
      technologyBody:
        'MG-47 сочетает современное оборудование, точное моделирование и профессиональные швейные технологии для производства долговечной тактической экипировки. Каждое изделие создается из тщательно отобранных материалов, с усиленными швами и строгим контролем качества, чтобы обеспечивать надежность, защиту и длительную эффективность в реальных эксплуатационных условиях.',
      productTitle: 'ПРОДУКЦИЯ',
      productBody:
        'Продукция MG-47 разработана для военного применения с акцентом на долговечность, надежные материалы и практическую эффективность в полевых условиях. Наше производство сочетает многолетний опыт, точный пошив, современное оборудование и контролируемые производственные стандарты.',
      productCta: 'Открыть страницу продукции',
      carouselTitle: 'Операционная галерея',
      carouselAltPrefix: 'Изображение технологического процесса',
      carouselLabelPrefix: 'Технология',
      productCardArmorAlt: 'Тактическая броня MG-47',
      productCardArmorLightAlt: 'Облегченная броня MG-47',
    },
    about: {
      factory: 'ВОЕННЫЙ ЗАВОД',
      intro: [
        'MG-47 LLC имеет более 30 лет опыта в разработке, моделировании, проектировании и производстве военного снаряжения и тактической экипировки. Компания специализируется на производстве бронежилетов, тактических сумок, подсумков и другого оборудования военного назначения, рассчитанного на долговечность, функциональность и надежную работу в сложных условиях.',
        'Наш производственный процесс сочетает многолетний отраслевой опыт, современные технологии и профессиональное мастерство. Каждое изделие проходит путь от начального проектирования и моделирования до раскроя, пошива, сборки и финального контроля качества. Особое внимание уделяется подбору материалов, усиленным швам, эргономике и практичности использования, чтобы каждая единица соответствовала высоким эксплуатационным требованиям.',
        'MG-47 LLC использует качественное сырье и современное высокотехнологичное оборудование для достижения точности, стабильности и прочности на каждом этапе производства. Наша команда постоянно работает над улучшением качества продукции, повышением комфорта и созданием надежных тактических решений для обороны, безопасности и профессионального полевого применения.',
        'Благодаря десятилетиям опыта и серьезному отношению к качеству MG-47 LLC поставляет военное снаряжение, созданное для работы в реальных условиях.',
      ],
      videoTitle: 'Видео продукции MG-47',
      partnersTitle: 'НАШИ ПАРТНЕРЫ',
      partnersBody:
        'Военный завод MG47 с гордостью сотрудничает с Вооруженными силами Армении, Службой национальной безопасности и Полицией Республики Армения. Благодаря инновациям, качеству и профессионализму мы поддерживаем разработку надежных решений, способствующих национальной обороне, безопасности и общественной защите.',
      partnerCards: [
        {
          name: 'Оборонные интеграторы',
          description: 'Совместная работа по внедрению защитных систем, полевой адаптации и реализации программ.',
        },
        {
          name: 'Поставщики материалов',
          description: 'Стабильные партнерские поставки баллистического сырья и критически важных производственных компонентов.',
        },
        {
          name: 'Исследовательские группы',
          description: 'Прикладное сотрудничество в методах испытаний, проверке конструкции и совершенствовании характеристик.',
        },
      ],
    },
    products: {
      title: 'Детали продукции MG 47',
      imageAlt: 'Презентация продукции MG-47',
      body: [
        'Бронежилет скрытого ношения MG 47 разработан для надежной повседневной защиты в компактном и удобном формате.',
        'Конструкция сочетает защитные элементы, комфорт и практичность для длительного ношения в профессиональной среде.',
        'Изделие ориентировано на устойчивую эксплуатацию, надежные материалы и практическое применение.',
      ],
      backToProducts: 'Назад к продукции',
      notFoundTitle: 'Продукт не найден',
      descriptionHeading: 'Описание',
      setHeading: 'Комплектация',
      cards: [
        {
          slug: 'vest-1',
          title: 'Бронежилет с защитой воротниковой зоны',
          overview:
            'Тактический плитоносец с модульной конфигурацией для контроля снаряжения, защиты и стабильной полевой эксплуатации.',
          description: [
            'Класс защиты по ГОСТ Р 34286-2017 Br 1/2',
            'Система Molle',
            'Карманы под бронеплиты спереди, сзади и по бокам',
          ],
          set: [
            'Двойные подсумки для магазинов АК - 3 шт',
            'Подсумок для пистолетного магазина - 2 шт',
            'Тройные подсумки для ВОГ-25 - 2 шт',
            'Подсумок для ручной гранаты - 2 шт',
            'Сброс магазина',
            'Индивидуальная сумка - 2 шт.',
            'Подсумок для радиостанции - 2 шт',
            'Медицинская аптечка',
            'Подсумок для фляги',
            'Кобура для пистолета',
            'Регулировка размера и роста ремнями и плечевыми накладками',
            'Ткань Cordura 1000 D',
          ],
        },
        {
          slug: 'vest-2',
          title: 'Бронежилет с защитой воротниковой зоны',
          overview:
            'Защитный жилет с расширенным прикрытием верхней зоны, встроенными подсумками и расчетом на комфорт в эксплуатации.',
          description: [
            'Класс защиты по ГОСТ Р 34286-2017 BR 4',
            'Мягкий баллистический пакет Br 1/2',
            'Класс защиты воротниковой зоны Br1/2',
            'Система Molle',
            'Амортизационно-вентиляционная система на внутренней части',
          ],
          set: [
            'Подсумок для магазинов АК, РПК - 3 шт',
            'Двойной подсумок для ручной гранаты - 1 шт',
            'Подсумок для радиостанции - 1 шт',
          ],
        },
        {
          slug: 'vest-3',
          title: 'Жилет 3',
          overview:
            'Прочная тактическая конфигурация жилета для надежной полевой носки, сбалансированного распределения нагрузки и стабильной защиты.',
        },
        {
          slug: 'vest-4',
          title: 'Жилет 4',
          overview:
            'Структурированная платформа жилета, ориентированная на надежную посадку, усиленную конструкцию и стабильную работу.',
        },
        {
          slug: 'vest-5',
          title: 'Жилет 5',
          overview:
            'Усиленная тактическая компоновка жилета, рассчитанная на длительный срок службы и практическое применение.',
        },
        {
          slug: 'vest-6',
          title: 'Жилет 6',
          overview:
            'Защитная система жилета производственного уровня, подготовленная для требовательной эксплуатации и долгосрочной надежности.',
        },
      ],
    },
    contact: {
      eyebrow: 'Связаться с MG-47',
      title: 'Запросы по закупкам и партнерству',
      body:
        'Для коммерческой связи, запросов по продукции и обсуждения сотрудничества используйте официальные каналы ниже.',
      email: 'Эл. почта',
      phone: 'Телефон',
      website: 'Официальный сайт: www.mg-47.com',
    },
    technologies: {
      title: 'Технологии',
      body:
        'Наш стек включает керамические матричные композиты, UHMWPE и многослойные стальные сплавы, проверенные по стандартам испытаний NATO и NIJ.',
    },
    footer: {
      company: 'MG-47 Военные бронесистемы',
    },
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem(STORAGE_KEY) || 'en')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
