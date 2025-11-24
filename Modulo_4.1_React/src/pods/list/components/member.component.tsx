import { routes } from "@/router";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  member: {
    login: string;
    id: string;
    avatar_url: string;
  };
}

export const Member: React.FC<Props> = ({ member }) => {
  return (
    <>
      <img src={member.avatar_url} alt={`${member.login} avatar`} />
      <span>{member.id}</span>
      <Link to={routes.detail(member.login)}>
        <span>{member.login}</span>
      </Link>
    </>
  );
};
