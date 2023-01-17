import "./login.css";

const Login = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-container">
      <h1 className="login-title">Login Form</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <lable className="login-lable" htmlFor="email">
          Enter Your Email
        </lable>
        <input
          className="login-input"
          type="email"
          id="email"
          name="email"
          placeholder="cozy@gmail.com"
          value={props.email}
          onChange={(e) => props.setEmail(e.target.value)}
          required
        />
        <lable className="login-lable" htmlFor="password">
          Enter Your Password
        </lable>
        <input
          className="login-input"
          type="password"
          id="password"
          name="password"
          placeholder="********"
          value={props.password}
          pattern=".{8,}"
          onChange={(e) => props.setPassword(e.target.value)}
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
