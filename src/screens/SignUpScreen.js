import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,  //captures the user information during signup.
        passwordRef.current.value
      )
      .then((authUser) => { //user information stored in authUser.
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(  //this method is used to keep the signed information in the browser.
        emailRef.current.value,
        passwordRef.current.value
    ).then((authUser)=>{
        console.log(authUser);
    }).catch((error)=>{
        alert(error.message);
    })
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="SignupGray">New to Netflix?</span> &nbsp;
          <span className="SignupLink" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
