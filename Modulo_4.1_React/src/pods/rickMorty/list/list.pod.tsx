import React from "react";
import { List, BasicPagination } from "./components";
import { Character } from "./list.vm";
import { getCharacters } from "./api/api";
import { useCharacter } from "../searchCharacter";

export const ListRickMortyPod: React.FC = () => {
  const { character } = useCharacter();
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const prevCharacterRef = React.useRef(character);

  React.useEffect(() => {
    // Si el character cambió, resetear a página 1
    if (prevCharacterRef.current !== character) {
      prevCharacterRef.current = character;
      if (page !== 1) {
        setPage(1);
        return;
      }
    }

    setLoading(true);
    setError(null);
    getCharacters(page, character)
      .then(({ characters: data, info }) => {
        const totalPages = info?.pages;

        setTotalPages(totalPages);
        setCharacters(data);
      })
      .catch((err) => {
        setError(
          err instanceof Error ? err.message : "Error al cargar los personajes"
        );
        setCharacters([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, character]);

  return (
    <>
      {loading && <p>Cargando miembros...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && (
        <>
          <List characters={characters} />
          <BasicPagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </>
  );
};
