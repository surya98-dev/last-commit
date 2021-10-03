import React, { useState } from "react";
import { LoginRegisterForm } from "../components";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { updateCurrentUser } from "@firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { signup, login, currentUser } = useAuth();
  const router = useRouter();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(fields.email, fields.password);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    if (fields.password !== fields.confirmPassword) {
      setLoading(true);
      setError("Password does not match");
    } else {
      setError("");
    }
    if (error === "") {
      try {
        setError("");
        setLoading(true);
        await signup(fields);

        router.push("/");
      } catch (err) {
        setError(err.message);
      }
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-main px-4 sm:px-6 lg:px-8">
      <LoginRegisterForm
        isSignup={true}
        fields={fields}
        handleInputChange={handleInputChange}
        handleSignin={handleSignin}
        handleSignup={handleSignup}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default Register;
