import * as am from "./api/api.model";
import * as vm from "./detail.vm";

export const mapRickMortyDetailToVM = (
  data: am.RickMortyDetail
): vm.RickMortyDetail => ({
  id: data.id,
  name: data.name,
  type: data.type,
  dimension: data.dimension,
  residents: data.residents,
  url: data.url,
  created: data.created,
});
