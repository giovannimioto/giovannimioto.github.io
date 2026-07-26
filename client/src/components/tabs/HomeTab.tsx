// HomeTab — profile overview, education, languages, skills
// Design: two-column on desktop, clean typographic hierarchy
// Brand color: oklch(0.38 0.18 240) — electric indigo-blue
import { bio, contact, education, languages, skills } from "@/lib/portfolio-data";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";

export default function HomeTab() {
  return (
    <div className="fade-in py-12 md:py-16 max-w-3xl mx-auto">
      {/* Profile block */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
        
        {/* Avatar placeholder */}
        <div className="flex-shrink-0">
          <img
            src="/giovannimioto.jpeg"
            alt="Giovanni Mioto"
            className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border border-border shadow-md"
          />
        </div>

        {/* Bio */}
        <div className="flex-1 min-w-0">
          <h1
            className="text-3xl md:text-4xl font-semibold text-foreground mb-1 text-center md:text-left"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            {bio.name}
          </h1>
          <p className="text-sm font-medium mb-3 text-center md:text-left" style={{ color: "var(--brand)" }}>
            {bio.headline}
          </p>
          
          <div className="flex items-center justify-center md:justify-start gap-1.5 text-sm text-muted-foreground mb-5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{contact.location}</span>
          </div>
          
          <p className="text-sm text-foreground leading-relaxed max-w-lg mb-5 text-center md:text-left">
            {bio.description}
          </p>
          
          {/* Contact links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
            <a href={`mailto:${contact.email}`} className="link-blue flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              {contact.email}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="link-blue flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="link-blue flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Two-column: Education + Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Education */}
        <div>
          <h2 className="section-title">Education</h2>
          <div className="space-y-5">
            {education.map((edu, i) => (
              <div key={i}>
                <p className="entry-title">{edu.degree}</p>
                <p className="text-sm text-foreground">{edu.institution}</p>
                <p className="entry-meta">{edu.location} · {edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="space-y-10">
          <div>
            <h2 className="section-title">Languages</h2>
            <div className="space-y-1.5">
              {languages.map((lang, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-foreground">{lang.language}</span>
                  <span className="entry-meta">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section (Movida para a Home) */}
      <section>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      
    </div>
  );
}