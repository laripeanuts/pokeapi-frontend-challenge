import { Space as AntSpace } from "antd";
import { styled } from "styled-components";

import { pokemonTheme } from "@/styles/theme";

export const Space = styled(AntSpace)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  .ant-space-item {
    width: 100%;
  }
`;

export const SearchRow = styled.div`
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: space-between;
  gap: 10rem;

  p {
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
    line-height: 1;

    strong {
      font-size: 1.5rem;
    }
  }

  .ant-input-suffix {
    height: 24px;
  }

  .ant-input-group-wrapper {
    max-width: 50rem;
  }

  .ant-input-affix-wrapper,
  .ant-input-affix-wrapper-lg,
  .ant-input-outlined {
    background: ${({ theme }) =>
      theme.type === "dark" ? theme.pokemon.colors.main.secondary : null};
  }

  @media (max-width: ${pokemonTheme.breakpoints.md}) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    .ant-input-wrapper,
    .ant-input-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .ant-input-affix-wrapper,
    .ant-input-affix-wrapper-lg,
    .ant-input-outlined,
    .ant-btn,
    .ant-btn-primary,
    .ant-btn-lg,
    .ant-input-search-button {
      border-radius: 0.5rem !important;
    }

    .ant-input-group-addon,
    .ant-btn,
    .ant-btn-primary,
    .ant-btn-lg,
    .ant-input-search-button {
      flex: 1;
      width: 100%;
    }
  }
`;
