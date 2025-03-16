import AuthForm from "@/layouts/auth-form";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }}
    onSubmit={() => {}}
  />
);

export default Page;
