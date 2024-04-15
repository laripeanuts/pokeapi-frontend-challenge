import { Pokemon } from "@/@types/pokemon";
import { PokemonSpecieColor } from "@/@types/theme";
import { Info } from "@/components/PokemonModal/Info";
import { Stats } from "@/components/PokemonModal/Stats";
import { PokemonTypeImage } from "@/components/PokemonTypeImage";

import * as S from "./styles";

type PokemonModalProps = {
  pokemon: Pokemon;
  isOpen: boolean;
  setClosed: () => void;
  color: PokemonSpecieColor;
};

const PokemonModal = ({
  pokemon,
  isOpen,
  setClosed,
  color,
}: PokemonModalProps) => {
  const mainImage = pokemon?.sprites.other["official-artwork"].front_default;
  const types = pokemon?.types.map((type) => type.type.name);

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
      open={isOpen}
      onCancel={setClosed}
      onOk={setClosed}
      closable
      width={1000}
      speciescolor={color}
      footer={null}
    >
      <S.ModalHeader>
        <h2>{pokemon?.name}</h2>
        {types?.map((type) => <PokemonTypeImage type={type} />)}
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

export default PokemonModal;
