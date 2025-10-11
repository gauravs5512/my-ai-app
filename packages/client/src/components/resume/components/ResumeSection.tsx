import { cn } from "../../../lib/utils";

type ResumeSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

const ResumeSection = ({
  title,
  description,
  children,
  className,
}: ResumeSectionProps) => (
  <section className={cn("space-y-4", className)}>
    <div className="space-y-1">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </h2>
      {description && <p className="text-sm text-slate-500">{description}</p>}
    </div>
    <div className="space-y-4 text-sm leading-6 text-slate-600">{children}</div>
  </section>
);

export default ResumeSection;
