import { Contact2 } from "lucide-react";

import type { ContactDetail } from "../Resume.types";
import ResumeSection from "../components/ResumeSection";

type ContactSectionProps = {
  contacts: ContactDetail[];
};

const ContactItem = ({ detail }: { detail: ContactDetail }) => {
  const { icon: Icon, href, label, value } = detail;
  const content = (
    <>
      <p className="font-medium text-slate-700">{label}</p>
      <p className="text-sm text-slate-500">{value}</p>
    </>
  );

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 p-3">
      <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-slate-100">
        <Icon className="h-4 w-4 text-slate-500" />
      </span>
      <div className="space-y-0.5">
        {href ? (
          <a
            href={href}
            className="transition-colors hover:text-slate-900 hover:underline"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

const ContactSection = ({ contacts }: ContactSectionProps) => (
  <ResumeSection title="Contact" icon={Contact2}>
    <div className="space-y-3">
      {contacts.map((detail) => (
        <ContactItem key={detail.id} detail={detail} />
      ))}
    </div>
  </ResumeSection>
);

export default ContactSection;
