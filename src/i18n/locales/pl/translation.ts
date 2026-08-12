import type { OfferStatus } from '@/content.config.ts';

export const pl = {
  title: 'Strona internetowa',
  description: 'Description',
  nav: {
    home: 'Strona główna',
    about: 'O nas',
    contact: 'Kontakt',
    realizations: 'Realizacje',
    offer: 'Oferta',
    blog: 'Blog',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    breadcrumbLabel: 'Ścieżka nawigacji',
  },
  theme: {
    label: 'Motyw',
    light: 'Jasny',
    dark: 'Ciemny',
    system: 'Systemowy',
  },
  blog: {
    title: 'Blog',
    subtitle: 'Analizy, poradniki i aktualności ze świata inwestycji',
    readMore: 'Czytaj więcej',
    readingTime: 'min czytania',
    backToList: 'Wróć do bloga',
    emptyState: 'Brak artykułów w tej chwili. Zajrzyj tu wkrótce.',
  },
  home: {
    hero: {
      eyebrow: 'MM Invest / Deweloper',
      title: 'Budujemy miejsca, w których chce się mieszkać',
      subtitle:
        'Od ponad dekady realizujemy inwestycje mieszkaniowe łączące przemyślaną lokalizację, wysoką efektywność energetyczną i solidne wykonanie.',
      ctaPrimary: 'Zobacz ofertę',
      ctaSecondary: 'Skontaktuj się',
    },
    stats: {
      years: 'lat doświadczenia',
      projects: 'zrealizowanych inwestycji',
      sqm: 'm² wybudowanej powierzchni',
      clients: 'zadowolonych klientów',
    },
    about: {
      eyebrow: 'O nas',
      title: 'Solidność, którą widać w każdym detalu',
      text: 'MM Invest to zespół architektów, inżynierów i specjalistów, którzy każdą inwestycję traktują jak miejsce, w którym sami chcieliby zamieszkać. Stawiamy na przemyślane lokalizacje, wysokie standardy energetyczne i transparentną współpracę na każdym etapie.',
      cta: 'Poznaj naszą historię',
    },
    usp: {
      title: 'Dlaczego warto inwestować z nami',
      items: [
        {
          title: 'Sprawdzone lokalizacje',
          text: 'Każdą inwestycję poprzedza szczegółowa analiza dostępności komunikacyjnej i otoczenia.',
        },
        {
          title: 'Efektywność energetyczna',
          text: 'Pompy ciepła i fotowoltaika jako standard, nie opcja premium.',
        },
        {
          title: 'Elastyczne układy',
          text: 'Mieszkania projektowane tak, by łatwo dopasować je do zmieniających się potrzeb.',
        },
        {
          title: 'Transparentność',
          text: 'Jasne zasady współpracy i stały kontakt na każdym etapie realizacji.',
        },
      ],
    },
    offer: {
      title: 'Nasza oferta',
      subtitle: 'Aktualne inwestycje i realizacje',
      cta: 'Zobacz wszystkie',
    },
    blog: {
      title: 'Ze świata inwestycji',
      subtitle: 'Najnowsze wpisy na naszym blogu',
      cta: 'Wszystkie artykuły',
    },
    cta: {
      title: 'Masz pytania dotyczące inwestycji?',
      subtitle: 'Skontaktuj się z nami — odpowiemy w ciągu 24 godzin.',
      button: 'Napisz do nas',
    },
  },
  contactPage: {
    eyebrow: 'Kontakt',
    title: 'Porozmawiajmy o Twojej inwestycji',
    subtitle:
      'Wypełnij formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin.',
    infoTitle: 'Dane kontaktowe',
    form: {
      name: 'Imię i nazwisko',
      email: 'Adres e-mail',
      phone: 'Numer telefonu (opcjonalnie)',
      message: 'Wiadomość',
      consent:
        'Akceptuję politykę prywatności i wyrażam zgodę na przetwarzanie danych osobowych w celu odpowiedzi na zapytanie.',
      submit: 'Wyślij wiadomość',
      submitting: 'Wysyłanie...',
      success: 'Dziękujemy za wiadomość! Wkrótce się z Tobą skontaktujemy.',
    },
    errors: {
      nameRequired: 'Podaj imię i nazwisko',
      emailRequired: 'Podaj adres e-mail',
      emailInvalid: 'Podaj poprawny adres e-mail',
      messageRequired: 'Wiadomość nie może być pusta',
      messageTooShort: 'Wiadomość powinna mieć co najmniej 10 znaków',
      consentRequired: 'Zgoda jest wymagana',
      phoneInvalid: 'Podaj poprawny numer telefonu (9 cyfr)',
    },
    placeholders: {
      name: 'Jan Kowalski',
      email: 'jan.kowalski@example.com',
      phone: '123 456 789',
      message: 'Opisz w kilku zdaniach czego dotyczy Twoje zapytanie...',
    },
  },
  aboutPage: {
    eyebrow: 'O nas',
    title: 'Budujemy z myślą o ludziach, nie tylko o metrach',
    subtitle:
      'MM Invest to zespół, który każdą inwestycję traktuje jak miejsce, w którym sam chciałby zamieszkać.',
    story: {
      eyebrow: 'Nasza historia',
      title: 'Od małej firmy budowlanej do zaufanego dewelopera',
      paragraph1:
        'Zaczynaliśmy jako niewielki zespół realizujący pojedyncze projekty w regionie. Dziś, po ponad dekadzie doświadczeń, jesteśmy zespołem architektów, inżynierów i specjalistów, którzy razem zrealizowali dziesiątki inwestycji mieszkaniowych.',
      paragraph2:
        'To, co się nie zmieniło od pierwszego dnia, to podejście — każdy projekt traktujemy indywidualnie, słuchamy potrzeb przyszłych mieszkańców i stawiamy na jakość, która wytrzyma próbę czasu.',
    },
    values: {
      title: 'Czym się kierujemy',
      items: [
        {
          title: 'Solidność',
          text: 'Materiały i wykonawstwo, które nie wymagają kompromisów kosztem trwałości.',
        },
        {
          title: 'Transparentność',
          text: 'Jasne zasady współpracy i stały kontakt na każdym etapie realizacji.',
        },
        {
          title: 'Odpowiedzialność środowiskowa',
          text: 'Efektywność energetyczna i przemyślane materiały jako standard, nie dodatek.',
        },
        {
          title: 'Bliskość z klientem',
          text: 'Każde pytanie zasługuje na konkretną odpowiedź, nie automatyczną.',
        },
      ],
    },
    timeline: {
      title: 'Nasza droga',
      items: [
        {
          year: '2013',
          title: 'Początek działalności',
          text: 'Pierwsze realizacje w regionie, mały zespół, duże ambicje.',
        },
        {
          year: '2017',
          title: 'Pierwsza duża inwestycja',
          text: 'Realizacja pierwszego wielorodzinnego kompleksu mieszkaniowego.',
        },
        {
          year: '2021',
          title: 'Standard energetyczny',
          text: 'Pompy ciepła i fotowoltaika jako standard we wszystkich nowych projektach.',
        },
        {
          year: '2026',
          title: 'Dziś',
          text: 'Ponad 48 zrealizowanych inwestycji i zespół ponad 30 specjalistów.',
        },
      ],
    },
    cta: {
      title: 'Chcesz poznać nas bliżej?',
      subtitle:
        'Zapraszamy do kontaktu — chętnie opowiemy więcej o naszych realizacjach.',
      button: 'Skontaktuj się',
    },
  },
  offerPage: {
    eyebrow: 'Oferta',
    title: 'Nasze inwestycje',
    subtitle: 'Sprawdź aktualne i planowane realizacje MM Invest.',
    emptyState: 'Brak dostępnych ofert w tej chwili.',
    status: {
      sale: 'W sprzedaży',
      planned: 'Wkrótce',
      sold: 'Sprzedane',
    } satisfies Record<OfferStatus, string>,
    card: {
      apartments: 'mieszkań',
      area: 'm²',
      priceFrom: 'od',
      viewDetails: 'Zobacz szczegóły',
    },
    detail: {
      backToList: 'Wróć do oferty',
      overview: 'Podsumowanie',
      location: 'Lokalizacja',
      apartmentsCount: 'Liczba mieszkań',
      areaRange: 'Metraż',
      completionDate: 'Termin realizacji',
      priceFrom: 'Cena od',
      gallery: 'Galeria',
      ctaTitle: 'Zainteresowała Cię ta inwestycja?',
      ctaButton: 'Zapytaj o szczegóły',
    },
  },
  footer: {
    openHours: {
      title: 'Godziny otwarcia:',
      monFri: 'Pn-Pt: 7:00 - 17:00',
      saturday: 'Sb: 7:00 - 14:00',
      sunday: 'Nd: nieczynne',
    },
    company: {
      title: 'Firma',
      dataProjects: 'Realizacje Danych',
      facadeProjects: 'Realizacje Elewacje',
      transport: 'Transport',
      news: 'Aktualności',
      blog: 'Blog',
      communityInitiatives: 'Działania społeczne',
      privacyPolicy: 'Polityka prywatności',
      branches: 'Oddziały',
      contact: 'Kontakt',
    },
    materials: {
      title: 'Materiały budowlane',
      roofing: 'Dachy',
      insulationFacades: 'Ocieplenia i elewacje',
      pavingFencing: 'Kostka brukowa i ogrodzenia',
      finishingMaterials: 'Materiały wykończeniowe',
      constructionMaterials: 'Materiały konstrukcyjne',
      bathrooms: 'Łazienki',
      doorsFlooring: 'Drzwi i podłogi',
      balconiesTerraces: 'Balkony i tarasy',
      garage: 'Garaż',
      garden: 'Ogród',
    },
    address: {
      title: 'Lokalizacja i kontakt',
      name: 'M&M Invest',
      city: 'Stok',
      buildingNumber: '8',
      postCity: 'Ulan Majorat',
      zipCode: '21-307',
      nip: 'NIP: PL 952 22 80 612',
      phoneNumberTitle: 'tel.:',
      phoneNumberPrimary: '536 804 804',
      phoneNumberSecondary: '514 496 768',
      emailTitle: 'email:',
      email: 'biuro@mm-invest.biz',
    },
  },
} as const;
