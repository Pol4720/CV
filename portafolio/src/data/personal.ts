export interface PersonalInfo {
  name: string;
  title: {
    es: string;
    en: string;
  };
  email: string;
  location: {
    es: string;
    en: string;
  };
  social: {
    github: string;
    linkedin?: string;
    telegram: string;
    twitter?: string;
  };
  avatar: string;
  resumeEs: string;
  resumeEn: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Richard Matos',
  title: {
    es: 'Estudiante de Ciencia de la Computación',
    en: 'Computer Science Student'
  },
  email: '', // El usuario agregará su email
  location: {
    es: 'La Habana, Cuba',
    en: 'Havana, Cuba'
  },
  social: {
    github: 'https://github.com/Pol4720',
    telegram: 'https://t.me/Pol4720',
    linkedin: '', // El usuario agregará su LinkedIn
  },
  avatar: '/images/avatar.jpg', // El usuario agregará su foto
  resumeEs: '/documents/cv-es.pdf',
  resumeEn: '/documents/cv-en.pdf'
};
