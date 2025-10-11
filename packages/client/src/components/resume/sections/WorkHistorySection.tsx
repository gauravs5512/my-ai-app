import { BriefcaseBusiness } from "lucide-react";

import type { Experience } from "../Resume.types";
import BulletList from "../components/BulletList";
import ResumeSection from "../components/ResumeSection";

type WorkHistorySectionProps = {
  experiences: Experience[];
};

const WorkHistorySection = ({ experiences }: WorkHistorySectionProps) => (
  <ResumeSection title="Work History" icon={BriefcaseBusiness}>
    <div className="space-y-8">
      {experiences.map(
        ({ id, role, company, location, period, achievements }) => (
          <div key={id} className="space-y-3">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-base font-semibold text-slate-800">{role}</p>
                <p className="text-sm text-slate-600">
                  {company} · {location}
                </p>
              </div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                {period}
              </p>
            </div>
            <BulletList items={achievements} />
          </div>
        ),
      )}
    </div>
  </ResumeSection>
);

export default WorkHistorySection;
