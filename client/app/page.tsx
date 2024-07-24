import Image from "next/image";
import LoginForm from "@/_components/forms/LoginForm/LoginFormView";
import styles from "./landing.module.css";
import logo from "../public/logo_sm_no_bg.png";
import "./globals.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Image src={logo} alt="scout-image" className={styles.image} />
      </div>
      <LoginForm />
    </main>
  );
}
