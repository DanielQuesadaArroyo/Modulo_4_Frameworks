import React from "react";
import { DetailRickMorty } from "./detail.component";
import { RickMortyDetail } from "./detail.vm";
import { getRickMortyDetail } from "./api/api";
import { mapRickMortyDetailToVM } from "./detail.mappers";

interface Props {
  id: number;
}

export const DetailRickMortyPod: React.FC<Props> = (props) => {
  const { id } = props;
  const [character, setCharacter] = React.useState<RickMortyDetail>();

  React.useEffect(() => {
    getRickMortyDetail(id).then(mapRickMortyDetailToVM).then(setCharacter);
  }, [id]);

  return character && <DetailRickMorty character={character} />;
};
