import { Login } from "./api.model";

export const getLogin = async (data: Login): Promise<Boolean> => {
  if (data.username === "admin" && data.password === "test") {
    return true;
  } else {
    return false;
  }
};
