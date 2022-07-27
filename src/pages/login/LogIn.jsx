import React from "react";
import { useState } from "react";
import pts from "../../assets/pts_logo_full.svg";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
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
    <div className="form">
      <form onSubmit={onHandlesubmit}>
        <div>
          <img id="image" src={pts} alt=" PTS" />
        </div>
        <input
          id="inputEmail"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
          id="inputPassword"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div id="forgot">Forgot Password?</div>
        <button id="login-label" type="submit" onClick={onHandlesubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LogIn;
