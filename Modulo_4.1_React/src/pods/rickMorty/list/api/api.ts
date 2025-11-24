import { ApiResponse, Info, Result } from "./api.model";

export const getCharacters = async (
  page?: number,
  character?: string
): Promise<{ characters: Result[]; info: Info }> => {
  const params = new URLSearchParams({
    ...(page && { page: page.toString() }),
    ...(character && { name: character }),
  });

  const url = `https://rickandmortyapi.com/api/character?${params.toString()}`;
  const response = await fetch(url);

  // Verificar si la respuesta es exitosa
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const characters = await response.json();

  return {
    info: characters.info,
    characters: characters.results,
  };
};
