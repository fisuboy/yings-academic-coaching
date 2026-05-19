export type LegalEntityInfo = {
  legalName: string;
  brandName: string;
  taxId: string;
  email: string;
  websiteDomain: string;
  postalAddress: string;
};

export type CookieCategory = {
  id: "necessary" | "analytics" | "preferences" | "marketing";
  label: string;
  description: string;
  active: boolean;
  requiresConsent: boolean;
};

export type CookieInventoryItem = {
  name: string;
  provider: string;
  technology: "Cookie" | "Local Storage" | "Session Storage" | "Other";
  category: CookieCategory["id"];
  purpose: string;
  duration: string;
  party: "First-party" | "Third-party";
  active: boolean;
  notes?: string;
};

export type LegalUiLocale = "en" | "es" | "zh" | "ca";

export const legalContent = {
  lastUpdated: "2026-04-06",
  controller: {
    legalName: "[TO COMPLETE: legal name / autónomo name]",
    brandName: "Ying's Academic Coaching",
    taxId: "[TO COMPLETE: NIF/NIE]",
    email: "hello@yingstutoring.com",
    websiteDomain: "[TO COMPLETE: website domain]",
    postalAddress: "[TO COMPLETE: postal address]"
  } satisfies LegalEntityInfo,
  privacy: {
    collectedData: [
      "Identification and contact data provided through the discovery-call/contact form (for example: name, email, contact handle).",
      "Support-planning information you submit (for example: current situation, requested support areas, timezone, preferred time window, and message content).",
      "Technical usage data strictly required for website operation (for example: language preference stored in local storage)."
    ],
    collectionMethods: [
      "Directly from you when you submit the contact/discovery-call form.",
      "Directly from you when you contact by email, WeChat, or WhatsApp.",
      "Automatically through essential technical storage needed for website functionality."
    ],
    purposes: [
      "Respond to enquiries and discovery-call requests.",
      "Assess support needs and propose a suitable one-to-one support plan.",
      "Manage follow-up communications related to requested services.",
      "Maintain website functionality and language preference."
    ],
    legalBases: [
      "Pre-contractual steps requested by the data subject (GDPR Article 6(1)(b)) for enquiry handling and service planning.",
      "Legitimate interest (GDPR Article 6(1)(f)) for basic service communication and record management.",
      "Legal obligation (GDPR Article 6(1)(c)) where applicable."
    ],
    recipients: [
      "Hosting and website infrastructure providers. [TO COMPLETE: provider list]",
      "Form processing service provider, if configured. [TO COMPLETE: processor name and DPA status]",
      "No sale of personal data."
    ],
    internationalTransfers:
      "[TO COMPLETE: confirm whether any provider processes data outside the EEA and identify transfer mechanism, if applicable].",
    retention:
      "[TO COMPLETE: define concrete retention periods for enquiries, inactive leads, and service communications].",
    rights: [
      "Access",
      "Rectification",
      "Erasure",
      "Restriction",
      "Objection",
      "Data portability",
      "Withdraw consent where processing is consent-based"
    ],
    supervisoryAuthority:
      "You may also file a complaint with the Spanish supervisory authority (AEPD) if you consider your data protection rights have been infringed."
  },
  legalNotice: {
    websitePurpose:
      "Website for one-to-one professional English training, communication support, academic expression support, interview and oral-expression preparation, and pre-arrival communication preparation for study in Spain.",
    usageConditions: [
      "Users must use the site lawfully and refrain from harmful, abusive, or fraudulent behavior.",
      "The site owner may update content and legal texts as needed.",
      "Service information is informative and does not constitute legal, immigration, or regulated intermediary advice."
    ],
    intellectualProperty:
      "All website content, design elements, and materials are protected by intellectual property rights unless otherwise indicated.",
    liability:
      "Reasonable efforts are made to keep information accurate and available, but uninterrupted access and error-free operation cannot be guaranteed.",
    externalLinks:
      "The website may include third-party links for convenience; responsibility for third-party content lies with their respective owners.",
    applicableLaw:
      "Spanish law applies. [TO COMPLETE: jurisdiction / courts clause as advised by legal counsel]."
  },
  cookies: {
    usesNonEssentialCookies: false,
    consentBannerRequired: false,
    categories: [
      {
        id: "necessary",
        label: "Necessary",
        description:
          "Required for core website operation and essential user experience features.",
        active: true,
        requiresConsent: false
      },
      {
        id: "analytics",
        label: "Analytics",
        description: "Used to measure traffic and behavior for performance analysis.",
        active: false,
        requiresConsent: true
      },
      {
        id: "preferences",
        label: "Preferences",
        description: "Used to remember non-essential personalization preferences.",
        active: false,
        requiresConsent: true
      },
      {
        id: "marketing",
        label: "Marketing",
        description: "Used for advertising, remarketing, and cross-site tracking.",
        active: false,
        requiresConsent: true
      }
    ] satisfies CookieCategory[],
    inventory: [
      {
        name: "site-locale",
        provider: "Ying's Academic Coaching website",
        technology: "Local Storage",
        category: "necessary",
        purpose: "Stores selected website language for a consistent browsing experience.",
        duration: "12 months (or until cleared by user/browser)",
        party: "First-party",
        active: true
      },
      {
        name: "[TO COMPLETE: form-provider cookie, if any]",
        provider: "[TO COMPLETE: form service provider]",
        technology: "Cookie",
        category: "necessary",
        purpose:
          "Potential technical cookie used by external form processor, if implemented in a way that sets cookies.",
        duration: "[TO COMPLETE]",
        party: "Third-party",
        active: false,
        notes:
          "Keep inactive unless confirmed by real provider behavior in production."
      }
    ] satisfies CookieInventoryItem[]
  }
} as const;

export const legalUiContent = {
  en: {
    availabilityNotice: "",
    backToHome: "Back to home",
    quickNav: "On this page",
    privacyTitle: "Privacy Policy",
    privacyIntro:
      "This Privacy Policy explains how personal data is handled for enquiries and one-to-one English training and communication-support requests.",
    legalTitle: "Legal Notice",
    legalIntro:
      "This Legal Notice provides website owner information, usage conditions, and legal framework details for this Spain-based professional website.",
    cookieTitle: "Cookie Policy",
    cookieIntro:
      "This Cookie Policy explains what cookies or similar technologies are used on this website and how you can manage them.",
    noBannerNotice:
      "This website currently uses only necessary technical storage. A cookie consent banner is not active because no non-essential tracking categories are enabled.",
    cookiePage: {
      tocWhatAreCookies: "What cookies are",
      tocCategories: "Categories used on this site",
      tocInventory: "Cookie and similar technology inventory",
      tocManagement: "How to manage settings",
      tocUpdated: "Last updated",
      sectionWhatAreCookies: "What cookies are",
      sectionWhatAreCookiesBody:
        "Cookies are small files stored in your browser. This website may also use similar local technologies (for example local storage) for essential functionality.",
      sectionCategories: "Categories used on this site",
      sectionInventory: "Cookie and similar technology inventory",
      sectionManagement: "How to manage settings",
      managementBody:
        "You can clear cookies or local storage through your browser settings at any time. Necessary technical storage may be recreated when needed to maintain core website functionality.",
      managementNoConsent:
        "No non-essential tracking categories are currently active on this site. If this changes, this policy and consent UX will be updated before activation.",
      managementWithConsent:
        "Non-essential categories are controlled by cookie consent settings. Use the cookie settings option available in the footer to update your choices.",
      sectionUpdated: "Last updated",
      tableCategory: "Category",
      tableDescription: "Description",
      tableStatus: "Status",
      tableConsentRequired: "Consent required",
      tableName: "Name",
      tableProvider: "Provider",
      tableTechnology: "Technology",
      tablePurpose: "Purpose",
      tableDuration: "Duration",
      tableParty: "Party",
      statusActive: "Active",
      statusInactive: "Inactive",
      consentYes: "Yes",
      consentNo: "No",
      categoryLabels: {
        necessary: "Necessary",
        analytics: "Analytics",
        preferences: "Preferences",
        marketing: "Marketing"
      },
      categoryDescriptions: {
        necessary: "Required for core website operation and essential user experience features.",
        analytics: "Used to measure traffic and behavior for performance analysis.",
        preferences: "Used to remember non-essential personalization preferences.",
        marketing: "Used for advertising, remarketing, and cross-site tracking."
      },
      technologyLabels: {
        Cookie: "Cookie",
        "Local Storage": "Local Storage",
        "Session Storage": "Session Storage",
        Other: "Other"
      },
      partyLabels: {
        "First-party": "First-party",
        "Third-party": "Third-party"
      },
      inventoryLocalization: {
        siteLocaleProvider: "Ying's Academic Coaching website",
        siteLocalePurpose: "Stores selected website language for a consistent browsing experience.",
        siteLocaleDuration: "12 months (or until cleared by user/browser)"
      }
    }
  },
  es: {
    availabilityNotice: "",
    backToHome: "Volver al inicio",
    quickNav: "En esta página",
    privacyTitle: "Política de Privacidad",
    privacyIntro:
      "Esta Política de Privacidad explica cómo se tratan los datos personales para consultas y solicitudes individuales de formación en inglés y apoyo de comunicación.",
    legalTitle: "Aviso Legal",
    legalIntro:
      "Este Aviso Legal recoge la información del titular del sitio, las condiciones de uso y el marco legal aplicable.",
    cookieTitle: "Política de Cookies",
    cookieIntro:
      "Esta Política de Cookies explica qué cookies o tecnologías similares se utilizan en este sitio web y cómo puedes gestionarlas.",
    noBannerNotice:
      "Actualmente, este sitio web utiliza únicamente almacenamiento técnico necesario. No se muestra banner de consentimiento porque no hay categorías de seguimiento no esenciales activas.",
    cookiePage: {
      tocWhatAreCookies: "Qué son las cookies",
      tocCategories: "Categorías utilizadas en este sitio",
      tocInventory: "Inventario de cookies y tecnologías similares",
      tocManagement: "Cómo gestionar la configuración",
      tocUpdated: "Última actualización",
      sectionWhatAreCookies: "Qué son las cookies",
      sectionWhatAreCookiesBody:
        "Las cookies son pequeños archivos que se almacenan en tu navegador. Este sitio también puede usar tecnologías locales similares (por ejemplo, almacenamiento local) para funciones esenciales.",
      sectionCategories: "Categorías utilizadas en este sitio",
      sectionInventory: "Inventario de cookies y tecnologías similares",
      sectionManagement: "Cómo gestionar la configuración",
      managementBody:
        "Puedes eliminar cookies o almacenamiento local desde la configuración de tu navegador en cualquier momento. El almacenamiento técnico necesario puede recrearse para mantener la funcionalidad básica del sitio.",
      managementNoConsent:
        "Actualmente no hay categorías de seguimiento no esenciales activas en este sitio. Si esto cambia, esta política y el sistema de consentimiento se actualizarán antes de su activación.",
      managementWithConsent:
        "Las categorías no esenciales se gestionan mediante la configuración de consentimiento de cookies. Puedes actualizar tu elección desde la opción de configuración de cookies en el pie de página.",
      sectionUpdated: "Última actualización",
      tableCategory: "Categoría",
      tableDescription: "Descripción",
      tableStatus: "Estado",
      tableConsentRequired: "Requiere consentimiento",
      tableName: "Nombre",
      tableProvider: "Proveedor",
      tableTechnology: "Tecnología",
      tablePurpose: "Finalidad",
      tableDuration: "Duración",
      tableParty: "Tipo",
      statusActive: "Activa",
      statusInactive: "Inactiva",
      consentYes: "Sí",
      consentNo: "No",
      categoryLabels: {
        necessary: "Necesarias",
        analytics: "Analíticas",
        preferences: "Preferencias",
        marketing: "Marketing"
      },
      categoryDescriptions: {
        necessary: "Necesarias para el funcionamiento básico del sitio y funciones esenciales de experiencia de usuario.",
        analytics: "Utilizadas para medir tráfico y comportamiento con fines de análisis.",
        preferences: "Utilizadas para recordar preferencias no esenciales de personalización.",
        marketing: "Utilizadas para publicidad, remarketing y seguimiento entre sitios."
      },
      technologyLabels: {
        Cookie: "Cookie",
        "Local Storage": "Almacenamiento local",
        "Session Storage": "Almacenamiento de sesión",
        Other: "Otro"
      },
      partyLabels: {
        "First-party": "Propia",
        "Third-party": "De terceros"
      },
      inventoryLocalization: {
        siteLocaleProvider: "Sitio web de Ying's Academic Coaching",
        siteLocalePurpose: "Guarda el idioma seleccionado para ofrecer una experiencia de navegación coherente.",
        siteLocaleDuration: "12 meses (o hasta que la persona usuaria lo elimine del navegador)"
      }
    }
  },
  ca: {
    availabilityNotice: "",
    backToHome: "Torna a l'inici",
    quickNav: "En aquesta pàgina",
    privacyTitle: "Política de Privacitat",
    privacyIntro:
      "Aquesta Política de Privacitat explica com es tracten les dades personals en consultes i sol·licituds individuals de formació en anglès i suport de comunicació.",
    legalTitle: "Avís Legal",
    legalIntro:
      "Aquest Avís Legal recull la informació de la titular del lloc web, les condicions d'ús i el marc legal aplicable.",
    cookieTitle: "Política de Galetes",
    cookieIntro:
      "Aquesta Política de Galetes explica quines galetes o tecnologies similars s'utilitzen en aquest lloc web i com les pots gestionar.",
    noBannerNotice:
      "Actualment, aquest lloc web només utilitza emmagatzematge tècnic necessari. No es mostra cap banner de consentiment perquè no hi ha categories de seguiment no essencial actives.",
    cookiePage: {
      tocWhatAreCookies: "Què són les galetes",
      tocCategories: "Categories utilitzades en aquest lloc",
      tocInventory: "Inventari de galetes i tecnologies similars",
      tocManagement: "Com gestionar la configuració",
      tocUpdated: "Darrera actualització",
      sectionWhatAreCookies: "Què són les galetes",
      sectionWhatAreCookiesBody:
        "Les galetes són petits fitxers que s'emmagatzemen al teu navegador. Aquest lloc també pot utilitzar tecnologies locals similars (per exemple, emmagatzematge local) per a funcions essencials.",
      sectionCategories: "Categories utilitzades en aquest lloc",
      sectionInventory: "Inventari de galetes i tecnologies similars",
      sectionManagement: "Com gestionar la configuració",
      managementBody:
        "Pots eliminar les galetes o l'emmagatzematge local des de la configuració del teu navegador en qualsevol moment. L'emmagatzematge tècnic necessari es pot tornar a crear per mantenir la funcionalitat bàsica del lloc.",
      managementNoConsent:
        "Actualment no hi ha categories de seguiment no essencial actives en aquest lloc. Si això canvia, aquesta política i el sistema de consentiment s'actualitzaran abans de l'activació.",
      managementWithConsent:
        "Les categories no essencials es gestionen mitjançant la configuració de consentiment de galetes. Pots actualitzar la teva elecció des de l'opció de configuració de galetes al peu de pàgina.",
      sectionUpdated: "Darrera actualització",
      tableCategory: "Categoria",
      tableDescription: "Descripció",
      tableStatus: "Estat",
      tableConsentRequired: "Requereix consentiment",
      tableName: "Nom",
      tableProvider: "Proveïdor",
      tableTechnology: "Tecnologia",
      tablePurpose: "Finalitat",
      tableDuration: "Durada",
      tableParty: "Tipus",
      statusActive: "Activa",
      statusInactive: "Inactiva",
      consentYes: "Sí",
      consentNo: "No",
      categoryLabels: {
        necessary: "Necessàries",
        analytics: "Analítiques",
        preferences: "Preferències",
        marketing: "Màrqueting"
      },
      categoryDescriptions: {
        necessary: "Necessàries per al funcionament bàsic del lloc i per a funcions essencials d'experiència d'usuari.",
        analytics: "Utilitzades per mesurar trànsit i comportament amb finalitats d'anàlisi.",
        preferences: "Utilitzades per recordar preferències de personalització no essencials.",
        marketing: "Utilitzades per publicitat, remarketing i seguiment entre llocs."
      },
      technologyLabels: {
        Cookie: "Galeta",
        "Local Storage": "Emmagatzematge local",
        "Session Storage": "Emmagatzematge de sessió",
        Other: "Altre"
      },
      partyLabels: {
        "First-party": "Pròpia",
        "Third-party": "De tercers"
      },
      inventoryLocalization: {
        siteLocaleProvider: "Lloc web de Ying's Academic Coaching",
        siteLocalePurpose: "Desa l'idioma seleccionat per oferir una experiència de navegació coherent.",
        siteLocaleDuration: "12 mesos (o fins que la persona usuària l'elimini del navegador)"
      }
    }
  },
  zh: {
    availabilityNotice: "",
    backToHome: "返回首页",
    quickNav: "本页目录",
    privacyTitle: "隐私政策",
    privacyIntro:
      "本隐私政策说明我们如何处理咨询以及一对一英语训练与沟通支持申请中涉及的个人信息。",
    legalTitle: "法律声明",
    legalIntro:
      "本法律声明说明网站主体信息、使用条件及适用法律框架。",
    cookieTitle: "Cookie 政策",
    cookieIntro:
      "本 Cookie 政策说明本网站使用了哪些 Cookie 或类似技术，以及你可以如何进行管理。",
    noBannerNotice:
      "本网站目前仅使用必要的技术性存储。由于未启用非必要追踪类别，因此不显示 Cookie 同意横幅。",
    cookiePage: {
      tocWhatAreCookies: "什么是 Cookie",
      tocCategories: "本网站使用的类别",
      tocInventory: "Cookie 与类似技术清单",
      tocManagement: "如何管理设置",
      tocUpdated: "最后更新",
      sectionWhatAreCookies: "什么是 Cookie",
      sectionWhatAreCookiesBody:
        "Cookie 是保存在浏览器中的小型文件。本网站也可能使用类似的本地技术（例如本地存储）来实现必要功能。",
      sectionCategories: "本网站使用的类别",
      sectionInventory: "Cookie 与类似技术清单",
      sectionManagement: "如何管理设置",
      managementBody:
        "你可以随时在浏览器设置中清除 Cookie 或本地存储。为保证网站核心功能，必要的技术性存储可能会被重新创建。",
      managementNoConsent:
        "本网站目前未启用任何非必要追踪类别。如未来发生变化，我们会在启用前更新本政策及同意机制。",
      managementWithConsent:
        "非必要类别通过 Cookie 同意设置进行管理。你可以通过页脚中的 Cookie 设置入口更新选择。",
      sectionUpdated: "最后更新",
      tableCategory: "类别",
      tableDescription: "说明",
      tableStatus: "状态",
      tableConsentRequired: "是否需要同意",
      tableName: "名称",
      tableProvider: "提供方",
      tableTechnology: "技术类型",
      tablePurpose: "用途",
      tableDuration: "有效期",
      tableParty: "归属",
      statusActive: "启用",
      statusInactive: "未启用",
      consentYes: "是",
      consentNo: "否",
      categoryLabels: {
        necessary: "必要",
        analytics: "分析",
        preferences: "偏好",
        marketing: "营销"
      },
      categoryDescriptions: {
        necessary: "用于网站核心运行与必要用户体验功能。",
        analytics: "用于流量与行为分析。",
        preferences: "用于保存非必要个性化偏好设置。",
        marketing: "用于广告、再营销与跨站追踪。"
      },
      technologyLabels: {
        Cookie: "Cookie",
        "Local Storage": "本地存储",
        "Session Storage": "会话存储",
        Other: "其他"
      },
      partyLabels: {
        "First-party": "第一方",
        "Third-party": "第三方"
      },
      inventoryLocalization: {
        siteLocaleProvider: "Ying's Academic Coaching 网站",
        siteLocalePurpose: "保存你选择的网站语言，以提供一致的浏览体验。",
        siteLocaleDuration: "12 个月（或直到你在浏览器中清除）"
      }
    }
  }
} as const;

export const legalPageContent = {
  en: {
    privacyPage: {
      toc: [
        { id: "controller", label: "Data controller" },
        { id: "data-collected", label: "What data is collected" },
        { id: "data-collection", label: "How data is collected" },
        { id: "purposes", label: "Purposes of processing" },
        { id: "legal-basis", label: "Legal basis" },
        { id: "recipients", label: "Recipients / processors" },
        { id: "transfers", label: "International transfers" },
        { id: "retention", label: "Retention periods" },
        { id: "rights", label: "Your rights" },
        { id: "security", label: "Security and data handling" },
        { id: "contact", label: "Contact and rights requests" },
        { id: "updated", label: "Last updated" }
      ],
      sections: {
        controllerTitle: "Data controller",
        controllerLabels: {
          brand: "Brand",
          legalName: "Legal name",
          taxId: "Tax ID",
          email: "Email",
          website: "Website",
          postalAddress: "Postal address"
        },
        placeholders: {
          legalName: "[TO COMPLETE: legal name]",
          taxId: "[TO COMPLETE: NIF/NIE]",
          website: "[TO COMPLETE: website domain]",
          postalAddress: "[TO COMPLETE: postal address]",
          providerList: "[TO COMPLETE: provider list]",
          processor: "[TO COMPLETE: form processor]",
          transfers:
            "[TO COMPLETE: confirm whether any provider processes data outside the EEA and identify the transfer mechanism, if applicable]",
          retention: "[TO COMPLETE: define retention period]"
        },
        dataCollectedTitle: "What data is collected",
        dataCollected: [
          "Identification and contact data provided through the discovery-call/contact form, such as name, email address, and contact handle.",
          "Support-planning information you submit, such as current situation, requested support areas, timezone, preferred time window, and message content.",
          "Technical usage data strictly required for website operation, such as saved language preference."
        ],
        dataCollectionTitle: "How data is collected",
        dataCollection: [
          "Directly from you when you submit the contact or discovery-call form.",
          "Directly from you when you contact by email, WeChat, or WhatsApp.",
          "Automatically through essential technical storage needed for website functionality."
        ],
        purposesTitle: "Purposes of processing",
        purposes: [
          "Respond to enquiries and discovery-call requests.",
          "Assess support needs and recommend a suitable one-to-one support plan.",
          "Manage follow-up communications related to requested services.",
          "Maintain website functionality and saved language preference."
        ],
        legalBasisTitle: "Legal basis",
        legalBases: [
          "Pre-contractual steps requested by the data subject (GDPR Article 6(1)(b)) for enquiry handling and service planning.",
          "Legitimate interest (GDPR Article 6(1)(f)) for basic service communication and record management.",
          "Legal obligation (GDPR Article 6(1)(c)) where applicable."
        ],
        recipientsTitle: "Recipients / processors",
        recipients: [
          "Hosting and website infrastructure providers. [TO COMPLETE: provider list]",
          "Formspree, used to process contact and discovery-call form submissions on behalf of the site owner.",
          "Personal data is not sold to third parties."
        ],
        transfersTitle: "International transfers",
        transfers:
          "[TO COMPLETE: confirm whether any provider processes data outside the EEA and identify the transfer mechanism, if applicable]",
        retentionTitle: "Retention periods",
        retention:
          "[TO COMPLETE: define retention period]",
        rightsTitle: "Your rights",
        rightsIntro: "You may exercise the following rights:",
        rights: [
          "Access",
          "Rectification",
          "Erasure",
          "Restriction",
          "Objection",
          "Data portability",
          "Withdrawal of consent where processing is based on consent"
        ],
        supervisoryAuthority:
          "You may also file a complaint with the Spanish supervisory authority (AEPD) if you believe your data protection rights have been infringed.",
        securityTitle: "Security and data handling",
        securityText:
          "Reasonable technical and organizational measures are applied to protect personal data against unauthorized access, alteration, disclosure, loss, or misuse.",
        contactTitle: "Contact and rights requests",
        contactLead: "To exercise your rights or ask data-protection questions, contact",
        contactFollowUp:
          "Please include enough information to identify your request and your relationship with the website.",
        updatedTitle: "Last updated"
      }
    },
    legalNoticePage: {
      toc: [
        { id: "owner", label: "Site owner information" },
        { id: "purpose", label: "Website purpose" },
        { id: "conditions", label: "Conditions of use" },
        { id: "ip", label: "Intellectual property" },
        { id: "liability", label: "Liability limitations" },
        { id: "links", label: "External links" },
        { id: "law", label: "Applicable law and jurisdiction" },
        { id: "contact", label: "Contact" },
        { id: "updated", label: "Last updated" }
      ],
      sections: {
        ownerTitle: "Site owner / provider information",
        ownerLabels: {
          brand: "Brand",
          legalName: "Legal name",
          taxId: "Tax ID",
          email: "Email",
          postalAddress: "Postal address",
          websiteDomain: "Website domain"
        },
        placeholders: {
          legalName: "[TO COMPLETE: legal name]",
          taxId: "[TO COMPLETE: NIF/NIE]",
          postalAddress: "[TO COMPLETE: postal address]",
          websiteDomain: "[TO COMPLETE: website domain]",
          jurisdiction:
            "[TO COMPLETE: jurisdiction / courts clause]"
        },
        purposeTitle: "Website purpose",
        purposeText:
          "Website for one-to-one professional English training, communication support, academic expression support, interview and oral-expression preparation, and pre-arrival communication preparation for study in Spain.",
        conditionsTitle: "Conditions of use",
        conditions: [
          "Users must use the site lawfully and refrain from harmful, abusive, or fraudulent behavior.",
          "The site owner may update content and legal texts as needed.",
          "Service information is informative and does not constitute legal, immigration, or regulated intermediary advice."
        ],
        intellectualPropertyTitle: "Intellectual property",
        intellectualPropertyText:
          "All website content, design elements, and materials are protected by intellectual property rights unless otherwise indicated.",
        liabilityTitle: "Liability limitations",
        liabilityText:
          "Reasonable efforts are made to keep information accurate and available, but uninterrupted access and error-free operation cannot be guaranteed.",
        linksTitle: "External links",
        linksText:
          "The website may include third-party links for convenience. Responsibility for third-party content lies with the respective owners of those sites.",
        lawTitle: "Applicable law and jurisdiction",
        lawText:
          "Spanish law applies. [TO COMPLETE: jurisdiction / courts clause]",
        contactTitle: "Contact",
        contactLead: "For legal or website notices, contact",
        updatedTitle: "Last updated"
      }
    }
  },
  es: {
    privacyPage: {
      toc: [
        { id: "controller", label: "Responsable del tratamiento" },
        { id: "data-collected", label: "Qué datos se recogen" },
        { id: "data-collection", label: "Cómo se recogen los datos" },
        { id: "purposes", label: "Finalidades del tratamiento" },
        { id: "legal-basis", label: "Base jurídica" },
        { id: "recipients", label: "Destinatarios / encargados" },
        { id: "transfers", label: "Transferencias internacionales" },
        { id: "retention", label: "Plazos de conservación" },
        { id: "rights", label: "Tus derechos" },
        { id: "security", label: "Seguridad y tratamiento de datos" },
        { id: "contact", label: "Contacto y ejercicio de derechos" },
        { id: "updated", label: "Última actualización" }
      ],
      sections: {
        controllerTitle: "Responsable del tratamiento",
        controllerLabels: {
          brand: "Marca",
          legalName: "Nombre legal",
          taxId: "NIF / NIE",
          email: "Correo electrónico",
          website: "Sitio web",
          postalAddress: "Dirección postal"
        },
        placeholders: {
          legalName: "[POR COMPLETAR: nombre legal]",
          taxId: "[POR COMPLETAR: NIF/NIE]",
          website: "[POR COMPLETAR: dominio web]",
          postalAddress: "[POR COMPLETAR: dirección]",
          providerList: "[POR COMPLETAR: listado de proveedores]",
          processor: "[POR COMPLETAR: encargado del tratamiento del formulario]",
          transfers:
            "[POR COMPLETAR: confirmar si algún proveedor trata datos fuera del EEE e indicar el mecanismo de transferencia, si procede]",
          retention: "[POR COMPLETAR: plazo de conservación]"
        },
        dataCollectedTitle: "Qué datos se recogen",
        dataCollected: [
          "Datos identificativos y de contacto facilitados a través del formulario de contacto o de llamada inicial, como nombre, correo electrónico y dato de contacto.",
          "Información aportada para planificar el apoyo, como situación actual, áreas de apoyo solicitadas, zona horaria, franja horaria preferida y contenido del mensaje.",
          "Datos técnicos estrictamente necesarios para el funcionamiento del sitio web, como la preferencia de idioma guardada."
        ],
        dataCollectionTitle: "Cómo se recogen los datos",
        dataCollection: [
          "Directamente cuando envías el formulario de contacto o de llamada inicial.",
          "Directamente cuando contactas por correo electrónico, WeChat o WhatsApp.",
          "Automáticamente mediante almacenamiento técnico esencial necesario para el funcionamiento del sitio."
        ],
        purposesTitle: "Finalidades del tratamiento",
        purposes: [
          "Responder a consultas y solicitudes de llamada inicial.",
          "Valorar las necesidades de apoyo y proponer un plan adecuado de apoyo individual.",
          "Gestionar comunicaciones de seguimiento relacionadas con los servicios solicitados.",
          "Mantener la funcionalidad del sitio web y la preferencia de idioma guardada."
        ],
        legalBasisTitle: "Base jurídica",
        legalBases: [
          "Aplicación de medidas precontractuales a petición de la persona interesada (artículo 6.1.b del RGPD) para gestionar consultas y planificar el servicio.",
          "Interés legítimo (artículo 6.1.f del RGPD) para la comunicación básica del servicio y la gestión de registros.",
          "Cumplimiento de obligaciones legales (artículo 6.1.c del RGPD), cuando resulte aplicable."
        ],
        recipientsTitle: "Destinatarios / encargados",
        recipients: [
          "Proveedores de alojamiento e infraestructura web. [POR COMPLETAR: listado de proveedores]",
          "Formspree, utilizado para procesar en nombre de la titular los envíos del formulario de contacto y de llamada inicial.",
          "Los datos personales no se venden a terceros."
        ],
        transfersTitle: "Transferencias internacionales",
        transfers:
          "[POR COMPLETAR: confirmar si algún proveedor trata datos fuera del EEE e indicar el mecanismo de transferencia, si procede]",
        retentionTitle: "Plazos de conservación",
        retention:
          "[POR COMPLETAR: plazo de conservación]",
        rightsTitle: "Tus derechos",
        rightsIntro: "Puedes ejercer los siguientes derechos:",
        rights: [
          "Acceso",
          "Rectificación",
          "Supresión",
          "Limitación del tratamiento",
          "Oposición",
          "Portabilidad",
          "Retirada del consentimiento cuando el tratamiento se base en el consentimiento"
        ],
        supervisoryAuthority:
          "También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si consideras que se han vulnerado tus derechos en materia de protección de datos.",
        securityTitle: "Seguridad y tratamiento de datos",
        securityText:
          "Se aplican medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no autorizados, alteraciones, divulgación, pérdida o uso indebido.",
        contactTitle: "Contacto y ejercicio de derechos",
        contactLead: "Para ejercer tus derechos o realizar consultas sobre protección de datos, puedes escribir a",
        contactFollowUp:
          "Incluye información suficiente para identificar tu solicitud y tu relación con el sitio web.",
        updatedTitle: "Última actualización"
      }
    },
    legalNoticePage: {
      toc: [
        { id: "owner", label: "Información del titular" },
        { id: "purpose", label: "Finalidad del sitio web" },
        { id: "conditions", label: "Condiciones de uso" },
        { id: "ip", label: "Propiedad intelectual" },
        { id: "liability", label: "Limitación de responsabilidad" },
        { id: "links", label: "Enlaces externos" },
        { id: "law", label: "Ley aplicable y jurisdicción" },
        { id: "contact", label: "Contacto" },
        { id: "updated", label: "Última actualización" }
      ],
      sections: {
        ownerTitle: "Información del titular / prestador del sitio",
        ownerLabels: {
          brand: "Marca",
          legalName: "Nombre legal",
          taxId: "NIF / NIE",
          email: "Correo electrónico",
          postalAddress: "Dirección postal",
          websiteDomain: "Dominio web"
        },
        placeholders: {
          legalName: "[POR COMPLETAR: nombre legal]",
          taxId: "[POR COMPLETAR: NIF/NIE]",
          postalAddress: "[POR COMPLETAR: dirección]",
          websiteDomain: "[POR COMPLETAR: dominio web]",
          jurisdiction: "[POR COMPLETAR: jurisdicción / juzgados competentes]"
        },
        purposeTitle: "Finalidad del sitio web",
        purposeText:
          "Sitio web de formación individual en inglés profesional, apoyo de comunicación, apoyo de expresión académica, preparación de entrevistas y expresión oral, y preparación comunicativa pre-llegada para estudiar en España.",
        conditionsTitle: "Condiciones de uso",
        conditions: [
          "Las personas usuarias deben utilizar el sitio de forma lícita y abstenerse de conductas dañinas, abusivas o fraudulentas.",
          "La titular del sitio puede actualizar los contenidos y los textos legales cuando sea necesario.",
          "La información sobre servicios es informativa y no constituye asesoramiento legal, migratorio ni servicios de intermediación regulada."
        ],
        intellectualPropertyTitle: "Propiedad intelectual",
        intellectualPropertyText:
          "Todos los contenidos, elementos de diseño y materiales del sitio web están protegidos por derechos de propiedad intelectual, salvo que se indique lo contrario.",
        liabilityTitle: "Limitación de responsabilidad",
        liabilityText:
          "Se realizan esfuerzos razonables para mantener la información actualizada y accesible, pero no se puede garantizar un acceso ininterrumpido ni la ausencia total de errores.",
        linksTitle: "Enlaces externos",
        linksText:
          "El sitio web puede incluir enlaces a terceros por conveniencia. La responsabilidad sobre esos contenidos corresponde a sus respectivos titulares.",
        lawTitle: "Ley aplicable y jurisdicción",
        lawText:
          "Se aplica la legislación española. [POR COMPLETAR: jurisdicción / juzgados competentes]",
        contactTitle: "Contacto",
        contactLead: "Para comunicaciones legales o relacionadas con el sitio web, contacta con",
        updatedTitle: "Última actualización"
      }
    }
  },

  ca: {
    privacyPage: {
      toc: [
        { id: "controller", label: "Responsable del tractament" },
        { id: "data-collected", label: "Quines dades es recullen" },
        { id: "data-collection", label: "Com es recullen les dades" },
        { id: "purposes", label: "Finalitats del tractament" },
        { id: "legal-basis", label: "Base jurídica" },
        { id: "recipients", label: "Destinataris / encarregats" },
        { id: "transfers", label: "Transferències internacionals" },
        { id: "retention", label: "Terminis de conservació" },
        { id: "rights", label: "Els teus drets" },
        { id: "security", label: "Seguretat i tractament de dades" },
        { id: "contact", label: "Contacte i exercici de drets" },
        { id: "updated", label: "Darrera actualització" }
      ],
      sections: {
        controllerTitle: "Responsable del tractament",
        controllerLabels: {
          brand: "Marca",
          legalName: "Nom legal",
          taxId: "NIF / NIE",
          email: "Correu electrònic",
          website: "Lloc web",
          postalAddress: "Adreça postal"
        },
        placeholders: {
          legalName: "[PER COMPLETAR: nom legal]",
          taxId: "[PER COMPLETAR: NIF/NIE]",
          website: "[PER COMPLETAR: domini web]",
          postalAddress: "[PER COMPLETAR: adreça]",
          providerList: "[PER COMPLETAR: llista de proveïdors]",
          processor: "[PER COMPLETAR: encarregat del tractament del formulari]",
          transfers:
            "[PER COMPLETAR: confirmar si algun proveïdor tracta dades fora de l'EEE i indicar el mecanisme de transferència, si escau]",
          retention: "[PER COMPLETAR: termini de conservació]"
        },
        dataCollectedTitle: "Quines dades es recullen",
        dataCollected: [
          "Dades identificatives i de contacte facilitades a través del formulari de contacte o de trucada inicial, com ara nom, correu electrònic i dada de contacte.",
          "Informació aportada per planificar el suport, com ara situació actual, àrees de suport sol·licitades, zona horària, franja horària preferida i contingut del missatge.",
          "Dades tècniques estrictament necessàries per al funcionament del lloc web, com ara la preferència d'idioma desada."
        ],
        dataCollectionTitle: "Com es recullen les dades",
        dataCollection: [
          "Directament quan envies el formulari de contacte o de trucada inicial.",
          "Directament quan contactes per correu electrònic, WeChat o WhatsApp.",
          "Automàticament mitjançant emmagatzematge tècnic essencial necessari per al funcionament del lloc."
        ],
        purposesTitle: "Finalitats del tractament",
        purposes: [
          "Respondre consultes i sol·licituds de trucada inicial.",
          "Valorar les necessitats de suport i proposar un pla adequat de suport individual.",
          "Gestionar comunicacions de seguiment relacionades amb els serveis sol·licitats.",
          "Mantenir la funcionalitat del lloc web i la preferència d'idioma desada."
        ],
        legalBasisTitle: "Base jurídica",
        legalBases: [
          "Aplicació de mesures precontractuals a petició de la persona interessada (article 6.1.b del RGPD) per gestionar consultes i planificar el servei.",
          "Interès legítim (article 6.1.f del RGPD) per a la comunicació bàsica del servei i la gestió de registres.",
          "Compliment d'obligacions legals (article 6.1.c del RGPD), quan sigui aplicable."
        ],
        recipientsTitle: "Destinataris / encarregats",
        recipients: [
          "Proveïdors d'allotjament i infraestructura web. [PER COMPLETAR: llista de proveïdors]",
          "Formspree, utilitzat per processar en nom de la titular els enviaments del formulari de contacte i de trucada inicial.",
          "Les dades personals no es venen a tercers."
        ],
        transfersTitle: "Transferències internacionals",
        transfers:
          "[PER COMPLETAR: confirmar si algun proveïdor tracta dades fora de l'EEE i indicar el mecanisme de transferència, si escau]",
        retentionTitle: "Terminis de conservació",
        retention: "[PER COMPLETAR: termini de conservació]",
        rightsTitle: "Els teus drets",
        rightsIntro: "Pots exercir els drets següents:",
        rights: [
          "Accés",
          "Rectificació",
          "Supressió",
          "Limitació del tractament",
          "Oposició",
          "Portabilitat",
          "Retirada del consentiment quan el tractament es basi en el consentiment"
        ],
        supervisoryAuthority:
          "També pots presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (AEPD) si consideres que s'han vulnerat els teus drets en matèria de protecció de dades.",
        securityTitle: "Seguretat i tractament de dades",
        securityText:
          "S'apliquen mesures tècniques i organitzatives raonables per protegir les dades personals davant accessos no autoritzats, alteracions, divulgació, pèrdua o ús indegut.",
        contactTitle: "Contacte i exercici de drets",
        contactLead: "Per exercir els teus drets o fer consultes sobre protecció de dades, pots escriure a",
        contactFollowUp:
          "Inclou informació suficient per identificar la teva sol·licitud i la teva relació amb el lloc web.",
        updatedTitle: "Darrera actualització"
      }
    },
    legalNoticePage: {
      toc: [
        { id: "owner", label: "Informació de la titular" },
        { id: "purpose", label: "Finalitat del lloc web" },
        { id: "conditions", label: "Condicions d'ús" },
        { id: "ip", label: "Propietat intel·lectual" },
        { id: "liability", label: "Limitació de responsabilitat" },
        { id: "links", label: "Enllaços externs" },
        { id: "law", label: "Llei aplicable i jurisdicció" },
        { id: "contact", label: "Contacte" },
        { id: "updated", label: "Darrera actualització" }
      ],
      sections: {
        ownerTitle: "Informació de la titular / prestadora del lloc",
        ownerLabels: {
          brand: "Marca",
          legalName: "Nom legal",
          taxId: "NIF / NIE",
          email: "Correu electrònic",
          postalAddress: "Adreça postal",
          websiteDomain: "Domini web"
        },
        placeholders: {
          legalName: "[PER COMPLETAR: nom legal]",
          taxId: "[PER COMPLETAR: NIF/NIE]",
          postalAddress: "[PER COMPLETAR: adreça]",
          websiteDomain: "[PER COMPLETAR: domini web]",
          jurisdiction: "[PER COMPLETAR: jurisdicció / jutjats competents]"
        },
        purposeTitle: "Finalitat del lloc web",
        purposeText:
          "Lloc web de formació individual en anglès professional, suport de comunicació, suport d'expressió acadèmica, preparació d'entrevistes i expressió oral, i preparació comunicativa abans d'estudiar a Espanya.",
        conditionsTitle: "Condicions d'ús",
        conditions: [
          "Les persones usuàries han d'utilitzar el lloc de manera lícita i abstenir-se de conductes nocives, abusives o fraudulentes.",
          "La titular del lloc pot actualitzar els continguts i els textos legals quan sigui necessari.",
          "La informació sobre serveis és informativa i no constitueix assessorament legal, migratori ni serveis d'intermediació regulada."
        ],
        intellectualPropertyTitle: "Propietat intel·lectual",
        intellectualPropertyText:
          "Tots els continguts, elements de disseny i materials del lloc web estan protegits per drets de propietat intel·lectual, llevat que s'indiqui el contrari.",
        liabilityTitle: "Limitació de responsabilitat",
        liabilityText:
          "Es fan esforços raonables per mantenir la informació actualitzada i accessible, però no es pot garantir un accés ininterromput ni l'absència total d'errors.",
        linksTitle: "Enllaços externs",
        linksText:
          "El lloc web pot incloure enllaços a tercers per conveniència. La responsabilitat sobre aquests continguts correspon als seus respectius titulars.",
        lawTitle: "Llei aplicable i jurisdicció",
        lawText:
          "S'aplica la legislació espanyola. [PER COMPLETAR: jurisdicció / jutjats competents]",
        contactTitle: "Contacte",
        contactLead: "Per a comunicacions legals o relacionades amb el lloc web, contacta amb",
        updatedTitle: "Darrera actualització"
      }
    }
  },
  zh: {
    privacyPage: {
      toc: [
        { id: "controller", label: "数据控制者" },
        { id: "data-collected", label: "收集哪些数据" },
        { id: "data-collection", label: "如何收集数据" },
        { id: "purposes", label: "处理目的" },
        { id: "legal-basis", label: "法律依据" },
        { id: "recipients", label: "接收方 / 数据处理方" },
        { id: "transfers", label: "国际传输" },
        { id: "retention", label: "保存期限" },
        { id: "rights", label: "你的权利" },
        { id: "security", label: "数据安全与处理" },
        { id: "contact", label: "联系与权利行使" },
        { id: "updated", label: "最后更新" }
      ],
      sections: {
        controllerTitle: "数据控制者",
        controllerLabels: {
          brand: "品牌名称",
          legalName: "法定名称",
          taxId: "税号 / NIE",
          email: "电子邮箱",
          website: "网站域名",
          postalAddress: "邮寄地址"
        },
        placeholders: {
          legalName: "[待补充：法定名称]",
          taxId: "[待补充：税号 / NIE]",
          website: "[待补充：网站域名]",
          postalAddress: "[待补充：地址]",
          providerList: "[待补充：服务商列表]",
          processor: "[待补充：表单数据处理服务商]",
          transfers:
            "[待补充：如有服务商在欧洲经济区以外处理数据，请说明传输机制]",
          retention: "[待补充：保存期限]"
        },
        dataCollectedTitle: "收集哪些数据",
        dataCollected: [
          "你通过联系表单或咨询通话表单提交的身份与联系方式信息，例如姓名、邮箱和联系账号。",
          "你提交的支持规划相关信息，例如当前情况、所需支持内容、时区、偏好时间段以及留言内容。",
          "网站运行所必需的技术性数据，例如保存的网站语言偏好。"
        ],
        dataCollectionTitle: "如何收集数据",
        dataCollection: [
          "当你提交联系表单或咨询通话表单时，直接由你提供。",
          "当你通过电子邮件、微信或 WhatsApp 联系时，直接由你提供。",
          "通过网站正常运行所必需的技术性存储自动收集。"
        ],
        purposesTitle: "处理目的",
        purposes: [
          "回复咨询与咨询通话申请。",
          "评估支持需求并推荐合适的一对一支持方案。",
          "处理与所请求服务相关的后续沟通。",
          "维持网站功能和已保存的语言偏好。"
        ],
        legalBasisTitle: "法律依据",
        legalBases: [
          "应数据主体请求采取缔约前措施（GDPR 第 6(1)(b) 条），用于处理咨询和服务规划。",
          "基于合法利益（GDPR 第 6(1)(f) 条），用于基础服务沟通与记录管理。",
          "在适用情况下，为履行法律义务（GDPR 第 6(1)(c) 条）。"
        ],
        recipientsTitle: "接收方 / 数据处理方",
        recipients: [
          "网站托管与基础设施服务商。[待补充：服务商列表]",
          "Formspree，用于代表网站负责人处理联系表单与咨询通话表单的提交。",
          "个人数据不会出售给第三方。"
        ],
        transfersTitle: "国际传输",
        transfers:
          "[待补充：如有服务商在欧洲经济区以外处理数据，请说明传输机制]",
        retentionTitle: "保存期限",
        retention:
          "[待补充：保存期限]",
        rightsTitle: "你的权利",
        rightsIntro: "你可以行使以下权利：",
        rights: [
          "访问权",
          "更正权",
          "删除权",
          "限制处理权",
          "反对权",
          "数据可携权",
          "如处理基于同意，可随时撤回同意"
        ],
        supervisoryAuthority:
          "如果你认为自己的数据保护权利受到侵犯，也可以向西班牙数据保护局（AEPD）提出投诉。",
        securityTitle: "数据安全与处理",
        securityText:
          "我们会采取合理的技术和组织措施，以保护个人数据免于未经授权的访问、篡改、披露、丢失或滥用。",
        contactTitle: "联系与权利行使",
        contactLead: "如需行使你的权利或咨询数据保护相关问题，请联系",
        contactFollowUp:
          "请提供足够的信息，以便识别你的请求以及你与本网站的关系。",
        updatedTitle: "最后更新"
      }
    },
    legalNoticePage: {
      toc: [
        { id: "owner", label: "网站主体信息" },
        { id: "purpose", label: "网站用途" },
        { id: "conditions", label: "使用条件" },
        { id: "ip", label: "知识产权" },
        { id: "liability", label: "责任限制" },
        { id: "links", label: "外部链接" },
        { id: "law", label: "适用法律与管辖" },
        { id: "contact", label: "联系方式" },
        { id: "updated", label: "最后更新" }
      ],
      sections: {
        ownerTitle: "网站主体 / 提供者信息",
        ownerLabels: {
          brand: "品牌名称",
          legalName: "法定名称",
          taxId: "税号 / NIE",
          email: "电子邮箱",
          postalAddress: "邮寄地址",
          websiteDomain: "网站域名"
        },
        placeholders: {
          legalName: "[待补充：法定名称]",
          taxId: "[待补充：税号 / NIE]",
          postalAddress: "[待补充：地址]",
          websiteDomain: "[待补充：网站域名]",
          jurisdiction: "[待补充：适用法院 / 管辖条款]"
        },
        purposeTitle: "网站用途",
        purposeText:
          "本网站用于提供一对一专业英语训练、沟通支持、学术表达支持、面试与口语表达准备，以及赴西班牙学习前的沟通准备支持。",
        conditionsTitle: "使用条件",
        conditions: [
          "用户应合法使用本网站，并避免任何有害、滥用或欺诈行为。",
          "网站负责人可在必要时更新网站内容和法律文本。",
          "网站上的服务信息仅供说明之用，不构成法律、移民或受监管中介服务建议。"
        ],
        intellectualPropertyTitle: "知识产权",
        intellectualPropertyText:
          "除非另有说明，网站中的所有内容、设计元素和材料均受知识产权保护。",
        liabilityTitle: "责任限制",
        liabilityText:
          "我们会尽合理努力保持信息准确并维持网站可用，但无法保证持续不中断访问或完全无错误运行。",
        linksTitle: "外部链接",
        linksText:
          "本网站可能包含第三方链接以方便用户使用。相关内容责任由各自网站所有者承担。",
        lawTitle: "适用法律与管辖",
        lawText:
          "本网站适用西班牙法律。[待补充：适用法院 / 管辖条款]",
        contactTitle: "联系方式",
        contactLead: "如需发送法律相关或网站相关通知，请联系",
        updatedTitle: "最后更新"
      }
    }
  }
} as const;

export function resolveLegalLocale(localeParam?: string): LegalUiLocale {
  if (localeParam === "es" || localeParam === "zh" || localeParam === "en" || localeParam === "ca") {
    return localeParam;
  }
  return "en";
}

export function isLegalLocale(value?: string | null): value is LegalUiLocale {
  return value === "en" || value === "es" || value === "zh" || value === "ca";
}
