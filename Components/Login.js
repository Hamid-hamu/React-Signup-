
import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="brand-header">
          <h1>REEM <span>AI</span></h1>
          <p>Welcome Back to Intelligence</p>
        </div>

        <form className="login-form">
          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="forgot-link">
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="neon-button">Sign In</button>
        </form>

        <div className="social-login">
          <p>Or sign in with:</p>
          <div className="social-buttons">
            <button className="social google"><i className="bi bi-google"></i> Google</button>
            <button className="social facebook"><i className="bi bi-facebook"></i> Facebook</button>
            <button className="social apple"><i className="bi bi-apple"></i> Apple</button>
          </div>
        </div>

        <div className="signup-link">
          Don’t have an account?{" "}
          <span onClick={() => navigate('/signup')} style={{ cursor: 'pointer', color: '#0ff', fontWeight: 'bold' }}>
            Create one
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
