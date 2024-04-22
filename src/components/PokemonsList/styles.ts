import { pokemonTheme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  .ant-pagination-item-active {
    background: ${({ theme }) => theme.pokemon.colors.main.primary};
    border-color: ${({ theme }) => theme.pokemon.colors.main.tertiary};

    a {
      color: ${({ theme }) => theme.pokemon.colors.main.contrast};
    }
  }

  .ant-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  @media (max-width: ${pokemonTheme.breakpoints.md}) {
    gap: 0.5ren;

    .ant-pagination {
      gap: 0;
      max-width: 100%;
    }

    .ant-pagination-item {
      padding: 0;
      margin: 0;
    }

    .ant-pagination-prev,
    .ant-pagination-next {
      font-size: 0.4rem;
    }
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;

  img {
    width: 50%;
  }
`;
