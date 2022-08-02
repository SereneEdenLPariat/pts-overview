import React from "react";
import { useState } from "react";
import { ReactComponent as pts } from "../../assets/pts_logo_full.svg";
import { useNavigate } from "react-router-dom";
// import "./LogIn.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [error, setError] = useState("");
  const navigate = useNavigate();

  const onHandlesubmit = (e) => {
    e.preventDefault();

    navigate("/dashboard/Overview");
    setEmail("");
    setPassword("");
  };

  return (
    <div data-testid="login">
      <form onSubmit={onHandlesubmit}>
        <div data-testid="image">
          <img id="image" src={pts} alt=" PTS" />
        </div>
        <input
          data-testid="input_email"
          id="inputEmail"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
          data-testid="input_password"
          id="inputPassword"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div data-testid="forgot_password" id="forgot">
          Forgot Password?
        </div>
        <button id="login-label" type="submit" onClick={onHandlesubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
