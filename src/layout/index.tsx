import { Layout as AntLayout } from "antd";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTheme } from "@/hooks/useTheme";
import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";
import { NavSideMenu } from "@/layout/NavSideMenu";

import * as S from "./styles";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { theme, toggleTheme } = useTheme();
  const { sm: isMobile } = useMediaQuery();
  const [collapsed, setCollapsed] = useState(isMobile);

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  return (
    <S.Layout>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <AntLayout>
        <NavSideMenu collapsed={collapsed} setCollapsed={setCollapsed} />
        <S.Content collapsed={collapsed}>{children || <Outlet />}</S.Content>
      </AntLayout>
      <Footer />
    </S.Layout>
  );
};
