import { pokemonTheme } from "@/styles/theme";
import { useEffect, useState } from "react";

export const useMediaQuery = () => {
  const theme = pokemonTheme;

  const [isMediaQuery, setIsMediaQuery] = useState({
    xxs: false,
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  });

  useEffect(() => {
    const mediaQueryList = {
      xxs: window.matchMedia(`(max-width: ${theme.breakpoints.xxs})`),
      xs: window.matchMedia(`(max-width: ${theme.breakpoints.xs})`),
      sm: window.matchMedia(`(max-width: ${theme.breakpoints.sm})`),
      md: window.matchMedia(`(max-width: ${theme.breakpoints.md})`),
      lg: window.matchMedia(`(max-width: ${theme.breakpoints.lg})`),
      xl: window.matchMedia(`(max-width: ${theme.breakpoints.xl})`),
      xxl: window.matchMedia(`(max-width: ${theme.breakpoints.xxl})`),
    };

    const updateMediaQuery = () => {
      setIsMediaQuery({
        xxs: mediaQueryList.xxs.matches,
        xs: mediaQueryList.xs.matches,
        sm: mediaQueryList.sm.matches,
        md: mediaQueryList.md.matches,
        lg: mediaQueryList.lg.matches,
        xl: mediaQueryList.xl.matches,
        xxl: mediaQueryList.xxl.matches,
      });
    };

    for (const query in mediaQueryList) {
      mediaQueryList[query as keyof typeof mediaQueryList].addEventListener(
        "change",
        updateMediaQuery,
      );
    }

    updateMediaQuery();

    return () => {
      for (const query in mediaQueryList) {
        mediaQueryList[
          query as keyof typeof mediaQueryList
        ].removeEventListener("change", updateMediaQuery);
      }
    };
  }, [theme]);

  return isMediaQuery;
};
