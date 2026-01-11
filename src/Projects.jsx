import styles from "./Projects.module.css";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: [
      "Built a modern multi-page portfolio using React and React Router.",
      "Implemented component-level CSS Modules with responsive design.",
      "Designed a clean UI to showcase skills and projects professionally."
    ],
    tech: ["React", "JavaScript", "CSS Modules", "Vite"],
    github: "https://github.com/Goveshwar/Goveshwar-Teli---Portfolio",
  },
  {
    title: "Bank Management System",
    description: [
      "Developed a GUI-based banking application using Python and Tkinter managing 100+ customer accounts.",
      "Implemented robust input validation and exception handling with zero runtime failures.",
      "Designed layered architecture separating UI, business logic, and data handling."
    ],
    tech: ["Python", "Tkinter", "SQLite"],
    github: "https://github.com/Goveshwar/Bank-management-system",
  },
  {
    title: "Weather Application",
    description: [
      "Built a REST API–driven application to fetch real-time weather data.",
      "Processed and validated JSON responses with comprehensive error handling.",
      "Modularized request logic to improve code reusability."
    ],
    tech: ["Python", "REST API", "JSON"],
    github: "https://github.com/Goveshwar/Open-Weather-API",
  },
  {
    title: "ShopSphere (E-Commerce Application)",
    description: [
      "Developed an e-commerce application with product listing and cart management.",
      "Focused on component reusability and state management.",
      "Implemented dynamic UI updates for improved user experience."
    ],
    tech: ["Django", "Python", "CSS"],
    github: "https://github.com/Goveshwar/ShopSphere-Web-Using-Django",
  },
  {
    title: "Student Management System",
    description: [
      "Developed a RESTful backend using Django managing 1,000+ student records.",
      "Implemented authentication and request validation for secure APIs.",
      "Optimized ORM queries reducing API response time by ~25%."
    ],
    tech: ["Python", "Django", "SQL", "REST API"],
    github: "https://github.com/Goveshwar/Student-management-system-Django",
  },
  {
    title: "Flight Management System",
    description: [
      "Built a Django-based Flight Management System managing 1,000+ flight and booking records using Python and SQL.",
      "Implemented REST APIs and CRUD operations, reducing data errors by 30% through validation and structured backend logic.",
      "Tested and debugged application workflows, achieving 99% functional accuracy and production-ready stability."
    ],
    tech: ["Python", "Django", "SQL", "Web Applications"],
    github: "https://github.com/Goveshwar/Flight-management-system-Using-Django",
  },
  {
    title: "Hospital Management System",
    description: [
      "Developed a system to manage patients, doctors, and appointments.",
      "Handled real-world workflows with role-based access concepts.",
      "Designed clean and user-friendly interfaces."
    ],
    tech: ["React", "HTML", "CSS"],
    github: "https://github.com/Goveshwar/Hospital-Booking-system--React.js",
  },
  {
    title: "Real Estate Management Platform",
    description: [
      "Built a property listing and management platform.",
      "Enabled users to add, view, and manage property listings.",
      "Focused on structured data presentation and usability."
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Goveshwar/Real-Estate-Booking-management-system",
  },
];

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <p className={styles.subtitle}>
        Academic and personal projects demonstrating frontend, backend, and full-stack expertise
      </p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} className={styles.card}>
            <h3>{project.title}</h3>

            <ul className={styles.points}>
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <div className={styles.tech}>
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
