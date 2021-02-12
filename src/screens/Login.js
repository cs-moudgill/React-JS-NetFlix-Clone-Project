import React, { useState } from "react";
import "./Login.css";
import SignUpScreen from "./SignUpScreen";

function Login() {
  const [signin, setSignin] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginBackground">
        <img
          className="loginLogo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={()=>setSignin(true)} className="loginButton">
          Sign In
        </button>
        <div className="loginGradient" />
        </div>
        <div className="loginBody">
        {signin ? (
          <SignUpScreen />
        ):(
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginInput">
              <form>
                <input type="email" placeholder="Email Address" />
              <button 
              onClick={()=>setSignin(true)} 
              className="loginGetStarted">GET STARTED</button>
              </form>
            </div>
          </>
        )
        }
          
        </div>
    </div>
  );
}

export default Login;
