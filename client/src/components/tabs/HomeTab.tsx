// HomeTab — profile overview, education, languages, skills
// Design: three-column on desktop, clean typographic hierarchy
// Brand color: oklch(0.38 0.18 240) — electric indigo-blue
import { bio, contact, education, languages, skills, aboutMe, beyondWork } from "@/lib/portfolio-data";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";

export default function HomeTab() {
  return (
    <div className="fade-in py-12 md:py-16 max-w-7xl mx-auto">
      
      {/* Container Principal: (Bio) centralizada verticalmente com (Educação + Idiomas) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 mb-16 items-center">
        
        {/* Lado Esquerdo (Coluna 1): Profile & Bio */}
        <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex-shrink-0 mb-6">
            <img
              src="/giovannimioto.jpeg"
              alt="Giovanni Mioto"
              className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border border-border shadow-md"
            />
          </div>
          <div className="w-full">
            <h1
              className="text-3xl font-semibold text-foreground mb-1"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              {bio.name}
            </h1>
            <p className="text-sm font-medium mb-3" style={{ color: "var(--brand)" }}>
              {bio.headline}
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-sm text-muted-foreground mb-5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{contact.location}</span>
            </div>
            
            <p className="text-[14.5px] text-foreground leading-relaxed">
              {bio.description}
            </p>
          </div>
        </div>

        {/* Lado Direito (Colunas 2 e 3): Agrupados e alinhados ao topo (items-start) */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-start">
          
          {/* Column 2: Education */}
          <div>
            <h2 className="section-title">Education</h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i}>
                  <p className="entry-title">{edu.degree}</p>
                  <p className="text-sm text-foreground">{edu.institution}</p>
                  <p className="entry-meta mt-0.5">{edu.location} · {edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Languages */}
          <div>
            <h2 className="section-title">Languages</h2>
            <div className="space-y-3">
              {languages.map((lang, i) => (
                <div key={i} className="flex items-center justify-between text-[15px]">
                  <span className="text-foreground font-medium">{lang.language}</span>
                  <span className="entry-meta">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* About Me Section */}
      <section className="mb-16">
        <h2 className="section-title">About Me</h2>
        <div className="space-y-4 text-foreground text-[15px] leading-relaxed">
          {aboutMe.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="flex flex-col gap-6">
          {skills.map((skillGroup, i) => (
            <div 
              key={i} 
              className="group p-6 rounded-xl border border-border bg-transparent hover:bg-muted/10 transition-colors duration-300"
            >
              {/* Header da Categoria */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded bg-muted flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <span className="text-xs font-bold" style={{ color: "var(--brand)" }}>
                    {skillGroup.category.charAt(0)}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {skillGroup.category}
                </h3>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, j) => (
                  <span 
                    key={j} 
                    className="tech-tag hover:border-foreground/30 hover:bg-muted transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond Work Section */}
      <section className="mb-12 md:mb-16">
        <div className="my-12 md:my-16"></div>
        <h2 className="section-title">Beyond Work</h2>
        <div className="space-y-4 text-foreground text-[15px] leading-relaxed">
          {beyondWork.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
      
    </div>
  );
}