import React from "react";
import "../css/LoginPage.css";
function Login() {
  // Login page accessible to all
  return (
    <div className="flex-center login-card">
      <h1 className="text-4xl w-full px-8">Login</h1>
      <form className=" login-form" action="" method="post">
        <input type="hidden" name="" />
        {/* <label>USERNAME</label> */}
        <input
          className="input-text"
          type="text"
          name="username"
          placeholder=" Enter username"
          id=""
        />
        {/* <label>PASSWORD</label> */}
        <input
          className="input-text"
          type="password"
          name="password"
          placeholder="Enter password"
          id=""
        />
        <input type="submit" className="login-btn" value="login" />
      </form>
    </div>
  );
}

export default Login;
