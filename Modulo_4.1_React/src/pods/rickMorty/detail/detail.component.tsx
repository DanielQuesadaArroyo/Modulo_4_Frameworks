import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router/routes";
import { RickMortyDetail } from "./detail.vm";

interface Props {
  character: RickMortyDetail;
}

export const DetailRickMorty: React.FC<Props> = (props) => {
  const { character } = props;

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {character.id}</h3>
      <p> id: {character.id}</p>
      <p> name: {character.name}</p>
      <p> type: {character.type}</p>
      <p> dimension: {character.dimension}</p>
      <p> url: {character.url}</p>
      <p> created: {character.created}</p>

      <Link to={routes.rickMorty}>Back to list page</Link>
    </>
  );
};
