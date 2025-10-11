import ResumeSection from "../components/ResumeSection";
import TagList from "../components/TagList";

type TechnicalHighlightsSectionProps = {
  highlights: string[];
};

const TechnicalHighlightsSection = ({
  highlights,
}: TechnicalHighlightsSectionProps) => {
  if (highlights.length === 0) return null;

  return (
    <ResumeSection
      title="Technical Highlights"
      description="Core technologies and platforms I rely on to deliver resilient solutions."
    >
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 shadow-sm shadow-emerald-100">
        <TagList items={highlights} />
      </div>
    </ResumeSection>
  );
};

export default TechnicalHighlightsSection;
