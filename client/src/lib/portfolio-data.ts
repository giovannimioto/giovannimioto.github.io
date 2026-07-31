export const bio = {
  name: "Giovanni Mioto",
  headline: "Junior Data Engineer | B.Sc Information Systems",
  description: "I'm a technology student passionate about creating scalable systems, optimizing data pipelines, and developing innovative solutions. With experience in data engineering, analytics, and full-stack development, I combine technical expertise with a commitment to accessibility and sustainability."
};

export const aboutMe = [
  "I was born in Curitiba, Paraná, Brazil, in 2004. My journey in technology began during my technical degree in Business Administration at Instituto Federal do Paraná (IFPR). This experience introduced me to software development and leadership, empowering me to create an award-winning application and actively participate in digital inclusion and social impact initiatives.",
  "I am currently pursuing my Bachelor’s degree in Information Systems at the Federal Technological University of Paraná (UTFPR). Throughout my undergraduate studies, I have engaged in academic research and data-focused internships, which allowed me to deeply explore the data landscape and develop my core skills as a data engineer.",
  "Today, I work as a Junior Data Engineer at the Commercial Association of Paraná (ACP). In this role, I continue to explore my passion for technology by designing robust data architectures and building real-time pipelines to support strategic business decisions."
];

export const beyondWork = [
  "Away from lines of code and data pipelines, music is undeniably my greatest passion. I deeply dedicate myself to studying the acoustic guitar, electric guitar, and bass. I also sing, play a bit of piano, and I am currently expanding my horizons by exploring the complex world of classical music through the violin. I channel this musical energy into my rock band, where we play intense genres ranging from hard rock and grunge to heavy metal.",
  "When I want to relax and immerse myself in well-crafted narratives, I turn to video games, I have a special preference for completing entire sagas and campaign-focused franchises. Additionally, physical activity is a non-negotiable pillar of my routine. I exercise daily to keep my mind and body in balance, alternating between gym sessions, calisthenics, soccer matches, and tennis."
];

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
    logo: "/acp_time.jpg",
    location: "Brazil",
    period: "August 2024 - Current",
    description: [
      "In my role at the Commercial Association of Paraná, my responsibilities evolved rapidly from providing operational support to architecting robust data engineering solutions. Initially, I focused on automating CRM workflows via Flask APIs and generating commercial performance reports using Python, SQL, R, and machine learning tools like Prophet and scikit-learn.",
      "As I transitioned into data engineering, I took charge of structuring and maintaining a Medallion Architecture (Bronze, Silver, Gold) utilizing dbt to deeply optimize data lineage and quality. I now orchestrate hybrid data pipelines with Airflow and generate optimized datasets tailored for Power BI through complex SQL procedures and ETL processes.",
      "To ensure our infrastructure remains scalable and maintainable, I have also containerized internal services using Docker and implemented automated CI/CD pipelines via GitHub Actions, establishing a standardized and highly portable development environment."
    ],
  },
  {
    title: "Data Engineering Intern - EEMEPP Project",
    company: "UFPR Electrical Engineering Department (DELT)",
    logo: "/eemepp_itaipu.jpg",
    location: "Brazil",
    period: "May 2023 - September 2023",
    description: [
      "Under the supervision of Prof. Dr. Eduardo Parente Ribeiro, I spearheaded data engineering initiatives for the Energy Efficiency and Monitoring of Public Buildings (EEMEPP) project. My main objective was to map energy consumption profiles to directly support strategic, cost-saving decisions by the University's Infrastructure Superintendence.",
      "To achieve this, I developed custom Python and Pandas scripts that automated the complex extraction and cleaning of energy data gathered from both smart meters and utility invoices. I then translated this raw data into actionable insights by engineering interactive dashboards and visualizations using Power BI, Plotly, and Matplotlib."
    ],
  },
  {
    title: "Full Stack Developer (Scholarship Student)",
    company: "JoinBike - An app for cycling enthusiasts",
    logo: "/joinbike.png",
    location: "Brazil",
    period: "April 2021 - April 2023",
    description: [
      "Developed as an award-winning institutional project at IFPR, JoinBike allowed me to engineer a complete mobile application ecosystem from the ground up. I architected a robust relational database using SQL, built a scalable back-end API with ASP.NET Core and C#, and crafted an intuitive front-end experience using React Native and JavaScript.",
      "Beyond writing code and orchestrating agile development processes via Git and GitHub, I embraced a leadership role as a technical advisor. I actively mentored incoming students, guiding them through core software engineering concepts, system architecture design, and industry best practices to ensure the project's long-term sustainability."
    ],
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
    description: "Driven by the goal of making musical education more inclusive, I am developing assistive technologies to support visually impaired individuals and beginner students. I implemented an Optical Music Recognition (OMR) system that combines pure Digital Image Processing (DIP) for staff pitch identification with a pre-trained neural network for note duration classification. To ensure high accuracy, I fine-tuned a computer vision model utilizing a comprehensive Roboflow dataset containing over 2,000 images.",
    image: "/musicart.jpg"
  },
  {
    title: "Hi Tech Consulting (Junior Enterprise)",
    role: "Project Advisor",
    period: "May 2025 - Sep. 2025",
    description: "Serving as a Tech Lead for mobile application development within a student-led Junior Enterprise, I helped bridge the gap between academic theory and market reality. I was responsible for delivering high-quality technological solutions within a structured corporate environment and conducting technical feasibility analyses for new projects. More importantly, I actively fostered a culture of innovation, responsibility, and excellence, preparing my team to thrive in the professional tech industry.",
    image: "/hitech.jpg"
  },
  {
    title: "Solidarity Computer",
    role: "Volunteer",
    period: "April 2021 - Dec. 2022",
    description: "During the pandemic, I volunteered to assemble low-cost computer kits using Raspberry Pi and Orange Pi to support students facing study difficulties. My role involved conducting market research, managing budgets, and controlling inventory via Excel to maximize our impact. To further promote digital inclusion, I also authored and distributed educational materials focused on Free Software and Linux usage.",
    image: "/computador_solidario.jpg"
  },
  {
    title: "Perception of Crime in Brazil and History of the Present",
    role: "Scientific Initiation Student",
    period: "March 2020 - Dec. 2020",
    description: "As a Scientific Initiation Student, I explored criminology within Brazilian higher education institutions. I designed surveys, collected respondent data via Google Forms, and utilized Microsoft Office tools to tabulate and organize the findings. This early experience in data analysis allowed me to draw meaningful conclusions and solidify my foundational research skills."
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
    category: "Soft Skills",
    items: ["Problem Solving", "Critical Thinking", 
    "Collaboration", "Adaptability", "Communication", "Curiosity",
    "Open-mindedness","Innovation"]
  },
  {
    category: "Programming Languages",
    items: ["Python", "SQL", "R", "Java", "C", "C++", "C#", "JavaScript", "TypeScript"]
  },
  {
    category: "Hard Skills",
    items: ["Airflow", "dbt", "Docker", "Power BI",
      "ML Tools (Scikit-learn, GXBoost, Prophet)", "API Dev Tools (Flask, FastAPI, Django, ASP.NET Core)", 
      "Computer Vision (OpenCV, YOLO)", "Data Visualization (Plotly, Matplotlib, ggplot2)",
      "Front-end Tools (React, React Native, Next.js, HTML, CSS)",
      "Git", "GitHub Actions", "Linux", "Azure"
    ]
  },
];

export const interests = [
  "Advanced Data Engineering and Architecture",
  "DevOps and Infrastructure",
  "Computer Vision",
  "Music Pedagogy"
];