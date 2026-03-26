type Experience = {
  period: string;
  title: string;
  company: string;
  location?: string;
  companyUrl: string;
  description: string;
  technologies: string[];
};

export const experienceData: Experience[] = [
  {
    period: "2024 — PRESENT",
    title: "Software Engineer",
    company: "Sofico",
    location: "Sydney, Australia",
    companyUrl: "https://sofico.global/en/",
    description:
      "Designed and developed core ERP modules for a fleet management platform, integrating APIs with major automotive clients and improving PR merge workflows through GitHub automation and CI/CD pipelines.",
    technologies: ["Jakarta EE", "JUnit", "GitHub Actions", "Podman", "JBoss"],
  },
  {
    period: "2020 — 2024",
    title: "Senior Software Engineer",
    company: "Univers",
    location: "Singapore",
    companyUrl: "https://univers.com/",
    description:
      "Developed AIoT platforms including Singapore's first Virtual Power Plant and Battery Storage System, integrating new energy systems for B2B clients while building carbon credit portals, fault detection systems, and ETL pipelines to optimize data processing across the product.",
    technologies: [
      "Spring Boot",
      "FastAPI",
      "Docker",
      "Kafka",
      "MyBatis",
      "Liquibase",
      "Feign",
      "Redis",
      "ClickHouse",
    ],
  },
];
