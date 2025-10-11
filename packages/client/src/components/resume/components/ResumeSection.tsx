import type { LucideIcon } from "lucide-react";

import { cn } from "../../../lib/utils";
import { Badge } from "../../ui/badge";

type ResumeSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  icon: LucideIcon;
};

const ResumeSection = ({
  title,
  icon: Icon,
  description,
  children,
  className,
}: ResumeSectionProps) => (
  <section className={cn("space-y-4", className)}>
    <div className="space-y-2">
      <h2 className="text-xs font-semibold uppercase text-slate-500">
        <Badge
          variant="outline"
          className="inline-flex items-center gap-2 rounded-full border-slate-200 bg-slate-50 px-4 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-600"
        >
          <Icon className="h-3.5 w-3.5 text-emerald-600" />
          <span>{title}</span>
        </Badge>
      </h2>
      {description && <p className="text-sm text-slate-500">{description}</p>}
    </div>
    <div className="space-y-4 text-sm leading-6 text-slate-600">{children}</div>
  </section>
);

export default ResumeSection;
