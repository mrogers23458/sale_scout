import styles from "./page.module.css";

export default function LoginForm() {
  return (
    <form className={styles.loginForm}>
      <label className={styles.label}>Username</label>
      <input className={styles.input} />
      <label className={styles.label}>Password</label>
      <input className={styles.input} />
      <button className={styles.loginButton}>Login</button>
    </form>
  );
}
