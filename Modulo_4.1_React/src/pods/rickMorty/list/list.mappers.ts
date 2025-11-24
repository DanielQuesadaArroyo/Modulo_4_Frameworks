import * as am from "./api/api.model";
import * as vm from "./list.vm";

export const mapCharacterToVM = (data: am.Result): vm.Character => ({
  id: data.id,
  name: data.name,
  gender: data.gender,
  url: data.url,
  image: data.image,
});

export const mapCharactersToVM = (data: am.Result[]): vm.Character[] =>
  data.map((item) => mapCharacterToVM(item));
