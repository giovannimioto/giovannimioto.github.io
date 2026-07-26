// Header — sticky top nav with name + tab navigation
// Design: minimal, typographic, clean divider line
// Brand color: oklch(0.38 0.18 240) — electric indigo-blue
import { contact } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail } from "lucide-react";

type Tab = "home" | "experience" | "projects" | "skills" | "contact";

interface HeaderProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Name / Logo */}
          <button
            onClick={() => onTabChange("home")}
            className="font-semibold text-sm tracking-tight hover:opacity-70 transition-opacity"
            style={{ fontFamily: "'Lora', Georgia, serif", color: "var(--brand)" }}
          >
            Giovanni Mioto
          </button>

          {/* Tab Navigation */}
          <nav className="flex items-center gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`nav-tab hidden sm:block ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${contact.email}`}
              className="p-1.5 rounded hover:bg-muted transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4 text-muted-foreground" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:bg-muted transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground" />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:bg-muted transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* Mobile tab row */}
        <div className="flex items-center gap-4 pb-2 sm:hidden overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`nav-tab whitespace-nowrap ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

