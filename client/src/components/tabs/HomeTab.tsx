// HomeTab — profile overview, education, interests, languages
// Design: two-column on desktop, clean typographic hierarchy
// Brand color: oklch(0.38 0.18 240) — electric indigo-blue
import { bio, contact, education, interests, languages } from "@/lib/portfolio-data";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";

export default function HomeTab() {
  return (
    <div className="fade-in py-12 md:py-16 max-w-3xl">
      {/* Profile block */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-14 mb-16">
        {/* Avatar placeholder */}
        <div className="flex-shrink-0">
          <div
            className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-muted border border-border flex items-center justify-center"
            aria-label="Profile initials"
          >
            <span
              className="text-2xl font-semibold select-none"
              style={{ fontFamily: "'Lora', Georgia, serif", color: "var(--brand)" }}
            >
              GM
            </span>
          </div>
        </div>

        {/* Bio */}
        <div className="flex-1 min-w-0">
          <h1
            className="text-3xl md:text-4xl font-semibold text-foreground mb-1"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            {bio.name}
          </h1>
          <p className="text-sm font-medium mb-1" style={{ color: "var(--brand)" }}>
            {bio.headline}
          </p>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{contact.location}</span>
          </div>
          <p className="text-sm text-foreground leading-relaxed max-w-lg mb-5">
            {bio.description}
          </p>
          {/* Contact links */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
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

      {/* Two-column: Education + Interests/Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

        {/* Interests + Languages */}
        <div className="space-y-10">
          <div>
            <h2 className="section-title">Interests</h2>
            <ul className="space-y-1.5">
              {interests.map((item, i) => (
                <li key={i} className="text-sm text-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

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
    </div>
  );
}
