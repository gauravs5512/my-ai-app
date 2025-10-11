import ProfileHeader from "./sections/ProfileHeader";
import SummarySection from "./sections/SummarySection";
import ContactSection from "./sections/ContactSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import WorkHistorySection from "./sections/WorkHistorySection";
import ProjectsSection from "./sections/ProjectsSection";
import TechnicalHighlightsSection from "./sections/TechnicalHighlightsSection";
import { resumeData } from "./resumeData";

const FinanceResume = () => {
  const {
    profile,
    summary,
    contacts,
    skillGroups,
    experiences,
    education,
    projectGroups,
    technicalHighlights,
  } = resumeData;

  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <article>
        <ProfileHeader profile={profile} />

        <div className="grid gap-12 border-t border-slate-200 p-8 lg:grid-cols-[320px,1fr] lg:p-12">
          <aside className="space-y-10">
            <ContactSection contacts={contacts} />
            <SkillsSection skills={skillGroups} />
            <EducationSection education={education} />
          </aside>

          <div className="space-y-12">
            <SummarySection summary={summary} />
            <TechnicalHighlightsSection highlights={technicalHighlights} />
            {experiences.length > 0 && (
              <WorkHistorySection experiences={experiences} />
            )}
            {projectGroups.length > 0 && (
              <ProjectsSection groups={projectGroups} />
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default FinanceResume;
