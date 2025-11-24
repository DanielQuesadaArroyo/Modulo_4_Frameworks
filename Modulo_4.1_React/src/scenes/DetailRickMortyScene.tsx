import React from "react";
import { DetailRickMortyPod } from "../pods/rickMorty/detail/detail.pod";
import { useParams } from "react-router-dom";

export const DetailRickMortyScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <DetailRickMortyPod id={Number(id)} />
    </div>
  );
};
