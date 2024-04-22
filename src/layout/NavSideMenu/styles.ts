import Sider, { SiderProps as AntSiderProps } from "antd/es/layout/Sider";
import styled from "styled-components";

import { pokemonTheme } from "@/styles/theme";

export const Aside = styled(Sider)<AntSiderProps>`
  border-inline-end: 1px solid rgba(253, 253, 253, 0.12);

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: ${({ theme }) => theme.pokemon.colors.main.contrast};
    background-color: ${({ theme }) => theme.pokemon.colors.main.secondary};
    padding: 1rem 0;

    svg {
      color: ${({ theme }) => theme.pokemon.colors.main.contrast};
    }
  }

  .ant-space {
    align-items: center;
    justify-content: space-between;
    padding: ${({ collapsed }) => (collapsed ? "0 1rem" : "0 1.8rem")};

    svg {
      rotate: ${({ collapsed }) => (collapsed ? "180deg" : "360deg")};
      transition: all 0.5s ease-in-out;
      font-size: 1.2rem;
    }
  }
  .ant-menu-light,
  .ant-menu-root,
  .ant-menu-light.ant-menu-root.ant-menu-vertical,
  .ant-menu-inline.ant-menu {
    background-color: transparent;
    border: none;
  }

  .ant-menu-item {
    color: ${({ theme }) => theme.pokemon.colors.main.contrast};
    font-weight: 700;

    &:hover {
      background: ${({ theme }) =>
        theme.pokemon.colors.main.primary} !important;
    }
  }

  .ant-menu-item-selected {
    background: ${({ theme }) => theme.pokemon.colors.main.primary};
  }

  @media (max-width: ${pokemonTheme.breakpoints.sm}) {
    width: ${({ collapsed }) => (collapsed ? null : "100%")} !important;
    min-width: ${({ collapsed }) => (collapsed ? null : "100%")} !important;
    max-width: ${({ collapsed }) => (collapsed ? null : "100%")} !important;
    flex: 0 0 ${({ collapsed }) => (collapsed ? null : "100%")} !important;
  }
`;

export const SkeletonList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
`;
