import { FolderKanban } from "lucide-react";

import type { ProjectGroup } from "../Resume.types";
import BulletList from "../components/BulletList";
import ResumeSection from "../components/ResumeSection";
import TagList from "../components/TagList";

type ProjectsSectionProps = {
  groups: ProjectGroup[];
};

const ProjectsSection = ({ groups }: ProjectsSectionProps) => {
  if (groups.length === 0) {
    return null;
  }

  return (
    <ResumeSection
      title="Projects"
      icon={FolderKanban}
      description="Selected engagements spanning leadership initiatives and personal innovation."
    >
      <div className="space-y-8">
        {groups.map(({ id, title, projects }) => (
          <section key={id} aria-labelledby={`${id}-projects`}>
            <h3
              id={`${id}-projects`}
              className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              {title}
            </h3>
            <div className="space-y-6">
              {projects.map(
                ({
                  id: projectId,
                  name,
                  subtitle,
                  description,
                  focus,
                  techStack,
                }) => (
                  <article
                    key={projectId}
                    className="space-y-3 rounded-2xl border border-slate-100 bg-white/70 p-5 shadow-sm shadow-slate-100"
                  >
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-slate-800">
                        {name}
                      </p>
                      <p className="text-sm text-emerald-600">{subtitle}</p>
                      <p className="text-sm text-slate-600">{description}</p>
                    </div>
                    <BulletList items={focus} />
                    <TagList items={techStack} />
                  </article>
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </ResumeSection>
  );
};

export default ProjectsSection;
