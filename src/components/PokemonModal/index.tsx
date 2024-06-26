import { Pokemon } from "@/@types/pokemon";
import { PokemonSpecieColor } from "@/@types/theme";
import { Info } from "@/components/PokemonModal/Info";
import { Stats } from "@/components/PokemonModal/Stats";
import { PokemonTypeImage } from "@/components/PokemonTypeImage";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import * as S from "./styles";

type PokemonModalProps = {
  pokemon: Pokemon;
  isModalOpened: boolean;
  setModalClosed: () => void;
  color: PokemonSpecieColor;
};

export const PokemonModal = ({
  pokemon,
  isModalOpened,
  setModalClosed,
  color,
}: PokemonModalProps) => {
  const { xs, sm, md, lg } = useMediaQuery();
  const mainImage = pokemon?.sprites.other["official-artwork"].front_default;
  const types = pokemon?.types.map((type) => type.type.name);

  if (!pokemon) return null;

  return (
    <S.Modal
      title={
        <S.ModalAside>
          <strong>#{pokemon?.id}</strong>
          <img
            src={mainImage ?? "/assets/svgs/pokemon-shadow.svg"}
            alt={pokemon?.name}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "/assets/svgs/pokemon-shadow.svg";
            }}
          />
        </S.ModalAside>
      }
      centered
      key={pokemon?.id}
      open={isModalOpened}
      onCancel={setModalClosed}
      width={lg ? 800 : md ? 600 : sm ? 300 : xs ? 280 : 1000}
      footer={null}
      speciescolor={color}
    >
      <S.ModalHeader>
        <h2>{pokemon?.name}</h2>
        {types?.map((type) => <PokemonTypeImage type={type} key={type} />)}
      </S.ModalHeader>
      <Info
        abilities={pokemon.abilities}
        height={pokemon.height}
        weight={pokemon.weight}
        xp={pokemon.base_experience}
      />
      <Stats stats={pokemon.stats} color={color}></Stats>
    </S.Modal>
  );
};
