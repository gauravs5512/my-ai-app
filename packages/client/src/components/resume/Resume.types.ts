import type { LucideIcon } from "lucide-react";

export type ContactDetail = {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  skills: string[];
  highlight?: boolean;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
};

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  focus: string[];
  techStack: string[];
};

export type ProjectGroup = {
  id: string;
  title: string;
  projects: Project[];
};

export type Education = {
  id: string;
  degree: string;
  school: string;
  location: string;
  year: string;
};

export type ResumeProfile = {
  name: string;
  title: string;
  tagline: string;
  banner: string;
};

export type ResumeData = {
  profile: ResumeProfile;
  summary: string;
  contacts: ContactDetail[];
  skillGroups: SkillGroup[];
  experiences: Experience[];
  education: Education[];
  projectGroups: ProjectGroup[];
  technicalHighlights: string[];
};
