import React from "react";
import { useLogin } from "@/pods/login/login.context";

export const Header: React.FC = () => {
  const { login } = useLogin();

  return <div className="layout-app-header">User {login} in</div>;
};
