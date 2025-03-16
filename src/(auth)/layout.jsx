import React from "react";
import Logo from "../assets/unisaColors.png";
import AuthIll from "../assets/cardImg.png";

const Layout = ({ children }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row">
            <img
              src={Logo}
              alt="Logo"
              width={37}
              height={37}
              className="rounded-2xl"
            />
            <h1 className="text-2xl font-bold">3D Printing</h1>
          </div>
          <div className="">{children}</div>
        </div>
      </section>
      <section className="auth-illustration">
        <img
          src={AuthIll}
          alt="Auth Ill"
          width={1000}
          height={1000}
          className="size-full object-cover"
        />
      </section>
    </main>
  );
};

export default Layout;
