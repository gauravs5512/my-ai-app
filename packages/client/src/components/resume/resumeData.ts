import { Globe, Linkedin, Mail, MapPin } from "lucide-react";

import type { ResumeData } from "./Resume.types";

export const resumeData: ResumeData = {
  profile: {
    name: "Gaurav Singh",
    title: "Vice President · Goldman Sachs",
    tagline:
      "Engineering leader powering modern, agentic enterprise platforms.",
    banner:
      "Driving impact through cloud-native architectures, agentic AI accelerators, resilient delivery pipelines, and collaborative leadership across product engineering teams.",
  },
  summary:
    "Software engineer with 10 years of experience in designing and developing end-to-end enterprise applications using React, TypeScript, GraphQL, and Java Spring Boot. Skilled in building intelligent and scalable solutions through agentic AI and MCP server integrations. Experienced in cloud migration, CI/CD pipeline automation, and modern DevOps practices that keep delivery seamless and operations efficient. Proven ability to lead teams, drive architectural decisions, and deliver innovative, high-quality solutions aligned with business goals.",
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
      id: "engineering",
      title: "Application Engineering",
      highlight: true,
      skills: [
        "React, Angular, TypeScript, HTML, CSS, JavaScript, Redux",
        "Java & Spring Boot, Node.js",
        "GraphQL API design and schema governance",
        "Software design, design patterns, data structures, and algorithms",
        "Agentic GenAI delivery (OpenAI APIs, MCP server integrations)",
      ],
    },
    {
      id: "platform",
      title: "Cloud, Data & DevOps",
      highlight: true,
      skills: [
        "AWS, Kubernetes",
        "MongoDB, MySQL",
        "CI/CD integrations with GitLab, Jenkins, Sonar, code coverage",
      ],
    },
    {
      id: "tools",
      title: "Tools & IDE's",
      highlight: false,
      skills: [
        "GitHub Copilot, ChatGPT's Codex",
        "VS Code, IntelliJ IDEA 2025",
      ],
    },
  ],
  technicalHighlights: [
    "React",
    "TypeScript",
    "Java Spring Boot",
    "Angular",
    "Node.js",
    "GraphQL",
    "Redux",
    "OpenAI APIs",
    "MCP Servers",
    "Generative AI",
    "Agentic AI",
    "MongoDB",
    "MySQL",
    "AWS",
    "Kubernetes",
    "Kafka",
    "GitLab CI/CD",
    "Jenkins CI/CD",
    "SonarQube",
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
        "Team leadership and mentorship: Provided technical guidance, conducted code reviews, and enforced best practices to foster a collaborative, high-performing pod.",
        "Scalable infrastructure with Kubernetes: Led adoption of container orchestration to support demanding scalability needs across access management workloads.",
        "Intuitive frontend development: Directed a clean interface using React, HTML, and CSS, streamlining experiences for internal teams.",
        "Seamless backend delivery: Supervised Java Spring Boot services to ensure compatibility with enterprise infrastructure and reliable performance.",
      ],
    },
    {
      id: "societe-generale",
      role: "Specialist Software Engineer",
      company: "Societe Generale",
      location: "Bengaluru, India",
      period: "Jun 2021 – Jun 2022",
      achievements: [
        "Full stack development expertise: Delivered scalable features across React, TypeScript, and Java Spring Boot for distributed teams.",
        "Cloud & DevOps proficiency: Built AWS-backed pipelines and automated deployments to accelerate releases and reinforce reliability.",
      ],
    },
    {
      id: "dbs-bank",
      role: "Software Development Engineer",
      company: "DBS Bank",
      location: "Hyderabad, India",
      period: "May 2018 – Jun 2021",
      achievements: [
        "Full stack development expertise: Built React, TypeScript, and Java Spring Boot modules for enterprise-grade platforms.",
        "Orchestrated efficient large-scale deployments, including rigorous testing and remediation to keep services stable.",
      ],
    },
    {
      id: "fidelity",
      role: "Associate Software Engineer",
      company: "Fidelity National Financial India",
      location: "Bangalore, India",
      period: "Jan 2017 – May 2018",
      achievements: [
        "Collaborated with developers and product owners to maintain alignment on product functionality and roadmap priorities.",
        "Worked with analysts, engineering, and infrastructure teams to deliver high availability for mission-critical applications.",
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
            "Led the frontend development of a high-performance trading platform enabling clients to execute trades and monitor live market data.",
          focus: [
            "Developed a responsive, modular React + TypeScript UI optimized for large streaming data sets.",
            "Enhanced backend trade execution logic and caching strategies to improve reliability and response times.",
            "Deployed containerized workloads on Kubernetes and automated delivery pipelines to accelerate releases.",
          ],
          techStack: ["React", "Java Spring Boot", "Kubernetes", "HTML", "CSS"],
        },
        {
          id: "entitlements-platform",
          name: "Entitlements Platform – Unified Access Management Solution",
          subtitle: "Project lead for enterprise-grade entitlement governance.",
          description:
            "Led a four-person team to centralize entitlement processes and tighten organizational security.",
          focus: [
            "Provided technical guidance, code reviews, and best practices to sustain a high-performing team.",
            "Leveraged Kubernetes for scalable container management supporting mission-critical workloads.",
            "Guided architectural decisions for unified entitlement workflows that simplified approvals and boosted security.",
            "Supervised Java Spring Boot services to integrate seamlessly with existing enterprise systems.",
            "Directed React, HTML, and CSS development to deliver a clean experience for internal stakeholders.",
          ],
          techStack: ["React", "Java Spring Boot", "Kubernetes", "HTML", "CSS"],
        },
        {
          id: "digital-portfolio",
          name: "Digital Portfolio Solution – Automated Investment Management Platform",
          subtitle: "Product engineering for automated portfolio stewardship.",
          description:
            "Developed a real-time portfolio platform that automatically rebalances allocations based on market signals.",
          focus: [
            "Designed an intuitive React and Tailwind CSS interface for investor insights.",
            "Used webhooks to keep portfolio data synchronized in real time.",
            "Deployed AWS- and Kubernetes-backed infrastructure to guarantee availability and scalability.",
            "Automated CI/CD with Jenkins pipelines to streamline continuous delivery.",
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
            "Created an e-commerce platform focused on health products with integrated consultations and lab bookings.",
          focus: [
            "Developed a dynamic React and TypeScript storefront optimized for growth.",
            "Integrated secure Java services to handle transactions and sensitive customer data.",
            "Partnered with product teams to align technical milestones with user journeys.",
            "Architected for scalability and maintainability to support evolving customer needs.",
          ],
          techStack: ["React", "TypeScript", "Java", "HTML", "CSS"],
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
          name: "Personal Portfolio",
          subtitle: "AI-powered personal assistant and portfolio website.",
          description:
            "Built an AI chatbot that interacts with visitors on my behalf while presenting my work.",
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
            "Supabase",
          ],
        },
        {
          id: "fitla",
          name: "Fitla – Organization-wide Fitness Tracking Application",
          subtitle:
            "Gamified wellness platform for organization-wide adoption.",
          description:
            "Built a fitness tracking app promoting team wellness with challenges, leaderboards, and device integrations.",
          focus: [
            "Coordinated Android and React development to ensure consistent UX.",
            "Deployed on Heroku and AWS to balance elasticity with cost control.",
            "Managed real-time ranking logic to keep challenges engaging.",
          ],
          techStack: ["React", "Java", "Android", "Heroku", "AWS Services"],
        },
      ],
    },
  ],
};
