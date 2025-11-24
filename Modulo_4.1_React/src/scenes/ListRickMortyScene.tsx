import React from "react";
import { ListRickMortyPod } from "../pods/rickMorty/list/list.pod";
import { SearchCharacter } from "../pods/rickMorty/searchCharacter";
import { Link } from "react-router-dom";
import { routes } from "@/router";

export const ListRickMortyScene: React.FC = () => {
  return (
    <div>
      <h1>Personaje de Rick and Morty</h1>
      <p></p>
      <SearchCharacter />
      <p></p>
      <ListRickMortyPod />
      <p></p>
      <Link to={routes.list}>
        <span>Listado de organizaciones</span>
      </Link>
    </div>
  );
};
