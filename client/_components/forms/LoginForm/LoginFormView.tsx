/* This tells NextJS to render this using the client side rather than server side */
"use client";

import DefaultBtn from "@/_components/buttons/DefaultButton";
import styles from "./form.module.css";
import useLoginForm from "./useLoginFormPresenter";

export default function LoginForm() {
  const { handleInputChange, handleLogin, loginForm } = useLoginForm();
  return (
    <form className={styles.loginForm}>
      <label className={styles.label}>Username</label>
      <input
        name="username"
        onChange={(e) => handleInputChange(e)}
        className={styles.input}
      />
      <label className={styles.label}>Password</label>
      <input
        onChange={(e) => handleInputChange(e)}
        type="password"
        name="password"
        className={styles.input}
      />
      <DefaultBtn
        onClick={handleLogin}
        innerText="Login"
        loading={loginForm.loading}
        loadingText="Logging in..."
      />
    </form>
  );
}
