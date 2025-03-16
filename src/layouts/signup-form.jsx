import React, { useState } from "react";
import { FormContainer } from "./form-container";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const SignUpForm = ({ onSwitch }) => {
  const [docData, setDocData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    role: "Admin",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showMatchMessage, setShowMatchMessage] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDocData((prevDocData) => ({
      ...prevDocData,
      [name]: value,
    }));

    if (name === "password" || name === "confirmPassword") {
      const isMatch = e.target.form.password.value === e.target.form.confirmPassword.value;
      setPasswordMatch(isMatch);

      // If passwords match, show the message and hide it after 5 seconds
      if (isMatch) {
        setShowMatchMessage(true);
        setTimeout(() => {
          setShowMatchMessage(false);
        }, 600); // Hide message in less than a second
      }
    }
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isCheckboxChecked) {
      setError("You must agree to the Terms & Conditions");
      return;
    }

    if (!passwordMatch) {
      setError("Passwords do not match!");
      return;
    }

    try {
      // New Axios POST request
      const response = await axios.post("http://localhost:5264/api/User/Register", docData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);
      // console.log("Full response data:", response.data);

      // Check for response errors
      if (response.data.success === false) {
        setError(response.data.error);
      } else {
        const successMessage = response.data.description;
        setError("");
        // Redirect to sign-in after successful registration
        toast.success(successMessage, {
          position: "top-center",
        });
        navigate("/sign-in");
      }
    } catch (error) {
      // Catch and display the error message from the API
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message || "An error occurred";
        setError(errorMessage); // Set the error for display on the page

        // Show error toast notification
        toast.error(errorMessage, {
          position: "bottom-center",
        });
      } else {
        // Handle other types of errors (e.g., network issues)
        const genericErrorMessage = error.message || "An error occurred";
        setError(genericErrorMessage);

        toast.error(genericErrorMessage, {
          position: "bottom-center",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <h1 className="auth-title">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-styles">
          <input
            className="input-sh"
            type="text"
            placeholder=""
            autoComplete="given-name"
            id="firstName"
            name="firstName"
            required
            value={docData.firstName}
            onChange={handleChange}
          />
          <label
            htmlFor="firstName"
            className="input-label"
          >
            First Name(s)
          </label>
        </div>
        <div className="input-styles">
          <input
            className="input-sh"
            type="text"
            placeholder=""
            autoComplete="family-name"
            id="lastName"
            name="lastName"
            required
            value={docData.lastName}
            onChange={handleChange}
          />
          <label
            htmlFor="lastName"
            className="input-label"
          >
            Last Name
          </label>
        </div>
        <div className="input-styles">
          <input
            className="input-sh"
            type="email"
            placeholder=""
            autoComplete="email"
            id="email"
            name="email"
            required
            value={docData.email}
            onChange={handleChange}
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
            autoComplete="new-password"
            id="password"
            name="password"
            required
            value={docData.password}
            onChange={handleChange}
          />
          <label
            htmlFor="password"
            className="input-label"
          >
            Password
          </label>
        </div>
        <div className="input-styles">
          <input
            className="input-sh"
            type="password"
            placeholder=""
            autoComplete="new-password"
            id="confirmPassword"
            name="confirmPassword"
            required
            value={docData.confirmPassword}
            onChange={handleChange}
          />
          <label
            htmlFor="confirmPassword"
            className="input-label"
          >
            Confirm Password
          </label>
        </div>
        {/* Password match message */}
        {docData.confirmPassword && !passwordMatch && <p className="text-red-500">Passwords do not match</p>}
        {docData.confirmPassword && passwordMatch && showMatchMessage && <p className="text-green-500">Passwords match</p>}
        <div className="tc">
          <label
            htmlFor="checkbox"
            className="text-xs"
          >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              required
              onChange={handleCheckboxChange}
            />{" "}
            I agree to the{" "}
            <Link
              to="/terms"
              className="hover:text-v-1/75 transition-all ease-in-out"
            >
              <span className="cursor-pointer font-semibold">Terms & Conditions</span>
            </Link>
          </label>
        </div>
        {error && <p className="text-v-1/75 error">{error}</p>}
        <button
          className="auth-btn my-6"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <div>
        <p className="text-xs text-slate-600">
          Already have an account?{" "}
          <span
            onClick={onSwitch}
            className="cursor-pointer font-semibold"
          >
            Sign In
          </span>
        </p>
      </div>
    </FormContainer>
  );
};
