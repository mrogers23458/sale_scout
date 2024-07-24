import LoginForm from "@/_components/forms/LoginForm/LoginFormView";
import styles from "./page.module.css";
import "./globals.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}></div>
      <LoginForm />
    </main>
  );
}
