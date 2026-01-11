import styles from "./Home.module.css";
import profileImg from "./assets/image.jpg"; // add your image here

export default function Home() {
  return (
    <section className={styles.home}>
      {/* Left Content */}
      <div className={styles.left}>
        <h1>
          Hi, I’m <span>Goveshwar Teli</span>
        </h1>

        <h3>Python, Django & Frontend Developer</h3>

        <p>
          I am a passionate software engineer with a strong foundation in
          full-stack development,frontend development and backend technologies. I enjoy building
          scalable, user-friendly web applications.
        </p>

        <div className={styles.details}>
          <p><b>College:</b> BLDEA's V P Dr PG Halakatti College of Engineering & Technology College in Bijapur, Karnataka</p>
          <p><b>Degree:</b> B.E</p>
          <p><b>Stream:</b> Electronics and Communication</p>
          <p><b>Passout Year:</b> 2025</p>
        </div>

        <div className={styles.buttons}>
          <a href="/projects">View Projects</a>
          <a href="/contact" className={styles.outline}>
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className={styles.right}>
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  );
}
