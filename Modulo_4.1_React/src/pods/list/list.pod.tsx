import React from "react";
import { mapMembersToVM } from "./list.mappers";
import { getMembers } from "./api/api";
import { Member } from "./list.vm";
import { useOrganization } from "../organization/organization.context";
import { List, BasicPagination } from "./components";

export const ListPod: React.FC = () => {
  const { organization } = useOrganization();
  const [members, setMembers] = React.useState<Member[]>([]);
  const [linkHeader, setLinkHeader] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  // Resetear página a 1 cuando cambie la organización
  React.useEffect(() => {
    setPage(1);
  }, [organization]);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    getMembers(organization, page)
      .then(({ members: data, link }) => {
        const lastLink = link?.split(",").find((link) => link.includes("last"));
        const pageMatch = lastLink?.match(/&page=(\d+)/);
        const totalPages = pageMatch ? parseInt(pageMatch[1], 10) : page;

        setTotalPages(totalPages);
        setMembers(mapMembersToVM(data));
        setLinkHeader(link);
      })
      .catch((err) => {
        setError(
          err instanceof Error ? err.message : "Error al cargar los miembros"
        );
        setMembers([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [organization, page]);

  return (
    <>
      {loading && <p>Cargando miembros...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && (
        <>
          <List members={members} />
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
