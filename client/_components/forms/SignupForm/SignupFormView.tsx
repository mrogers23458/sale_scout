/* This tells NextJS to render this using the client side rather than server side */
"use client";

import DefaultBtn from "@/_components/buttons/DefaultButton";
import styles from "./form.module.css";
import useSignupFormPresenter from "./useSignupFormPresenter";
import Link from "next/link";
import FormLabel from "@/_components/labels/FormLabel";
import { FormEvent, FormEventHandler } from "react";

export default function SignupForm() {
  const { handleInputChange, signupForm, handleSignup } =
    useSignupFormPresenter();

  return (
    <form className={styles.loginForm}>
      <FormLabel labelText="Email" />
      <input
        name="email"
        onChange={(e) => handleInputChange(e)}
        className={styles.input}
      />
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
      <FormLabel labelText="Repeat password" />
      <input
        onChange={(e) => handleInputChange(e)}
        type="password"
        name="repeat"
        className={styles.input}
      />
      <DefaultBtn
        onClick={(e) => handleSignup(e)}
        innerText="Sign up"
        loading={signupForm.loading}
        loadingText="Logging in..."
      />
      <Link className={styles.link} href="/">
        Home
      </Link>
    </form>
  );
}
