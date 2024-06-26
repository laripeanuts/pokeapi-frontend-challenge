import { ThemeConfig } from "antd";

export type Theme = {
  type: ThemeTypes;
  config: ThemeConfig;
};

export type ThemeTypes = "light" | "dark";

type PokemonMainColors = {
  primary: string;
  secondary: string;
  tertiary: string;
  contrast: string;
};

type PokemonThemeColors = {
  background: string;
  text: string;
};

type PokemonSpecieColor = {
  main: string;
  light: string;
  dark: string;
};

type PokemonTypesOfSpecies = keyof PokemonColors["species"];

export type PokemonColors = {
  main: PokemonMainColors;
  light: PokemonThemeColors;
  dark: PokemonThemeColors;
  species: {
    default: PokemonSpecieColor;
    bug: PokemonSpecieColor;
    dark: PokemonSpecieColor;
    dragon: PokemonSpecieColor;
    electric: PokemonSpecieColor;
    fairy: PokemonSpecieColor;
    fighting: PokemonSpecieColor;
    fire: PokemonSpecieColor;
    flying: PokemonSpecieColor;
    ghost: PokemonSpecieColor;
    grass: PokemonSpecieColor;
    ground: PokemonSpecieColor;
    ice: PokemonSpecieColor;
    normal: PokemonSpecieColor;
    poison: PokemonSpecieColor;
    psychic: PokemonSpecieColor;
    rock: PokemonSpecieColor;
    steel: PokemonSpecieColor;
    water: PokemonSpecieColor;
    unknown: PokemonSpecieColor;
    shadow: PokemonSpecieColor;
  };
};

export type PokemonTheme = {
  colors: PokemonColors;
  breakpoints: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
};
