import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const AuthForm = ({ type, schema, defaultValues, onSubmit }) => {
  const navigate = useNavigate();
  const isSignIn = type === "SIGN_IN";

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = async (data) => {
    const result = await onSubmit(data);

    if (result.success) {
      toast.success(isSignIn ? "You have successfully signed in." : "You have successfully signed up.");

      navigate("/");
    } else {
      toast.error(`Error ${isSignIn ? "signing in!" : "signing up!"}`, {
        description: result.error ?? "An error occurred.",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">{isSignIn ? "Welcome back to BookWise" : "Create your library account"}</h1>
      <p className="text-light-100">
        {isSignIn
          ? "Access the vast collection of resources and stay updated"
          : "Please complete all fields and upload a valid university ID to gain access to the library"}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full space-y-6"
        >
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">{FIELD_NAMES[field.name]}</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type={FIELD_TYPES[field.name]}
                      {...field}
                      className="form-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="submit"
            className="form-btn"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>

      <p className="text-center text-base font-medium">
        {isSignIn ? "New to BookWise? " : "Already have an account? "}
        <Link
          to={isSignIn ? "/sign-up" : "/sign-in"}
          className="text-primary font-bold"
        >
          {isSignIn ? "Create an account" : "Sign in"}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
