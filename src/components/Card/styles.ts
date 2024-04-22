import { CardProps as AntCardProps, Card } from "antd";
import { styled } from "styled-components";

import { PokemonSpecieColor } from "@/@types/theme";
import { pokemonTheme } from "@/styles/theme";

type CardProps = {
  speciescolor: PokemonSpecieColor;
} & AntCardProps;

export const Container = styled(Card)<CardProps>`
  height: 16rem;
  min-width: 12rem;
  overflow: hidden;
  border-radius: 1rem;
  border: 2px solid ${({ speciescolor }) => speciescolor.light};

  background: ${({ speciescolor }) => speciescolor.dark};
  background-image: url("/assets/images/background-card-mask.png");
  background-size: cover;
  background-blend-mode: color-burn;
  background-position: center;

  box-shadow: ${({ theme }) =>
    theme.type === "light"
      ? "0 4px 8px rgba(0, 0, 0, 0.1)"
      : "0 4px 8px rgba(255, 255, 255, 0.1)"};

  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
    box-shadow: ${({ theme }) =>
      theme.type === "light"
        ? "4px 8p 8px rgba(0, 0, 0, 0.4)"
        : "4px 8p 8px rgba(255, 255, 255, 0.4)"};
    border-color: ${({ speciescolor }) => speciescolor.dark};
  }

  @media (max-width: ${pokemonTheme.breakpoints.sm}) {
    height: 6rem;

    .ant-card-body {
      padding: 0.5rem;
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;

  .anticon-loading {
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: ${pokemonTheme.breakpoints.sm}) {
    margin-top: 0.5rem;

    .anticon-loading {
      font-size: 2rem;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${pokemonTheme.breakpoints.sm}) {
    gap: 0rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.pokemon.colors.main.contrast};
  font-weight: 900;

  @media (max-width: ${pokemonTheme.breakpoints.sm}) {
    font-weight: 700;
    font-size: 0.75rem;
    gap: 0.5rem;
  }
`;

export const CardTypes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${pokemonTheme.breakpoints.sm}) {
    align-self: flex-end;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.pokemon.colors.main.contrast};
  font-weight: 900;
  font-size: 1rem;
  text-align: center;

  @media (max-width: ${pokemonTheme.breakpoints.sm}) {
    p {
      display: none;
    }
  }
`;

export const Image = styled.img`
  cursor: pointer;
  transition: transform 0.4s ease-in-out;

  max-width: 9rem;
  max-height: 7.5rem;
  border-radius: 50%;
  overflow: hidden;

  &:hover {
    transform: scale(1.4);
  }

  @media (max-width: ${pokemonTheme.breakpoints.sm}) {
    max-width: 3.5rem;
    max-height: 3.5rem;
  }
`;
