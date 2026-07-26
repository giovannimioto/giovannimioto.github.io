// SkillsTab — skills organized by category
// Design: clean two-column grid of categories with tag lists
import { skills } from "@/lib/portfolio-data";

export default function SkillsTab() {
  return (
    <div className="fade-in py-12 md:py-16">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {skills.map((skillGroup, i) => (
          <div key={i}>
            <p className="entry-title mb-3">{skillGroup.category}</p>
            <div className="flex flex-wrap gap-1.5">
              {skillGroup.items.map((item, j) => (
                <span key={j} className="tech-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
