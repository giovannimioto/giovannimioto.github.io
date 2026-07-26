// ProjectDetail — full project page, accessed via /projects/:slug
// Design: clean article layout with back navigation
import { projects } from "@/lib/portfolio-data";
import { useLocation, useParams } from "wouter";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function ProjectDetail() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <div className="container py-16 text-center">
          <p className="text-muted-foreground">Project not found.</p>
          <button onClick={() => navigate("/")} className="link-blue text-sm mt-4 block mx-auto">
            ← Back to portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Minimal top bar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-12 md:py-16 fade-in">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="tech-tag">{project.category}</span>
            </div>
            <h1
              className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              {project.title}
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-10 pb-10 border-b border-border">
            <p className="entry-meta font-medium mb-3">Technologies</p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Full description */}
          <div className="mb-10 pb-10 border-b border-border">
            <h2 className="section-title">About this project</h2>
            <p className="text-sm text-foreground leading-relaxed max-w-2xl">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          <div className="mb-10 pb-10 border-b border-border">
            <h2 className="section-title">Highlights</h2>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="text-sm text-foreground flex gap-2.5">
                  <span className="text-muted-foreground mt-1.5 flex-shrink-0">–</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Awards */}
          {project.awards && (
            <div className="mb-10 pb-10 border-b border-border">
              <h2 className="section-title">Awards & Recognition</h2>
              <ul className="space-y-2">
                {project.awards.map((award, i) => (
                  <li key={i} className="text-sm text-foreground flex gap-2.5">
                    <span className="text-muted-foreground flex-shrink-0">★</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          {(project.link || project.github) && (
            <div className="flex flex-wrap gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm link-blue"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm link-blue"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              )}
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-border py-6 mt-8">
        <div className="container">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Giovanni Mioto · Paraná, Brazil
          </p>
        </div>
      </footer>
    </div>
  );
}

