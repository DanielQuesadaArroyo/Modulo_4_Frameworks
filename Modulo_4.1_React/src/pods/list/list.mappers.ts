import * as am from "./api/api.model";
import * as vm from "./list.vm";

export const mapMemberToVM = (data: am.Member): vm.Member => ({
  id: data.id,
  login: data.login,
  avatar_url: data.avatar_url,
  url: data.url,
});

export const mapMembersToVM = (data: am.Member[]): vm.Member[] =>
  data.map((item) => mapMemberToVM(item));
