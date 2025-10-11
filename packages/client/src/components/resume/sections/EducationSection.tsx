import type { Education } from "../Resume.types";
import ResumeSection from "../components/ResumeSection";

type EducationSectionProps = {
  education: Education[];
};

const EducationSection = ({ education }: EducationSectionProps) => (
  <ResumeSection title="Education">
    <div className="space-y-4">
      {education.map(({ id, degree, school, location, year }) => (
        <div
          key={id}
          className="space-y-1 rounded-2xl border border-slate-100 p-4"
        >
          <p className="text-sm font-semibold text-slate-700">{degree}</p>
          <p className="text-sm text-slate-600">{school}</p>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            {location} · {year}
          </p>
        </div>
      ))}
    </div>
  </ResumeSection>
);

export default EducationSection;
