import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      await API.post("/v1/users/login", {
        email,
        password,
      });

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={loginHandler}>
        <div className="mb-3">
          <label>Email</label>

          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>

          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-success"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;