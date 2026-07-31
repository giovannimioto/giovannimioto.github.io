// ProjectsTab — extracurricular activities and projects
import { extracurricular } from "@/lib/portfolio-data";

export default function ProjectsTab() {
  return (
    <div className="fade-in py-12 md:py-16 max-w-7xl mx-auto">
      <section>
        <h2 className="section-title">Extracurricular Activities & Projects</h2>
        <div className="space-y-16">
          {extracurricular.map((item, i) => (
            <div key={i} className="border-t border-border pt-10 first:border-t-0 first:pt-0">
              
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                
                {/* Lado Esquerdo: Conteúdo em Texto */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <p className="text-lg font-semibold text-foreground">{item.title}</p>
                      <p className="text-[15px] font-medium" style={{ color: "var(--brand)" }}>
                        {item.role}
                      </p>
                    </div>
                    <p className="entry-meta flex-shrink-0 mt-1 sm:mt-0">{item.period}</p>
                  </div>
                  <p className="text-[15px] text-foreground leading-relaxed">{item.description}</p>
                </div>

                {/* Lado Direito: Imagem Ilustrativa */}
                {item.image && (
                  <div className="lg:w-[380px] flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={`${item.title} illustration`} 
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