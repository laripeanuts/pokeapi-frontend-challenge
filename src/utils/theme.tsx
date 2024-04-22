import { PokemonSpecieColor, PokemonTypesOfSpecies } from "@/@types/theme";
import { pokemonColors } from "@/styles/theme";

export const getColorBySpecies = (type: string): PokemonSpecieColor => {
  const species = type.toLowerCase() as PokemonTypesOfSpecies;
  return pokemonColors.species[species] || pokemonColors.species.default;
};
