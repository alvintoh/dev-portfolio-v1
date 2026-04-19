type Experience = {
  period: string;
  title: string;
  company: string;
  location?: string;
  companyUrl: string;
  description: string;
  stack: string[];
};

export const experienceData: Experience[] = [
  {
    period: "2024 — PRESENT",
    title: "Software Engineer",
    company: "Sofico",
    location: "Sydney, Australia",
    companyUrl: "https://sofico.global/en/",
    description:
      "Designed and developed core ERP modules for a fleet management platform, implementing high-scale API integrations with major automotive clients and optimizing PR workflows by migrating legacy processes to GitHub Actions with automated CI/CD quality gates.",
    stack: [
      "Java 17",
      "Jakarta EE",
      "JBoss",
      "GitHub Actions",
      "PostgreSQL",
      "OpenAPI",
      "Podman",
      "JUnit",
    ],
  },
  {
    period: "2020 — 2024",
    title: "Senior Software Engineer",
    company: "Univers",
    location: "Singapore",
    companyUrl: "https://univers.com",
    description:
      "Developed AIoT platforms including Singapore's first Virtual Power Plant and Battery Storage System, integrating new energy systems for B2B clients while building carbon credit portals, fault detection systems, and ETL pipelines to optimize data processing across the product.",
    stack: [
      "Java 17",
      "Python",
      "Spring Boot",
      "FastAPI",
      "Kafka",
      "ClickHouse",
      "Redis",
      "PostgreSQL",
      "PowerJob",
    ],
  },
];
