import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
  rickMorty: string;
  rickMortyDetail: string;
}

interface LinkRoutes extends Omit<SwitchRoutes, "detail" | "rickMortyDetail"> {
  detail: (login: string) => string;
  rickMortyDetail: (id: string) => string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  detail: "/detail/:login",
  rickMorty: "/rick-morty",
  rickMortyDetail: "/rick-morty/:id",
};

export const routes: LinkRoutes = {
  ...switchRoutes,
  detail: (login: string) => generatePath(switchRoutes.detail, { login }),
  rickMortyDetail: (id: string) =>
    generatePath(switchRoutes.rickMortyDetail, { id }),
};
