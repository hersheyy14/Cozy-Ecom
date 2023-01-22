import "./register.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "https://fakestoreapi.com/users";

const postRegisterData = async (url, data) => {
  try {
    let result = await axios.post(url, data);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error, "error");
    return;
  }
};

const Register = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let postData = {
      email: email,
      username: name,
      password: password,
    };
    let res = await postRegisterData(URL, postData);
    console.log(res);
    if (res.error) {
      alert(res.message);
      return;
    }
    alert("successfully Registered");
    navigate("/");
  };
  return (
    <div className="register-container">
      <h1 className="register-title">Create an Account</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label className="register-lable" htmlFor="name">
          Enter Your Name
        </label>
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
        <label className="register-lable" htmlFor="email">
          Enter Your Email
        </label>
        <input
          className="register-input"
          type="email"
          id="email"
          name="email"
          placeholder="cozy@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="register-lable" htmlFor="password">
          Enter Your Password
        </label>
        <input
          className="register-input"
          type="password"
          id="password"
          name="password"
          placeholder="********"
          value={password}
          pattern=".{8,}"
          onChange={(e) => setPassword(e.target.value)}
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
