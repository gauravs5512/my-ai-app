import { useCallback } from "react";
import { Download } from "lucide-react";

import FinanceResume from "../../components/resume/FinanceResume";
import { Button } from "../../components/ui/button";

const ResumeFeature = () => {
  const handleDownload = useCallback(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const originalTitle = document.title;
    document.title = "Gaurav-Singh-CV";

    window.print();

    setTimeout(() => {
      document.title = originalTitle;
    }, 500);
  }, []);

  return (
    <section className="w-full space-y-4">
      <div className="flex w-full justify-end">
        <Button
          type="button"
          onClick={handleDownload}
          className="print-hidden"
          variant="outline"
        >
          <Download className="size-4" />
          Download PDF
        </Button>
      </div>

      <div id="resume-print-container">
        <FinanceResume />
      </div>
    </section>
  );
};

export default ResumeFeature;
