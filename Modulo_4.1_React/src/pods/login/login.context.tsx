import React from "react";

interface LoginContextModel {
  login: string;
  setLogin: (login: string) => void;
}

export const LoginContext = React.createContext<LoginContextModel>({
  login: "",
  setLogin: () => undefined,
});

export const LoginProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [login, setLogin] = React.useState<string>("");

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

// Hook para consumir el contexto
export const useLogin = (): LoginContextModel => {
  const context = React.useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin debe usarse dentro de LoginProvider");
  }
  return context;
};
