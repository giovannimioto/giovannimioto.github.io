// ContactTab — contact information
// Design: minimal, clean contact block
import { contact } from "@/lib/portfolio-data";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

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
    icon: MapPin,
    label: "Location",
    value: contact.location,
    href: undefined,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/giovanni-mioto-a22b91210",
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
    <div className="fade-in py-12 md:py-16">
      <h2 className="section-title">Contact</h2>
      <p className="text-sm text-muted-foreground mb-10 -mt-3 max-w-md">
        Feel free to reach out for collaboration, opportunities, or just to say hello.
      </p>

      <div className="space-y-5 max-w-sm">
        {contactItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="entry-meta">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="link-blue text-sm">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground">{item.value}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
