import { pokemonTheme } from "@/styles/theme";
import styled from "styled-components";

export const ModalPokemonInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;

  @media (max-width: ${pokemonTheme.breakpoints.lg}) {
    flex-wrap: wrap;
  }
`;

export const ModalPokemonInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    font-size: 1.1rem;
    font-weight: 900;
  }
`;
