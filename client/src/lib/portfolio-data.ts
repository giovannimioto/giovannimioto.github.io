export const bio = {
  name: "Giovanni Mioto",
  headline: "Junior Data Engineer & Full-Stack Developer",
  description: "I'm a data engineer and full-stack developer passionate about creating scalable systems, optimizing data pipelines, and developing innovative solutions. With experience in data engineering, analytics, and full-stack development, I combine technical expertise with a commitment to accessibility and sustainability."
};

export const contact = {
  email: "giovanni.mioto@gmail.com",
  phone: "+55 41 99257-3477",
  location: "Paraná, Brazil",
  linkedin: "https://linkedin.com/in/giovanni-mioto-a22b91210",
  github: "https://github.com/giovannimioto"
};

export const education = [
  {
    degree: "Bachelor's Degree in Information Systems",
    institution: "Federal Technological University of Paraná (UTFPR)",
    location: "Brazil",
    period: "2023 - Present",
  },
  {
    degree: "Business & Administration - Technical Degree",
    institution: "Federal Institute of Paraná (IFPR)",
    location: "Brazil",
    period: "2020 - 2022",
  },
  {
    degree: "Bachelor's Degree in Electrical Engineering",
    institution: "Federal University of Paraná (UFPR)",
    location: "Brazil",
    period: "2023 - Interrupted in 2023",
  }
];

export const languages = [
  { language: "Portuguese", level: "Native" },
  { language: "English", level: "Intermediate" },
  { language: "Spanish", level: "Basic" },
  { language: "German", level: "Basic" }
];

export const experience = [
  {
    title: "Junior Data Engineer & Data Engineering Intern",
    company: "ACP - Commercial Association of Paraná",
    location: "Brazil",
    period: "August 2024 - Current",
    description: [
      "Developed API integrations with Flask to automate CRM workflows, producing technical documentation and operational manuals to support ongoing system management.",
      "Provided operational support to Commercial and Customer Success teams, validating registration data, plan/invoice details, and calculating campaign metrics.",
      "Assisted in the development and maintenance of data pipelines using Airflow.",
      "Prepared commercial performance management reports and trend analyses using Python, SQL, R, Power BI, Plotly, ggplot2, Prophet, and scikit-learn.",
      "Implemented data transformation models using dbt within a Medallion Architecture (Bronze, Silver, Gold) to optimize data lineage and quality.",
      "Generated optimized datasets for Power BI using SQL procedures and ETL processes.",
      "Containerized and deployed internal services using Docker, ensuring standardization, portability, and ease of environment maintenance.",
      "Implemented CI/CD pipelines with GitHub Actions for automated container deployment."
    ],
    highlights: ["Python", "SQL", "Airflow", "dbt", "Docker", "Flask", "CI/CD"]
  },
  {
    title: "Data Engineering Intern - EEMEPP Project",
    company: "UFPR Electrical Engineering Department (DELT)",
    location: "Brazil",
    period: "May 2023 - September 2023",
    description: [
      "Spearheaded data engineering initiatives for the Energy Efficiency and Monitoring of Public Buildings (EEMEPP) project, under the supervision of Prof. Dr. Eduardo Parente Ribeiro.",
      "Automated the extraction, cleaning, and processing of complex energy consumption data from primary sources (smart meters) and secondary sources (energy invoices) using Python and Pandas.",
      "Engineered comprehensive dashboards and interactive visualizations using Power BI, Plotly, and Matplotlib to monitor critical sustainability indicators.",
      "Delivered data-driven insights and mapped energy consumption profiles to support strategic decision-making by the University's Infrastructure Superintendence (SUINFRA)."
    ],
    highlights: ["Python", "Pandas", "Power BI", "Plotly", "Matplotlib"]
  },
  {
    title: "Full Stack Developer (Scholarship Student)",
    company: "JoinBike - An app for cycling enthusiasts",
    location: "Brazil",
    period: "April 2021 - April 2023",
    description: [
      "Developed as an award-winning institutional project (Pradi) at the Federal Institute of Paraná (IFPR) - Campus Colombo.",
      "Engineered the full-stack architecture for a mobile application dedicated to cyclists, encompassing robust relational databases structured with SQL.",
      "Built a responsive and intuitive front-end utilizing React Native, JavaScript, Axios, and Expo Go, ensuring a seamless user experience.",
      "Designed and deployed a scalable back-end API using ASP.NET Core and C#, with comprehensive technical documentation provided via Swagger.",
      "Orchestrated agile development processes and maintained rigorous code versioning using Git and GitHub.",
      "Acted as a technical advisor, actively mentoring incoming students on software engineering concepts, system architecture, and best practices."
    ],
    highlights: ["React Native", "SQL", "ASP.NET Core", "C#", "Git"],
    awards: [
      "1st Place at the 19th National Science and Technology Week - Brasília (DF).",
      "1st project in the history of Colombo (PR) selected for presentation at Harvard and MIT (USA).",
      "Received Sustainability Highlight at 'The Earth Prize' global award (Switzerland).",
      "Awarded 2nd Place at the Urban Mobility Park 2023 - São Paulo.",
      "Participated in the Iguassu Valley Summit - Foz do Iguaçu."
    ]
  }
];

export const extracurricular = [
  {
    title: "MusicArt - Tactile Music Project",
    role: "Volunteer",
    period: "April 2026 - Present",
    description: "Developing assistive technologies to promote inclusion and support musical education for beginner students and visually impaired individuals. Implemented an Optical Music Recognition (OMR) system combining pure Digital Image Processing (DIP) to identify note pitches on the staff and a pre-trained neural network to classify note durations. Fine-tuned a computer vision model utilizing a Roboflow dataset with 2,000+ images to accurately detect musical figures."
  },
  {
    title: "Hi Tech Consulting (Junior Enterprise)",
    role: "Project Advisor",
    period: "May 2025 - Sep. 2025",
    description: "Served as Tech Lead for mobile application development. Conducted technical feasibility analyses for new projects."
  },
  {
    title: "Solidarity Computer",
    role: "Volunteer",
    period: "April 2021 - Dec. 2022",
    description: "Conducted market research, managed budgets, and controlled inventory using Excel. Assembled low-cost computer kits (Raspberry Pi and Orange Pi) for students facing study difficulties during the pandemic. Created educational materials on Free Software and Linux to promote digital inclusion."
  },
  {
    title: "Perception of Crime in Brazil and History of the Present",
    role: "Scientific Initiation Student",
    period: "March 2020 - Dec. 2020",
    description: "Conducted research on criminology in Brazilian higher education institutions. Collected, tabulated, and organized data from respondents using Google Forms and Microsoft Office (Excel and Word) to draw conclusions."
  }
];

export const projects = [
  {
    slug: "joinbike",
    title: "JoinBike",
    category: "Full Stack App",
    shortDescription: "An award-winning mobile application dedicated to cyclists developed at IFPR.",
    technologies: ["React Native", "C#", "ASP.NET Core", "SQL"]
  },
  {
    slug: "musicart",
    title: "MusicArt",
    category: "Computer Vision",
    shortDescription: "An Optical Music Recognition (OMR) system to support musical education.",
    technologies: ["Python", "Digital Image Processing", "Roboflow"]
  }
];

export const skills = [
  {
    category: "Data Engineering & Analytics",
    items: ["Python", "SQL", "Airflow", "dbt", "Docker", "Power BI", "Pandas", "Scikit-learn", "DuckDB"]
  },
  {
    category: "Software Development",
    items: ["React Native", "JavaScript", "C#", "ASP.NET Core", "Flask", "Git", "GitHub Actions"]
  }
];

export const interests = [
  "Advanced Data Engineering and Architecture",
  "DevOps and Infrastructure",
  "Computer Vision",
  "Music Pedagogy"
];