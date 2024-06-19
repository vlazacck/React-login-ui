import React from 'react';
import './Signup.css'; // Import SignUp component CSS

const SignUp = ({ darkMode }) => {
  return (
    <div className={`signup-page ${darkMode ? 'dark-mode' : ''}`}>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
