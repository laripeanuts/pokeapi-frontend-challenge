import { styled } from "styled-components";

import { PokemonSpecieColor } from "@/@types/theme";

type ContainerProps = {
  color: PokemonSpecieColor;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: ${({ color, theme }) =>
      theme.type === "dark" ? color.light : color.dark};
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ color, theme }) =>
      theme.type === "dark" ? color.light : color.dark};
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0 2rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 0.25rem;

  h4 {
    text-transform: uppercase;
    width: 8rem;
    text-align: end;
  }
`;

export const TextWeak = styled.h4`
  text-decoration-color: red;
`;

export const TextStrong = styled.h4`
  text-decoration-color: green;
`;
