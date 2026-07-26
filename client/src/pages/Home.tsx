// Home — main portfolio page with tab navigation
// Design: clean academic style inspired by viniciusmioto.com
import { useState } from "react";
import Header from "@/components/Header";
import HomeTab from "@/components/tabs/HomeTab";
import ExperienceTab from "@/components/tabs/ExperienceTab";
import ProjectsTab from "@/components/tabs/ProjectsTab";
import ContactTab from "@/components/tabs/ContactTab";

type Tab = "home" | "experience" | "projects" | "contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const renderTab = () => {
    switch (activeTab) {
      case "home":       return <HomeTab />;
      case "experience": return <ExperienceTab />;
      case "projects":   return <ProjectsTab />;
      case "contact":    return <ContactTab />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1">
        <div className="container">
          {renderTab()}
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