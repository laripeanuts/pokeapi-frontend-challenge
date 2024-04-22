import { useQuery } from "@tanstack/react-query";

import {
  getPokemon,
  getPokemons,
  getPokemonsByType,
  getPokemonTypes,
} from "@/services/pokemons";
import { useEffect, useState } from "react";

export const useGetPokemonTypes = () => {
  return useQuery({
    queryKey: ["pokemon-types"],
    queryFn: async () => {
      return getPokemonTypes();
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

export const useGetPokemons = () => {
  const [isFirstFetch, setIsFirstFetch] = useState(true);

  const query = useQuery({
    queryKey: ["pokemons"],
    queryFn: async () => {
      return getPokemons();
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  useEffect(() => {
    if (query.isSuccess && isFirstFetch) {
      setIsFirstFetch(false);
    }
  }, [query.isSuccess, isFirstFetch]);

  return { ...query, isFirstFetch };
};

export const useGetPokemon = (id: string) => {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      return getPokemon(id);
    },
  });
};

export const useGetPokemonsByType = (typeName: string) => {
  const [isFirstFetch, setIsFirstFetch] = useState(true);

  const query = useQuery({
    queryKey: ["pokemon-by-type", typeName],
    queryFn: async () => {
      return getPokemonsByType(typeName);
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  useEffect(() => {
    if (query.isSuccess && isFirstFetch) {
      setIsFirstFetch(false);
    }
  }, [query.isSuccess, isFirstFetch]);

  return { ...query, isFirstFetch };
};
