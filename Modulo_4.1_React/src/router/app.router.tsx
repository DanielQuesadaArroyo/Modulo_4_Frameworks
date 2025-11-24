import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { switchRoutes } from "./routes";
import { AppLayout } from "@/layouts";
import {
  DetailScene,
  ListScene,
  LoginScene,
  ListRickMortyScene,
} from "@/scenes";
import { OrganizationProvider } from "@/pods/organization";
import { CharacterProvider } from "@/pods/rickMorty/searchCharacter";
import { LoginProvider } from "@/pods/login";
import { DetailRickMortyScene } from "@/scenes/DetailRickMortyScene";

export const AppRouter: React.FC = () => {
  return (
    <LoginProvider>
      <OrganizationProvider>
        <CharacterProvider>
          <Router>
            <Routes>
              <Route path={switchRoutes.root} element={<LoginScene />} />
              <Route
                path="*"
                element={
                  <AppLayout>
                    <Routes>
                      <Route path={switchRoutes.list} element={<ListScene />} />
                      <Route
                        path={switchRoutes.detail}
                        element={<DetailScene />}
                      />

                      <Route
                        path={switchRoutes.rickMorty}
                        element={<ListRickMortyScene />}
                      />
                      <Route
                        path={switchRoutes.rickMortyDetail}
                        element={<DetailRickMortyScene />}
                      />
                      <Route
                        path="*"
                        element={<Navigate to={switchRoutes.root} />}
                      />
                    </Routes>
                  </AppLayout>
                }
              />
            </Routes>
          </Router>
        </CharacterProvider>
      </OrganizationProvider>
    </LoginProvider>
  );
};
