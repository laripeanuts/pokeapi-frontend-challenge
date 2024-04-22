import { Col, Pagination, Row } from "antd";

import { Result } from "@/@types/services";
import { Card } from "@/components/Card";

import * as S from "./styles";

type PokemonsListProps = {
  isLoading: boolean;
  pokemons: Result[];
  page: number;
  pageSize: number;
  total: number;
  handlePagination: (page: number, pageSize: number) => void;
};

export const PokemonsList = ({
  isLoading,
  pokemons,
  page,
  pageSize,
  total,
  handlePagination,
}: PokemonsListProps) => {
  if ((!pokemons || !pokemons.length) && !isLoading) {
    return (
      <S.EmptyContainer>
        <h2>No pokemons found</h2>
        <img
          src="/assets/images/snorlax-sad.png"
          alt="sad snorlax pokemon"
          width={300}
        />
      </S.EmptyContainer>
    );
  }

  return (
    <S.Container>
      <Row
        gutter={[16, 16]}
        justify="center"
        style={{
          width: "100%",
        }}
      >
        {pokemons.map((pokemon) => (
          <Col
            className="gutter-row"
            key={pokemon.name}
            xs={24}
            sm={18}
            md={10}
            lg={8}
            xl={6}
            xxl={4}
          >
            <Card
              key={pokemon.name}
              pokemonId={pokemon.url.split("/")[6] as string}
            />
          </Col>
        ))}
      </Row>
      <Pagination
        defaultCurrent={page}
        total={total}
        onChange={handlePagination}
        pageSize={pageSize}
        pageSizeOptions={[10, 20, 40, 50, 100]}
      />
    </S.Container>
  );
};
