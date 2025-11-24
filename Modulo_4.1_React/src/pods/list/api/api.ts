import { Member } from "./api.model";

export const getMembers = async (
  organization: string,
  page: number
): Promise<{ members: Member[]; link: string | null }> => {
  const response = await fetch(
    `https://api.github.com/orgs/${organization}/members?per_page=4&page=${page}`
  );

  // Verificar si la respuesta es exitosa
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Organization not found");
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const link = response.headers.get("Link");
  const members = await response.json();

  return {
    members,
    link,
  };
};
