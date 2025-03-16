import React from "react";

const AddUser = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Add User</h1>
      <div className="card w-1/2">
        <form action="">
          {/*First Name*/}
          <div className="input-styles">
            <input
              className="input-sh"
              type="text"
              placeholder=""
              autoComplete="given-name"
              id="firstName"
              required
            />
            <label
              htmlFor="firstName"
              className="input-label"
            >
              First Name(s)
            </label>
          </div>
          {/*Last Name*/}
          <div className="input-styles">
            <input
              className="input-sh"
              type="text"
              placeholder=""
              autoComplete="family-name"
              id="lastName"
              required
            />
            <label
              htmlFor="lastName"
              className="input-label"
            >
              Last Name
            </label>
          </div>
          {/*Email*/}
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
          {/*Address*/}
          <div className="input-styles">
            <input
              className="input-sh"
              type="text"
              placeholder=""
              autoComplete="address-line1"
              id="streetName"
              required
            />
            <label
              htmlFor="streetName"
              className="input-label"
            >
              Street Name
            </label>
          </div>
          <div className="input-styles">
            <input
              className="input-sh"
              type="text"
              placeholder=""
              autoComplete="address-level2"
              id="suburb"
              required
            />
            <label
              htmlFor="suburb"
              className="input-label"
            >
              Suburb
            </label>
          </div>
          <div className="input-styles">
            <input
              className="input-sh"
              type="text"
              placeholder=""
              autoComplete="postal-code"
              id="postalCode"
              required
            />
            <label
              htmlFor="postalCode"
              className="input-label"
            >
              Postal code
            </label>
          </div>
          <div className="input-styles">
            <input
              className="input-sh"
              type="text"
              placeholder=""
              autoComplete="address-level2"
              id="city"
              required
            />
            <label
              htmlFor="city"
              className="input-label"
            >
              City
            </label>
          </div>
          <div className="input-styles">
            <input
              className="input-sh"
              type="text"
              placeholder=""
              autoComplete="country"
              id="country"
              required
            />
            <label
              htmlFor="country"
              className="input-label"
            >
              Country
            </label>
          </div>
          {/*Password*/}
          <div className="input-styles">
            <input
              className="input-sh"
              type="password"
              placeholder=""
              autoComplete="new-password"
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
          <button className="auth-btn my-6">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
