import "./login.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "https://fakestoreapi.com/auth/login";

const postLoginData = async (url, data) => {
  try {
    let result = await axios.post(url, data);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error, "error");
    return { errorMessage: error.message };
  }
};

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let postData = {
      username: email,
      password: password,
    };
    let res = await postLoginData(URL, postData);
    console.log(res);
    if (res.error) {
      alert(res.message);
      return;
    }
    alert("successfully logged in");
    navigate("/");
  };
  return (
    <div className="login-container">
      <h1 className="login-title">Login Form</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label className="login-lable" htmlFor="email">
          Enter Your Email
        </label>
        <input
          className="login-input"
          type="email"
          id="email"
          name="email"
          placeholder="cozy@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="login-lable" htmlFor="password">
          Enter Your Password
        </label>
        <input
          className="login-input"
          type="password"
          id="password"
          name="password"
          placeholder="********"
          value={password}
          // pattern=".{8,}"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
