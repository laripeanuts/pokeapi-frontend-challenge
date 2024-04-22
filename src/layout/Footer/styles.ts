import { Button } from "antd";
import { Footer as AntFooter } from "antd/es/layout/layout";
import styled from "styled-components";

import { pokemonTheme } from "@/styles/theme";

export const Container = styled(AntFooter)`
  width: 100%;
  background-color: ${({ theme }) => theme.pokemon.colors.main.tertiary};
  color: ${({ theme }) => theme.pokemon.colors.main.contrast};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem;

  @media (max-width: ${pokemonTheme.breakpoints.sm}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 0.8rem;
`;

export const Description = styled(Button)`
  font-weight: 300;
  line-height: 0.8rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.pokemon.colors.main.contrast};
  opacity: 0.8;

  &:hover {
    color: ${({ theme }) => theme.pokemon.colors.main.contrast} !important;
    opacity: 0.7;
  }
`;

export const Image = styled.img`
  width: 5.5rem;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
