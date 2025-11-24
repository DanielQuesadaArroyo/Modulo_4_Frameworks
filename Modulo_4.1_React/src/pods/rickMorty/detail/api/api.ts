import { RickMortyDetail } from "./api.model";

export const getRickMortyDetail = async (
  id: number
): Promise<RickMortyDetail> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
    (response) => response.json()
  );
};
