import React from "react";
import * as am from "./api/api.model";
import { getLogin } from "./api/api";
import { AuthLayout } from "@/layouts";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./login.context";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const { login, setLogin } = useLogin();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getLogin({ username, password } as am.Login).then((isValid) => {
      if (isValid) {
        setLogin(username);
        navigate("/list");
      } else {
        alert("User / password not valid, psst... admin / test");
      }
    });
  };

  return (
    <AuthLayout>
      <form onSubmit={handleNavigation}>
        <h2>Hello from login page</h2>

        <div>
          <div>
            <label>Username: </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <p></p>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <p></p>
        <button type="submit">Login</button>
      </form>
    </AuthLayout>
  );
};
