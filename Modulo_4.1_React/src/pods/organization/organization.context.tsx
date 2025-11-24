import React from "react";

interface OrganizationContextModel {
  organization: string;
  setOrganization: (organization: string) => void;
}

export const OrganizationContext =
  React.createContext<OrganizationContextModel>({
    organization: "lemoncode",
    setOrganization: () => undefined,
  });

export const OrganizationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [organization, setOrganization] = React.useState<string>("lemoncode");

  return (
    <OrganizationContext.Provider value={{ organization, setOrganization }}>
      {children}
    </OrganizationContext.Provider>
  );
};

// Hook para consumir el contexto
export const useOrganization = (): OrganizationContextModel => {
  const context = React.useContext(OrganizationContext);
  if (!context) {
    throw new Error(
      "useOrganization debe usarse dentro de OrganizationProvider"
    );
  }
  return context;
};
