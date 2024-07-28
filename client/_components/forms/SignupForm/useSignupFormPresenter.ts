import React, { useState } from "react";

interface SignupFormState {
  email: String;
  username: string;
  password: string;
  repeat: String;
  loading: boolean;
}

const defaultState: SignupFormState = {
  email: "",
  username: "",
  password: "",
  repeat: "",
  loading: false,
};

const useSignupFormPresenter = () => {
  /* state controls for login form */
  const [signupForm, setSignupForm] = useState<SignupFormState>(defaultState);

  /* handlers */
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSignupForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = () => {
    const { email, username, password, repeat } = signupForm;
    console.log("signed up", { username, password });
  };

  return { signupForm, handleInputChange, handleSignup };
};

export default useSignupFormPresenter;
