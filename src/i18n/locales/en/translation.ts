import type { OfferStatus } from '@/content.config.ts';

export const en = {
  title: 'Website',
  description: 'Description',
  nav: {
    home: 'Home',
    about: 'About us',
    contact: 'Contact',
    realizations: 'Realizations',
    offer: 'Offer',
    blog: 'Blog',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    breadcrumbLabel: 'Breadcrumb',
  },
  theme: {
    label: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },
  blog: {
    title: 'Blog',
    subtitle:
      'Insights, guides, and news from the world of real estate investment',
    readMore: 'Read more',
    readingTime: 'min read',
    backToList: 'Back to blog',
    emptyState: 'No articles yet. Check back soon.',
  },
  home: {
    hero: {
      eyebrow: 'MM Invest / Developer',
      title: 'We build places worth living in',
      subtitle:
        "For over a decade we've delivered residential developments that combine thoughtful locations, high energy efficiency, and solid construction.",
      ctaPrimary: 'View offer',
      ctaSecondary: 'Get in touch',
    },
    stats: {
      years: 'years of experience',
      projects: 'completed projects',
      sqm: 'm² built',
      clients: 'satisfied clients',
    },
    about: {
      eyebrow: 'About us',
      title: 'Quality you can see in every detail',
      text: "MM Invest is a team of architects, engineers, and specialists who treat every project as a place they'd want to live in themselves. We focus on thoughtful locations, high energy standards, and transparent collaboration at every stage.",
      cta: 'Learn our story',
    },
    usp: {
      title: 'Why invest with us',
      items: [
        {
          title: 'Proven locations',
          text: 'Every project starts with a thorough analysis of transport links and surroundings.',
        },
        {
          title: 'Energy efficiency',
          text: 'Heat pumps and solar panels as standard, not a premium option.',
        },
        {
          title: 'Flexible layouts',
          text: 'Apartments designed to easily adapt to changing needs.',
        },
        {
          title: 'Transparency',
          text: 'Clear terms of collaboration and constant contact at every stage.',
        },
      ],
    },
    offer: {
      title: 'Our offer',
      subtitle: 'Current projects and developments',
      cta: 'View all',
    },
    blog: {
      title: 'From the world of investing',
      subtitle: 'Latest posts from our blog',
      cta: 'All articles',
    },
    cta: {
      title: 'Have questions about investing?',
      subtitle: "Get in touch — we'll respond within 24 hours.",
      button: 'Contact us',
    },
  },
  contactPage: {
    eyebrow: 'Contact',
    title: "Let's talk about your investment",
    subtitle:
      'Fill out the form and our team will get back to you within 24 hours.',
    infoTitle: 'Contact details',
    form: {
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone number (optional)',
      message: 'Message',
      consent:
        'I accept the privacy policy and consent to the processing of my personal data in order to respond to my inquiry.',
      submit: 'Send message',
      submitting: 'Sending...',
      success: "Thanks for your message! We'll be in touch soon.",
    },
    errors: {
      nameRequired: 'Please enter your full name',
      emailRequired: 'Please enter your email address',
      emailInvalid: 'Please enter a valid email address',
      messageRequired: 'Message cannot be empty',
      messageTooShort: 'Message should be at least 10 characters',
      consentRequired: 'Consent is required',
      phoneInvalid: 'Please enter a valid phone number (9 digits)',
    },
    placeholders: {
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '123 456 789',
      message: 'Describe in a few sentences what your inquiry is about...',
    },
  },
  aboutPage: {
    eyebrow: 'About us',
    title: 'We build with people in mind, not just square meters',
    subtitle:
      "MM Invest is a team that treats every project as a place they'd want to live in themselves.",
    story: {
      eyebrow: 'Our story',
      title: 'From a small construction team to a trusted developer',
      paragraph1:
        "We started as a small team delivering individual projects in the region. Today, after more than a decade of experience, we're a team of architects, engineers, and specialists who've together completed dozens of residential developments.",
      paragraph2:
        "What hasn't changed since day one is our approach — we treat every project individually, listen to the needs of future residents, and prioritize quality that stands the test of time.",
    },
    values: {
      title: 'What guides us',
      items: [
        {
          title: 'Solidity',
          text: 'Materials and workmanship that never compromise on durability.',
        },
        {
          title: 'Transparency',
          text: 'Clear terms of collaboration and constant contact at every stage.',
        },
        {
          title: 'Environmental responsibility',
          text: 'Energy efficiency and thoughtful materials as standard, not an extra.',
        },
        {
          title: 'Client closeness',
          text: 'Every question deserves a real answer, not an automated one.',
        },
      ],
    },
    timeline: {
      title: 'Our journey',
      items: [
        {
          year: '2013',
          title: 'Founded',
          text: 'First projects in the region, a small team, big ambitions.',
        },
        {
          year: '2017',
          title: 'First major project',
          text: 'Completion of our first multi-family residential complex.',
        },
        {
          year: '2021',
          title: 'Energy standard',
          text: 'Heat pumps and solar panels became standard in all new projects.',
        },
        {
          year: '2026',
          title: 'Today',
          text: 'Over 48 completed developments and a team of 30+ specialists.',
        },
      ],
    },
    cta: {
      title: 'Want to get to know us better?',
      subtitle: "Get in touch — we'd love to tell you more about our projects.",
      button: 'Get in touch',
    },
  },
  offerPage: {
    eyebrow: 'Offer',
    title: 'Our developments',
    subtitle: "Browse MM Invest's current and upcoming projects.",
    emptyState: 'No offers available right now.',
    status: {
      sale: 'For sale',
      planned: 'Coming soon',
      sold: 'Sold out',
    } satisfies Record<OfferStatus, string>,
    card: {
      apartments: 'apartments',
      area: 'm²',
      priceFrom: 'from',
      viewDetails: 'View details',
    },
    detail: {
      backToList: 'Back to offer',
      overview: 'Overview',
      location: 'Location',
      apartmentsCount: 'Number of apartments',
      areaRange: 'Area',
      completionDate: 'Completion date',
      priceFrom: 'Price from',
      gallery: 'Gallery',
      ctaTitle: 'Interested in this development?',
      ctaButton: 'Ask for details',
    },
  },
  footer: {
    openHours: {
      title: 'Open hours:',
      monFri: 'Mon-Fri: 7:00 - 17:00',
      saturday: 'Sat: 7:00 - 14:00',
      sunday: 'Sun: nieczynne',
    },
    company: {
      title: 'Company',
      dataProjects: 'Data projects',
      facadeProjects: 'Facade projects',
      transport: 'Transport',
      news: 'News',
      blog: 'Blog',
      communityInitiatives: 'Community initiatives',
      privacyPolicy: 'Privacy policy',
      branches: 'Branches',
      contact: 'Contact',
    },
    materials: {
      title: 'Building materials',
      roofing: 'Roofing',
      insulationFacades: 'Insulation and facades',
      pavingFencing: 'Paving stones and fencing',
      finishingMaterials: 'Finishing materials',
      constructionMaterials: 'Construction materials',
      bathrooms: 'Bathrooms',
      doorsFlooring: 'Doors and flooring',
      balconiesTerraces: 'Balconies and terraces',
      garage: 'Garage',
      garden: 'Garden',
    },
    address: {
      title: 'Location and contact',
      name: 'M&M Invest',
      city: 'Stok',
      buildingNumber: '8',
      postCity: 'Ulan Majorat',
      zipCode: '21-307',
      nip: 'NIP: PL 952 22 80 612',
      phoneNumberTitle: 'phone:',
      phoneNumberPrimary: '536 804 804',
      phoneNumberSecondary: '514 496 768',
      emailTitle: 'email:',
      email: 'biuro@mm-invest.biz',
    },
  },
} as const;
