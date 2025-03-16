import React, { useState } from "react";
import { AuthImage } from "../../layouts/auth-image";
import { motion } from "framer-motion";
import { SignUpForm } from "../../layouts/signup-form";
import { SignInForm } from "../../layouts/signin-form";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <AuthImage isSignUp={isSignUp} />
        <motion.div
          className="auth-card-bg"
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: isSignUp ? "-100%" : "0%",
            opacity: 1,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          {isSignUp ? <SignInForm onSwitch={() => setIsSignUp(!isSignUp)} /> : <SignUpForm onSwitch={() => setIsSignUp(!isSignUp)} />}
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
