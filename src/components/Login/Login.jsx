import React from 'react';
import './Login.css';

const Login = ({ mode }) => {
  return (
    <div className={`login-page ${mode}-mode`}>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div>
            <label>Email</label>
            <input type="email" required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
