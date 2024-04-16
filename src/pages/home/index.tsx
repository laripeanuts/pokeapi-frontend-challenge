import { LoadingOutlined } from "@ant-design/icons";
import { Input, Spin } from "antd";
import { SearchProps } from "antd/es/input";
import { useEffect, useMemo, useState } from "react";

import { Pagination as PaginationProps, Result } from "@/@types/services";
import { PokemonsList } from "@/components/PokemonsList";
import { useGetPokemons } from "@/queries/pokemons";
import { initialPagination, paginatedPokemons } from "@/utils/pagination";

import * as S from "./styles";

const filterPokemons = (pokemons: Result[], searchQuery: string) => {
  if (!searchQuery) return pokemons;

  return pokemons.filter((pokemon) => {
    const pokemonName = pokemon.name.toLowerCase();
    const searchQueryLower = searchQuery.toLowerCase();
    const pokemonNumber = pokemon.url.split("/")[6].toString();

    return (
      pokemonName.includes(searchQueryLower) ||
      pokemonNumber.includes(searchQueryLower)
    );
  });
};

export const HomePage = () => {
  const { Search } = Input;

  const [pagination, setPagination] =
    useState<PaginationProps>(initialPagination);
  const [pokemons, setPokemons] = useState<Result[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading } = useGetPokemons();

  const filteredPokemons = useMemo(
    () => filterPokemons(data?.results || [], searchQuery),
    [data, searchQuery],
  );
  const totalOfPokemons = filteredPokemons.length || 0;

  useEffect(() => {
    const pokemons = paginatedPokemons(
      filteredPokemons,
      pagination.page,
      pagination.pageSize,
    );

    setPokemons(() => [...pokemons]);
  }, [filteredPokemons, pagination, searchQuery]);

  const handlePagination = (page: number, pageSize: number) => {
    setPagination((prev) => ({ ...prev, page, pageSize }));
  };

  const handleCancelSearch = () => {
    setSearchQuery("");
    setPagination((prev) => ({ ...prev, page: 1 }));
  };

  const handleOnChange = (value: string) => {
    setSearchQuery(value);
    setPagination((prev) => ({ ...prev, page: 1 }));
  };

  const onSearch: SearchProps["onSearch"] = (value, _event, info) => {
    if (info?.source === "clear") {
      handleCancelSearch();
      return;
    }

    handleOnChange(value);
  };

  if (isLoading) {
    return (
      <Spin
        spinning={true}
        fullscreen
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      />
    );
  }

  return (
    <S.Space direction="vertical" align="center">
      <S.SearchRow>
        <p>
          Total of <strong>{totalOfPokemons}</strong> pokemons
        </p>
        <Search
          placeholder="Search pokemons by name or number..."
          enterButton="Catch them all!"
          size="large"
          onSearch={onSearch}
          allowClear
        />
      </S.SearchRow>
      <PokemonsList
        isLoading={isLoading}
        pokemons={pokemons}
        page={pagination.page}
        pageSize={pagination.pageSize}
        total={totalOfPokemons}
        handlePagination={handlePagination}
      />
    </S.Space>
  );
};
