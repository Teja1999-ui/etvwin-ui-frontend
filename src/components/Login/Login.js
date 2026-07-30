import React, { useState } from "react";
import {
  FaGoogle,
  FaFacebookF,
  FaApple,
  FaEnvelope,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";
import "./Login.css";

const Login = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth-page">
      <div className={`auth-container ${isSignUp ? "active" : ""}`}>
        <div className="auth-box">

          {/* Close */}
          <button
            className="auth-popup-close"
            onClick={onClose}
          >
            ✕
          </button>

          {/* EMAIL LOGIN */}

          <div className="auth-form auth-signin">
            <form>

              <div className="auth-icon-circle">
                <FaEnvelope />
              </div>

              <h1>Email Login</h1>

              <div className="auth-social-icons">
                <a href="#"><FaGoogle /></a>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaApple /></a>
              </div>

              <span>Login using your Email Address</span>

              <div className="auth-input">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="auth-input">
                <FaEnvelope className="input-icon" />
                <input
                  type="password"
                  placeholder="Enter OTP"
                />
              </div>

              <button
                type="button"
                className="auth-btn"
              >
                Get OTP
                
              </button>

            </form>
          </div>

          {/* MOBILE LOGIN */}

          <div className="auth-form auth-signup">
            <form>

              <div className="auth-icon-circle">
                <FaMobileAlt />
              </div>

              <h1>Mobile Login</h1>

              <div className="auth-social-icons">
                <a href="#"><FaGoogle /></a>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaApple /></a>
              </div>

              <span>Login using your Mobile Number</span>

              <div className="auth-input">
                <FaMobileAlt className="input-icon" />
                <input
                  type="text"
                  placeholder="Mobile Number"
                />
              </div>

              <div className="auth-input">
                <FaEnvelope className="input-icon" />
                <input
                  type="text"
                  placeholder="Enter OTP"
                />
              </div>

              <button
                type="button"
                className="auth-btn"
              >
                Get OTP
                
              </button>

            </form>
          </div>

          {/* SLIDER */}

          <div className="auth-toggle-container">
            <div className="auth-toggle">

              <div className="auth-toggle-panel auth-toggle-left">

                <div className="auth-icon-circle large">
                  <FaEnvelope />
                </div>

                <h1>Email Login</h1>

                <p>
                  Login quickly using your email address and OTP.
                </p>

               <button
               type="button"
               className="auth-hidden-btn"
               onClick={() => setIsSignUp(false)}
               >
               Email Login <span className="btn-arrow">→</span>
              </button>
              </div>

              <div className="auth-toggle-panel auth-toggle-right">

                <div className="auth-icon-circle large">
                  <FaMobileAlt />
                </div>

                <h1>Mobile Login</h1>

                <p>
                  Login quickly using your mobile number and OTP.
                </p>


               <button
                  type="button"
                  className="auth-hidden-btn"
                  onClick={() => setIsSignUp(true)}
               >
               <span className="btn-arrow">←</span>
               <span>Mobile Login</span>
               </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;