import React, { useState } from "react";
import { LoginRegisterForm } from "../components";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { signup, login } = useAuth();
  const history = useHistory();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(fields.email, fields.password);

      history.push("/");
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

        history.push("/");
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
        isSignup={false}
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

export default Login;
