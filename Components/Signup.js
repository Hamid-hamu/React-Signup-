
import React from 'react';
import './Signup.css';
import { useNavigate } from 'react-router';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <div className="brand-header">
          <h1>REEM <span>AI</span></h1>
          <p>Your Intelligent Future Starts Here</p>
        </div>
        <form className="signup-form">
          <div className="input-group">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <button type="submit" className="neon-button">Create Account</button>
        </form>

        <div className="social-login">
          <p>Or sign up with:</p>
          <div className="social-buttons">
            <button className="social google"><i className="bi bi-google"></i> Google</button>
            <button className="social facebook"><i className="bi bi-facebook"></i> Facebook</button>
            <button className="social apple"><i className="bi bi-apple"></i> Apple</button>
          </div>
        </div>

        <div className="login-link">
          Already have an account?{" "}
          <span onClick={() => navigate('/')} style={{ cursor: 'pointer', color: '#0ff', fontWeight: 'bold' }}>
            Login here
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
