// ExperienceTab — professional experience + extracurricular
// Design: clean list with subtle dividers, no heavy cards
import { experience, extracurricular } from "@/lib/portfolio-data";

export default function ExperienceTab() {
  return (
    <div className="fade-in py-12 md:py-16">
      {/* Professional Experience */}
      <section className="mb-14">
        <h2 className="section-title">Professional Experience</h2>
        <div className="space-y-10">
          {experience.map((exp, i) => (
            <div key={i} className="border-t border-border pt-8 first:border-t-0 first:pt-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <p className="entry-title">{exp.title}</p>
                  <p className="text-sm text-foreground">{exp.company}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="entry-meta">{exp.period}</p>
                  <p className="entry-meta">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-1.5 mb-4">
                {exp.description.map((desc, j) => (
                  <li key={j} className="text-sm text-foreground leading-relaxed flex gap-2.5">
                    <span className="text-muted-foreground mt-1.5 flex-shrink-0">–</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {exp.highlights && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {exp.highlights.map((h, j) => (
                    <span key={j} className="tech-tag">{h}</span>
                  ))}
                </div>
              )}

              {exp.awards && (
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="entry-meta font-medium mb-1.5">🏆 Awards & Recognition</p>
                  <ul className="space-y-1">
                    {exp.awards.map((award, j) => (
                      <li key={j} className="text-sm text-foreground flex gap-2">
                        <span className="text-muted-foreground">★</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Extracurricular */}
      <section>
        <h2 className="section-title">Extracurricular & Volunteering</h2>
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
