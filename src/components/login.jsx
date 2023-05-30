import React, { useState } from "react";
import axios from "axios";
// import { useHistory} from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import "./login.css"
// email: asdf@asdf.asd
// password: asdfasdf


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    axios.post("http://localhost:4000/app/login", user)
      .then((response) => {
        console.log(response.data);
        // Redirect to desired page upon successful login
        window.location = "/adminpanel";
      })
      .catch((error) => {
        console.error(error);
        
        setError("Invalid credentials. Please try again.");
      });
  };

  return (
    <div className="login">
    <div className="login-container">
      <h1>Admin Login</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          className="adminEmial"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          required
          className="adminPass"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" className="adminlog">Login</button>
      </form>
    </div></div>
  );
};

export default Login;
