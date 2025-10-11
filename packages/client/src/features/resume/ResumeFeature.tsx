import { useCallback, useState } from "react";
import { pdf } from "@react-pdf/renderer";
import ResumePdfDocument from "../../components/resume/ResumePdfDocument";
import { resumeData } from "../../components/resume/resumeData";
import { Button } from "../../components/ui/button";
import FinanceResume from "../../components/resume/FinanceResume";

const ResumeFeature = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = useCallback(async () => {
    if (isGenerating) return;

    try {
      setIsGenerating(true);
      setError(null);
      const blob = await pdf(<ResumePdfDocument data={resumeData} />).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "gaurav-singh-cv.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to generate PDF", error);
      setError(
        "Unable to generate PDF automatically. Please refresh and try again.",
      );
    } finally {
      setIsGenerating(false);
    }
  }, [isGenerating]);

  return (
    <section className="w-full space-y-4">
      <div className="flex justify-end">
        <Button
          type="button"
          variant="outline"
          className="gap-2 print:hidden"
          onClick={handleDownload}
          disabled={isGenerating}
        >
          {isGenerating ? "Preparing..." : "Download as PDF"}
        </Button>
      </div>
      {error && (
        <p className="text-sm text-red-500 print:hidden" role="alert">
          {error}
        </p>
      )}
      <FinanceResume />
    </section>
  );
};

export default ResumeFeature;
