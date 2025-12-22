export interface Education {
  id: string;
  institution: {
    es: string;
    en: string;
  };
  degree: {
    es: string;
    en: string;
  };
  field: {
    es: string;
    en: string;
  };
  location: {
    es: string;
    en: string;
  };
  startDate: string;
  endDate?: string;
  current: boolean;
  description: {
    es: string;
    en: string;
  };
  achievements?: {
    es: string[];
    en: string[];
  };
  courses?: {
    es: string[];
    en: string[];
  };
  gpa?: string;
  logo?: string;
}

export const education: Education[] = [
  {
    id: '1',
    institution: {
      es: 'Universidad de La Habana',
      en: 'University of Havana'
    },
    degree: {
      es: 'Licenciatura',
      en: "Bachelor's Degree"
    },
    field: {
      es: 'Ciencia de la Computación',
      en: 'Computer Science'
    },
    location: {
      es: 'La Habana, Cuba',
      en: 'Havana, Cuba'
    },
    startDate: '2021',
    current: true,
    description: {
      es: 'Estudiante de último año en la Facultad de Matemática y Computación (MATCOM). Enfoque en inteligencia artificial, sistemas distribuidos y desarrollo de compiladores.',
      en: 'Final-year student at the Faculty of Mathematics and Computer Science (MATCOM). Focus on artificial intelligence, distributed systems, and compiler development.'
    },
    achievements: {
      es: [
        'Pull Shark x2 - Logro de GitHub',
        'Pair Extraordinaire - Logro de GitHub',
        '375+ contribuciones en GitHub en el último año'
      ],
      en: [
        'Pull Shark x2 - GitHub Achievement',
        'Pair Extraordinaire - GitHub Achievement',
        '375+ GitHub contributions in the last year'
      ]
    },
    courses: {
      es: [
        'Diseño y Análisis de Algoritmos',
        'Sistemas Distribuidos',
        'Machine Learning',
        'Procesamiento de Grandes Volúmenes de Datos',
        'Compiladores',
        'Programación Declarativa',
        'Redes de Computadoras',
        'Inteligencia Artificial',
        'Simulación de Eventos Discretos',
        'Estadística'
      ],
      en: [
        'Design and Analysis of Algorithms',
        'Distributed Systems',
        'Machine Learning',
        'Large Volume Data Processing',
        'Compilers',
        'Declarative Programming',
        'Computer Networks',
        'Artificial Intelligence',
        'Discrete Event Simulation',
        'Statistics'
      ]
    },
    logo: '/images/uh-logo.png'
  }
];

export interface Certification {
  id: string;
  title: {
    es: string;
    en: string;
  };
  issuer: {
    es: string;
    en: string;
  };
  date: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: 'academic' | 'professional' | 'events' | 'courses';
  description?: {
    es: string;
    en: string;
  };
  image?: string;
  skills?: string[];
}

// Placeholder para certificaciones - El usuario agregará las reales
export const certifications: Certification[] = [
  // Aquí el usuario agregará sus certificaciones reales
  // Ejemplo de estructura:
  /*
  {
    id: '1',
    title: {
      es: 'Certificación en Machine Learning',
      en: 'Machine Learning Certification'
    },
    issuer: {
      es: 'Coursera / Stanford University',
      en: 'Coursera / Stanford University'
    },
    date: '2024-01',
    credentialUrl: 'https://...',
    category: 'courses',
    skills: ['Machine Learning', 'Python', 'TensorFlow']
  }
  */
];

export interface Research {
  id: string;
  title: {
    es: string;
    en: string;
  };
  abstract: {
    es: string;
    en: string;
  };
  authors: string[];
  date: string;
  publication?: string;
  url?: string;
  doi?: string;
  keywords: string[];
}

// Placeholder para investigaciones - El usuario agregará las reales
export const research: Research[] = [];

export const getCertificationsByCategory = (category: Certification['category']): Certification[] => {
  return certifications.filter(c => c.category === category);
};
