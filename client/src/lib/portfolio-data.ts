// Giovanni Mioto — Portfolio Data
// All content centralized here for easy maintenance

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  highlights?: string[];
  awards?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  github?: string;
  awards?: string[];
  category: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const bio = {
  name: "Giovanni Mioto",
  headline: "Data Engineer & Full-Stack Developer",
  tagline: "Building scalable systems and sharing technical knowledge",
  description:
    "I'm a data engineer and full-stack developer passionate about creating scalable systems, optimizing data pipelines, and developing innovative solutions. With experience in data engineering, analytics, and full-stack development, I combine technical expertise with a commitment to accessibility and sustainability.",
};

export const contact = {
  email: "giovanni.mioto@gmail.com",
  phone: "+55 41 99257-3477",
  location: "Paraná, Brazil",
  linkedin: "https://www.linkedin.com/in/giovanni-mioto-a22b91210/",
  github: "https://github.com/giomioto",
};

export const education: Education[] = [
  {
    degree: "Bachelor's Degree in Information Systems",
    institution: "Federal Technological University of Paraná (UTFPR)",
    location: "Brazil",
    period: "2023 — Present",
  },
  {
    degree: "Business & Administration — Technical Degree",
    institution: "Federal Institute of Paraná (IFPR)",
    location: "Brazil",
    period: "2020 — 2022",
  },
  {
    degree: "Bachelor's Degree in Electrical Engineering",
    institution: "Federal University of Paraná (UFPR)",
    location: "Brazil",
    period: "2023 — Interrupted",
  },
];

export const interests = [
  "Data Engineering & Pipelines",
  "Full-Stack Development",
  "Computer Vision & AI",
  "Accessibility Technology",
  "Sustainability & Smart Cities",
];

export const languages = [
  { language: "Portuguese", level: "Native" },
  { language: "English", level: "Intermediate" },
  { language: "Spanish", level: "Basic" },
  { language: "German", level: "Basic" },
];

export const experience: Experience[] = [
  {
    title: "Junior Data Engineer",
    company: "ACP — Commercial Association of Paraná",
    location: "Brazil",
    period: "February 2026 — Present",
    description: [
      "Developed API integrations with Flask to automate CRM workflows, producing technical documentation and operational manuals.",
      "Provided operational support to Commercial and Customer Success teams, validating registration data and calculating campaign metrics.",
      "Assisted in development and maintenance of data pipelines using Airflow.",
      "Prepared commercial performance management reports using Python, SQL, R, Power BI, Plotly, and scikit-learn.",
      "Implemented data transformation models using dbt within a Medallion Architecture (Bronze, Silver, Gold).",
      "Generated optimized datasets for Power BI using SQL procedures and ETL processes.",
      "Containerized and deployed internal services using Docker with CI/CD pipelines via GitHub Actions.",
    ],
    highlights: ["Flask API integrations", "Airflow pipelines", "dbt data modeling", "Docker & CI/CD"],
  },
  {
    title: "Data Engineering and Analysis Intern",
    company: "ACP — Commercial Association of Paraná",
    location: "Brazil",
    period: "August 2024 — February 2026",
    description: [
      "Automated extraction, cleaning, and processing of complex data from multiple sources.",
      "Created dashboards and visualizations for performance monitoring.",
      "Supported data-driven decision making across teams.",
    ],
    highlights: ["Data pipelines", "Analytics", "Dashboards"],
  },
  {
    title: "Data Engineering Intern — EEMEPP Project",
    company: "UFPR Electrical Engineering Department (DELT)",
    location: "Brazil",
    period: "May 2023 — September 2023",
    description: [
      "Spearheaded data engineering initiatives for the Energy Efficiency and Monitoring of Public Buildings project.",
      "Automated extraction, cleaning, and processing of complex energy consumption data from smart meters and energy invoices.",
      "Engineered comprehensive dashboards using Power BI, Plotly, and Matplotlib.",
      "Delivered data-driven insights to support strategic decision-making by the University's Infrastructure Superintendence.",
    ],
    highlights: ["Energy data analysis", "Power BI dashboards", "Sustainability"],
  },
  {
    title: "Full Stack Developer (Scholarship Student)",
    company: "JoinBike — An app for cycling enthusiasts",
    location: "Brazil",
    period: "April 2021 — April 2023",
    description: [
      "Developed award-winning institutional project (Pradi) at IFPR — Campus Colombo.",
      "Engineered full-stack architecture for a mobile application with robust relational databases.",
      "Built responsive front-end utilizing React Native, JavaScript, Axios, and Expo Go.",
      "Designed and deployed scalable back-end API using ASP.NET Core and C#.",
      "Orchestrated agile development processes and maintained rigorous code versioning.",
      "Mentored incoming students on software engineering concepts and best practices.",
    ],
    highlights: ["React Native", "ASP.NET Core", "Full-stack development", "Team leadership"],
    awards: [
      "1st Place at the 19th National Science and Technology Week — Brasília",
      "1st project from Colombo selected for presentation at Harvard and MIT",
      "Sustainability Highlight at The Earth Prize global award",
      "2nd Place at Urban Mobility Park 2023 — São Paulo",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "joinbike",
    title: "JoinBike Mobile App",
    shortDescription:
      "Award-winning full-stack mobile application for cycling enthusiasts with real-time tracking and community features.",
    fullDescription:
      "JoinBike is a full-stack mobile application developed as an institutional scholarship project at IFPR — Campus Colombo. The app connects cycling enthusiasts, offering real-time route tracking, community engagement features, and a robust backend API. The project won multiple national and international awards, including a presentation opportunity at Harvard and MIT, and was highlighted for its sustainability impact at The Earth Prize global award.",
    technologies: ["React Native", "ASP.NET Core", "C#", "SQL", "Expo", "Axios", "JavaScript"],
    highlights: [
      "Full-stack mobile application architecture",
      "Real-time data synchronization",
      "Community engagement features",
      "Comprehensive API documentation with Swagger",
      "Agile development with rigorous code versioning",
      "Mentored incoming students on software engineering",
    ],
    awards: [
      "1st Place — 19th National Science and Technology Week, Brasília",
      "1st project from Colombo selected for presentation at Harvard and MIT",
      "Sustainability Highlight — The Earth Prize global award",
      "2nd Place — Urban Mobility Park 2023, São Paulo",
    ],
    category: "Full-Stack",
  },
  {
    slug: "energy-dashboard",
    title: "Energy Efficiency Monitoring Dashboard",
    shortDescription:
      "Data-driven analytics platform for monitoring and optimizing energy consumption across public buildings.",
    fullDescription:
      "Developed as part of the EEMEPP (Energy Efficiency and Monitoring of Public Buildings) project at UFPR's Electrical Engineering Department. The platform automates extraction and processing of energy consumption data from smart meters and invoices, generating interactive dashboards and strategic insights for the University's Infrastructure Superintendence. The system tracks CO2 emissions and identifies optimization opportunities across the campus.",
    technologies: ["Python", "Power BI", "Plotly", "SQL", "Pandas", "Matplotlib"],
    highlights: [
      "Automated data extraction from smart meters and energy invoices",
      "Interactive energy consumption visualizations with Plotly",
      "CO2 emissions tracking and reporting",
      "Strategic insights for infrastructure optimization",
      "Power BI dashboards for executive decision-making",
    ],
    category: "Data Engineering",
  },
  {
    slug: "musicart",
    title: "MusicArt — Optical Music Recognition",
    shortDescription:
      "Assistive technology combining digital image processing and neural networks for accessible music education.",
    fullDescription:
      "MusicArt is an assistive technology project aimed at promoting inclusion and supporting musical education for beginner students and visually impaired individuals. The system implements an Optical Music Recognition (OMR) pipeline that combines pure Digital Image Processing to identify note pitches on the staff with a pre-trained neural network to classify note durations. A computer vision model was fine-tuned over 500+ epochs using a Roboflow dataset with 2,000+ images, enabling automated processing of beginner-level sheet music and playback via Arduino and ESP32 microcontrollers.",
    technologies: ["Python", "Computer Vision", "Neural Networks", "Arduino", "ESP32", "Roboflow", "TensorFlow"],
    highlights: [
      "OMR system combining DIP and neural networks",
      "Fine-tuned CV model trained over 500+ epochs",
      "Roboflow dataset with 2,000+ annotated images",
      "Processes Suzuki Method Book 1 sheet music",
      "Automated playback via Arduino and ESP32 microcontrollers",
      "Promotes accessibility for visually impaired musicians",
    ],
    category: "AI / Computer Vision",
  },
];

export const skills: Skill[] = [
  {
    category: "Data Engineering",
    items: ["Python", "SQL", "Airflow", "dbt", "ETL/ELT", "Data Pipelines", "Medallion Architecture"],
  },
  {
    category: "Data Science & Analytics",
    items: ["Pandas", "NumPy", "Scikit-learn", "Prophet", "Power BI", "Plotly", "Matplotlib", "R"],
  },
  {
    category: "Backend Development",
    items: ["ASP.NET Core", "C#", "Flask", "REST APIs", "Swagger", "Docker"],
  },
  {
    category: "Frontend Development",
    items: ["React", "React Native", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "GitHub Actions", "CI/CD", "Git", "Linux", "Bash", "Excel"],
  },
  {
    category: "AI & Machine Learning",
    items: ["Computer Vision", "Neural Networks", "Image Processing", "Roboflow", "TensorFlow"],
  },
];

export const extracurricular = [
  {
    title: "MusicArt — Tactile Music Project",
    role: "Volunteer",
    period: "April 2026 — Present",
    description:
      "Developing assistive technologies to promote inclusion and support musical education for beginner students and visually impaired individuals.",
  },
  {
    title: "Hï Tech Consulting (Junior Enterprise)",
    role: "Project Advisor",
    period: "May 2025 — Sep. 2025",
    description:
      "Served as Tech Lead for mobile application development and conducted technical feasibility analyses for new projects.",
  },
  {
    title: "Solidarity Computer",
    role: "Volunteer",
    period: "April 2021 — Dec. 2022",
    description:
      "Assembled low-cost computer kits (Raspberry Pi and Orange Pi) for students facing study difficulties during the pandemic. Created educational materials on Free Software and Linux.",
  },
  {
    title: "Perception of Crime in Brazil — Scientific Initiation",
    role: "Research Student",
    period: "March 2020 — Dec. 2020",
    description:
      "Conducted research on criminology in Brazilian higher education institutions. Collected and analyzed data using Google Forms and Microsoft Office.",
  },
];
