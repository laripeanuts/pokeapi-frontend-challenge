import { pokemonTheme } from "@/styles/theme";
import { Layout as AntLayout } from "antd";
import { Content as AntContent } from "antd/es/layout/layout";
import { styled } from "styled-components";

export const Layout = styled(AntLayout)`
  min-height: 100vh;

  .ant-layout {
    background-image: ${({ theme }) =>
      theme.type === "light"
        ? `url("/assets/images/background-light.png")`
        : `url("/assets/images/background-dark.png")`};

    background-size: cover;

    @media (max-width: ${pokemonTheme.breakpoints.md}) {
    }
  }
`;

type ContentProps = {
  collapsed: boolean;
};

export const Content = styled(AntContent)<ContentProps>`
  padding: 2rem 6rem;
  min-height: 80%;

  @media (max-width: ${pokemonTheme.breakpoints.sm}) {
    display: ${({ collapsed }) => (collapsed ? "block" : "none")};

    padding: 1rem 2rem;
    min-height: 100%;
  }
`;
