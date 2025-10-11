import ResumeSection from "../components/ResumeSection";

type SummarySectionProps = {
  summary: string;
};

const SummarySection = ({ summary }: SummarySectionProps) => (
  <ResumeSection title="Executive Summary">
    <p>{summary}</p>
  </ResumeSection>
);

export default SummarySection;
