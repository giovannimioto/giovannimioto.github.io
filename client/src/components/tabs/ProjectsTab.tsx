// ProjectsTab — extracurricular activities and projects
import { extracurricular } from "@/lib/portfolio-data";

export default function ProjectsTab() {
  return (
    <div className="fade-in py-12 md:py-16 max-w-3xl mx-auto">
      <section>
        <h2 className="section-title">Extracurricular Activities & Projects</h2>
        <div className="space-y-8">
          {extracurricular.map((item, i) => (
            <div key={i} className="border-t border-border pt-6 first:border-t-0 first:pt-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <p className="entry-title">{item.title}</p>
                  <p className="entry-meta">{item.role}</p>
                </div>
                <p className="entry-meta flex-shrink-0">{item.period}</p>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}