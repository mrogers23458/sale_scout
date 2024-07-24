import React, { useState } from "react";

interface LoginFormState {
  username: string;
  password: string;
  loading: boolean;
}

const defaultState: LoginFormState = {
  username: "",
  password: "",
  loading: false,
};

const useLoginFormPresenter = () => {
  /* state controls for login form */
  const [loginForm, setLoginForm] = useState<LoginFormState>(defaultState);

  /* handlers */
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const { username, password } = loginForm;
    console.log("logged in", { username, password });
  };

  return { loginForm, handleInputChange, handleLogin };
};

export default useLoginFormPresenter;
