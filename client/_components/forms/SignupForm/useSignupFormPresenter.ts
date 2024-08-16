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

  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, username, password, repeat } = signupForm;
    console.log("signed up", { username, password, email, repeat });
  };

  return { signupForm, handleInputChange, handleSignup };
};

export default useSignupFormPresenter;
