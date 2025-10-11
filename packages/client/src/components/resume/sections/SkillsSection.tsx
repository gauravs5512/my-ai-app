import type { SkillGroup } from "../Resume.types";
import BulletList from "../components/BulletList";
import ResumeSection from "../components/ResumeSection";

type SkillsSectionProps = {
  skills: SkillGroup[];
};

const SkillsSection = ({ skills }: SkillsSectionProps) => (
  <ResumeSection
    title="Skills Matrix"
    description="Highlighting technical leadership across capital markets platforms."
  >
    <div className="space-y-5">
      {skills.map(({ id, title, skills: skillItems, highlight }) => (
        <div
          key={id}
          className={
            highlight
              ? "space-y-2 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 shadow-sm shadow-emerald-100"
              : "space-y-2 rounded-2xl border border-slate-100 p-4"
          }
        >
          <p
            className={
              highlight
                ? "text-sm font-semibold text-emerald-700"
                : "text-sm font-semibold text-slate-700"
            }
          >
            {title}
          </p>
          <BulletList items={skillItems} />
        </div>
      ))}
    </div>
  </ResumeSection>
);

export default SkillsSection;
