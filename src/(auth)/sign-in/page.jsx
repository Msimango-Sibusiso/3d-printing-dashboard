import AuthForm from "@/layouts/auth-form";
import { signInSchema } from "@/lib/validations";
import React from "react";

const Page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={() => {}}
  />
);

export default Page;
