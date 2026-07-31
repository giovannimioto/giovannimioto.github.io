// ExperienceTab — professional experience only
import { experience } from "@/lib/portfolio-data";

export default function ExperienceTab() {
  return (
    <div className="fade-in py-12 md:py-16 max-w-7xl mx-auto">
      {/* Professional Experience */}
      <section>
        <h2 className="section-title">Professional Experience</h2>
        <div className="space-y-16">
          {experience.map((exp, i) => (
            <div key={i} className="border-t border-border pt-10 first:border-t-0 first:pt-0">
              
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                
                {/* Lado Esquerdo: Conteúdo em Texto */}
                <div className="flex-1 min-w-0">
                  
                  {/* Cabeçalho da Experiência */}
                  <div className="mb-5">
                    <p className="text-lg font-semibold text-foreground">{exp.title}</p>
                    <p className="text-[15px] font-medium" style={{ color: "var(--brand)" }}>
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1.5">
                      <span className="entry-meta">{exp.period}</span>
                      <span className="text-muted-foreground/50 text-xs">•</span>
                      <span className="entry-meta">{exp.location}</span>
                    </div>
                  </div>

                  {/* Descrição */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="text-[15px] text-foreground leading-relaxed flex gap-3">
                        <span className="text-muted-foreground mt-1 flex-shrink-0">–</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tecnologias / Highlights */}
                  {exp.highlights && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.highlights.map((h, j) => (
                        <span key={j} className="tech-tag">{h}</span>
                      ))}
                    </div>
                  )}

                  {/* Prêmios */}
                  {exp.awards && (
                    <div className="mt-6 pt-5 border-t border-border/50">
                      <p className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground">
                        🏆 Awards & Recognition
                      </p>
                      <ul className="space-y-2">
                        {exp.awards.map((award, j) => (
                          <li key={j} className="text-[14px] text-foreground flex gap-2.5 items-start">
                            <span style={{ color: "var(--brand)" }} className="mt-0.5">★</span>
                            <span className="leading-snug">{award}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Lado Direito: Imagem Ilustrativa */}
                {exp.logo && (
                  <div className="lg:w-[380px] flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} illustration`} 
                      className="w-full h-auto max-h-[300px] object-cover rounded-xl shadow-md border border-border/50 bg-muted/10 transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}