import { CREATE_USER } from "@/graphql/mutations/mutations";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SignupFormState {
  email: String;
  username: string;
  password: string;
  repeat: String;
  loading: boolean;
}

interface ErrorState {
  errorMessage: String | null;
}

const defaultState: SignupFormState = {
  email: "",
  username: "",
  password: "",
  repeat: "",
  loading: false,
};

const defaultErrorState: ErrorState = {
  errorMessage: null,
};

const useSignupFormPresenter = () => {
  const router = useRouter();
  /* state controls for login form */
  const [signupForm, setSignupForm] = useState<SignupFormState>(defaultState);
  const [errors, setErrors] = useState<ErrorState>(defaultErrorState);
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  /* handlers */
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSignupForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { email, username, password, repeat } = signupForm;
    if (password !== repeat) {
      setErrors({ errorMessage: "Passwords do not match." });
    }

    if (!email || !username || !password || !repeat) {
      setErrors({ errorMessage: "All fields are required." });
    }

    if (email && username && password && repeat && password === repeat) {
      await createUser({
        variables: {
          username,
          email,
          password,
        },
      });
    }
  };

  if (data) {
    router.push("/dashboard");
  }

  return {
    signupForm,
    handleInputChange,
    handleSignup,
    error,
    loading,
    data,
    errors,
  };
};

export default useSignupFormPresenter;
