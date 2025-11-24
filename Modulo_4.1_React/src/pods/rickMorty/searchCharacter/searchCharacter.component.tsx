import React from "react";
import TextField from "@mui/material/TextField";
import { useCharacter } from "./searchCharacter.context";

export const SearchCharacter: React.FC = () => {
  const { character, setCharacter } = useCharacter();
  const [inputValue, setInputValue] = React.useState(character);

  // Debounce: espera 1000ms después de que el usuario deje de escribir
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCharacter(inputValue);
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputValue, setCharacter]);

  return (
    <TextField
      id="character-input"
      label="Nombre del personaje"
      variant="outlined"
      sx={{
        marginRight: 2,
      }}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
