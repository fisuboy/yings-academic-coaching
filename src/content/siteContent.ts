import { Locale, SiteContent } from "@/types/content";

const englishContent: SiteContent = {
  brandName: "Ying's Academic Coaching",
  localeTagline: "English and Chinese academic coaching for students preparing to study in Spain",
  header: {
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Academic Preparation", href: "#academic-preparation" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" }
    ],
    primaryCta: "Book a Discovery Call",
    languageLabel: "Language",
    languageNotice:
      "Coaching is provided in English and Chinese. The website is available in Chinese, Spanish, and English."
  },
  hero: {
    eyebrow:
      "English and Chinese academic coaching for students preparing to study in Spain",
    headline: "Build confidence for academic life in Spain",
    subheadline:
      "Ying's Academic Coaching provides English tutoring, interview preparation, academic communication support, and pre-arrival orientation for students preparing to study in Spain.",
    primaryCta: "Book a Discovery Call",
    secondaryCta: "Contact Us",
    trustItems: [
      "Coaching: English + Chinese",
      "One-to-one support",
      "Online-first",
      "Personalized preparation"
    ],
    visualEyebrow: "Placeholder Visual",
    visualTitle: "Calm, practical preparation for study life in Spain",
    visualSubtitle: "Replace this area with your own study-focused hero image.",
    visualCards: [
      { title: "Academic Clarity", description: "Clear communication and practical planning." },
      { title: "One-to-One Guidance", description: "Personalized support every session." }
    ]
  },
  whoWeHelp: {
    title: "Who This Is For",
    intro:
      "Personalized support for students who want stronger communication, smoother preparation, and more confidence before studying in Spain.",
    cards: [
      {
        title: "Students preparing to move to Spain",
        description:
          "Build stronger English and prepare for the communication demands of academic life before arrival."
      },
      {
        title: "Students who want more confidence in academic English",
        description:
          "Improve speaking, writing, presentations, and classroom communication through one-to-one support."
      },
      {
        title: "Students preparing for interviews and academic transition",
        description:
          "Practice interviews, presentations, and study-related communication so you can feel more prepared and confident."
      }
    ]
  },
  about: {
    title: "About Ying",
    intro:
      "A personal academic coaching approach built from real study experience in Spain and practical communication support.",
    story:
      "Ying supports students with a calm, structured approach focused on communication, confidence, and academic transition. Her guidance is shaped by both formal training and real experience helping students prepare for academic life in Spain.",
    highlightsTitle: "Background Highlights",
    credentials: [
      "Master's degree in International Economic Relations",
      "First-hand study experience in Spain",
      "IELTS-related English credential",
      "Practical, real-world experience supporting students in this field"
    ]
  },
  booking: {
    title: "Book a Discovery Call",
    intro:
      "Share your goals and current situation. You will receive a personalized suggestion for next steps.",
    responseTime: "We usually reply within 24 hours.",
    fallbackContactLabel: "Email",
    fallbackContactValue: "hello@yingstutoring.com",
    fallbackContactHref: "mailto:hello@yingstutoring.com",
    formTitle: "Discovery Call Request Form",
    formDescription:
      "Submit this form and your email app will open with all details prepared for sending.",
    requiredNotice: "* Required fields",
    submitLabel: "Send Booking Request",
    successMessage:
      "Thanks. Your email draft is now ready. Please send it to complete your request.",
    fields: {
      fullName: "Full Name",
      email: "Email",
      preferredContact: "Preferred Contact Method",
      contactHandle: "WeChat / WhatsApp / Other Contact",
      stage: "Current Stage",
      goals: "What support do you need?",
      sessionLanguage: "Preferred Session Language",
      timezone: "Timezone"
    },
    placeholders: {
      goals:
        "Example: I am preparing to move to Spain and want support with interview confidence and academic communication.",
      timezone: "Example: Spain (CET) / China (CST)",
      contactHandle: "Example: WeChat ID or WhatsApp number"
    },
    options: {
      preferredContact: [
        { value: "email", label: "Email" },
        { value: "wechat", label: "WeChat" },
        { value: "whatsapp", label: "WhatsApp" }
      ],
      stage: [
        { value: "pre-arrival", label: "Preparing to study in Spain" },
        { value: "in-spain", label: "Already studying in Spain" },
        { value: "interview", label: "Interview / presentation preparation" },
        { value: "other", label: "Other" }
      ],
      sessionLanguage: [
        { value: "english", label: "English" },
        { value: "chinese", label: "Chinese" }
      ]
    },
    validation: {
      fullNameRequired: "Please enter your name.",
      emailRequired: "Please enter your email.",
      emailInvalid: "Please enter a valid email address.",
      goalsRequired: "Please describe the support you need."
    }
  },
  services: {
    title: "Services",
    intro:
      "Focused, one-to-one support tailored to each student's academic goals and preparation needs.",
    cards: [
      {
        title: "English and Chinese Tutoring",
        description:
          "Personalized lessons to improve grammar, speaking, listening, writing, and academic vocabulary.",
        icon: "englishTutoring"
      },
      {
        title: "Interview Preparation",
        description:
          "Structured practice to help students speak more clearly and confidently in formal academic situations.",
        icon: "interviewPreparation"
      },
      {
        title: "Academic Communication Coaching",
        description:
          "Support for presentations, classroom participation, email writing, and day-to-day academic communication.",
        icon: "academicCommunication"
      },
      {
        title: "Presentation & Speaking Confidence",
        description:
          "Develop stronger delivery, clearer structure, and more confidence when speaking in academic settings.",
        icon: "presentationConfidence"
      },
      {
        title: "Pre-Arrival Orientation",
        description:
          "Prepare for study life in Spain with guidance on expectations, communication style, and academic adjustment.",
        icon: "preArrivalOrientation"
      },
      {
        title: "Personalized One-to-One Support",
        description:
          "Every student has different goals, and each session is adapted to the student's level, pace, and priorities.",
        icon: "personalizedSupport"
      }
    ]
  },
  academicPreparation: {
    title: "Academic Preparation for Spain",
    intro:
      "Studying in Spain requires more than language ability. Students also benefit from preparation in communication, confidence, and academic adaptation.",
    focusLabel: "Preparation Focus",
    points: [
      "Interview preparation for academic contexts",
      "Support for presentations and spoken confidence",
      "Guidance on academic communication and classroom participation",
      "English-language preparation for study-related situations",
      "Pre-arrival orientation for adapting to academic life in Spain",
      "Practice for clear academic email and day-to-day study communication"
    ],
    closingText:
      "The goal is to help students feel more prepared, communicate more clearly, and transition more smoothly into study life in Spain."
  },
  howItWorks: {
    title: "How It Works",
    intro: "A clear process with practical steps and personalized support.",
    steps: [
      {
        title: "Share your goals",
        description:
          "Tell us about your plans, your current level, and the kind of support you need."
      },
      {
        title: "Get a personalized plan",
        description:
          "We suggest the right focus, whether that is English tutoring, interview preparation, academic communication, or orientation."
      },
      {
        title: "Begin your sessions",
        description:
          "Start one-to-one support online, with a pace and structure adapted to your goals."
      }
    ]
  },
  whyChoose: {
    title: "Why Students Choose This Support",
    intro:
      "Students often need more than language lessons. They need preparation that feels personal, practical, and relevant to real academic life.",
    cards: [
      {
        title: "Multilingual website, bilingual coaching",
        description:
          "The website is available in Chinese, Spanish, and English. Coaching sessions focus on English and Chinese support.",
        icon: "multilingualAccess"
      },
      {
        title: "Designed for the Spain study path",
        description:
          "Preparation shaped around the real communication and adjustment challenges students face in Spain.",
        icon: "spainStudyPath"
      },
      {
        title: "Personalized one-to-one guidance",
        description:
          "No generic program. Support is adapted to each student's academic direction, level, and timeline.",
        icon: "personalizedGuidance"
      },
      {
        title: "Calm and practical approach",
        description:
          "Focused help that supports communication, preparation, and confidence without unnecessary complexity.",
        icon: "calmApproach"
      }
    ]
  },
  supportiveApproach: {
    title: "A Calm, Supportive Approach",
    text: "At Ying's Academic Coaching, the goal is to help students move forward with more clarity, stronger communication, and better preparation for academic life in Spain. Support is always personalized, practical, and adapted to each student's situation."
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Do you help students before they arrive in Spain?",
        answer:
          "Yes. Support can begin before arrival, especially for English preparation, interview practice, and preparation for academic life in Spain."
      },
      {
        question: "Which languages do you use in sessions?",
        answer:
          "Coaching sessions are provided in English and Chinese. The website is also available in Spanish, Chinese, and English."
      },
      {
        question: "Do you help with interviews and academic communication?",
        answer:
          "Yes. Support can include interview preparation, spoken confidence, presentation coaching, and communication practice for academic settings."
      },
      {
        question: "Are sessions online or in person?",
        answer:
          "Sessions are primarily online. In-person availability can depend on location and scheduling."
      },
      {
        question: "Is the support only for English?",
        answer:
          "No. English tutoring is one part of the service. Support can also include interview preparation, academic communication coaching, and pre-arrival orientation."
      }
    ]
  },
  finalCta: {
    headline: "Get personalized academic coaching for studying in Spain",
    text: "Whether you need support with English, interviews, academic communication, or pre-arrival preparation, Ying's Academic Coaching offers one-to-one support tailored to your goals.",
    primaryCta: "Book a Discovery Call",
    secondaryCta: "Contact Us",
    contacts: [
      {
        kind: "email",
        label: "Email",
        value: "hello@yingstutoring.com",
        href: "mailto:hello@yingstutoring.com"
      },
      { kind: "wechat", label: "WeChat", value: "placeholder" },
      { kind: "whatsapp", label: "WhatsApp", value: "placeholder" }
    ]
  },
  footer: {
    description:
      "Academic coaching in English and Chinese, with a multilingual website for students preparing to study and adapt to life in Spain.",
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Academic Preparation", href: "#academic-preparation" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" }
    ],
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms"
  }
};

const spanishContent: SiteContent = {
  brandName: "Ying's Academic Coaching",
  localeTagline:
    "Coaching academico en ingles y chino para estudiantes que se preparan para estudiar en España",
  header: {
    navLinks: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre Ying", href: "#about" },
      { label: "Servicios", href: "#services" },
      { label: "Preparacion Academica", href: "#academic-preparation" },
      { label: "Como Funciona", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contact" }
    ],
    primaryCta: "Reservar llamada inicial",
    languageLabel: "Idioma",
    languageNotice:
      "Las sesiones se ofrecen en ingles y chino. El sitio web esta disponible en chino, español e ingles."
  },
  hero: {
    eyebrow:
      "Coaching academico en ingles y chino para estudiantes que se preparan para estudiar en España",
    headline: "Gana confianza para la vida academica en España",
    subheadline:
      "Ying's Academic Coaching ofrece apoyo en ingles, preparacion de entrevistas, coaching de comunicacion academica y orientacion previa a la llegada para estudiantes que van a estudiar en España.",
    primaryCta: "Reservar llamada inicial",
    secondaryCta: "Contactar",
    trustItems: [
      "Sesiones: ingles + chino",
      "Apoyo individual",
      "Enfoque online",
      "Preparacion personalizada"
    ],
    visualEyebrow: "Visual de referencia",
    visualTitle: "Preparacion calmada y practica para estudiar en España",
    visualSubtitle: "Sustituye esta zona por tu imagen principal.",
    visualCards: [
      { title: "Claridad academica", description: "Comunicacion clara y planificacion practica." },
      { title: "Acompanamiento uno a uno", description: "Apoyo personalizado en cada sesion." }
    ]
  },
  whoWeHelp: {
    title: "Para Quien Es",
    intro:
      "Apoyo personalizado para estudiantes que buscan mejor comunicacion, preparacion mas fluida y mayor confianza antes de estudiar en España.",
    cards: [
      {
        title: "Estudiantes que se preparan para mudarse a España",
        description:
          "Fortalece tu ingles y preparate para las exigencias de comunicacion academica antes de llegar."
      },
      {
        title: "Estudiantes que quieren mas confianza en ingles academico",
        description:
          "Mejora expresion oral, escritura, presentaciones y participacion en clase con apoyo individual."
      },
      {
        title: "Estudiantes que se preparan para entrevistas y transicion academica",
        description:
          "Practica entrevistas, presentaciones y comunicacion de estudio para llegar con mas seguridad."
      }
    ]
  },
  about: {
    title: "Sobre Ying",
    intro:
      "Un enfoque personal de coaching academico construido desde experiencia real de estudio en España y apoyo practico de comunicacion.",
    story:
      "Ying acompana a estudiantes con una metodologia calmada y estructurada, centrada en comunicacion, confianza y transicion academica. Su orientacion combina formacion academica y experiencia real apoyando a estudiantes en su preparacion para estudiar en España.",
    highlightsTitle: "Aspectos destacados",
    credentials: [
      "Master en Relaciones Economicas Internacionales",
      "Experiencia de estudio en España en primera persona",
      "Credencial de ingles relacionada con IELTS",
      "Experiencia practica real en acompanamiento de estudiantes"
    ]
  },
  booking: {
    title: "Reservar llamada inicial",
    intro:
      "Comparte tus objetivos y tu situacion actual. Recibiras una recomendacion personalizada de los siguientes pasos.",
    responseTime: "Normalmente respondemos en menos de 24 horas.",
    fallbackContactLabel: "Correo",
    fallbackContactValue: "hello@yingstutoring.com",
    fallbackContactHref: "mailto:hello@yingstutoring.com",
    formTitle: "Formulario de solicitud",
    formDescription:
      "Al enviar, se abrira tu correo con todos los datos preparados para enviar.",
    requiredNotice: "* Campos obligatorios",
    submitLabel: "Enviar solicitud",
    successMessage: "Gracias. El borrador de correo esta listo para enviar.",
    fields: {
      fullName: "Nombre completo",
      email: "Correo electronico",
      preferredContact: "Metodo de contacto preferido",
      contactHandle: "WeChat / WhatsApp / Otro contacto",
      stage: "Situacion actual",
      goals: "Que apoyo necesitas?",
      sessionLanguage: "Idioma preferido para sesiones",
      timezone: "Zona horaria"
    },
    placeholders: {
      goals:
        "Ejemplo: Me preparo para estudiar en España y quiero mejorar entrevistas y comunicacion academica.",
      timezone: "Ejemplo: España (CET) / China (CST)",
      contactHandle: "Ejemplo: ID de WeChat o numero de WhatsApp"
    },
    options: {
      preferredContact: [
        { value: "email", label: "Correo" },
        { value: "wechat", label: "WeChat" },
        { value: "whatsapp", label: "WhatsApp" }
      ],
      stage: [
        { value: "pre-arrival", label: "Preparando estudios en España" },
        { value: "in-spain", label: "Ya estudiando en España" },
        { value: "interview", label: "Preparacion de entrevistas/presentaciones" },
        { value: "other", label: "Otro" }
      ],
      sessionLanguage: [
        { value: "english", label: "Ingles" },
        { value: "chinese", label: "Chino" }
      ]
    },
    validation: {
      fullNameRequired: "Por favor, escribe tu nombre.",
      emailRequired: "Por favor, escribe tu correo.",
      emailInvalid: "Por favor, usa un correo valido.",
      goalsRequired: "Por favor, describe el apoyo que necesitas."
    }
  },
  services: {
    title: "Servicios",
    intro:
      "Apoyo individual enfocado y adaptado a los objetivos academicos y necesidades de preparacion de cada estudiante.",
    cards: [
      {
        title: "Tutoria en ingles y chino",
        description:
          "Clases personalizadas para mejorar gramatica, expresion oral, escucha, escritura y vocabulario academico.",
        icon: "englishTutoring"
      },
      {
        title: "Preparacion de entrevistas",
        description:
          "Practica estructurada para expresarte con mas claridad y confianza en contextos academicos formales.",
        icon: "interviewPreparation"
      },
      {
        title: "Coaching de comunicacion academica",
        description:
          "Apoyo para presentaciones, participacion en clase, correos y comunicacion academica diaria.",
        icon: "academicCommunication"
      },
      {
        title: "Confianza para presentaciones y expresion oral",
        description:
          "Desarrolla mejor estructura, mejor entrega y mas seguridad al hablar en contextos academicos.",
        icon: "presentationConfidence"
      },
      {
        title: "Orientacion previa a la llegada",
        description:
          "Preparacion para la vida academica en España con enfoque en expectativas, estilo de comunicacion y adaptacion.",
        icon: "preArrivalOrientation"
      },
      {
        title: "Apoyo personalizado uno a uno",
        description:
          "Cada estudiante tiene objetivos distintos y cada sesion se adapta a su nivel, ritmo y prioridades.",
        icon: "personalizedSupport"
      }
    ]
  },
  academicPreparation: {
    title: "Preparacion academica para España",
    intro:
      "Estudiar en España requiere mas que idioma. Tambien se necesita preparacion en comunicacion, confianza y adaptacion academica.",
    focusLabel: "Enfoque de preparacion",
    points: [
      "Preparacion de entrevistas en contextos academicos",
      "Apoyo para presentaciones y confianza oral",
      "Guia para comunicacion academica y participacion en clase",
      "Preparacion en ingles para situaciones de estudio",
      "Orientacion previa para adaptarse a la vida academica en España",
      "Practica para correos academicos y comunicacion diaria de estudio"
    ],
    closingText:
      "El objetivo es que cada estudiante llegue mejor preparado, se comunique con mayor claridad y se adapte de forma mas fluida a la vida academica en España."
  },
  howItWorks: {
    title: "Como Funciona",
    intro: "Un proceso claro con pasos practicos y apoyo personalizado.",
    steps: [
      {
        title: "Comparte tus objetivos",
        description:
          "Cuéntanos tus planes, tu nivel actual y el tipo de apoyo que necesitas."
      },
      {
        title: "Recibe un plan personalizado",
        description:
          "Proponemos el mejor enfoque: ingles, entrevistas, comunicacion academica u orientacion."
      },
      {
        title: "Comienza tus sesiones",
        description:
          "Empieza sesiones uno a uno online, con ritmo y estructura adaptados a tus objetivos."
      }
    ]
  },
  whyChoose: {
    title: "Por que los estudiantes eligen este apoyo",
    intro:
      "Muchos estudiantes necesitan mas que clases de idioma. Necesitan preparacion personal, practica y util para la vida academica real.",
    cards: [
      {
        title: "Web multilingue, coaching bilingue",
        description:
          "La web esta en chino, español e ingles. Las sesiones se enfocan en ingles y chino.",
        icon: "multilingualAccess"
      },
      {
        title: "Disenado para la ruta academica en España",
        description:
          "Preparacion alineada con los retos reales de comunicacion y adaptacion en España.",
        icon: "spainStudyPath"
      },
      {
        title: "Orientacion individual personalizada",
        description:
          "Sin programas genericos. El apoyo se adapta a la direccion academica, nivel y tiempo de cada estudiante.",
        icon: "personalizedGuidance"
      },
      {
        title: "Enfoque calmado y practico",
        description:
          "Apoyo claro para comunicacion, preparacion y confianza sin complejidad innecesaria.",
        icon: "calmApproach"
      }
    ]
  },
  supportiveApproach: {
    title: "Un enfoque calmado y de apoyo",
    text: "En Ying's Academic Coaching, el objetivo es ayudar a cada estudiante a avanzar con mas claridad, mejor comunicacion y mejor preparacion para la vida academica en España. El apoyo siempre es personalizado, practico y adaptado a cada situacion."
  },
  faq: {
    title: "Preguntas Frecuentes",
    items: [
      {
        question: "Ofrecen apoyo antes de llegar a España?",
        answer:
          "Si. El apoyo puede empezar antes de la llegada, especialmente para ingles, entrevistas y preparacion para la vida academica en España."
      },
      {
        question: "Que idiomas se usan en las sesiones?",
        answer:
          "Las sesiones se ofrecen en ingles y chino. La web tambien esta disponible en español, chino e ingles."
      },
      {
        question: "Incluyen entrevistas y comunicacion academica?",
        answer:
          "Si. El apoyo puede incluir preparacion de entrevistas, confianza oral, coaching de presentaciones y practica de comunicacion para contextos academicos."
      },
      {
        question: "Las sesiones son online o presenciales?",
        answer:
          "Principalmente online. La disponibilidad presencial depende de ubicacion y agenda."
      },
      {
        question: "Es solo tutoria de ingles?",
        answer:
          "No. La tutoria de ingles es una parte del servicio. Tambien incluye entrevistas, comunicacion academica y orientacion previa a la llegada."
      }
    ]
  },
  finalCta: {
    headline: "Consigue coaching academico personalizado para estudiar en España",
    text: "Si necesitas apoyo con ingles, entrevistas, comunicacion academica o preparacion previa, Ying's Academic Coaching ofrece acompanamiento uno a uno adaptado a tus objetivos.",
    primaryCta: "Reservar llamada inicial",
    secondaryCta: "Contactar",
    contacts: [
      {
        kind: "email",
        label: "Correo",
        value: "hello@yingstutoring.com",
        href: "mailto:hello@yingstutoring.com"
      },
      { kind: "wechat", label: "WeChat", value: "placeholder" },
      { kind: "whatsapp", label: "WhatsApp", value: "placeholder" }
    ]
  },
  footer: {
    description:
      "Coaching academico en ingles y chino, con sitio web multilingue para estudiantes que se preparan para estudiar y adaptarse en España.",
    navLinks: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre Ying", href: "#about" },
      { label: "Servicios", href: "#services" },
      { label: "Preparacion", href: "#academic-preparation" },
      { label: "Como Funciona", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contact" }
    ],
    privacyLabel: "Privacidad",
    termsLabel: "Terminos"
  }
};

const chineseContent: SiteContent = {
  brandName: "Ying's Academic Coaching",
  localeTagline: "面向准备赴西班牙学习学生的英语与中文学术辅导",
  header: {
    navLinks: [
      { label: "首页", href: "#home" },
      { label: "关于Ying", href: "#about" },
      { label: "服务", href: "#services" },
      { label: "学术准备", href: "#academic-preparation" },
      { label: "服务流程", href: "#how-it-works" },
      { label: "常见问题", href: "#faq" },
      { label: "联系", href: "#contact" }
    ],
    primaryCta: "预约咨询通话",
    languageLabel: "语言",
    languageNotice: "课程支持语言为英语和中文。网站提供中文、西班牙语和英语版本。"
  },
  hero: {
    eyebrow: "面向准备赴西班牙学习学生的英语与中文学术辅导",
    headline: "更有信心地开启西班牙学术生活",
    subheadline:
      "Ying's Academic Coaching 提供英语辅导、面试准备、学术沟通训练以及赴西班牙前的学习适应指导，帮助学生更稳妥地做好学习准备。",
    primaryCta: "预约咨询通话",
    secondaryCta: "联系我们",
    trustItems: ["授课语言：英语 + 中文", "一对一支持", "线上为主", "个性化准备"],
    visualEyebrow: "示意视觉",
    visualTitle: "为西班牙学习生活提供冷静、实用的准备支持",
    visualSubtitle: "可在此替换为你的品牌主视觉图片。",
    visualCards: [
      { title: "学术表达更清晰", description: "沟通更明确，学习规划更实用。" },
      { title: "一对一指导", description: "每次课程都根据你的目标进行调整。" }
    ]
  },
  whoWeHelp: {
    title: "适合哪些学生",
    intro:
      "为希望提升沟通能力、平稳过渡并增强学习信心的学生提供个性化支持。",
    cards: [
      {
        title: "准备前往西班牙的学生",
        description: "在出发前加强英语能力，并提前适应学术场景中的沟通需求。"
      },
      {
        title: "希望提升学术英语自信的学生",
        description:
          "通过一对一支持提升口语、写作、展示表达和课堂沟通能力。"
      },
      {
        title: "准备面试与学业过渡的学生",
        description:
          "练习面试、演讲与学习相关沟通，让你在进入新环境前更从容。"
      }
    ]
  },
  about: {
    title: "关于 Ying",
    intro: "基于在西班牙真实学习经历与实践支持经验的个性化学术辅导方式。",
    story:
      "Ying 以冷静、结构化的方式支持学生，重点提升沟通能力、学习信心与学术过渡准备。她的指导来自系统学术训练，也来自长期的一线学生支持经验。",
    highlightsTitle: "背景亮点",
    credentials: [
      "国际经济关系硕士学位",
      "在西班牙的真实学习经历",
      "具备 IELTS 相关英语资质",
      "在该领域有真实、持续的学生支持经验"
    ]
  },
  booking: {
    title: "预约咨询通话",
    intro: "告诉我们你的目标与现状，我们会给出下一步的个性化建议。",
    responseTime: "我们通常会在 24 小时内回复。",
    fallbackContactLabel: "邮箱",
    fallbackContactValue: "hello@yingstutoring.com",
    fallbackContactHref: "mailto:hello@yingstutoring.com",
    formTitle: "咨询预约表单",
    formDescription: "提交后会自动打开你的邮箱，并生成可直接发送的预约邮件草稿。",
    requiredNotice: "* 为必填项",
    submitLabel: "发送预约请求",
    successMessage: "已为你生成邮件草稿，请发送以完成预约请求。",
    fields: {
      fullName: "姓名",
      email: "邮箱",
      preferredContact: "偏好联系渠道",
      contactHandle: "WeChat / WhatsApp / 其他联系方式",
      stage: "当前阶段",
      goals: "你希望获得哪些支持？",
      sessionLanguage: "课程偏好语言",
      timezone: "时区"
    },
    placeholders: {
      goals: "例如：我正在准备去西班牙，希望提升面试表达和学术沟通能力。",
      timezone: "例如：西班牙（CET）/ 中国（CST）",
      contactHandle: "例如：微信号或 WhatsApp 号码"
    },
    options: {
      preferredContact: [
        { value: "email", label: "邮箱" },
        { value: "wechat", label: "微信" },
        { value: "whatsapp", label: "WhatsApp" }
      ],
      stage: [
        { value: "pre-arrival", label: "准备赴西班牙学习" },
        { value: "in-spain", label: "已在西班牙学习" },
        { value: "interview", label: "准备面试/演讲" },
        { value: "other", label: "其他" }
      ],
      sessionLanguage: [
        { value: "english", label: "英语" },
        { value: "chinese", label: "中文" }
      ]
    },
    validation: {
      fullNameRequired: "请填写姓名。",
      emailRequired: "请填写邮箱。",
      emailInvalid: "请输入有效邮箱地址。",
      goalsRequired: "请说明你需要的支持内容。"
    }
  },
  services: {
    title: "服务内容",
    intro: "围绕每位学生的学习目标与准备节奏，提供聚焦的一对一支持。",
    cards: [
      {
        title: "英语与中文辅导",
        description: "通过个性化课程提升语法、口语、听力、写作与学术词汇表达。",
        icon: "englishTutoring"
      },
      {
        title: "面试准备",
        description: "通过结构化练习提升在正式学术场景中的表达清晰度与自信。",
        icon: "interviewPreparation"
      },
      {
        title: "学术沟通辅导",
        description: "支持课堂参与、演讲表达、邮件写作与日常学术沟通。",
        icon: "academicCommunication"
      },
      {
        title: "演讲与口语自信训练",
        description: "提升表达结构、呈现效果与学术场景下的口头表达信心。",
        icon: "presentationConfidence"
      },
      {
        title: "出发前适应指导",
        description: "围绕西班牙学习生活中的期望、沟通方式与适应节奏做准备。",
        icon: "preArrivalOrientation"
      },
      {
        title: "个性化一对一支持",
        description: "每位学生目标不同，课程会根据水平、节奏与优先事项进行调整。",
        icon: "personalizedSupport"
      }
    ]
  },
  academicPreparation: {
    title: "西班牙学习学术准备",
    intro: "在西班牙学习不仅需要语言能力，也需要沟通、自信与学术适应方面的准备。",
    focusLabel: "准备重点",
    points: [
      "面向学术场景的面试准备",
      "演讲表达与口语自信支持",
      "课堂沟通与参与能力指导",
      "学习场景相关英语准备",
      "出发前学术生活适应指导",
      "学术邮件与日常学习沟通练习"
    ],
    closingText:
      "目标是帮助学生更有准备、更清晰地沟通，并更顺利地过渡到西班牙学习生活。"
  },
  howItWorks: {
    title: "服务流程",
    intro: "清晰、实用、可执行的三步支持流程。",
    steps: [
      {
        title: "先告诉我们你的目标",
        description: "分享你的学习计划、当前水平以及你希望获得的支持类型。"
      },
      {
        title: "获得个性化建议方案",
        description: "我们会根据你的情况建议重点方向，如英语、面试、沟通或适应准备。"
      },
      {
        title: "开始一对一课程",
        description: "以线上为主，按你的节奏和目标开展结构化支持。"
      }
    ]
  },
  whyChoose: {
    title: "为什么学生选择这项支持",
    intro: "很多学生需要的不只是语言课，而是更贴近真实学术生活的个性化准备。",
    cards: [
      {
        title: "多语言网站 + 双语教学支持",
        description: "网站支持中文、西班牙语和英语；课程支持以英语和中文为主。",
        icon: "multilingualAccess"
      },
      {
        title: "贴合西班牙学习路径",
        description: "围绕学生在西班牙真实会遇到的沟通与适应挑战设计准备内容。",
        icon: "spainStudyPath"
      },
      {
        title: "真正个性化的一对一指导",
        description: "不使用通用模板，支持内容会根据学生方向、水平和时间线调整。",
        icon: "personalizedGuidance"
      },
      {
        title: "冷静且务实的方法",
        description: "聚焦沟通、准备与信心提升，不过度复杂化。",
        icon: "calmApproach"
      }
    ]
  },
  supportiveApproach: {
    title: "冷静且支持性的方式",
    text: "在 Ying's Academic Coaching，我们的目标是帮助学生以更清晰的方向、更强的沟通能力与更扎实的准备进入西班牙学术生活。所有支持都坚持个性化、实用化，并贴合学生实际情况。"
  },
  faq: {
    title: "常见问题",
    items: [
      {
        question: "在到达西班牙前可以开始支持吗？",
        answer: "可以。很多学生会在出发前先进行英语准备、面试练习和学术生活适应准备。"
      },
      {
        question: "课程支持使用哪些语言？",
        answer: "课程支持语言为英语和中文。网站同时提供西班牙语、中文和英语版本。"
      },
      {
        question: "可以做面试和学术沟通训练吗？",
        answer:
          "可以。支持内容可包含面试准备、口语自信提升、演讲辅导和学术场景沟通练习。"
      },
      {
        question: "课程是线上还是线下？",
        answer: "课程以线上为主，线下安排取决于地点和时间。"
      },
      {
        question: "是否只做英语辅导？",
        answer: "不是。英语辅导只是其中一部分，也包含面试准备、学术沟通训练与出发前适应支持。"
      }
    ]
  },
  finalCta: {
    headline: "获取面向西班牙学习的个性化学术辅导",
    text: "无论你需要英语支持、面试准备、学术沟通训练，还是出发前准备，Ying's Academic Coaching 都可提供贴合目标的一对一支持。",
    primaryCta: "预约咨询通话",
    secondaryCta: "联系我们",
    contacts: [
      {
        kind: "email",
        label: "邮箱",
        value: "hello@yingstutoring.com",
        href: "mailto:hello@yingstutoring.com"
      },
      { kind: "wechat", label: "微信", value: "placeholder" },
      { kind: "whatsapp", label: "WhatsApp", value: "placeholder" }
    ]
  },
  footer: {
    description: "课程支持语言为英语和中文，网站多语言可用，帮助学生更好准备并适应西班牙学习生活。",
    navLinks: [
      { label: "首页", href: "#home" },
      { label: "关于Ying", href: "#about" },
      { label: "服务", href: "#services" },
      { label: "学术准备", href: "#academic-preparation" },
      { label: "流程", href: "#how-it-works" },
      { label: "常见问题", href: "#faq" },
      { label: "联系", href: "#contact" }
    ],
    privacyLabel: "隐私政策",
    termsLabel: "服务条款"
  }
};

const siteContentByLocale: Record<Locale, SiteContent> = {
  en: englishContent,
  es: spanishContent,
  zh: chineseContent
};

export function getContent(locale: Locale): SiteContent {
  return siteContentByLocale[locale] ?? englishContent;
}
