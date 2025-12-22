export interface Skill {
  name: string;
  icon?: string;
  level: number; // 0-100
  category: 'languages' | 'frameworks' | 'tools' | 'databases' | 'concepts';
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 95, category: 'languages' },
  { name: 'Rust', level: 80, category: 'languages' },
  { name: 'Haskell', level: 75, category: 'languages' },
  { name: 'JavaScript/TypeScript', level: 85, category: 'languages' },
  { name: 'C/C++', level: 70, category: 'languages' },
  { name: 'SQL', level: 80, category: 'languages' },
  { name: 'LaTeX', level: 85, category: 'languages' },

  // Frameworks & Libraries
  { name: 'Scikit-learn', level: 85, category: 'frameworks' },
  { name: 'Pandas', level: 90, category: 'frameworks' },
  { name: 'NumPy', level: 90, category: 'frameworks' },
  { name: 'Matplotlib/Seaborn', level: 85, category: 'frameworks' },
  { name: 'TensorFlow/PyTorch', level: 70, category: 'frameworks' },
  { name: 'React/Next.js', level: 75, category: 'frameworks' },
  { name: 'Hadoop/MapReduce', level: 75, category: 'frameworks' },

  // Tools & Technologies
  { name: 'Git/GitHub', level: 95, category: 'tools' },
  { name: 'Linux', level: 85, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'Jupyter Notebooks', level: 95, category: 'tools' },
  { name: 'VS Code', level: 90, category: 'tools' },

  // Databases
  { name: 'PostgreSQL', level: 80, category: 'databases' },
  { name: 'MySQL', level: 75, category: 'databases' },
  { name: 'MongoDB', level: 65, category: 'databases' },

  // Concepts & Methodologies
  { name: 'Machine Learning', level: 85, category: 'concepts' },
  { name: 'Data Analysis', level: 90, category: 'concepts' },
  { name: 'Distributed Systems', level: 80, category: 'concepts' },
  { name: 'Compiler Design', level: 80, category: 'concepts' },
  { name: 'Algorithms & Data Structures', level: 90, category: 'concepts' },
  { name: 'Functional Programming', level: 80, category: 'concepts' },
  { name: 'Statistics', level: 85, category: 'concepts' },
];

export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(s => s.category === category);
};

export interface Language {
  name: {
    es: string;
    en: string;
  };
  level: {
    es: string;
    en: string;
  };
  percentage: number;
  flag?: string;
}

export const languages: Language[] = [
  {
    name: { es: 'Español', en: 'Spanish' },
    level: { es: 'Nativo', en: 'Native' },
    percentage: 100,
    flag: '🇪🇸'
  },
  {
    name: { es: 'Inglés', en: 'English' },
    level: { es: 'Avanzado', en: 'Advanced' },
    percentage: 85,
    flag: '🇬🇧'
  }
];
