import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useOrganization } from "./organization.context";

export const Organization: React.FC = () => {
  const { organization, setOrganization } = useOrganization();

  const [inputValue, setInputValue] = React.useState(organization);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrganization(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="organization-input"
        label="Nombre de la organización"
        variant="outlined"
        sx={{
          marginRight: 2,
        }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <Button
        variant="contained"
        sx={{
          borderRadius: 2,
          p: 2,
        }}
        type="submit"
      >
        Buscar
      </Button>
    </form>
  );
};
