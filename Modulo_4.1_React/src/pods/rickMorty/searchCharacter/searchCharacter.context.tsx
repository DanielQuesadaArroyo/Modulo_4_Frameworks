import React from "react";

interface CharacterContextModel {
  character: string;
  setCharacter: (character: string) => void;
}

export const CharacterContext = React.createContext<CharacterContextModel>({
  character: "",
  setCharacter: () => undefined,
});

export const CharacterProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [character, setCharacter] = React.useState<string>("");

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

// Hook para consumir el contexto
export const useCharacter = (): CharacterContextModel => {
  const context = React.useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacter debe usarse dentro de CharacterProvider");
  }
  return context;
};
