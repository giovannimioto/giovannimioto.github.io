// ContactTab — contact information
// Design: Modern card grid with hover effects
import { contact } from "@/lib/portfolio-data";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/giovanni-mioto",
    href: contact.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/giomioto",
    href: contact.github,
  },
];

export default function ContactTab() {
  return (
    <div className="fade-in py-12 md:py-16 max-w-3xl mx-auto">
      <h2 className="section-title">Contact</h2>
      <p className="text-sm text-muted-foreground mb-10 -mt-3 max-w-md">
        Feel free to reach out for collaboration, opportunities, or just to say hello.
      </p>

      {/* Grid de cards interativos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactItems.map((item, i) => {
          const Icon = item.icon;
          const isLink = !!item.href;

          const CardContent = (
            <div className="group relative flex flex-col h-full p-6 rounded-xl border border-border bg-transparent hover:bg-muted/30 transition-all duration-300 overflow-hidden">
              
              {/* Ícone com animação de scale */}
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-foreground" />
              </div>
              
              {/* Textos */}
              <div className="mt-auto">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-foreground truncate">
                  {item.value}
                </p>
              </div>

              {/* Ícone de link externo (aparece no hover) */}
              {isLink && (
                <div className="absolute top-5 right-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                </div>
              )}
            </div>
          );

          if (isLink) {
            return (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
              >
                {CardContent}
              </a>
            );
          }

          return (
            <div key={i} className="block">
              {CardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}