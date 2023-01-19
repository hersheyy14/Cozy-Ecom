import "./register.css";
import { useState } from "react";

const Register = (props) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, props.email);
    props.setEmail("");
    props.setPassword("");
    setName("");
  };
  return (
    <div className="register-container">
      <h1 className="register-title">Create an Account</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <lable className="register-lable" htmlFor="name">
          Enter Your Name
        </lable>
        <input
          className="register-input"
          type="text"
          id="name"
          name="name"
          placeholder="cozy"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <lable className="register-lable" htmlFor="email">
          Enter Your Email
        </lable>
        <input
          className="register-input"
          type="email"
          id="email"
          name="email"
          placeholder="cozy@gmail.com"
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
          required
        />
        <lable className="register-lable" htmlFor="password">
          Enter Your Password
        </lable>
        <input
          className="register-input"
          type="password"
          id="password"
          name="password"
          placeholder="********"
          value={props.password}
          pattern=".{8,}"
          onChange={(e) => props.setPassword(e.target.value)}
          required
        />
        <button className="register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
