import { ScrollText } from "lucide-react";

import ResumeSection from "../components/ResumeSection";

type SummarySectionProps = {
  summary: string;
};

const SummarySection = ({ summary }: SummarySectionProps) => (
  <ResumeSection title="Executive Summary" icon={ScrollText}>
    <p>{summary}</p>
  </ResumeSection>
);

export default SummarySection;
