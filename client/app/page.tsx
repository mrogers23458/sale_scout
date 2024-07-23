import Link from "next/link";
import styles from "./page.module.css";

const LoginForm = () => {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>Logo Here</div>
      <form className={styles.loginForm}>
        <label className={styles.label}>Username</label>
        <input className={styles.input} />
        <label className={styles.label}>Password</label>
        <input className={styles.input} />
        <button className={styles.loginButton}>Login</button>
      </form>
      <div className={styles.signUpContainer}>
        <Link href="/signup">Sign Up</Link>
      </div>
    </main>
  );
};

export default function Home() {
  return <LoginForm />;
}
