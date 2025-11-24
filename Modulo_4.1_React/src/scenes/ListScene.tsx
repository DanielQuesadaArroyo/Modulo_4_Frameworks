import { routes } from "@/router";
import { ListPod } from "@/pods/list";
import { Organization } from "@/pods/organization/organization.component";
import React from "react";
import { Link } from "react-router-dom";

export const ListScene: React.FC = () => {
  return (
    <div>
      <h1>Miembros de la organización GitHub</h1>
      <p></p>
      <Organization />
      <p></p>
      <ListPod />
      <p></p>
      <Link to={routes.rickMorty}>
        <span>Rick and Morty</span>
      </Link>
    </div>
  );
};
