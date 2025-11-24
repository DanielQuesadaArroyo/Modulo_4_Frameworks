import { routes } from "@/router";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  character: {
    name: string;
    id: number;
    gender: string;
    url: string;
    image: string;
  };
}

export const Character: React.FC<Props> = ({ character }) => {
  return (
    <>
      <img src={character.image} alt={`${character.name} avatar`} />
      <span>{character.id}</span>
      <Link to={routes.rickMortyDetail(character.id.toString())}>
        <span>{character.name}</span>
      </Link>
    </>
  );
};
