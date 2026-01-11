import styles from "./Skills.module.css";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import {
  SiDjango,
  SiRedux,
  SiMysql,
  SiPostman,

} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "AWS", icon: <FaAws /> },
 
];

export default function Skills() {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <p className={styles.subtitle}>
        Technologies & tools I use to build scalable applications
      </p>

      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.card}>
            <span className={styles.icon}>{skill.icon}</span>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
