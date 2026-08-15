export interface CourseItem {
  id: string
  title: string
  provider: string
  category: 'IA' | 'Machine Learning' | 'Desarrollo Web' | 'Lógica' | 'Bases de Datos' | 'Videojuegos'
  language: 'Español' | 'Inglés'
  free: boolean
  certificate: boolean
  level: 'Introductorio' | 'Intermedio'
  description: string
  url: string
}

export interface InternationalProgram {
  id: string
  name: string
  organization: string
  targetAudience: string
  language: 'Español' | 'Inglés' | 'Global'
  status: 'Postulaciones Abiertas' | 'Próximamente' | 'Anual'
  description: string
  benefits: string[]
  url: string
}

export interface TechInfluencer {
  id: string
  name: string
  handle: string
  specialty: string
  category: string
  bio: string
  channels: {
    youtube?: string
    twitch?: string
    github?: string
    twitter?: string
  }
}

export const COURSE_CATEGORIES = [
  'Todas',
  'IA',
  'Machine Learning',
  'Desarrollo Web',
  'Lógica',
  'Bases de Datos',
  'Videojuegos',
] as const

export const COURSES_DATA: CourseItem[] = [
  {
    id: '1',
    title: 'Lógica de Programación y Desarrollo Web',
    provider: 'Oracle Next Education (ONE)',
    category: 'Lógica',
    language: 'Español',
    free: true,
    certificate: true,
    level: 'Introductorio',
    description:
      'Ruta estructurada para dar tus primeros pasos en código, JavaScript y estructura algorítmica desde cero.',
    url: 'https://www.oracle.com/lad/education/oracle-next-education/',
  },
  {
    id: '2',
    title: 'Fundamentos de Inteligencia Artificial',
    provider: 'Guayerd / Google Cloud Skills',
    category: 'IA',
    language: 'Español',
    free: true,
    certificate: true,
    level: 'Introductorio',
    description:
      'Aprende los conceptos clave de redes neuronales, modelos generativos y aplicaciones prácticas de IA.',
    url: 'https://www.cloudskillsboost.google/',
  },
  {
    id: '3',
    title: 'Introducción a Machine Learning',
    provider: 'Kaggle Learn',
    category: 'Machine Learning',
    language: 'Inglés',
    free: true,
    certificate: true,
    level: 'Introductorio',
    description:
      'Micro-cursos interactivos prácticos con Python para entender cómo aprenden las máquinas.',
    url: 'https://www.kaggle.com/learn',
  },
  {
    id: '4',
    title: 'GitHub Foundations & Control de Versiones',
    provider: 'GitHub Skills',
    category: 'Desarrollo Web',
    language: 'Inglés',
    free: true,
    certificate: true,
    level: 'Introductorio',
    description:
      'Domina Git, repositorios, Markdown y flujos de trabajo colaborativos en la nube.',
    url: 'https://skills.github.com/',
  },
  {
    id: '5',
    title: 'Bases de Datos Relacionales y SQL',
    provider: 'FreeCodeCamp Español',
    category: 'Bases de Datos',
    language: 'Español',
    free: true,
    certificate: true,
    level: 'Introductorio',
    description:
      'Aprende a estructurar, consultar y manipular información como un profesional.',
    url: 'https://www.freecodecamp.org/espanol/',
  },
  {
    id: '6',
    title: 'Desarrollo de Videojuegos 2D con Godot / Unity',
    provider: 'GameDev.tv / YouTube Hubs',
    category: 'Videojuegos',
    language: 'Español',
    free: true,
    certificate: false,
    level: 'Introductorio',
    description:
      'Aprende las mecánicas básicas de física, sprites y bucles de juego para crear tu primer videojuego.',
    url: 'https://www.youtube.com/@GameDevTv',
  },
  {
    id: '7',
    title: 'IA Generativa para Todos',
    provider: 'DeepLearning.AI',
    category: 'IA',
    language: 'Inglés',
    free: true,
    certificate: true,
    level: 'Introductorio',
    description:
      'Conceptos de prompts, modelos de lenguaje y ética en IA explicados de forma sencilla y visual.',
    url: 'https://www.deeplearning.ai/courses/',
  },
  {
    id: '8',
    title: 'Machine Learning para Principiantes',
    provider: 'Microsoft Learn',
    category: 'Machine Learning',
    language: 'Español',
    free: true,
    certificate: true,
    level: 'Introductorio',
    description:
      'Trayectoria guiada paso a paso con ejemplos reales y notebooks para experimentar sin miedo.',
    url: 'https://learn.microsoft.com/es-es/training/',
  },
  {
    id: '9',
    title: 'Responsive Web Design',
    provider: 'FreeCodeCamp',
    category: 'Desarrollo Web',
    language: 'Inglés',
    free: true,
    certificate: true,
    level: 'Introductorio',
    description:
      'HTML y CSS modernos: flexbox, grid y proyectos reales para construir tu primer portafolio.',
    url: 'https://www.freecodecamp.org/learn',
  },
  {
    id: '10',
    title: 'Pensamiento Computacional y Algoritmia',
    provider: 'CS50x / edX',
    category: 'Lógica',
    language: 'Inglés',
    free: true,
    certificate: true,
    level: 'Intermedio',
    description:
      'El curso insignia de Harvard para pensar como un programador y resolver problemas complejos.',
    url: 'https://cs50.harvard.edu/x/',
  },
  {
    id: '11',
    title: 'Bases de Datos y Python',
    provider: 'Codecademy',
    category: 'Bases de Datos',
    language: 'Inglés',
    free: true,
    certificate: true,
    level: 'Intermedio',
    description:
      'Conecta Python con SQLite y MySQL: consultas, modelos de datos y buenas prácticas de diseño.',
    url: 'https://www.codecademy.com/learn',
  },
  {
    id: '12',
    title: 'Creación de Videojuegos con Scratch',
    provider: 'Hour of Code / Code.org',
    category: 'Videojuegos',
    language: 'Español',
    free: true,
    certificate: true,
    level: 'Introductorio',
    description:
      'Programa tu primer juego por bloques: personajes, puntuación y niveles interactivos en minutos.',
    url: 'https://code.org/',
  },
  {
    id: '13',
    title: 'Introducción a Claude y Prompt Engineering',
    provider: 'Anthropic',
    category: 'IA',
    language: 'Inglés',
    free: true,
    certificate: true,
    level: 'Introductorio',
    description:
      'Cursos gratuitos y oficiales de Anthropic: aprende a usar Claude, prompt engineering y agentes de IA paso a paso.',
    url: 'https://www.anthropic.com/learn',
  },
  {
    id: '14',
    title: 'Full Stack JavaScript con The Odin Project',
    provider: 'The Odin Project (Open Source)',
    category: 'Desarrollo Web',
    language: 'Inglés',
    free: true,
    certificate: false,
    level: 'Introductorio',
    description:
      'Ruta completa open source: HTML, CSS, JavaScript, Git y proyectos reales para portafolio. De cero a primer empleo.',
    url: 'https://www.theodinproject.com/',
  },
  {
    id: '15',
    title: 'AWS Entrena Perú — Rutas de IA y Cloud',
    provider: 'Amazon Web Services',
    category: 'IA',
    language: 'Español',
    free: true,
    certificate: true,
    level: 'Introductorio',
    description:
      'Centro de aprendizaje oficial de AWS en Perú: rutas guiadas de Cloud e Inteligencia Artificial para empezar desde cero.',
    url: 'https://enperu.awsentrena.com/#/',
  },
]

export const PROGRAMS_DATA: InternationalProgram[] = [
  {
    id: '1',
    name: 'Aspire Leaders Program',
    organization: 'Aspire Institute (Fundado en Harvard)',
    targetAudience: 'Estudiantes de secundaria (15 a 18 años) y primeros ciclos universitarios',
    language: 'Inglés',
    status: 'Postulaciones Abiertas',
    description:
      'Programa internacional de liderazgo, mentoría global y desarrollo de proyectos con impacto social.',
    benefits: ['Acceso a fondos de proyectos', 'Mentoría internacional', 'Red global de estudiantes'],
    url: 'https://www.aspireleaders.org/',
  },
  {
    id: '2',
    name: 'GitHub Campus Experts',
    organization: 'GitHub Education',
    targetAudience: 'Estudiantes de secundaria líderes de comunidades tecnológicas',
    language: 'Global',
    status: 'Anual',
    description:
      'Entrenamiento en liderazgo técnico, organización de eventos y apoyo a comunidades de tecnología.',
    benefits: ['Capacitación directa de GitHub', 'Swag y recursos para eventos', 'Red global de mentores'],
    url: 'https://education.github.com/experts',
  },
  {
    id: '3',
    name: 'Build with AI / Google Developer Student Clubs',
    organization: 'Google Developers',
    targetAudience: 'Estudiantes de secundaria y jóvenes innovadores',
    language: 'Español',
    status: 'Postulaciones Abiertas',
    description:
      'Comunidades y talleres prácticos donde se aprende a crear soluciones con tecnologías de Google.',
    benefits: ['Talleres prácticos con IA', 'Networking con la industria', 'Certificados de participación'],
    url: 'https://developers.google.com/community/gdsc',
  },
  {
    id: '4',
    name: 'Programa de Becas Tecnolochicas Pro',
    organization: 'Fundación Televisa / Microsoft',
    targetAudience: 'Estudiantes de secundaria de 15 a 18 años',
    language: 'Español',
    status: 'Próximamente',
    description:
      'Formación intensiva en desarrollo web, pensamiento computacional y empoderamiento tech con enfoque de género.',
    benefits: ['Formación gratuita certificada', 'Comunidad de mujeres tech', 'Bolsa de trabajo aliada'],
    url: 'https://tecnolochicas.mx/',
  },
  {
    id: '5',
    name: 'APEC Cardno Youth & Education',
    organization: 'AIESEC in Peru',
    targetAudience: 'Estudiantes de secundaria de 16 a 18 años',
    language: 'Global',
    status: 'Postulaciones Abiertas',
    description:
      'Intercambios internacionales y voluntariados juveniles enfocados en liderazgo global y ciudadanía activa.',
    benefits: ['Experiencia internacional', 'Desarrollo de liderazgo', 'Comunidad global AIESEC'],
    url: 'https://aiesec.org/',
  },
]

export const INFLUENCERS_DATA: TechInfluencer[] = [
  {
    id: '1',
    name: 'Miguel Ángel Durán',
    handle: '@midudev',
    specialty: 'Desarrollo Web & JavaScript',
    category: 'Frontend',
    bio: 'Referente hispanohablante en React, Node.js, novedades web y hackathones en vivo.',
    channels: {
      youtube: 'https://youtube.com/@midudev',
      twitch: 'https://twitch.tv/midudev',
      github: 'https://github.com/midudev',
    },
  },
  {
    id: '2',
    name: 'Brais Moure',
    handle: '@mouredev',
    specialty: 'Programación Mobile & Software General',
    category: 'Full-Stack',
    bio: 'Cursos gratuitos desde cero, retos de lógica semanales y guías para ingresar a la industria.',
    channels: {
      youtube: 'https://youtube.com/@mouredev',
      twitch: 'https://twitch.tv/mouredev',
      github: 'https://github.com/mouredev',
    },
  },
  {
    id: '3',
    name: 'Carlos Santana',
    handle: '@DotCSV',
    specialty: 'Inteligencia Artificial & Deep Learning',
    category: 'IA',
    bio: 'El canal de divulgación sobre IA más grande en español. Explicaciones visuales y análisis de vanguardia.',
    channels: {
      youtube: 'https://youtube.com/@DotCSV',
      twitter: 'https://twitter.com/DotCSV',
    },
  },
  {
    id: '4',
    name: 'Carlos Azaustre',
    handle: '@carlosazaustre',
    specialty: 'JavaScript, React & Cloud',
    category: 'Desarrollo Web',
    bio: 'Tutorías claras de JavaScript moderno, ecosistema React y carrera en la industria tech.',
    channels: {
      youtube: 'https://youtube.com/@CarlosAzaustre',
      twitch: 'https://twitch.tv/carlosazaustre',
      github: 'https://github.com/carlosazaustre',
    },
  },
  {
    id: '5',
    name: 'Cristian Castro (Ghost)',
    handle: '@gought',
    specialty: 'Machine Learning & Datos',
    category: 'IA',
    bio: 'Comunidad de ciencia de datos y Machine Learning en español con proyectos aplicados y comunidad activa.',
    channels: {
      youtube: 'https://youtube.com/@gought',
      github: 'https://github.com/gought',
    },
  },
  {
    id: '6',
    name: 'HolaMundo',
    handle: '@holamundo',
    specialty: 'Cultura Tech & Dev General',
    category: 'Full-Stack',
    bio: 'Historias, entrevistas y guías amigables que hacen accesible el mundo de la programación.',
    channels: {
      youtube: 'https://youtube.com/@HolaMundoDev',
      twitter: 'https://twitter.com/HolaMundoDev',
    },
  },
  {
    id: '7',
    name: 'Dalto',
    handle: '@soydalto',
    specialty: 'Desarrollo Web & Python desde cero',
    category: 'Desarrollo Web',
    bio: 'Los cursos más completos de JavaScript, HTML, CSS y Python en español, directo al grano para principiantes.',
    channels: {
      youtube: 'https://youtube.com/@soydalto',
      twitch: 'https://twitch.tv/soydalto',
      github: 'https://github.com/soydalto',
    },
  },
  {
    id: '8',
    name: 'Álvaro Chirou',
    handle: '@ProgramacionATS',
    specialty: 'Web, Java, SQL y lógica',
    category: 'Full-Stack',
    bio: 'Programación ATS: explicaciones claras y paso a paso para dominar lógica, Java, bases de datos y más.',
    channels: {
      youtube: 'https://youtube.com/@ProgramacionATS',
    },
  },
  {
    id: '9',
    name: 'Todo Code',
    handle: '@TodoCode',
    specialty: 'Ciencia de Datos, IA & Career Tech',
    category: 'IA',
    bio: 'Divulgación en español sobre IA, Machine Learning, ciencia de datos y cómo construir tu futuro en tech.',
    channels: {
      youtube: 'https://youtube.com/@TodoCode',
      twitch: 'https://twitch.tv/todocode',
    },
  },
]