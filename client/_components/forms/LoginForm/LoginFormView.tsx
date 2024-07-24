/* This tells NextJS to render this using the client side rather than server side */
"use client";

import DefaultBtn from "@/_components/buttons/DefaultButton";
import styles from "./form.module.css";
import useLoginForm from "./useLoginFormPresenter";
import Link from "next/link";
import FormLabel from "@/_components/labels/FormLabel";

export default function LoginForm() {
  const { handleInputChange, handleLogin, loginForm } = useLoginForm();
  return (
    <form className={styles.loginForm}>
      <FormLabel labelText="Username" />
      <input
        name="username"
        onChange={(e) => handleInputChange(e)}
        className={styles.input}
      />
      <FormLabel labelText="Password" />
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
      <Link className={styles.link} href="/signup">
        Sign Up
      </Link>
    </form>
  );
}
