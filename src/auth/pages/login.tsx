import React from 'react';
import { Logo } from '../../components/logo';
import { LoginForm } from '../components';

export function LoginPage() {
  return (
    <div className="Login">
      <Logo />
      <LoginForm />
    </div>
  );
}
