import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>
      <p>Let’s build something impactful together</p>

      <div className={styles.contactCard}>
        <a href="guheswarteli@gmail.com">
          Email: guheswarteli@gmail.com
        </a>
        <a href="https://github.com/Goveshwar" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/in/goveshwar-teli" target="_blank">
         LinkedIn
        </a>

        <button className={styles.contactBtn}>
          Get In Touch
        </button>
      </div>
    </section>
  );
}
