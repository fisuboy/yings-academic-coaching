import { Locale, SiteContent } from "@/types/content";

const englishContent: SiteContent = {
  brandName: "Ying's Academic Coaching",
  localeTagline:
    "Barcelona-based professional English training and communication support for professional, cross-cultural, academic, and study-in-Spain contexts",
  privacyBanner: {
    title: "Privacy and Cookies",
    body:
      "We use essential website technologies and limited personal data to keep this site working and to respond to enquiries. You can read more in our Privacy Policy and Cookie Policy.",
    continueLabel: "Continue",
    cookiePolicyLabel: "Cookie Policy",
    privacyPolicyLabel: "Privacy Policy"
  },
  header: {
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Pre-Arrival Package", href: "#westbound-launch" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" }
    ],
    primaryCta: "Book a Discovery Call",
    languageLabel: "Language",
    languageNotice:
      "Services focus on professional English training and communication support. Chinese can be used where helpful for clarity; the website is available in Chinese, English, Spanish, and Catalan."
  },
  hero: {
    eyebrow:
      "Barcelona-based professional English training and communication support",
    headline: "Build stronger English for professional, academic, and cross-cultural communication",
    subheadline:
      "One-to-one English training for formal expression, interviews, academic communication, and pre-arrival preparation for studying in Spain. Online-first, with limited in-person sessions available by appointment within Barcelona city.",
    primaryCta: "Book a Discovery Call",
    secondaryCta: "Contact Us",
    trustItems: [
      "One-to-one support",
      "Online-first across Spain",
      "Barcelona-based",
      "Limited in-person sessions by appointment within Barcelona city",
      "Personalized feedback"
    ],
    visualEyebrow: "Study Session in Barcelona",
    visualTitle: "Scenario-based English training for international, academic, and study-in-Spain settings",
    visualSubtitle: "A calm, one-to-one study setting that reflects focused support and practical communication work.",
    visualCards: [
      {
        title: "Scenario-Based Training",
        description: "Practice tied to interviews, email writing, presentations, and real communication contexts."
      },
      {
        title: "Personal Follow-Up",
        description: "One-to-one support with practical feedback and continuity across sessions."
      }
    ]
  },
  whoWeHelp: {
    title: "Who This Is For",
    intro:
      "Focused support for learners who need stronger English expression, clearer communication, and practical preparation for real professional, cross-cultural, and study-related situations.",
    cards: [
      {
        title: "Professionals and university students improving formal English and cross-cultural communication",
        description:
          "Improve spoken English, formal expression, email writing, and communication habits for international academic and professional settings."
      },
      {
        title: "Learners preparing for interviews, oral expression, or short-cycle English goals",
        description:
          "Build confidence through focused interview practice, oral-expression training, pronunciation support, and structured feedback."
      },
      {
        title: "International students preparing for academic communication and study in Spain",
        description:
          "Prepare for academic emails, classroom communication, presentations, and pre-arrival communication situations before moving to Spain."
      }
    ]
  },
  about: {
    title: "About Ying",
    intro:
      "A professional, practical teaching approach grounded in cross-cultural communication, academic experience, and real formal communication work.",
    story:
      "Ying supports learners through structured one-to-one English training built around real communication scenarios. Her background includes undergraduate study in China, an official master's degree in International Economic Relations Analysis completed in Spain, experience in English teaching and student support, and work involving formal written communication, coordination, interpreting/translation-related work, and cross-cultural communication in international environments.",
    highlightsTitle: "Background Highlights",
    credentials: [
      "Official master's degree in International Economic Relations Analysis completed in Spain",
      "Experience in English teaching and student-service support",
      "Experience in international professional environments and communication coordination",
      "Background in formal written communication, interpreting/translation-related work, and cross-cultural communication practice",
      "Strong English credentials with IELTS-related preparation experience"
    ]
  },
  booking: {
    title: "Book a Discovery Call",
    intro:
      "Share your goals, current situation, and communication priorities. We will reply with the most suitable next step.",
    trustItems: [
      "Reply within 24 hours",
      "Online-first appointments",
      "Barcelona-based service",
      "Limited in-person sessions by appointment within Barcelona city"
    ],
    paths: {
      messageUs: {
        title: "Message Us",
        description: "Best for quick questions or first contact.",
        helper: "A short message is enough to start.",
        channels: [
          {
            kind: "email",
            label: "Email",
            value: "hello@yingstutoring.com",
            href: "mailto:hello@yingstutoring.com",
            actionLabel: "Send Email",
            helperText: "Best for detailed questions."
          },
          {
            kind: "wechat",
            label: "WeChat",
            value: "Available on request",
            helperText: "Best for quick text updates."
          },
          {
            kind: "whatsapp",
            label: "WhatsApp",
            value: "Available on request",
            helperText: "Best for short follow-up messages."
          }
        ]
      },
      requestCall: {
        title: "Request a Discovery Call",
        description: "Best for service-fit review, personalized guidance, and a clear next step.",
        ctaLabel: "Go to Discovery Call Form"
      }
    },
    form: {
      id: "discovery-call-form",
      title: "Discovery Call Request",
      description:
        "This short form helps us assess service fit and respond with the most relevant support option.",
      helper:
        "Each request is reviewed personally. If there is a good fit, we follow up with scheduling and next-step details.",
      requiredNotice: "* Required fields",
      recommendedNotice:
        "Optional fields help us tailor our first response and planning.",
      submitLabel: "Submit Discovery Call Request",
      submittingLabel: "Submitting Request...",
      successTitle: "Request received",
      successMessage: "Thank you. Your request has been submitted successfully.",
      successFollowUp:
        "We will review your details personally and reply within 24 hours with the best next step.",
      resetLabel: "Submit another request",
      fields: {
        fullName: "Full Name",
        email: "Email",
        contactHandle: "WeChat / WhatsApp / Other Contact",
        role: "I am a",
        stage: "Current Situation",
        supportNeeds: "What support do you need?",
        sessionLanguage: "Preferred Contact Language",
        timezone: "Timezone",
        timeWindow: "Preferred Time Window",
        message: "Short Message",
        honeypot: "Leave this field empty"
      },
      hints: {
        contactHandle: "Optional but recommended for faster follow-up.",
        message: "Optional: share key context in 1-3 sentences."
      },
      placeholders: {
        contactHandle: "Example: WeChat ID or WhatsApp number",
        timezone: "Example: Spain (CET) / China (CST)",
        timeWindow: "Example: Weekdays 18:00-21:00 (CET)",
        message:
          "Optional: Tell us your top priority right now (e.g., interview confidence, academic communication, pre-arrival support)."
      },
      options: {
        role: [
          { value: "student", label: "Student" },
          { value: "adult-learner", label: "Adult learner" },
          { value: "parent", label: "Parent" }
        ],
        stage: [
          { value: "improving-english", label: "Improving English for work or study" },
          { value: "interview-goal", label: "Preparing for an interview or oral-expression goal" },
          { value: "planning-spain", label: "Preparing to study in Spain" },
          { value: "in-spain", label: "Already studying or living in Spain" }
        ],
        supportNeeds: [
          { value: "professional-english", label: "Professional English communication and expression training" },
          { value: "interview-preparation", label: "IELTS / interview / oral-expression training" },
          { value: "academic-communication", label: "Academic communication and formal English expression support" },
          { value: "pre-arrival-orientation", label: "Pre-arrival communication preparation for Spain" },
          { value: "barcelona-in-person", label: "Limited in-person session in Barcelona" },
          { value: "other", label: "Other" }
        ],
        sessionLanguage: [
          { value: "english", label: "English" },
          { value: "chinese", label: "Chinese (support language)" },
          { value: "spanish", label: "Spanish (support language)" },
          { value: "catalan", label: "Catalan (support language)" }
        ]
      },
      validation: {
        fullNameRequired: "Please enter your full name.",
        emailRequired: "Please enter your email address.",
        emailInvalid: "Please use a valid email address.",
        roleRequired: "Please select whether you are a student, adult learner, or parent.",
        stageRequired: "Please choose your current situation.",
        supportNeedsRequired: "Please select at least one support area.",
        timezoneRequired: "Please add your timezone.",
        timeWindowRequired: "Please share your preferred time window.",
        privacyAcknowledgementRequired:
          "Please confirm that you have read the Privacy Policy before submitting your request.",
        submitFailed:
          "Something went wrong while submitting. Please try again or message us directly."
      },
      privacyNotice: {
        text:
          "We use your information to review your request, reply to you, and, if relevant, arrange next-step support. Form submissions are processed through Formspree on our behalf.",
        cookiePolicyLabel: "Cookie Policy",
        privacyPolicyLabel: "Privacy Policy",
        legalNoticeLabel: "Legal Notice"
      },
      privacyAcknowledgement: {
        labelBeforeLink: "I have read the",
        privacyPolicyLabel: "Privacy Policy",
        labelAfterLink:
          "and understand how my information will be used to review and respond to my request."
      },
      privacyModal: {
        triggerLabel: "How we use your information",
        title: "How we use your information",
        intro:
          "Before you submit the form, here is a clear summary of how your information is used and who helps process it.",
        sections: [
          {
            title: "Who handles your information",
            body: [
              "The site owner handles your information to review your enquiry and organize appropriate next-step support.",
              "Contact details for privacy questions are listed in the Privacy Policy."
            ]
          },
          {
            title: "What we collect",
            body: [
              "We collect the information you enter in the form, such as your name, email address, contact handle, support needs, timezone, and message.",
              "We only ask for information that helps us understand your request and reply appropriately."
            ]
          },
          {
            title: "Why we use it",
            body: [
              "Your information is used to review your enquiry, reply to you, and, if relevant, arrange the most suitable next step for support.",
              "It is not used for unrelated marketing."
            ]
          },
          {
            title: "Service providers we use",
            body: [
              "We use Formspree to process contact and discovery-call form submissions on our behalf.",
              "We also use standard website hosting and technical services needed to run the site."
            ]
          },
          {
            title: "Your rights",
            body: [
              "You can request access, correction, or deletion of your personal data, and ask questions about how it is handled.",
              "The Privacy Policy explains how to contact us about privacy rights."
            ]
          }
        ],
        moreInfoText: "For full details, please read the Privacy Policy.",
        closeLabel: "Close"
      }
    }
  },
  services: {
    title: "Services",
    intro:
      "Launch-stage services focus on professional English training, scenario-based communication practice, interview and oral-expression work, and practical preparation for study-related situations in Spain.",
    cards: [
      {
        title: "Professional English Communication and Expression Training",
        description:
          "One-to-one English training for adults and university students who want stronger spoken English, more formal expression, clearer emails, and more natural communication in international and professional contexts.",
        details: [
          "Includes scenario-based speaking and listening practice for meetings, everyday professional communication, formal English use, and cross-cultural communication situations.",
          "Covers email writing, clearer phrasing, stronger formal expression, and practical communication habits.",
          "Format: one-to-one, online-first, billed hourly, suitable for repeat sessions and ongoing improvement."
        ],
        icon: "englishTutoring"
      },
      {
        title: "IELTS, Interview, and Oral Expression Training",
        description:
          "Focused short-cycle training for learners who need interview readiness, stronger oral expression, clearer logic under pressure, and more confident spoken English.",
        details: [
          "Includes mock questions, answer-structure work, pronunciation support, and targeted practice across IELTS components where relevant.",
          "Builds confidence for interviews, oral exams, and formal spoken situations where clarity and control matter.",
          "Includes feedback after practice with concrete corrections and next-step drills. Format: one-to-one, online, hourly."
        ],
        icon: "interviewPreparation"
      },
      {
        title: "Academic Communication and Formal English Expression Support",
        description:
          "Practical support for learners who need clearer formal English in academic settings, including email writing, presentations, Q&A preparation, and course-related communication.",
        details: [
          "Covers phrasing, tone, and structure for communication with professors, departments, academic staff, and university offices.",
          "Helps improve written structure, spoken clarity, presentation delivery, and formal English expression in study-related contexts.",
          "Includes classroom participation preparation, academic Q&A practice, language-structure suggestions, and refinement of course-related communication without ghostwriting. Format: one-to-one, online, hourly."
        ],
        icon: "academicCommunication"
      },
      {
        title: "Pre-Arrival Communication Preparation Mini Package",
        description:
          "A short, practical package for students preparing to study in Spain who need communication-focused preparation before arrival.",
        details: [
          "Covers school communication, accommodation communication, high-frequency expressions, and basic scenario preparation before arrival.",
          "Includes one-to-one sessions plus support material, with practical reminders for cross-cultural communication and study-related situations.",
          "Designed as a compact, short-cycle option for learners who want focused pre-arrival preparation."
        ],
        icon: "preArrivalOrientation"
      },
      {
        title: "Personalized Follow-Up and Feedback",
        description:
          "Support is structured around individual goals, with continuity, follow-up, and session-by-session adjustment rather than fixed generic lessons.",
        details: [
          "Session focus is adapted to your level, timeline, and real communication scenarios.",
          "Post-session feedback helps you keep improving between appointments and across repeated sessions.",
          "Delivery is appointment-based, online-first, and designed for flexible continuity."
        ],
        icon: "personalizedSupport"
      }
    ]
  },
  pricing: {
    title: "Clear, Simple Pricing",
    intro:
      "Transparent pricing for launch-stage services, with one-to-one delivery and clear scenario-based offers.",
    cards: [
      {
        title: "Professional English Communication and Expression Training",
        price: "18 €/hour",
        description: "For stronger spoken English, clearer written expression, and more natural formal communication.",
        features: [
          "One-to-one online training",
          "Scenario-based communication practice",
          "Ongoing improvement and repeat-session friendly"
        ]
      },
      {
        title: "Interview / Oral Expression Training",
        price: "22 €/hour",
        description:
          "For interview preparation, oral-expression work, pronunciation support, and short-cycle speaking goals.",
        features: [
          "Mock questions and answer-structure practice",
          "Pronunciation and spoken clarity feedback",
          "Results-oriented short-cycle preparation"
        ],
        highlight: "Most requested"
      },
      {
        title: "Academic Communication and Formal English Expression Support",
        price: "24 €/hour",
        description: "For academic emails, presentations, classroom communication, and formal English refinement.",
        features: [
          "Academic email and presentation support",
          "Formal English phrasing and structure work",
          "Course-related communication preparation"
        ]
      },
      {
        title: "Pre-Arrival Communication Preparation Mini Package",
        price: "68 €",
        description: "A short-cycle package for practical communication preparation before study in Spain begins.",
        features: [
          "3 one-to-one sessions",
          "1 support document",
          "Communication-focused preparation before arrival"
        ]
      }
    ],
    footnote:
      "A supplementary basic Chinese / cross-cultural communication support service may be offered selectively at 22 €/hour, but it is not a launch-stage homepage priority."
  },
  academicPreparation: {
    title: "Pre-Arrival Communication Preparation Package",
    intro:
      "A short-cycle, practical package for students preparing to study in Spain who want clearer communication and better readiness before arrival.",
    packageName: "Pre-Arrival Communication Preparation Mini Package",
    packagePrice: "68 €",
    packageSummary:
      "Includes 3 one-to-one online sessions plus 1 support document, designed as a practical communication-focused package before departure.",
    whoItsForLabel: "Who it is for",
    whoItsForText:
      "Students preparing to study in Spain who want short-cycle support for school communication, accommodation communication, and practical pre-arrival English use.",
    includesLabel: "What is included",
    includes: [
      "3 one-to-one online sessions",
      "1 practical support document with key expressions, email models, and communication reminders",
      "Focused preparation for school, accommodation, arrival, and everyday communication situations"
    ],
    sessionsLabel: "Session breakdown",
    sessions: [
      {
        title: "Session 1: High-frequency pre-arrival communication",
        description:
          "Practice practical expressions and short response patterns for common situations before departure."
      },
      {
        title: "Session 2: School and formal email communication",
        description:
          "Work on clear, polite communication for universities, departments, housing contacts, and other formal situations."
      },
      {
        title: "Session 3: Arrival and early adaptation communication",
        description:
          "Prepare for accommodation, school matters, everyday communication, and basic cross-cultural communication situations after arrival."
      }
    ],
    supportDocumentLabel: "Support document",
    supportDocumentText:
      "A practical support document summarizing useful expressions, email patterns, scenario reminders, and basic communication guidance for the learner's pre-arrival stage.",
    ctaLabel: "Request the Pre-Arrival Package",
    note:
      "This package focuses on communication readiness and practical preparation. It does not include visa, legal, admissions, relocation, or administrative representation services."
  },
  serviceBoundary: {
    title: "Scope of Support",
    intro:
      "To keep the service clear, responsible, and professionally grounded, support is limited to English training and communication-focused preparation.",
    includesTitle: "What this support includes",
    excludesTitle: "What this support does not include",
    includes: [
      "Professional English communication and expression training",
      "Interview and oral-expression preparation",
      "Academic communication and formal English expression support",
      "Pre-arrival communication preparation for study in Spain"
    ],
    excludes: [
      "Immigration or visa services",
      "Legal advice or regulated legal representation",
      "Administrative representation or admissions handling",
      "Official translation, ghostwriting, or document-writing services",
      "Employment intermediation or other regulated intermediary services"
    ]
  },
  howItWorks: {
    title: "How It Works",
    intro: "A practical service flow built for one-to-one, appointment-based, online-first delivery.",
    steps: [
      {
        title: "Initial enquiry",
        description:
          "Send a message or discovery-call request describing your goals, current stage, and communication needs."
      },
      {
        title: "Needs judgement and service fit",
        description:
          "We review your profile, identify the most relevant service option, and confirm whether the support is a good fit."
      },
      {
        title: "Scheduling and payment confirmation",
        description:
          "You receive a clear recommendation, appointment options, and practical next-step details before formal delivery begins."
      },
      {
        title: "One-to-one delivery",
        description:
          "Most support is delivered online. Limited in-person sessions inside Barcelona city may be offered selectively by appointment where appropriate."
      },
      {
        title: "Follow-up and repeat support",
        description:
          "After each stage, priorities can be adjusted and next sessions or follow-up support can be planned clearly."
      }
    ]
  },
  whyChoose: {
    title: "Why Learners Choose This Support",
    intro:
      "This is a focused solo professional service built around scenario-based training, strong background fit, and practical one-to-one follow-up.",
    cards: [
      {
        title: "Professional background fit",
        description:
          "The service is informed by teaching experience, academic study in Spain, formal communication work, and cross-cultural communication practice.",
        icon: "multilingualAccess"
      },
      {
        title: "Scenario-based English training",
        description:
          "Training is built around real communication situations, not generic exercises detached from your actual goals.",
        icon: "spainStudyPath"
      },
      {
        title: "Flexible one-to-one delivery",
        description:
          "Support is online-first, appointment-based, and adapted to your level, timeline, and communication priorities.",
        icon: "personalizedGuidance"
      },
      {
        title: "Follow-up and practical feedback",
        description:
          "Sessions are designed around clear feedback, continuity, and practical next steps rather than one-off generic lessons.",
        icon: "calmApproach"
      }
    ]
  },
  supportiveApproach: {
    title: "A Clear, Practical Approach",
    text: "Ying's Academic Coaching is designed to help learners communicate more clearly, prepare with more confidence, and improve through focused one-to-one English training. The approach stays practical, structured, and grounded in real communication use."
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What kind of English support is offered?",
        answer:
          "The service focuses on professional English communication, oral expression, interview preparation, academic communication, and pre-arrival communication preparation for study in Spain."
      },
      {
        question: "Is this general English tutoring?",
        answer:
          "Not in the broad marketplace sense. The service is more specific: it focuses on scenario-based English training for formal communication, interviews, academic expression, and practical study-in-Spain preparation."
      },
      {
        question: "Is support available online?",
        answer:
          "Yes. The service is online-first and appointment-based, which allows flexible one-to-one delivery across Spain."
      },
      {
        question: "Are in-person sessions available in Barcelona?",
        answer:
          "Yes, but only selectively. Most support is delivered online. Limited in-person sessions may be available by appointment inside Barcelona city where appropriate."
      },
      {
        question: "Who is the pre-arrival package for?",
        answer:
          "It is designed for students preparing to study in Spain who want short-cycle communication preparation before arrival, including school, accommodation, and everyday pre-arrival scenarios."
      },
      {
        question: "Do you help with academic communication and formal English expression?",
        answer:
          "Yes. Support can include academic emails, classroom communication, presentations, Q&A preparation, and clearer formal English expression for study-related use."
      },
      {
        question: "Is Chinese support a main service?",
        answer:
          "No. The core launch-stage service is professional English training and communication support. Chinese can be used where helpful for clarity, and a basic Chinese / cross-cultural support offer may be available later as a supplementary service."
      },
      {
        question: "What is not included?",
        answer:
          "The business provides language training, communication support, interview/oral-expression preparation, and pre-arrival communication preparation. It does not provide immigration, visa, legal, admissions, document-writing, official translation, or other regulated intermediary services."
      },
      {
        question: "What happens after I submit a discovery call request?",
        answer:
          "Your request is reviewed personally. You then receive a follow-up response with a recommended next step and scheduling options."
      }
    ]
  },
  finalCta: {
    headline: "Get one-to-one English training for professional, academic, and study-in-Spain communication",
    text: "Whether you need professional English communication training, interview and oral-expression preparation, academic communication support, or a pre-arrival communication package for Spain, Ying's Academic Coaching offers focused, practical, one-to-one support.",
    primaryCta: "Book a Discovery Call",
    secondaryCta: "Contact Us",
    contacts: [
      {
        kind: "email",
        label: "Email",
        value: "hello@yingstutoring.com",
        href: "mailto:hello@yingstutoring.com"
      },
      { kind: "wechat", label: "WeChat", value: "Available on request" },
      { kind: "whatsapp", label: "WhatsApp", value: "Available on request" }
    ]
  },
  footer: {
    description:
      "Professional English training and communication support for professional, cross-cultural, academic, and study-in-Spain contexts. Barcelona-based and online-first.",
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Pre-Arrival Package", href: "#westbound-launch" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" }
    ],
    privacyPolicyLabel: "Privacy Policy",
    cookiePolicyLabel: "Cookie Policy",
    legalNoticeLabel: "Legal Notice"
  }
};

const spanishContent: SiteContent = {
  brandName: "Ying's Academic Coaching",
  localeTagline:
    "Formación profesional en inglés y apoyo de comunicación para contextos profesionales, interculturales, académicos y de preparación para estudiar en España",
  privacyBanner: {
    title: "Privacidad y Cookies",
    body:
      "Utilizamos tecnologías esenciales del sitio web y una cantidad limitada de datos personales para que la web funcione correctamente y para responder a consultas. Puedes leer más en nuestra Política de Privacidad y Política de Cookies.",
    continueLabel: "Continuar",
    cookiePolicyLabel: "Política de Cookies",
    privacyPolicyLabel: "Política de Privacidad"
  },
  header: {
    navLinks: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre Ying", href: "#about" },
      { label: "Servicios", href: "#services" },
      { label: "Paquete pre-llegada", href: "#westbound-launch" },
      { label: "Cómo Funciona", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contact" }
    ],
    primaryCta: "Reservar llamada inicial",
    languageLabel: "Idioma",
    languageNotice:
      "Los servicios se centran en formación profesional en inglés y apoyo de comunicación. El chino puede utilizarse como apoyo cuando aporta claridad; la web está disponible en chino, inglés, español y catalán."
  },
  hero: {
    eyebrow:
      "Formación profesional en inglés y apoyo de comunicación con base en Barcelona",
    headline: "Refuerza tu inglés para la comunicación profesional, académica e intercultural",
    subheadline:
      "Formación individual en inglés para expresión formal, entrevistas, comunicación académica y preparación comunicativa antes de estudiar en España. Modalidad online-first, con sesiones presenciales limitadas disponibles con cita previa dentro de Barcelona ciudad.",
    primaryCta: "Reservar llamada inicial",
    secondaryCta: "Contactar",
    trustItems: [
      "Apoyo uno a uno",
      "Online-first en toda España",
      "Con base en Barcelona",
      "Sesiones presenciales selectivas con cita previa en Barcelona",
      "Feedback personalizado"
    ],
    visualEyebrow: "Sesión de estudio en Barcelona",
    visualTitle: "Formación en inglés basada en escenarios reales de estudio, trabajo y comunicación internacional",
    visualSubtitle: "Un entorno tranquilo de trabajo individual que refleja apoyo enfocado y comunicación práctica.",
    visualCards: [
      {
        title: "Entrenamiento por escenarios",
        description: "Práctica centrada en entrevistas, emails, presentaciones y situaciones reales de comunicación."
      },
      {
        title: "Seguimiento personal",
        description: "Apoyo individual con feedback aplicable y continuidad entre sesiones."
      }
    ]
  },
  whoWeHelp: {
    title: "Para Quién Es",
    intro:
      "Apoyo enfocado para personas que necesitan una mejora concreta de su inglés y una preparación más clara para situaciones reales de comunicación.",
    cards: [
      {
        title: "Profesionales y estudiantes universitarios que quieren mejorar su inglés formal y la comunicación intercultural",
        description:
          "Mejora speaking, expresión formal, emails y hábitos de comunicación para contextos académicos y profesionales internacionales."
      },
      {
        title: "Personas que se preparan para entrevistas, expresión oral o objetivos de corto plazo",
        description:
          "Refuerza claridad bajo presión, pronunciación, estructura de respuesta y seguridad oral con práctica enfocada."
      },
      {
        title: "Estudiantes internacionales que necesitan apoyo de comunicación académica y preparación para estudiar en España",
        description:
          "Prepara emails académicos, presentaciones, participación en clase y situaciones de comunicación previas a la llegada."
      }
    ]
  },
  about: {
    title: "Sobre Ying",
    intro:
      "Un enfoque profesional y práctico, respaldado por experiencia real en comunicación intercultural, enseñanza y trabajo formal de coordinación.",
    story:
      "Ying trabaja con una metodología estructurada de formación individual en inglés, centrada en escenarios reales. Su perfil combina formación universitaria en China, un máster oficial en Análisis de Relaciones Económicas Internacionales cursado en España, experiencia en enseñanza de inglés y atención a estudiantes, y trabajo en entornos internacionales con comunicación escrita formal, coordinación, tareas relacionadas con interpretación/traducción y comunicación intercultural.",
    highlightsTitle: "Aspectos destacados",
    credentials: [
      "Máster oficial en Análisis de Relaciones Económicas Internacionales completado en España",
      "Experiencia en enseñanza de inglés y apoyo a estudiantes",
      "Experiencia en entornos profesionales internacionales y tareas de coordinación",
      "Trayectoria vinculada a comunicación escrita formal, tareas relacionadas con interpretación/traducción y comunicación intercultural",
      "Nivel sólido de inglés con experiencia relacionada con preparación IELTS"
    ]
  },
  booking: {
    title: "Reservar llamada inicial",
    intro:
      "Comparte tu situación actual, tus objetivos y tus prioridades de comunicación. Te responderemos con el siguiente paso más adecuado.",
    trustItems: ["Respuesta en 24 horas", "Modalidad online-first", "Servicio con base en Barcelona", "Sesiones presenciales limitadas con cita previa dentro de Barcelona ciudad"],
    paths: {
      messageUs: {
        title: "Escríbenos",
        description: "Ideal para preguntas rápidas o primer contacto.",
        helper: "Un mensaje breve es suficiente para comenzar.",
        channels: [
          {
            kind: "email",
            label: "Correo",
            value: "hello@yingstutoring.com",
            href: "mailto:hello@yingstutoring.com",
            actionLabel: "Enviar correo",
            helperText: "Ideal para consultas con más detalle."
          },
          {
            kind: "wechat",
            label: "WeChat",
            value: "Disponible bajo solicitud",
            helperText: "Ideal para mensajes cortos y ágiles."
          },
          {
            kind: "whatsapp",
            label: "WhatsApp",
            value: "Disponible bajo solicitud",
            helperText: "Ideal para seguimiento rápido."
          }
        ]
      },
      requestCall: {
        title: "Solicitar llamada inicial",
        description: "Ideal para revisar encaje del servicio, recibir orientación personalizada y definir el siguiente paso.",
        ctaLabel: "Ir al formulario"
      }
    },
    form: {
      id: "discovery-call-form",
      title: "Solicitud de llamada inicial",
      description:
        "Este formulario breve nos ayuda a valorar el encaje del servicio y responder con la opción de apoyo más adecuada.",
      helper:
        "Cada solicitud se revisa personalmente. Si hay buen encaje, te responderemos con disponibilidad y siguientes pasos.",
      requiredNotice: "* Campos obligatorios",
      recommendedNotice: "Los campos opcionales nos ayudan a orientarte mejor.",
      submitLabel: "Enviar solicitud",
      submittingLabel: "Enviando solicitud...",
      successTitle: "Solicitud recibida",
      successMessage: "Gracias. Tu solicitud se ha enviado correctamente.",
      successFollowUp:
        "Revisaremos tus datos personalmente y responderemos en menos de 24 horas.",
      resetLabel: "Enviar otra solicitud",
      fields: {
        fullName: "Nombre completo",
        email: "Correo electrónico",
        contactHandle: "WeChat / WhatsApp / Otro contacto",
        role: "Soy",
        stage: "Situación actual",
        supportNeeds: "¿Qué apoyo necesitas?",
        sessionLanguage: "Idioma de contacto preferido",
        timezone: "Zona horaria",
        timeWindow: "Franja horaria preferida",
        message: "Mensaje breve",
        honeypot: "Deja este campo vacío"
      },
      hints: {
        contactHandle: "Opcional pero recomendado para una respuesta más rápida.",
        message: "Opcional: comparte contexto en 1-3 frases."
      },
      placeholders: {
        contactHandle: "Ejemplo: ID de WeChat o número de WhatsApp",
        timezone: "Ejemplo: España (CET) / China (CST)",
        timeWindow: "Ejemplo: Entre semana 18:00-21:00 (CET)",
        message: "Opcional: indica tu prioridad principal (entrevista, comunicación académica, etc.)."
      },
      options: {
        role: [
          { value: "student", label: "Estudiante" },
          { value: "adult-learner", label: "Adulto / profesional" },
          { value: "parent", label: "Madre / Padre" }
        ],
        stage: [
          { value: "improving-english", label: "Mejorar el inglés para trabajo o estudios" },
          { value: "interview-goal", label: "Preparar una entrevista o un objetivo de expresión oral" },
          { value: "planning-spain", label: "Prepararse para estudiar en España" },
          { value: "in-spain", label: "Ya estudia o vive en España" }
        ],
        supportNeeds: [
          { value: "professional-english", label: "Formación profesional en comunicación y expresión en inglés" },
          { value: "interview-preparation", label: "Preparación IELTS / entrevistas / expresión oral" },
          { value: "academic-communication", label: "Comunicación académica y expresión formal en inglés" },
          { value: "pre-arrival-orientation", label: "Preparación de comunicación pre-llegada para España" },
          { value: "barcelona-in-person", label: "Sesión presencial limitada en Barcelona" },
          { value: "other", label: "Otro" }
        ],
        sessionLanguage: [
          { value: "english", label: "Inglés" },
          { value: "chinese", label: "Chino (idioma de apoyo)" },
          { value: "spanish", label: "Español (idioma de apoyo)" },
          { value: "catalan", label: "Catalán (idioma de apoyo)" }
        ]
      },
      validation: {
        fullNameRequired: "Por favor, escribe tu nombre completo.",
        emailRequired: "Por favor, escribe tu correo electrónico.",
        emailInvalid: "Por favor, usa un correo electrónico válido.",
        roleRequired: "Selecciona si eres estudiante, adulto/profesional o madre/padre.",
        stageRequired: "Selecciona tu situación actual.",
        supportNeedsRequired: "Selecciona al menos un área de apoyo.",
        timezoneRequired: "Indica tu zona horaria.",
        timeWindowRequired: "Indica tu franja horaria preferida.",
        privacyAcknowledgementRequired:
          "Por favor, confirma que has leído la Política de Privacidad antes de enviar tu solicitud.",
        submitFailed: "Hubo un problema al enviar. Inténtalo de nuevo o escríbenos directamente."
      },
      privacyNotice: {
        text:
          "Utilizamos tu información para revisar tu solicitud, responderte y, si procede, organizar el siguiente paso de apoyo. Los envíos del formulario se procesan a través de Formspree en nuestro nombre.",
        cookiePolicyLabel: "Política de Cookies",
        privacyPolicyLabel: "Política de Privacidad",
        legalNoticeLabel: "Aviso Legal"
      },
      privacyAcknowledgement: {
        labelBeforeLink: "He leído la",
        privacyPolicyLabel: "Política de Privacidad",
        labelAfterLink:
          "y entiendo cómo se utilizará mi información para revisar y responder a mi solicitud."
      },
      privacyModal: {
        triggerLabel: "Cómo utilizamos tu información",
        title: "Cómo utilizamos tu información",
        intro:
          "Antes de enviar el formulario, aquí tienes un resumen claro de cómo se utiliza tu información y quién ayuda a procesarla.",
        sections: [
          {
            title: "Quién trata tu información",
            body: [
              "La titular del sitio trata tu información para revisar tu consulta y organizar el siguiente paso de apoyo más adecuado.",
              "Los datos de contacto para cuestiones de privacidad figuran en la Política de Privacidad."
            ]
          },
          {
            title: "Qué recopilamos",
            body: [
              "Recopilamos la información que introduces en el formulario, como nombre, correo electrónico, dato de contacto, áreas de apoyo, zona horaria y mensaje.",
              "Solo pedimos la información necesaria para entender tu solicitud y responder de forma adecuada."
            ]
          },
          {
            title: "Para qué la utilizamos",
            body: [
              "Tu información se utiliza para revisar tu consulta, responderte y, si procede, organizar el siguiente paso de apoyo más adecuado.",
              "No se utiliza para marketing no relacionado."
            ]
          },
          {
            title: "Proveedores de servicio que utilizamos",
            body: [
              "Utilizamos Formspree para procesar en nuestro nombre los formularios de contacto y de llamada inicial.",
              "También utilizamos servicios de alojamiento web y soporte técnico necesarios para el funcionamiento del sitio."
            ]
          },
          {
            title: "Tus derechos",
            body: [
              "Puedes solicitar acceso, rectificación o supresión de tus datos personales, y hacer preguntas sobre cómo se tratan.",
              "La Política de Privacidad explica cómo contactarnos para ejercer tus derechos."
            ]
          }
        ],
        moreInfoText: "Para más detalles, consulta la Política de Privacidad.",
        closeLabel: "Cerrar"
      }
    }
  },
  services: {
    title: "Servicios",
    intro:
      "Los servicios de lanzamiento se centran en formación profesional en inglés, práctica por escenarios, preparación de entrevistas y expresión oral, y comunicación previa a estudiar en España.",
    cards: [
      {
        title: "Formación profesional en comunicación y expresión en inglés",
        description:
          "Formación uno a uno para adultos y universitarios que quieren hablar con más claridad, escribir mejor correos, usar un inglés más formal y desenvolverse con mayor naturalidad en contextos internacionales.",
        details: [
          "Incluye práctica por escenarios para reuniones, comunicación profesional, situaciones internacionales, comunicación intercultural y uso formal del inglés.",
          "Trabaja expresión oral, claridad de ideas, emails y hábitos de comunicación más naturales y seguros.",
          "Formato: uno a uno, online-first, por hora, apto para trabajo continuo y sesiones repetidas."
        ],
        icon: "englishTutoring"
      },
      {
        title: "Preparación IELTS, entrevistas y expresión oral",
        description:
          "Entrenamiento enfocado para personas que necesitan entrevistas, speaking más claro, mejor lógica bajo presión y resultados de corto plazo.",
        details: [
          "Incluye simulaciones, estructura de respuestas, apoyo de pronunciación y práctica de componentes IELTS cuando aplica.",
          "Refuerza seguridad en entrevistas, exámenes orales y situaciones formales donde importa responder con claridad.",
          "Incluye feedback posterior con correcciones concretas y siguiente paso de trabajo. Formato: uno a uno, online, por hora."
        ],
        icon: "interviewPreparation"
      },
      {
        title: "Comunicación académica y expresión formal en inglés",
        description:
          "Apoyo práctico para correos académicos, estructura de ideas, presentaciones, Q&A y comunicación relacionada con estudios.",
        details: [
          "Trabaja tono, claridad y estructura para emails a profesorado, departamentos, oficinas universitarias y contextos formales de estudio.",
          "Ayuda a mejorar la expresión escrita y oral para presentaciones, participación en clase y comunicación académica más clara.",
          "Incluye preparación de preguntas y respuestas, sugerencias de estructura lingüística y refinamiento de expresión formal en inglés, sin redactar trabajos por la persona usuaria. Formato: uno a uno, online, por hora."
        ],
        icon: "academicCommunication"
      },
      {
        title: "Mini paquete de preparación comunicativa pre-llegada",
        description:
          "Paquete corto y práctico para estudiantes que se preparan para estudiar en España y quieren llegar con una base comunicativa más útil.",
        details: [
          "Cubre comunicación con centros de estudio, alojamiento, expresiones frecuentes y preparación básica antes de llegar a España.",
          "Incluye sesiones uno a uno y documento de apoyo, con recordatorios prácticos de comunicación intercultural y situaciones frecuentes.",
          "Diseñado como opción compacta y orientada a resultados antes del viaje."
        ],
        icon: "preArrivalOrientation"
      },
      {
        title: "Seguimiento personalizado y feedback",
        description:
          "El modelo de trabajo incluye ajuste continuo, feedback claro y continuidad entre sesiones en lugar de clases genéricas sueltas.",
        details: [
          "El ritmo y el foco se adaptan al nivel, al calendario y a las situaciones reales que quieres trabajar.",
          "El feedback posterior ayuda a mantener progreso entre sesiones y a ordenar siguientes pasos.",
          "Modalidad: por cita, online-first."
        ],
        icon: "personalizedSupport"
      }
    ]
  },
  pricing: {
    title: "Precios claros y sencillos",
    intro:
      "Tarifas transparentes para servicios de lanzamiento, con estructura simple y foco en apoyo uno a uno.",
    cards: [
      {
        title: "Formación profesional en comunicación y expresión en inglés",
        price: "18 €/hora",
        description: "Para speaking más sólido, escritura más clara y comunicación formal más natural.",
        features: ["Formación online uno a uno", "Práctica por escenarios reales", "Adecuado para trabajo continuo"]
      },
      {
        title: "Preparación de entrevistas / expresión oral",
        price: "22 €/hora",
        description: "Para entrevistas, speaking formal, pronunciación y preparación de corto plazo.",
        features: ["Práctica de entrevista y speaking formal", "Trabajo de pronunciación y claridad", "Feedback estructurado y próximos pasos"],
        highlight: "Más solicitado"
      },
      {
        title: "Comunicación académica y expresión formal en inglés",
        price: "24 €/hora",
        description: "Para emails académicos, presentaciones, interacción en clase y refinamiento de inglés formal.",
        features: ["Apoyo para email y presentaciones", "Trabajo de estructura y tono", "Preparación para situaciones académicas"]
      },
      {
        title: "Mini paquete de preparación comunicativa pre-llegada",
        price: "68 €",
        description: "Paquete corto para preparación comunicativa antes de estudiar en España.",
        features: ["3 sesiones uno a uno", "1 documento de apoyo", "Preparación práctica antes de llegar"]
      }
    ],
    footnote:
      "Un servicio complementario de chino básico / comunicación intercultural puede ofrecerse de forma selectiva por 22 €/hora, pero no es una prioridad pública de la etapa de lanzamiento."
  },
  academicPreparation: {
    title: "Paquete de preparación comunicativa pre-llegada",
    intro:
      "Un paquete corto, práctico y orientado a la comunicación para estudiantes que se preparan para estudiar en España.",
    packageName: "Mini paquete de preparación comunicativa pre-llegada",
    packagePrice: "68 €",
    packageSummary:
      "Incluye 3 sesiones online uno a uno + 1 documento de apoyo, con un enfoque práctico y de ciclo corto antes del viaje.",
    whoItsForLabel: "Para quién está pensado",
    whoItsForText:
      "Para estudiantes que quieren llegar a España con una base más clara para comunicarse con centros de estudio, alojamiento y situaciones cotidianas iniciales.",
    includesLabel: "Qué incluye",
    includes: [
      "3 sesiones online uno a uno",
      "1 documento práctico de apoyo con expresiones, modelos de email y recordatorios de comunicación",
      "Preparación centrada en comunicación académica, alojamiento y situaciones frecuentes antes y después de llegar"
    ],
    sessionsLabel: "Desglose de sesiones",
    sessions: [
      {
        title: "Sesión 1: Comunicación práctica pre-llegada",
        description:
          "Práctica de expresiones frecuentes y patrones de respuesta útiles antes del viaje."
      },
      {
        title: "Sesión 2: Comunicación con escuela y emails formales",
        description:
          "Trabajo de estructura clara y lenguaje adecuado para escribir a universidades, departamentos, alojamiento u otros contactos formales."
      },
      {
        title: "Sesión 3: Comunicación al llegar y adaptación inicial",
        description:
          "Preparación para vivienda, asuntos académicos, vida diaria y situaciones básicas de comunicación intercultural tras la llegada."
      }
    ],
    supportDocumentLabel: "Documento de apoyo",
    supportDocumentText:
      "Un documento práctico con expresiones útiles, modelos de email, recordatorios de comunicación y escenarios clave adaptados al momento del alumno.",
    ctaLabel: "Solicitar el paquete pre-llegada",
    note:
      "Este servicio cubre preparación lingüística y comunicativa. No incluye visados, asesoría legal, gestión de admisiones, reubicación ni representación administrativa."
  },
  serviceBoundary: {
    title: "Alcance del servicio",
    intro:
      "Para mantener una propuesta clara, profesional y responsable, el servicio se limita a formación en inglés y preparación comunicativa.",
    includesTitle: "Qué sí incluye",
    excludesTitle: "Qué no incluye",
    includes: [
      "Formación profesional en comunicación y expresión en inglés",
      "Preparación de entrevistas y expresión oral",
      "Comunicación académica y expresión formal en inglés",
      "Preparación comunicativa pre-llegada para estudiar en España"
    ],
    excludes: [
      "Servicios de inmigración o visado",
      "Asesoría legal o representación legal regulada",
      "Gestión administrativa o tramitación de admisiones",
      "Traducción oficial, redacción por encargo o ghostwriting",
      "Intermediación laboral u otros servicios regulados"
    ]
  },
  howItWorks: {
    title: "Cómo Funciona",
    intro: "Un proceso práctico pensado para atención individual, con modalidad online-first y funcionamiento por cita.",
    steps: [
      {
        title: "Primer contacto",
        description:
          "Envías un mensaje o solicitud de llamada inicial explicando tu objetivo, etapa actual y necesidades de comunicación."
      },
      {
        title: "Valoración de necesidades y encaje",
        description:
          "Revisamos tu perfil para identificar qué servicio encaja mejor y qué prioridades de comunicación son más relevantes."
      },
      {
        title: "Agenda y confirmación",
        description:
          "Recibes una recomendación clara, opciones de agenda y detalles prácticos antes de comenzar."
      },
      {
        title: "Sesiones uno a uno",
        description:
          "La mayor parte del apoyo se realiza online. De forma selectiva pueden ofrecerse sesiones presenciales con cita previa dentro de Barcelona ciudad."
      },
      {
        title: "Seguimiento y continuidad",
        description:
          "Ajustamos prioridades, proponemos continuidad cuando tiene sentido y mantenemos un plan de mejora claro."
      }
    ]
  },
  whyChoose: {
    title: "Por qué elegir este apoyo",
    intro:
      "Es un servicio individual, específico y profesional, pensado para mejorar comunicación real y no para funcionar como academia masiva o agencia.",
    cards: [
      {
        title: "Perfil profesional coherente",
        description:
          "La propuesta se apoya en experiencia docente, estudio universitario en España, trabajo de coordinación y práctica real de comunicación intercultural.",
        icon: "multilingualAccess"
      },
      {
        title: "Entrenamiento por escenarios",
        description:
          "El inglés se trabaja a partir de situaciones reales: entrevistas, emails, presentaciones, contextos académicos y comunicación internacional.",
        icon: "spainStudyPath"
      },
      {
        title: "Modalidad flexible uno a uno",
        description:
          "La atención es online-first, por cita y adaptada al nivel, al calendario y a las prioridades reales de cada persona.",
        icon: "personalizedGuidance"
      },
      {
        title: "Feedback y seguimiento",
        description:
          "Cada sesión se orienta a feedback útil, continuidad y mejora concreta, no a clases sueltas sin seguimiento.",
        icon: "calmApproach"
      }
    ]
  },
  supportiveApproach: {
    title: "Un enfoque claro y práctico",
    text: "Ying's Academic Coaching ayuda a cada persona a comunicarse mejor, prepararse con más precisión y avanzar mediante formación en inglés realmente útil. El apoyo es siempre uno a uno, estructurado y conectado con objetivos concretos."
  },
  faq: {
    title: "Preguntas Frecuentes",
    items: [
      {
        question: "¿Qué tipo de apoyo en inglés se ofrece?",
        answer:
          "Se ofrece formación en comunicación y expresión en inglés, preparación de entrevistas y expresión oral, apoyo de comunicación académica y un paquete breve de preparación pre-llegada para estudiar en España."
      },
      {
        question: "¿Es un servicio de inglés general?",
        answer:
          "No en el sentido genérico. La propuesta es más específica: se centra en comunicación profesional, expresión formal, entrevistas, situaciones académicas y preparación de comunicación para estudiar en España."
      },
      {
        question: "¿El apoyo está disponible online?",
        answer:
          "Sí. El servicio es online-first y por cita, lo que permite flexibilidad y continuidad en distintas ciudades de España."
      },
      {
        question: "¿Hay sesiones presenciales en Barcelona?",
        answer:
          "Sí, pero de forma limitada y selectiva. La mayor parte del servicio se ofrece online; las sesiones presenciales pueden valorarse con cita previa dentro de Barcelona ciudad."
      },
      {
        question: "¿Para quién es el paquete pre-llegada?",
        answer:
          "Está pensado para estudiantes que se preparan para estudiar en España y quieren resolver con más claridad la parte comunicativa antes de llegar: escuela, alojamiento, expresiones frecuentes y preparación práctica."
      },
      {
        question: "¿Ayudas con comunicación académica y expresión formal en inglés?",
        answer:
          "Sí. El apoyo puede incluir emails académicos, presentaciones, interacción en clase, preparación de Q&A y mejora de expresión formal en inglés para contextos de estudio."
      },
      {
        question: "¿El chino es un servicio principal?",
        answer:
          "No. El foco principal de lanzamiento es la formación en inglés y el apoyo de comunicación. El chino puede utilizarse como apoyo para la claridad y, más adelante, podría existir un servicio complementario de chino básico / comunicación intercultural."
      },
      {
        question: "¿Qué no está incluido?",
        answer:
          "El negocio ofrece formación lingüística, apoyo de comunicación y preparación por escenarios. No ofrece visados, inmigración, asesoría legal, admisiones, redacción de documentos, traducción oficial ni otros servicios regulados."
      },
      {
        question: "¿Qué ocurre después de enviar la solicitud?",
        answer:
          "Revisamos tu solicitud personalmente y te respondemos con el siguiente paso recomendado, junto con propuesta de agenda si el servicio encaja."
      }
    ]
  },
  finalCta: {
    headline: "Recibe formación individual en inglés para comunicarte mejor en contextos profesionales, académicos e internacionales",
    text: "Si necesitas formación profesional en inglés, preparación de entrevistas y expresión oral, apoyo de comunicación académica o un paquete de preparación pre-llegada para España, Ying's Academic Coaching ofrece orientación práctica y personalizada uno a uno.",
    primaryCta: "Reservar llamada inicial",
    secondaryCta: "Contactar",
    contacts: [
      {
        kind: "email",
        label: "Correo",
        value: "hello@yingstutoring.com",
        href: "mailto:hello@yingstutoring.com"
      },
      { kind: "wechat", label: "WeChat", value: "Disponible bajo solicitud" },
      { kind: "whatsapp", label: "WhatsApp", value: "Disponible bajo solicitud" }
    ]
  },
  footer: {
    description:
      "Formación profesional en inglés y apoyo de comunicación para contextos profesionales, interculturales, académicos y de preparación para estudiar en España. Con base en Barcelona y modalidad online-first.",
    navLinks: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre Ying", href: "#about" },
      { label: "Servicios", href: "#services" },
      { label: "Paquete pre-llegada", href: "#westbound-launch" },
      { label: "Cómo Funciona", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contact" }
    ],
    privacyPolicyLabel: "Política de Privacidad",
    cookiePolicyLabel: "Política de Cookies",
    legalNoticeLabel: "Aviso Legal"
  }
};

const chineseContent: SiteContent = {
  brandName: "Ying's Academic Coaching",
  localeTagline: "立足巴塞罗那，面向职业、跨文化、学术与赴西班牙学习场景的专业英语训练与沟通支持",
  privacyBanner: {
    title: "隐私与 Cookie",
    body:
      "我们使用网站运行所必需的技术，并处理少量个人信息，以保障网站正常运作并回复咨询。更多说明请参阅隐私政策和 Cookie 政策。",
    continueLabel: "继续浏览",
    cookiePolicyLabel: "Cookie 政策",
    privacyPolicyLabel: "隐私政策"
  },
  header: {
    navLinks: [
      { label: "首页", href: "#home" },
      { label: "关于Ying", href: "#about" },
      { label: "服务", href: "#services" },
      { label: "行前准备包", href: "#westbound-launch" },
      { label: "服务流程", href: "#how-it-works" },
      { label: "常见问题", href: "#faq" },
      { label: "联系", href: "#contact" }
    ],
    primaryCta: "预约咨询通话",
    languageLabel: "语言",
    languageNotice:
      "服务核心聚焦专业英语训练与沟通支持；在需要时可提供中文辅助说明。网站提供中文、英语、西班牙语和加泰罗尼亚语版本。"
  },
  hero: {
    eyebrow: "立足巴塞罗那的专业英语训练与沟通支持",
    headline: "为专业、学术与跨文化沟通建立更强的英语表达能力",
    subheadline:
      "提供一对一英语训练，覆盖正式表达、面试、学术沟通以及赴西班牙学习前的沟通准备。服务以线上为主，并可在巴塞罗那市内按预约提供少量线下课程。",
    primaryCta: "预约咨询通话",
    secondaryCta: "联系我们",
    trustItems: ["一对一支持", "线上为主覆盖西班牙", "立足巴塞罗那", "巴塞罗那市内可预约少量线下课程", "个性化反馈"],
    visualEyebrow: "巴塞罗那学习场景",
    visualTitle: "面向真实学习、工作与国际沟通场景的英语训练",
    visualSubtitle: "安静的一对一学习环境，体现专注支持与务实沟通训练。",
    visualCards: [
      { title: "场景化训练", description: "围绕面试、邮件、展示和真实沟通场景进行训练。" },
      { title: "个性化跟进", description: "一对一支持，配合可执行反馈与持续改进。" }
    ]
  },
  whoWeHelp: {
    title: "适合哪些人",
    intro:
      "面向需要更强英语表达能力、更清晰沟通方式，以及更务实场景准备的学习者。",
    cards: [
      {
        title: "希望提升正式英语与跨文化沟通能力的成年人和大学生",
        description: "强化英语口语、正式表达、邮件写作与国际学术/职业场景中的沟通能力。"
      },
      {
        title: "需要面试准备、口语表达提升或短周期训练的学习者",
        description: "通过有针对性的练习提升逻辑清晰度、口头表达稳定性、发音与临场表现。"
      },
      {
        title: "准备赴西班牙学习、需要学术沟通支持的国际学生",
        description: "为学术邮件、课堂表达、展示、行前沟通准备和学习适应建立更实用的沟通基础。"
      }
    ]
  },
  about: {
    title: "关于 Ying",
    intro: "建立在真实跨文化沟通、教学与正式书面沟通经验之上的专业一对一支持方式。",
    story:
      "Ying 以结构清晰、可执行的一对一英语训练方式支持学习者提升沟通能力。她具有中国本科背景，并在西班牙完成国际经济关系分析官方硕士学位，同时具备英语教学与学生服务经验，也曾在国际化工作环境中从事正式书面沟通、协调、与口笔译相关工作以及跨文化沟通相关工作。",
    highlightsTitle: "背景亮点",
    credentials: [
      "在西班牙完成国际经济关系分析官方硕士学位",
      "具备英语教学与学生支持经验",
      "具备国际化职业环境与沟通协调经验",
      "具备正式书面沟通、与口笔译相关工作及跨文化沟通实践背景",
      "英语基础扎实，具备 IELTS 相关准备经验"
    ]
  },
  booking: {
    title: "预约咨询通话",
    intro: "告诉我们你的目标、当前情况和沟通重点，我们会回复更适合你的下一步建议。",
    trustItems: ["24小时内回复", "线上为主预约制", "立足巴塞罗那", "巴塞罗那市内可预约少量线下课程"],
    paths: {
      messageUs: {
        title: "先发消息给我们",
        description: "适合快速咨询或首次联系。",
        helper: "简短说明情况即可开始沟通。",
        channels: [
          {
            kind: "email",
            label: "邮箱",
            value: "hello@yingstutoring.com",
            href: "mailto:hello@yingstutoring.com",
            actionLabel: "发送邮件",
            helperText: "适合较详细的问题。"
          },
          {
            kind: "wechat",
            label: "微信",
            value: "可按需提供",
            helperText: "适合快速文字沟通。"
          },
          {
            kind: "whatsapp",
            label: "WhatsApp",
            value: "可按需提供",
            helperText: "适合简短跟进。"
          }
        ]
      },
      requestCall: {
        title: "申请咨询通话",
        description: "适合需要判断服务匹配度、获得个性化建议和明确下一步的人。",
        ctaLabel: "前往填写表单"
      }
    },
    form: {
      id: "discovery-call-form",
      title: "咨询通话申请表",
      description: "这是一份简短表单，帮助我们判断服务匹配度并给出更合适的支持建议。",
      helper:
        "每份申请都会人工查看。如服务方向合适，我们会进一步回复可行安排与下一步建议。",
      requiredNotice: "* 为必填项",
      recommendedNotice: "选填信息越完整，我们回复会更有针对性。",
      submitLabel: "提交咨询申请",
      submittingLabel: "正在提交...",
      successTitle: "申请已收到",
      successMessage: "感谢提交，我们已成功收到你的咨询申请。",
      successFollowUp: "我们会在24小时内人工查看并回复你下一步建议。",
      resetLabel: "再提交一份申请",
      fields: {
        fullName: "姓名",
        email: "邮箱",
        contactHandle: "WeChat / WhatsApp / 其他联系方式",
        role: "我是",
        stage: "当前情况",
        supportNeeds: "你希望获得哪些支持？",
        sessionLanguage: "偏好联系语言",
        timezone: "时区",
        timeWindow: "偏好沟通时间段",
        message: "简短留言",
        honeypot: "请留空此字段"
      },
      hints: {
        contactHandle: "选填但推荐，可帮助我们更快联系你。",
        message: "选填：可用1-3句话说明当前重点。"
      },
      placeholders: {
        contactHandle: "例如：微信号或 WhatsApp 号码",
        timezone: "例如：西班牙（CET）/ 中国（CST）",
        timeWindow: "例如：工作日 18:00-21:00（CET）",
        message: "选填：例如你当前最需要提升的是面试表达或学术沟通。"
      },
      options: {
        role: [
          { value: "student", label: "学生" },
          { value: "adult-learner", label: "成人学习者 / 职场人士" },
          { value: "parent", label: "家长" }
        ],
        stage: [
          { value: "improving-english", label: "希望提升工作或学习中的英语能力" },
          { value: "interview-goal", label: "正在准备面试或口语表达目标" },
          { value: "planning-spain", label: "准备赴西班牙学习" },
          { value: "in-spain", label: "已在西班牙学习或生活" }
        ],
        supportNeeds: [
          { value: "professional-english", label: "专业英语沟通与表达训练" },
          { value: "interview-preparation", label: "IELTS / 面试 / 口语表达训练" },
          { value: "academic-communication", label: "学术沟通与正式英语表达支持" },
          { value: "pre-arrival-orientation", label: "赴西班牙前沟通准备" },
          { value: "barcelona-in-person", label: "巴塞罗那线下课程（名额有限）" },
          { value: "other", label: "其他" }
        ],
        sessionLanguage: [
          { value: "english", label: "英语" },
          { value: "chinese", label: "中文（辅助沟通）" },
          { value: "spanish", label: "西班牙语（辅助沟通）" },
          { value: "catalan", label: "加泰罗尼亚语（辅助沟通）" }
        ]
      },
      validation: {
        fullNameRequired: "请填写你的姓名。",
        emailRequired: "请填写邮箱地址。",
        emailInvalid: "请输入有效的邮箱地址。",
        roleRequired: "请选择你的身份（学生、成人学习者/职场人士或家长）。",
        stageRequired: "请选择你当前的情况。",
        supportNeedsRequired: "请至少选择一个支持方向。",
        timezoneRequired: "请填写你的时区。",
        timeWindowRequired: "请填写你偏好的沟通时间段。",
        privacyAcknowledgementRequired: "提交前请确认你已阅读隐私政策。",
        submitFailed: "提交失败，请重试或直接通过上方联系方式与我们联系。"
      },
      privacyNotice: {
        text:
          "我们会使用你的信息来审核你的咨询、回复你，并在需要时安排下一步支持。表单提交将通过 Formspree 代表我们进行处理。",
        cookiePolicyLabel: "Cookie 政策",
        privacyPolicyLabel: "隐私政策",
        legalNoticeLabel: "法律声明"
      },
      privacyAcknowledgement: {
        labelBeforeLink: "我已阅读",
        privacyPolicyLabel: "隐私政策",
        labelAfterLink:
          "，并了解我的信息将如何被用于审核和回复我的请求。"
      },
      privacyModal: {
        triggerLabel: "了解我们如何使用你的信息",
        title: "我们如何使用你的信息",
        intro:
          "在提交表单前，你可以先查看一份简明说明，了解你的信息会如何被使用，以及哪些服务会协助处理表单。",
        sections: [
          {
            title: "谁会处理你的信息",
            body: [
              "网站负责人会处理你的信息，用于查看你的咨询内容并安排合适的后续支持。",
              "如有隐私相关问题，可通过隐私政策中的联系方式与我们联系。"
            ]
          },
          {
            title: "我们会收集什么",
            body: [
              "我们会收集你在表单中填写的信息，例如姓名、邮箱、联系账号、所需支持方向、时区和留言内容。",
              "我们只收集有助于理解你的需求并进行回复的必要信息。"
            ]
          },
          {
            title: "我们为何使用这些信息",
            body: [
              "这些信息将用于审核你的咨询、回复你，并在需要时安排更合适的下一步支持。",
              "这些信息不会被用于无关营销。"
            ]
          },
          {
            title: "我们使用的服务提供方",
            body: [
              "我们使用 Formspree 代表我们处理联系表单和咨询通话表单的提交。",
              "我们也会使用网站运行所需的常规托管与技术服务。"
            ]
          },
          {
            title: "你的权利",
            body: [
              "你可以请求访问、更正或删除你的个人信息，也可以询问我们如何处理这些信息。",
              "更多说明请参阅隐私政策。"
            ]
          }
        ],
        moreInfoText: "如需完整说明，请查看隐私政策。",
        closeLabel: "关闭"
      }
    }
  },
  services: {
    title: "服务内容",
    intro:
      "目前核心服务聚焦专业英语训练、场景化沟通练习、面试与口语表达准备，以及赴西班牙前的实用沟通准备。",
    cards: [
      {
        title: "专业英语沟通与表达训练",
        description: "面向成年人和大学生的一对一英语训练，帮助提升口语表达、正式英语、邮件写作与国际场景中的自然沟通能力。",
        details: [
          "围绕会议、正式沟通、国际交流、跨文化沟通和真实使用场景进行练习。",
          "强化口头表达、语言组织、邮件写作和更自然的专业英语习惯。",
          "形式：一对一、线上为主、按小时预约，适合持续训练。"
        ],
        icon: "englishTutoring"
      },
      {
        title: "IELTS / 面试 / 口语表达训练",
        description: "面向需要面试、口头表达提升或短周期结果导向训练的学习者，帮助提升临场逻辑、表达稳定性与发音清晰度。",
        details: [
          "按需要覆盖 IELTS 相关模块，并包含模拟提问、答案结构训练与发音优化。",
          "适用于面试、口试、正式表达等需要清晰应对的场景。",
          "每次训练后都会提供明确反馈与下一步练习方向。形式：一对一、在线、按小时预约。"
        ],
        icon: "interviewPreparation"
      },
      {
        title: "学术沟通与正式英语表达支持",
        description: "面向需要处理学术邮件、课堂展示、Q&A 和课程沟通的学习者，提升更清晰、更正式的英语表达能力。",
        details: [
          "包含教授、院系、学校办公室等学术邮件沟通的结构、语气与表达训练。",
          "强化展示表达、课堂互动、学术语境下的逻辑组织与正式英语表达。",
          "包含 Q&A 应对、语言结构建议和课程相关沟通准备，不提供代写服务。形式：一对一、在线、按小时预约。"
        ],
        icon: "academicCommunication"
      },
      {
        title: "行前沟通准备迷你包",
        description: "面向准备赴西班牙学习的学生，提供短周期、实用型沟通准备，帮助在出发前建立更可用的表达基础。",
        details: [
          "涵盖学校沟通、住宿沟通、高频表达与到达前基础情境准备。",
          "包含一对一课程和支持文档，并加入跨文化沟通提醒与实际沟通场景准备。",
          "适合希望在出发前快速建立沟通准备框架的学生。"
        ],
        icon: "preArrivalOrientation"
      },
      {
        title: "个性化跟进与反馈",
        description: "支持方式强调持续反馈和个性化跟进，而不是模板化或一次性的通用课程。",
        details: [
          "课程节奏与重点会根据目标、时间安排和真实场景动态调整。",
          "课后反馈帮助学习者在两次课程之间保持进步并明确下一步。",
          "形式：预约制、一对一、线上为主。"
        ],
        icon: "personalizedSupport"
      }
    ]
  },
  pricing: {
    title: "透明、简洁的价格",
    intro: "围绕启动阶段服务设置，结构清晰，以一对一支持为核心，不做复杂套餐营销。",
    cards: [
      {
        title: "专业英语沟通与表达训练",
        price: "18 €/小时",
        description: "适用于提升英语口语、书面表达与更自然的正式沟通能力。",
        features: ["线上一对一", "场景化沟通训练", "适合持续提升"]
      },
      {
        title: "面试 / 口语表达训练",
        price: "22 €/小时",
        description: "适用于面试、正式口语表达、发音和短周期准备。",
        features: ["面试与口头表达训练", "发音与清晰度反馈", "结构化改进建议"],
        highlight: "需求最高"
      },
      {
        title: "学术沟通与正式英语表达支持",
        price: "24 €/小时",
        description: "适用于学术邮件、展示、课堂互动和正式英语表达提升。",
        features: ["邮件与展示支持", "结构与语气训练", "学术场景准备"]
      },
      {
        title: "行前沟通准备迷你包",
        price: "68 €",
        description: "适用于赴西班牙学习前的短周期沟通准备。",
        features: ["3次一对一课程", "1份支持文档", "出发前实用沟通准备"]
      }
    ],
    footnote: "基础中文 / 跨文化沟通补充服务可在少量情况下以 22 €/小时提供，但不作为启动阶段主页主推服务。"
  },
  academicPreparation: {
    title: "行前沟通准备包",
    intro: "这是一个面向赴西班牙学习者的短周期、实用型行前沟通准备包。",
    packageName: "行前沟通准备迷你包",
    packagePrice: "68 €",
    packageSummary:
      "包含 3 次一对一在线课程和 1 份支持文档，帮助学生在出发前建立更清晰可用的沟通框架。",
    whoItsForLabel: "适合人群",
    whoItsForText:
      "适合准备赴西班牙学习、希望在出发前更好处理学校、住宿与日常初期沟通的学生。",
    includesLabel: "包含内容",
    includes: [
      "3次一对一在线课程",
      "1份包含高频表达、邮件模板和沟通提醒的实用支持文档",
      "聚焦学校、住宿、到达后初期生活与学习场景的实用准备"
    ],
    sessionsLabel: "课程结构",
    sessions: [
      {
        title: "第1次：行前高频沟通表达训练",
        description:
          "围绕出发前常见场景进行表达与回应练习，建立可立即使用的语言模板。"
      },
      {
        title: "第2次：学校与正式邮件沟通训练",
        description:
          "学习与学校办公室、院系、住宿联系人等进行清晰正式沟通的结构与表达方式。"
      },
      {
        title: "第3次：到达后与初期适应沟通训练",
        description:
          "练习住宿、学校事务、日常生活以及基础跨文化沟通中的关键表达。"
      }
    ],
    supportDocumentLabel: "支持文档",
    supportDocumentText:
      "提供一份围绕常用表达、邮件模式、沟通提醒和关键场景整理的实用支持文档。",
    ctaLabel: "申请行前准备包支持",
    note:
      "该支持属于语言与沟通训练，不提供签证、法律、录取代理、行政代办、官方翻译或代写服务。"
  },
  serviceBoundary: {
    title: "服务边界说明",
    intro: "为确保服务清晰、专业且合规，我们将支持范围限定在英语训练与沟通准备本身。",
    includesTitle: "本服务包含",
    excludesTitle: "本服务不包含",
    includes: [
      "专业英语沟通与表达训练",
      "面试与口语表达准备",
      "学术沟通与正式英语表达支持",
      "赴西班牙学习前的沟通准备"
    ],
    excludes: [
      "签证或移民服务",
      "法律意见或法律代理",
      "行政代办或录取申请代理",
      "官方翻译、代写或文书代做服务",
      "就业中介或其他受监管中介服务"
    ]
  },
  howItWorks: {
    title: "服务流程",
    intro: "基于预约制、线上为主的一对一服务流程。",
    steps: [
      {
        title: "初步联系",
        description: "通过留言或咨询申请说明你的目标、阶段以及当前沟通需求。"
      },
      {
        title: "需求判断与服务匹配",
        description: "我们根据你的现状和目标判断更适合的服务方向，并明确优先训练重点。"
      },
      {
        title: "安排与确认",
        description: "给出清晰建议、课程安排与开始前的实际信息确认。"
      },
      {
        title: "一对一正式授课",
        description: "大部分服务在线进行；如合适，可在巴塞罗那市内少量安排线下面授。"
      },
      {
        title: "后续跟进",
        description: "根据进展动态调整重点，并视情况安排持续支持或再次预约。"
      }
    ]
  },
  whyChoose: {
    title: "为什么选择这项支持",
    intro: "这是一项聚焦、专业、务实的一人服务模式，强调场景匹配、背景可信度与持续反馈。",
    cards: [
      {
        title: "专业背景与服务定位匹配",
        description: "服务建立在教学经验、西班牙学习背景、正式沟通工作和跨文化沟通实践之上。",
        icon: "multilingualAccess"
      },
      {
        title: "场景化英语训练",
        description: "训练围绕真实场景展开，如面试、邮件、展示、学术交流和国际沟通。",
        icon: "spainStudyPath"
      },
      {
        title: "灵活的一对一支持方式",
        description: "线上为主、按预约安排，并根据学习者的阶段、节奏和目标灵活调整。",
        icon: "personalizedGuidance"
      },
      {
        title: "持续反馈与跟进",
        description: "每次课程都围绕可执行反馈和连续改进展开，而不是孤立、模板化的单次课程。",
        icon: "calmApproach"
      }
    ]
  },
  supportiveApproach: {
    title: "清晰且务实的支持方式",
    text: "Ying's Academic Coaching 帮助学习者通过真正有用的一对一英语训练提升表达、准备更充分，并在真实场景中逐步建立更稳定的沟通能力。支持方式始终强调清晰结构、实际反馈与可执行改进。"
  },
  faq: {
    title: "常见问题",
    items: [
      {
        question: "这项服务主要提供哪些英语支持？",
        answer:
          "服务主要包括专业英语沟通与表达训练、IELTS/面试/口语表达准备、学术沟通支持，以及赴西班牙学习前的短周期沟通准备。"
      },
      {
        question: "这是泛化的英语补习吗？",
        answer: "不是传统意义上的泛化补习。服务更聚焦于专业沟通、正式表达、面试、学术场景和赴西班牙学习前的实际沟通准备。"
      },
      {
        question: "课程可以在线进行吗？",
        answer: "可以。服务以线上预约制为主，因此能够覆盖西班牙不同地区并保持更灵活的安排。"
      },
      {
        question: "巴塞罗那可以安排线下课程吗？",
        answer:
          "可以，但数量有限且需预约确认。大部分服务仍以线上方式进行；如确有需要，可在巴塞罗那市内少量安排线下面授。"
      },
      {
        question: "行前准备包适合哪些人？",
        answer:
          "适合准备赴西班牙学习、希望在出发前更清晰处理学校、住宿、高频表达和基本沟通场景的学生。"
      },
      {
        question: "可以帮助学术沟通和正式英语表达吗？",
        answer:
          "可以。服务可覆盖学术邮件、课堂展示、课堂互动、Q&A 准备，以及学习相关正式英语表达的提升。"
      },
      {
        question: "中文是主要服务吗？",
        answer:
          "不是。当前启动阶段的核心服务是英语训练与沟通支持。中文只在有助于理解时作为辅助说明，基础中文 / 跨文化沟通补充服务也仅属于后续或补充方向。"
      },
      {
        question: "哪些内容不在服务范围内？",
        answer:
          "本业务提供语言训练、沟通支持和场景化准备，不提供签证、移民、法律、录取代理、文书代写、官方翻译或其他受监管中介服务。"
      },
      {
        question: "提交咨询申请后会发生什么？",
        answer:
          "你的信息会由我们人工查看，并在 24 小时内回复你下一步建议以及在适合的情况下提供可行安排。"
      }
    ]
  },
  finalCta: {
    headline: "获得面向专业、学术与国际沟通场景的一对一英语训练支持",
    text: "如果你需要专业英语沟通训练、面试与口语表达准备、学术沟通支持，或赴西班牙学习前的沟通准备包，Ying's Academic Coaching 将提供清晰、务实、个性化的一对一支持。",
    primaryCta: "预约咨询通话",
    secondaryCta: "联系我们",
    contacts: [
      {
        kind: "email",
        label: "邮箱",
        value: "hello@yingstutoring.com",
        href: "mailto:hello@yingstutoring.com"
      },
      { kind: "wechat", label: "微信", value: "可按需提供" },
      { kind: "whatsapp", label: "WhatsApp", value: "可按需提供" }
    ]
  },
  footer: {
    description:
      "面向职业、跨文化、学术与赴西班牙学习场景的专业英语训练与沟通支持。立足巴塞罗那，线上为主。",
    navLinks: [
      { label: "首页", href: "#home" },
      { label: "关于Ying", href: "#about" },
      { label: "服务", href: "#services" },
      { label: "行前准备包", href: "#westbound-launch" },
      { label: "流程", href: "#how-it-works" },
      { label: "常见问题", href: "#faq" },
      { label: "联系", href: "#contact" }
    ],
    privacyPolicyLabel: "隐私政策",
    cookiePolicyLabel: "Cookie 政策",
    legalNoticeLabel: "法律声明"
  }
};

const catalanContent: SiteContent = {
  brandName: "Ying's Academic Coaching",
  localeTagline:
    "Formació d'anglès professional i suport de comunicació amb base a Barcelona per a contextos professionals, interculturals, acadèmics i de preparació per estudiar a Espanya",
  privacyBanner: {
    title: "Privacitat i Galetes",
    body:
      "Utilitzem tecnologies essencials del lloc web i una quantitat limitada de dades personals perquè la web funcioni correctament i per respondre consultes. Pots llegir-ne més a la nostra Política de Privacitat i Política de Galetes.",
    continueLabel: "Continua",
    cookiePolicyLabel: "Política de Galetes",
    privacyPolicyLabel: "Política de Privacitat"
  },
  header: {
    navLinks: [
      { label: "Inici", href: "#home" },
      { label: "Sobre Ying", href: "#about" },
      { label: "Serveis", href: "#services" },
      { label: "Paquet prearribada", href: "#westbound-launch" },
      { label: "Com funciona", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacte", href: "#contact" }
    ],
    primaryCta: "Reserva una trucada inicial",
    languageLabel: "Idioma",
    languageNotice:
      "Els serveis se centren en la formació professional en anglès i el suport de comunicació. El xinès es pot utilitzar com a idioma de suport quan sigui útil per aportar claredat; el web està disponible en xinès, anglès, espanyol i català."
  },
  hero: {
    eyebrow:
      "Formació d'anglès professional i suport de comunicació amb base a Barcelona",
    headline: "Enforteix el teu anglès per a la comunicació professional, acadèmica i intercultural",
    subheadline:
      "Formació individual en anglès per a expressió formal, entrevistes, comunicació acadèmica i preparació comunicativa abans d'estudiar a Espanya. Principalment en línia, amb sessions presencials limitades disponibles amb cita prèvia dins de la ciutat de Barcelona.",
    primaryCta: "Reserva una trucada inicial",
    secondaryCta: "Contacta'ns",
    trustItems: [
      "Suport individual",
      "Principalment en línia",
      "Amb base a Barcelona",
      "Sessions presencials limitades amb cita prèvia",
      "Feedback personalitzat"
    ],
    visualEyebrow: "Sessió d'estudi a Barcelona",
    visualTitle: "Formació d'anglès basada en escenaris reals d'estudi, feina i comunicació internacional",
    visualSubtitle: "Un entorn tranquil de treball individual que transmet suport enfocat i comunicació pràctica.",
    visualCards: [
      {
        title: "Entrenament per escenaris",
        description: "Pràctica centrada en entrevistes, correus, presentacions i situacions reals de comunicació."
      },
      {
        title: "Seguiment personal",
        description: "Suport individual amb feedback aplicable i continuïtat entre sessions."
      }
    ]
  },
  whoWeHelp: {
    title: "Per a qui és",
    intro:
      "Suport enfocat a persones que necessiten una millora concreta del seu anglès i una preparació més clara per a situacions reals de comunicació.",
    cards: [
      {
        title: "Professionals i estudiants universitaris que volen millorar el seu anglès formal i la comunicació intercultural",
        description:
          "Millora speaking, expressió formal, correus i hàbits de comunicació per a contextos acadèmics i professionals internacionals."
      },
      {
        title: "Persones que es preparen per a entrevistes, expressió oral o objectius d'anglès de curt termini",
        description:
          "Reforça la claredat sota pressió, la pronunciació, l'estructura de resposta i la seguretat oral amb pràctica enfocada."
      },
      {
        title: "Estudiants internacionals que necessiten suport de comunicació acadèmica i preparació per estudiar a Espanya",
        description:
          "Prepara correus acadèmics, presentacions, participació a classe i situacions de comunicació abans de l'arribada."
      }
    ]
  },
  about: {
    title: "Sobre Ying",
    intro:
      "Un enfocament professional i pràctic, recolzat per experiència real en comunicació intercultural, ensenyament i treball formal de coordinació.",
    story:
      "Ying treballa amb una metodologia estructurada de formació individual en anglès, centrada en escenaris reals. El seu perfil combina formació universitària a la Xina, un màster oficial en Anàlisi de Relacions Econòmiques Internacionals cursat a Espanya, experiència en ensenyament d'anglès i atenció a estudiants, i treball en entorns internacionals amb comunicació escrita formal, coordinació, tasques relacionades amb interpretació/traducció i comunicació intercultural.",
    highlightsTitle: "Aspectes destacats",
    credentials: [
      "Màster oficial en Anàlisi de Relacions Econòmiques Internacionals completat a Espanya",
      "Experiència en ensenyament d'anglès i suport a estudiants",
      "Experiència en entorns professionals internacionals i tasques de coordinació",
      "Trajectòria vinculada a comunicació escrita formal, tasques relacionades amb interpretació/traducció i comunicació intercultural",
      "Bon nivell d'anglès amb experiència relacionada amb preparació IELTS"
    ]
  },
  booking: {
    title: "Reserva una trucada inicial",
    intro:
      "Comparteix la teva situació actual, els teus objectius i les teves prioritats de comunicació. Et respondrem amb el següent pas més adequat.",
    trustItems: [
      "Resposta en 24 hores",
      "Cites principalment en línia",
      "Servei amb base a Barcelona",
      "Sessions presencials limitades amb cita prèvia dins de Barcelona ciutat"
    ],
    paths: {
      messageUs: {
        title: "Escriu-nos",
        description: "Ideal per a preguntes ràpides o un primer contacte.",
        helper: "Un missatge breu és suficient per començar.",
        channels: [
          {
            kind: "email",
            label: "Correu",
            value: "hello@yingstutoring.com",
            href: "mailto:hello@yingstutoring.com",
            actionLabel: "Envia correu",
            helperText: "Ideal per a consultes amb més detall."
          },
          {
            kind: "wechat",
            label: "WeChat",
            value: "Disponible a petició",
            helperText: "Ideal per a missatges curts i àgils."
          },
          {
            kind: "whatsapp",
            label: "WhatsApp",
            value: "Disponible a petició",
            helperText: "Ideal per a seguiment ràpid."
          }
        ]
      },
      requestCall: {
        title: "Sol·licita una trucada inicial",
        description: "Ideal per revisar l'encaix del servei, rebre orientació personalitzada i definir el següent pas.",
        ctaLabel: "Ves al formulari"
      }
    },
    form: {
      id: "discovery-call-form",
      title: "Sol·licitud de trucada inicial",
      description:
        "Aquest formulari breu ens ajuda a valorar l'encaix del servei i a respondre amb l'opció de suport més adequada.",
      helper:
        "Cada sol·licitud es revisa personalment. Si hi ha bon encaix, et respondrem amb disponibilitat i següents passos.",
      requiredNotice: "* Camps obligatoris",
      recommendedNotice: "Els camps opcionals ens ajuden a orientar-te millor.",
      submitLabel: "Envia la sol·licitud",
      submittingLabel: "Enviant sol·licitud...",
      successTitle: "Sol·licitud rebuda",
      successMessage: "Gràcies. La teva sol·licitud s'ha enviat correctament.",
      successFollowUp:
        "Revisarem les teves dades personalment i et respondrem en menys de 24 hores.",
      resetLabel: "Envia una altra sol·licitud",
      fields: {
        fullName: "Nom complet",
        email: "Correu electrònic",
        contactHandle: "WeChat / WhatsApp / Un altre contacte",
        role: "Soc",
        stage: "Situació actual",
        supportNeeds: "Quin suport necessites?",
        sessionLanguage: "Idioma de contacte preferit",
        timezone: "Zona horària",
        timeWindow: "Franja horària preferida",
        message: "Missatge breu",
        honeypot: "Deixa aquest camp buit"
      },
      hints: {
        contactHandle: "Opcional però recomanat per a una resposta més ràpida.",
        message: "Opcional: comparteix context en 1-3 frases."
      },
      placeholders: {
        contactHandle: "Exemple: ID de WeChat o número de WhatsApp",
        timezone: "Exemple: Espanya (CET) / Xina (CST)",
        timeWindow: "Exemple: Dies laborables 18:00-21:00 (CET)",
        message: "Opcional: indica la teva prioritat principal ara mateix (entrevista, comunicació acadèmica, preparació abans de l'arribada, etc.)."
      },
      options: {
        role: [
          { value: "student", label: "Estudiant" },
          { value: "adult-learner", label: "Adult / professional" },
          { value: "parent", label: "Mare / pare" }
        ],
        stage: [
          { value: "improving-english", label: "Millorar l'anglès per a feina o estudis" },
          { value: "interview-goal", label: "Preparar una entrevista o un objectiu d'expressió oral" },
          { value: "planning-spain", label: "Preparar-se per estudiar a Espanya" },
          { value: "in-spain", label: "Ja estudia o viu a Espanya" }
        ],
        supportNeeds: [
          { value: "professional-english", label: "Formació professional en comunicació i expressió en anglès" },
          { value: "interview-preparation", label: "Preparació IELTS / entrevistes / expressió oral" },
          { value: "academic-communication", label: "Comunicació acadèmica i expressió formal en anglès" },
          { value: "pre-arrival-orientation", label: "Preparació comunicativa abans d'estudiar a Espanya" },
          { value: "barcelona-in-person", label: "Sessió presencial limitada a Barcelona" },
          { value: "other", label: "Altre" }
        ],
        sessionLanguage: [
          { value: "english", label: "Anglès" },
          { value: "chinese", label: "Xinès (idioma de suport)" },
          { value: "spanish", label: "Espanyol (idioma de suport)" },
          { value: "catalan", label: "Català (idioma de suport)" }
        ]
      },
      validation: {
        fullNameRequired: "Si us plau, escriu el teu nom complet.",
        emailRequired: "Si us plau, escriu el teu correu electrònic.",
        emailInvalid: "Si us plau, utilitza un correu electrònic vàlid.",
        roleRequired: "Selecciona si ets estudiant, adult/professional o mare/pare.",
        stageRequired: "Selecciona la teva situació actual.",
        supportNeedsRequired: "Selecciona almenys una àrea de suport.",
        timezoneRequired: "Indica la teva zona horària.",
        timeWindowRequired: "Indica la teva franja horària preferida.",
        privacyAcknowledgementRequired:
          "Si us plau, confirma que has llegit la Política de Privacitat abans d'enviar la teva sol·licitud.",
        submitFailed: "Hi ha hagut un problema en l'enviament. Torna-ho a provar o escriu'ns directament."
      },
      privacyNotice: {
        text:
          "Utilitzem la teva informació per revisar la teva sol·licitud, respondre't i, si escau, organitzar el següent pas de suport. Els enviaments del formulari es processen a través de Formspree en nom nostre.",
        cookiePolicyLabel: "Política de Galetes",
        privacyPolicyLabel: "Política de Privacitat",
        legalNoticeLabel: "Avís Legal"
      },
      privacyAcknowledgement: {
        labelBeforeLink: "He llegit la",
        privacyPolicyLabel: "Política de Privacitat",
        labelAfterLink:
          "i entenc com s'utilitzarà la meva informació per revisar i respondre a la meva sol·licitud."
      },
      privacyModal: {
        triggerLabel: "Com utilitzem la teva informació",
        title: "Com utilitzem la teva informació",
        intro:
          "Abans d'enviar el formulari, aquí tens un resum clar de com s'utilitza la teva informació i qui ajuda a processar-la.",
        sections: [
          {
            title: "Qui tracta la teva informació",
            body: [
              "La titular del lloc tracta la teva informació per revisar la teva consulta i organitzar el següent pas de suport més adequat.",
              "Les dades de contacte per a qüestions de privacitat figuren a la Política de Privacitat."
            ]
          },
          {
            title: "Què recollim",
            body: [
              "Recollim la informació que introdueixes al formulari, com ara nom, correu electrònic, dada de contacte, àrees de suport, zona horària i missatge.",
              "Només demanem la informació necessària per entendre la teva sol·licitud i respondre adequadament."
            ]
          },
          {
            title: "Per a què la fem servir",
            body: [
              "La teva informació es fa servir per revisar la teva consulta, respondre't i, si escau, organitzar el següent pas de suport més adequat.",
              "No s'utilitza per a màrqueting no relacionat."
            ]
          },
          {
            title: "Proveïdors de servei que utilitzem",
            body: [
              "Utilitzem Formspree per processar en nom nostre els enviaments del formulari de contacte i de trucada inicial.",
              "També utilitzem serveis estàndard d'allotjament web i suport tècnic necessaris per al funcionament del lloc."
            ]
          },
          {
            title: "Els teus drets",
            body: [
              "Pots sol·licitar accés, rectificació o supressió de les teves dades personals, i fer preguntes sobre com es tracten.",
              "La Política de Privacitat explica com contactar amb nosaltres per exercir els teus drets."
            ]
          }
        ],
        moreInfoText: "Per a més detalls, llegeix la Política de Privacitat.",
        closeLabel: "Tanca"
      }
    }
  },
  services: {
    title: "Serveis",
    intro:
      "Els serveis de l'etapa de llançament se centren en la formació professional en anglès, la pràctica comunicativa basada en escenaris, la preparació d'entrevistes i expressió oral, i la preparació comunicativa pràctica per estudiar a Espanya.",
    cards: [
      {
        title: "Formació professional en comunicació i expressió en anglès",
        description:
          "Formació individual per a adults i estudiants universitaris que volen un anglès oral més sòlid, una expressió més formal, correus més clars i una comunicació més natural en contextos internacionals i professionals.",
        details: [
          "Inclou pràctica de speaking i listening basada en escenaris per a reunions, comunicació professional quotidiana, anglès formal i situacions de comunicació intercultural.",
          "Treballa correus professionals, estructuració més clara, expressió formal i hàbits comunicatius més naturals i segurs.",
          "Format: sessions individuals, principalment en línia, per hores, adequat per a repetició i millora continuada."
        ],
        icon: "englishTutoring"
      },
      {
        title: "Preparació IELTS, entrevistes i expressió oral",
        description:
          "Entrenament enfocat i de curt cicle per a persones que necessiten preparació d'entrevistes, més solidesa oral, millor lògica sota pressió i més confiança parlant en anglès.",
        details: [
          "Inclou preguntes simulades, treball d'estructura de resposta, suport de pronunciació i pràctica orientada a components IELTS quan sigui rellevant.",
          "Reforça la confiança per a entrevistes, proves orals i situacions formals on la claredat i el control són importants.",
          "Inclou feedback posterior a la pràctica amb correccions concretes i següents exercicis. Format: individual, en línia, per hora."
        ],
        icon: "interviewPreparation"
      },
      {
        title: "Comunicació acadèmica i expressió formal en anglès",
        description:
          "Suport pràctic per a persones que necessiten un anglès formal més clar en contextos acadèmics, incloent correus, presentacions, preparació de Q&A i comunicació relacionada amb estudis.",
        details: [
          "Treballa to, claredat i estructura per comunicar-se amb professorat, departaments, personal acadèmic i oficines universitàries.",
          "Ajuda a millorar l'estructura escrita, la claredat oral, la presentació i l'expressió formal en anglès en contextos relacionats amb l'estudi.",
          "Inclou preparació per a participació a classe, pràctica de Q&A, suggeriments d'estructura lingüística i refinament de la comunicació de curs, sense ghostwriting. Format: individual, en línia, per hora."
        ],
        icon: "academicCommunication"
      },
      {
        title: "Mini paquet de preparació comunicativa abans de l'arribada",
        description:
          "Un paquet curt i pràctic per a estudiants que es preparen per estudiar a Espanya i necessiten una preparació comunicativa enfocada abans d'arribar.",
        details: [
          "Cobreix comunicació amb escoles o departaments, comunicació relacionada amb allotjament, expressions d'alta freqüència i preparació bàsica d'escenaris abans d'arribar.",
          "Inclou sessions individuals i material de suport, amb recordatoris pràctics sobre comunicació intercultural i situacions freqüents abans de començar els estudis.",
          "Pensat com una opció compacta, pràctica i orientada a resultats abans del viatge."
        ],
        icon: "preArrivalOrientation"
      },
      {
        title: "Feedback i seguiment personalitzat",
        description:
          "El servei es construeix al voltant d'objectius individuals, amb continuïtat, seguiment i ajust sessió a sessió, en lloc de classes genèriques fixes.",
        details: [
          "L'enfocament de cada sessió s'adapta al teu nivell, calendari i escenaris reals de comunicació.",
          "El feedback després de cada sessió ajuda a mantenir el progrés entre cites i al llarg de diverses sessions.",
          "L'entrega és amb cita prèvia, principalment en línia i pensada per a una continuïtat flexible."
        ],
        icon: "personalizedSupport"
      }
    ]
  },
  pricing: {
    title: "Preus clars i senzills",
    intro:
      "Tarifes transparents per als serveis de llançament, amb estructura simple i enfocament en el suport individual.",
    cards: [
      {
        title: "Formació professional en comunicació i expressió en anglès",
        price: "18 €/hora",
        description: "Per a speaking més sòlid, escriptura més clara i una comunicació formal més natural.",
        features: ["Formació individual en línia", "Pràctica basada en escenaris reals", "Adequat per a treball continuat"]
      },
      {
        title: "Preparació d'entrevistes / expressió oral",
        price: "22 €/hora",
        description: "Per a entrevistes, speaking formal, pronunciació i preparació de curt termini.",
        features: ["Pràctica d'entrevistes i speaking formal", "Treball de pronunciació i claredat", "Feedback estructurat i següents passos"],
        highlight: "Més sol·licitat"
      },
      {
        title: "Comunicació acadèmica i expressió formal en anglès",
        price: "24 €/hora",
        description: "Per a correus acadèmics, presentacions, interacció a classe i refinament d'anglès formal.",
        features: ["Suport per a correu i presentacions", "Treball d'estructura i to", "Preparació per a situacions acadèmiques"]
      },
      {
        title: "Paquet de preparació comunicativa abans de l'arribada",
        price: "68 €",
        description: "Paquet curt per a preparació comunicativa abans d'estudiar a Espanya.",
        features: ["3 sessions individuals", "1 document de suport", "Preparació pràctica abans d'arribar"]
      }
    ],
    footnote:
      "Més endavant, segons la demanda, es podrà oferir suport complementari de xinès bàsic i comunicació intercultural per 22 €/hora, però no és una prioritat pública en la fase actual."
  },
  academicPreparation: {
    title: "Paquet de preparació comunicativa abans de l'arribada",
    intro:
      "Un paquet curt, pràctic i orientat a la comunicació per a estudiants que es preparen per estudiar a Espanya.",
    packageName: "Mini paquet de preparació comunicativa abans de l'arribada",
    packagePrice: "68 €",
    packageSummary:
      "Inclou 3 sessions individuals en línia i 1 document de suport, amb un enfocament pràctic i de curt cicle abans del viatge.",
    whoItsForLabel: "Per a qui està pensat",
    whoItsForText:
      "Per a estudiants que volen arribar a Espanya amb una base més clara per comunicar-se amb centres d'estudi, allotjament i situacions quotidianes inicials.",
    includesLabel: "Què inclou",
    includes: [
      "3 sessions individuals en línia",
      "1 document pràctic de suport amb expressions útils, models de correu i recordatoris de comunicació",
      "Preparació centrada en comunicació acadèmica, allotjament i situacions freqüents abans i després de l'arribada"
    ],
    sessionsLabel: "Desglossament de sessions",
    sessions: [
      {
        title: "Sessió 1: Comunicació pràctica prèvia a l'arribada",
        description:
          "Pràctica d'expressions freqüents i patrons de resposta útils abans del viatge."
      },
      {
        title: "Sessió 2: Comunicació amb l'escola i correus formals",
        description:
          "Treball d'estructura clara i llenguatge adequat per escriure a universitats, departaments, allotjament o altres contactes formals."
      },
      {
        title: "Sessió 3: Comunicació en arribar i adaptació inicial",
        description:
          "Preparació per a habitatge, qüestions acadèmiques, vida diària i situacions bàsiques de comunicació intercultural després de l'arribada."
      }
    ],
    supportDocumentLabel: "Document de suport",
    supportDocumentText:
      "Un document pràctic amb expressions útils, models de correu, recordatoris de comunicació i escenaris clau adaptats al moment de l'alumne.",
    ctaLabel: "Sol·licita el paquet prearribada",
    note:
      "Aquest servei cobreix preparació lingüística i comunicativa. No inclou visats, assessorament legal, gestió d'admissions, reubicació ni representació administrativa."
  },
  serviceBoundary: {
    title: "Abast del servei",
    intro:
      "Per mantenir una proposta clara, professional i responsable, el servei es limita a la formació en anglès i la preparació comunicativa.",
    includesTitle: "Què sí que inclou",
    excludesTitle: "Què no inclou",
    includes: [
      "Formació professional en comunicació i expressió en anglès",
      "Preparació d'entrevistes i expressió oral",
      "Comunicació acadèmica i expressió formal en anglès",
      "Preparació comunicativa abans d'estudiar a Espanya",
      "Informació general de suport relacionada amb escenaris de comunicació"
    ],
    excludes: [
      "Serveis d'immigració o visats",
      "Assessorament legal o representació legal regulada",
      "Gestió administrativa o tramitació d'admissions",
      "Col·locació escolar o representació davant institucions",
      "Traducció oficial, redacció per encàrrec o ghostwriting",
      "Intermediació laboral o altres serveis regulats"
    ]
  },
  howItWorks: {
    title: "Com funciona",
    intro:
      "Un procés pràctic pensat per a atenció individual, principalment en línia i amb funcionament per cita prèvia.",
    steps: [
      {
        title: "Comparteix el teu objectiu",
        description:
          "Ens expliques què vols millorar, en quina situació et trobes i quines necessitats de comunicació tens ara mateix."
      },
      {
        title: "Rep un enfocament i una proposta d'horari",
        description:
          "Valorem quin format de servei encaixa millor, et proposem focus de treball i confirmem disponibilitat, horari i forma de pagament."
      },
      {
        title: "Comença les sessions i rep feedback",
        description:
          "La major part del suport es fa en línia. Quan sigui adequat, es poden valorar sessions presencials limitades a Barcelona ciutat, sempre amb cita prèvia."
      }
    ]
  },
  whyChoose: {
    title: "Per què escollir aquest suport",
    intro:
      "És un servei individual, específic i professional, pensat per millorar comunicació real i no per funcionar com una acadèmia massiva o una agència.",
    cards: [
      {
        title: "Perfil professional coherent",
        description:
          "La proposta es recolza en experiència docent, trajectòria acadèmica a Espanya, treball de coordinació i pràctica real de comunicació intercultural.",
        icon: "multilingualAccess"
      },
      {
        title: "Entrenament basat en escenaris",
        description:
          "L'anglès es treballa a partir de situacions reals: entrevistes, correus, presentacions, contextos acadèmics i comunicació internacional.",
        icon: "spainStudyPath"
      },
      {
        title: "Modalitat flexible individual",
        description:
          "L'atenció és principalment en línia, amb cita prèvia i adaptada al nivell, al calendari i a les prioritats reals de cada persona.",
        icon: "personalizedGuidance"
      },
      {
        title: "Feedback i seguiment",
        description:
          "Cada sessió se centra en feedback útil, continuïtat i millora concreta, no en classes aïllades sense seguiment.",
        icon: "calmApproach"
      }
    ]
  },
  supportiveApproach: {
    title: "Un enfocament clar i pràctic",
    text: "Ying's Academic Coaching ajuda cada persona a comunicar-se millor, preparar-se amb més precisió i avançar a través d'una formació en anglès realment útil. El suport és sempre individual, estructurat i connectat amb objectius concrets."
  },
  faq: {
    title: "Preguntes freqüents",
    items: [
      {
        question: "Quin tipus de formació en anglès oferiu?",
        answer:
          "S'ofereix formació en comunicació i expressió en anglès, preparació d'entrevistes i expressió oral, suport de comunicació acadèmica i un paquet breu de preparació comunicativa abans d'estudiar a Espanya."
      },
      {
        question: "És una acadèmia d'anglès general?",
        answer:
          "No en el sentit genèric. La proposta és més específica: se centra en comunicació professional, expressió formal, entrevistes, situacions acadèmiques i preparació comunicativa per estudiar a Espanya."
      },
      {
        question: "Per a qui és aquest servei?",
        answer:
          "Està pensat per a professionals i estudiants universitaris que volen millorar l'anglès formal, per a persones que necessiten preparació d'entrevistes o speaking de curt termini, i per a estudiants internacionals que es preparen per estudiar a Espanya."
      },
      {
        question: "Les sessions són en línia?",
        answer:
          "Sí. El servei és principalment en línia i amb cita prèvia, cosa que permet flexibilitat i continuïtat des de Barcelona, Madrid i altres ciutats d'Espanya."
      },
      {
        question: "Hi ha sessions presencials a Barcelona?",
        answer:
          "Sí, però de manera limitada i selectiva. La major part del suport es fa en línia; les sessions presencials es poden valorar amb cita prèvia dins de Barcelona ciutat segons disponibilitat, ubicació i adequació."
      },
      {
        question: "Què inclou el paquet prearribada?",
        answer:
          "Inclou preparació comunicativa pràctica abans de l'arribada: correus a escoles o departaments, comunicació relacionada amb allotjament, expressions d'alta freqüència, recordatoris interculturals, 3 sessions individuals i 1 document de suport."
      },
      {
        question: "Ajudeu amb comunicació acadèmica?",
        answer:
          "Sí. El suport pot incloure correus acadèmics, presentacions, participació a classe, preparació de Q&A i refinament de l'expressió formal en anglès per a contextos d'estudi."
      },
      {
        question: "Oferiu serveis de visat, legals, admissions o reubicació?",
        answer:
          "No. El negoci ofereix formació lingüística, suport de comunicació i preparació basada en escenaris. No ofereix visats, immigració, assessorament legal, gestió d'admissions, col·locació escolar, traducció oficial ni serveis regulats."
      },
      {
        question: "El xinès és un servei principal?",
        answer:
          "No. El focus principal actual és la formació en anglès i el suport de comunicació. El xinès només es pot utilitzar com a idioma de suport per aportar claredat i, més endavant, podria existir un servei complementari de xinès bàsic o comunicació intercultural segons la demanda."
      },
      {
        question: "Què passa després d'enviar la sol·licitud?",
        answer:
          "Revisem la teva sol·licitud personalment i et responem amb el següent pas recomanat, juntament amb una proposta d'horari si el servei encaixa."
      }
    ]
  },
  finalCta: {
    headline: "Rep formació individual en anglès per comunicar-te millor en contextos professionals, acadèmics i internacionals",
    text: "Si necessites formació professional en anglès, preparació d'entrevistes i expressió oral, suport de comunicació acadèmica o un paquet de preparació comunicativa abans d'estudiar a Espanya, Ying's Academic Coaching ofereix orientació pràctica i personalitzada individual.",
    primaryCta: "Reserva una trucada inicial",
    secondaryCta: "Contacta'ns",
    contacts: [
      {
        kind: "email",
        label: "Correu",
        value: "hello@yingstutoring.com",
        href: "mailto:hello@yingstutoring.com"
      },
      { kind: "wechat", label: "WeChat", value: "Disponible a petició" },
      { kind: "whatsapp", label: "WhatsApp", value: "Disponible a petició" }
    ]
  },
  footer: {
    description:
      "Formació d'anglès professional i suport de comunicació per a contextos professionals, interculturals, acadèmics i de preparació per estudiar a Espanya. Amb base a Barcelona i principalment en línia.",
    navLinks: [
      { label: "Inici", href: "#home" },
      { label: "Sobre Ying", href: "#about" },
      { label: "Serveis", href: "#services" },
      { label: "Paquet prearribada", href: "#westbound-launch" },
      { label: "Com funciona", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacte", href: "#contact" }
    ],
    privacyPolicyLabel: "Política de Privacitat",
    cookiePolicyLabel: "Política de Galetes",
    legalNoticeLabel: "Avís Legal"
  }
};

const siteContentByLocale: Record<Locale, SiteContent> = {
  en: englishContent,
  es: spanishContent,
  zh: chineseContent,
  ca: catalanContent
};

export function getContent(locale: Locale): SiteContent {
  return siteContentByLocale[locale] ?? englishContent;
}
