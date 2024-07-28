import Image from "next/image";
import SignupForm from "@/_components/forms/SignupForm/SignupFormView";
import styles from "./page.module.css";
import logo from "../../public/logo_sm_no_bg.png";

export default function SignUp() {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <Image src={logo} alt="scout-image" className={styles.image} />
      </div>
      <SignupForm />
    </div>
  );
}
