import { Globe, Linkedin, Mail, MapPin } from "lucide-react";

import type { ResumeData } from "./Resume.types";

export const resumeData: ResumeData = {
  profile: {
    name: "Gaurav Singh",
    title: "Vice President · Goldman Sachs",
    tagline: "Engineering leader powering modern enterprise platforms.",
    banner:
      "Driving impact through cloud-native architectures, resilient delivery pipelines, and collaborative leadership across product engineering teams.",
  },
  summary:
    "Vice President and hands-on engineering leader with deep experience across large-scale platform modernization. I combine Java Spring Boot, event-driven services, and React ecosystems to ship reliable, human-centered products. My mission is to enable teams with strong technical guardrails, uplift developer experience, and continually raise the quality bar through mentorship and iterative delivery.",
  contacts: [
    {
      id: "location",
      label: "Location",
      value: "Bengaluru, KA 560002",
      icon: MapPin,
    },
    {
      id: "email",
      label: "Email",
      value: "personal@singhgaurav.co.in",
      icon: Mail,
      href: "mailto:personal@singhgaurav.co.in",
    },
    {
      id: "profile",
      label: "Digital Profile",
      value: "www.singhgaurav.co.in",
      icon: Globe,
      href: "https://www.singhgaurav.co.in",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/gaurav-singh-707789111",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/gaurav-singh-707789111",
    },
  ],
  skillGroups: [
    {
      id: "systems",
      title: "Capital Markets Systems Leadership",
      highlight: true,
      skills: [
        "Digital portfolio orchestration for high-net-worth clients",
        "Real-time trading, entitlement, and settlement platforms",
        "Cross-functional leadership, mentoring, and stakeholder alignment",
        "Generative AI strategy (OpenAI APIs, MCP servers, retrieval-augmented patterns)",
      ],
    },
    {
      id: "engineering",
      title: "Application Engineering",
      highlight: true,
      skills: [
        "Java & Spring Boot microservices design",
        "React, Angular, TypeScript, HTML, CSS",
        "Software design, data structures, and algorithms",
        "Generative AI delivery (OpenAI APIs, MCP server integrations)",
      ],
    },
    {
      id: "platform",
      title: "Cloud, Data & DevOps",
      highlight: true,
      skills: [
        "AWS, Google Firebase, Heroku",
        "MemSQL, MySQL, MongoDB, Kafka",
        "CI/CD integrations (Jenkins) and Agile delivery",
      ],
    },
  ],
  technicalHighlights: [
    "Java Spring Boot",
    "React",
    "TypeScript",
    "Angular",
    "Node.js",
    "OpenAI APIs",
    "MCP Servers",
    "Generative AI",
    "AWS",
    "Kubernetes",
    "Kafka",
    "Jenkins CI/CD",
    "Tailwind CSS",
    "Supabase",
  ],
  experiences: [
    {
      id: "goldman-sachs",
      role: "Vice President",
      company: "Goldman Sachs",
      location: "Bengaluru, India",
      period: "Jul 2022 – Present",
      achievements: [
        "Leading a five-engineer pod modernizing large-scale customer-facing platforms with measurable UX and performance improvements.",
        "Architected event-driven services that automate oversight-heavy workflows and keep data models synchronized in real time.",
        "Partnered with product and business stakeholders to translate strategic goals into scalable technical roadmaps.",
        "Directed adoption of Angular and Tailwind CSS patterns that improved UX consistency and accelerated front-end delivery.",
        "Optimized platform elasticity through AWS services, ensuring rapid response to unpredictable demand spikes.",
      ],
    },
    {
      id: "societe-generale",
      role: "Specialist Software Engineer",
      company: "Societe Generale",
      location: "Bengaluru, India",
      period: "Jun 2021 – Jun 2022",
      achievements: [
        "Delivered full-stack features across React, TypeScript, Angular, and Spring Boot services supporting distributed teams.",
        "Implemented DevOps pipelines and AWS deployments that shortened release cycles and hardened production readiness.",
        "Mentored engineers on coding standards and collaboration patterns, raising overall team efficiency and quality.",
        "Provided rapid incident response and debugging support to safeguard mission-critical operations.",
      ],
    },
    {
      id: "dbs-bank",
      role: "Software Development Engineer",
      company: "DBS Bank",
      location: "Hyderabad, India",
      period: "May 2018 – Jun 2021",
      achievements: [
        "Engineered webhook-driven, real-time data feeds that keep downstream analytics current and actionable.",
        "Aligned solutions with business and compliance teams, ensuring stakeholder value and regulatory adherence.",
        "Executed large-scale deployments with rigorous testing, keeping mission-critical services stable.",
      ],
    },
    {
      id: "fidelity",
      role: "Associate Software Engineer",
      company: "Fidelity National Financial India",
      location: "Bangalore, India",
      period: "Jan 2017 – May 2018",
      achievements: [
        "Collaborated with cross-functional teams to define product intent and deliver high-availability workflow systems.",
        "Supported business analysts and infrastructure specialists to maintain uptime for enterprise-grade applications.",
      ],
    },
  ],
  education: [
    {
      id: "mca",
      degree: "Master of Computer Applications",
      school: "Shri Shankaracharya Institute of Engineering",
      location: "Bhilai, India",
      year: "2016",
    },
    {
      id: "bsc",
      degree: "Bachelor of Science in Computer Science",
      school: "Disha College",
      location: "Raipur, India",
      year: "2013",
    },
  ],
  projectGroups: [
    {
      id: "work",
      title: "Work Projects",
      projects: [
        {
          id: "trading-platform",
          name: "Trading Platform – Real-time Day Trading Solution",
          subtitle: "Lead engineer for a revenue-critical trading cockpit.",
          description:
            "Guided a team of five in delivering real-time market visibility and decision support for day traders.",
          focus: [
            "Implemented Morningstar webhook integrations for live price streaming and order execution confidence.",
            "Operationalized AWS infrastructure for scale, fortified with Jenkins pipelines for resilient deployments.",
            "Shaped a responsive React + TypeScript experience, keeping financial data actionable and intuitive.",
          ],
          techStack: [
            "React",
            "Java Spring Boot",
            "TypeScript",
            "AWS Cloud",
            "Jenkins",
            "Webhooks",
          ],
        },
        {
          id: "entitlements-platform",
          name: "Entitlements Platform – Unified Access Management Solution",
          subtitle: "Project lead for enterprise-grade entitlement governance.",
          description:
            "Directed a four-person squad building centralized access management that tightened security across banking teams.",
          focus: [
            "Standardized code reviews and best practices to balance agility with compliance.",
            "Leveraged Kubernetes for dynamic scaling of sensitive entitlement workloads.",
            "Seamlessly connected React front ends with Spring Boot services for faster approvals.",
          ],
          techStack: ["React", "Java Spring Boot", "Kubernetes", "HTML", "CSS"],
        },
        {
          id: "digital-portfolio",
          name: "Digital Portfolio Solution – Automated Investment Management Platform",
          subtitle: "Product engineering for automated portfolio stewardship.",
          description:
            "Delivered a self-correcting portfolio platform reacting instantly to market events.",
          focus: [
            "Drove webhook-based synchronization to keep asset allocations current.",
            "Implemented AWS + Kubernetes deployment topology for availability and cost efficiency.",
            "Partnered with design teams to launch a Tailwind CSS-driven client console.",
          ],
          techStack: [
            "React",
            "Java Spring Boot",
            "Node.js",
            "AWS",
            "Tailwind CSS",
            "Webhooks",
            "Kubernetes",
            "Jenkins",
            "TypeScript",
          ],
        },
        {
          id: "merricart",
          name: "Merricart – E-commerce Platform for Health and Wellness",
          subtitle: "Consumer digital experience emphasizing trust and growth.",
          description:
            "Architected an omnichannel commerce journey supporting consultations and lab scheduling.",
          focus: [
            "Crafted a modular React + TypeScript storefront for rapid feature iteration.",
            "Integrated secure Java back-end flows for payments and customer data.",
            "Aligned engineering output with product milestones to accelerate releases.",
          ],
          techStack: ["React", "TypeScript", "Java", "HTML", "CSS"],
        },
        {
          id: "fitla",
          name: "Fitla – Organization-wide Fitness Tracking Application",
          subtitle:
            "Gamified wellness platform for organization-wide adoption.",
          description:
            "Built cross-platform applications syncing wearable data and leaderboards.",
          focus: [
            "Coordinated Android and React development to ensure consistent UX.",
            "Deployed on Heroku and AWS to balance elasticity with cost control.",
            "Managed real-time ranking logic to keep challenges engaging.",
          ],
          techStack: ["React", "Java", "Android", "Heroku", "AWS Services"],
        },
        {
          id: "iconnect",
          name: "Iconnect – Internal Monthly Settlement System",
          subtitle: "Operational backbone for automated bank settlements.",
          description:
            "Launched a microservices ecosystem automating statement generation and interest tracking.",
          focus: [
            "Embedded analytics to surface actionable settlement insights.",
            "Employed Kafka streams and AWS load balancing for resilience.",
            "Ensured compliance-ready audit trails through Lambda-driven workflows.",
          ],
          techStack: [
            "Angular",
            "Java Spring Boot",
            "Microservices",
            "Jenkins",
            "AWS Kafka",
            "AWS Load Balancer",
            "AWS Lambda",
          ],
        },
      ],
    },
    {
      id: "personal",
      title: "Personal Projects",
      projects: [
        {
          id: "ai-copilot",
          name: "GenAI Copilot",
          subtitle: "Conversational assistant for engineering teams.",
          description:
            "Built an AI chatbot that streamlines code review preparation, release notes, and incident triage.",
          focus: [
            "Integrated OpenAI APIs with structured outputs for deterministic hand-offs to automation hooks.",
            "Extended the assistant using MCP servers to orchestrate repository navigation and domain tools.",
            "Implemented retrieval-augmented generation over architecture docs to surface situation-aware responses.",
          ],
          techStack: [
            "React",
            "TypeScript",
            "OpenAI API",
            "MCP Servers",
            "Next.js",
            "Supabase",
          ],
        },
      ],
    },
  ],
};
