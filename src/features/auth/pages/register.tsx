import React from "react";
import { Logo } from "../../../components/logo";
import { RegisterForm } from "../components/register-form";

export function RegisterPage() {
  return (
    <div className="Login">
      <Logo />

      <RegisterForm />
    </div>
  );
}
