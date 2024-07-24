import LoginForm from "@/_components/forms/LoginForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}></div>
      <LoginForm />;
    </main>
  );
}
