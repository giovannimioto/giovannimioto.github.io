// ProjectsTab — project cards (summary only), click to see detail
// Design: clean list-style cards with minimal info, arrow CTA
import { projects } from "@/lib/portfolio-data";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

export default function ProjectsTab() {
  const [, navigate] = useLocation();

  return (
    <div className="fade-in py-12 md:py-16">
      <h2 className="section-title">Projects</h2>
      <p className="text-sm text-muted-foreground mb-10 -mt-3">
        Click on a project to see the full description, highlights, and links.
      </p>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <button
            key={i}
            onClick={() => navigate(`/projects/${project.slug}`)}
            className="w-full text-left border-t border-border py-6 last:border-b group transition-colors hover:bg-muted/40 -mx-4 px-4 rounded"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="entry-title group-hover:underline">{project.title}</span>
                  <span className="tech-tag">{project.category}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech, j) => (
                    <span key={j} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="tech-tag">+{project.technologies.length - 5}</span>
                  )}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
