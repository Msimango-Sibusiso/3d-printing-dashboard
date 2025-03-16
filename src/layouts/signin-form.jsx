import React from "react";
import { FormContainer } from "./form-container";

export const SignInForm = ({ onSwitch }) => {
  return (
    <FormContainer>
      <h1 className="auth-title">Sign In</h1>
      <form action="">
        <div className="input-styles">
          <input
            className="input-sh"
            type="email"
            placeholder=""
            autoComplete="email"
            id="email"
            required
          />
          <label
            htmlFor="email"
            className="input-label"
          >
            Email
          </label>
        </div>
        <div className="input-styles">
          <input
            className="input-sh"
            type="password"
            placeholder=""
            autoComplete="current-password"
            id="password"
            required
          />
          <label
            htmlFor="password"
            className="input-label"
          >
            Password
          </label>
        </div>
        <button className="auth-btn my-6">Sign In</button>
      </form>
      <div>
        <p className="text-xs text-slate-600">
          Don't have an account?{" "}
          <span
            onClick={onSwitch}
            className="cursor-pointer font-semibold"
          >
            Sign Up
          </span>
        </p>
      </div>
      <div className="my-4 text-xs text-slate-600">
        <span className="cursor-pointer font-semibold">Forgot password?</span>
      </div>
    </FormContainer>
  );
};
