import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useState } from "react";

import { Pokemon } from "@/@types/pokemon";
import { PokemonModal } from "@/components/PokemonModal";
import { PokemonTypeImage } from "@/components/PokemonTypeImage";
import { useGetPokemon } from "@/queries/pokemons";
import { getColorBySpecies } from "@/utils/theme";

import * as S from "./styles";

type CardProps = {
  pokemonId: string;
};

export const Card = ({ pokemonId }: CardProps) => {
  const { isLoading, data: pokemon } = useGetPokemon(pokemonId);

  const [isPokemonDetailModalOpen, setShowPokemonDetailsModal] =
    useState(false);

  const mainType = pokemon?.types[0].type.name || "default";
  const mainImage = pokemon?.sprites.other["official-artwork"].front_default;
  const color = getColorBySpecies(mainType);

  const openModal = () => {
    setShowPokemonDetailsModal(true);
  };

  const closeModal = () => {
    setShowPokemonDetailsModal(false);
  };

  return (
    <>
      <S.Container speciescolor={color} onClick={openModal} key={pokemon?.id}>
        {isLoading ? (
          <S.LoadingContainer>
            <Spin indicator={<LoadingOutlined spin />} />
          </S.LoadingContainer>
        ) : (
          <S.CardContent>
            <S.CardHeader>
              <span>
                #<strong>{pokemon?.id}</strong>
              </span>
              <S.CardTypes>
                {pokemon?.types.map((type) => (
                  <PokemonTypeImage
                    key={type.type.name}
                    type={type.type.name}
                  />
                ))}
              </S.CardTypes>
            </S.CardHeader>
            <S.Image
              src={mainImage ?? "/assets/svgs/pokemon-shadow.svg"}
              alt={pokemon?.name}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = "/assets/svgs/pokemon-shadow.svg";
              }}
            />
            <S.CardFooter>
              <p>{pokemon?.name}</p>
            </S.CardFooter>
          </S.CardContent>
        )}
      </S.Container>
      <PokemonModal
        pokemon={pokemon as Pokemon}
        isModalOpened={isPokemonDetailModalOpen}
        setModalClosed={closeModal}
        color={color}
      />
    </>
  );
};
