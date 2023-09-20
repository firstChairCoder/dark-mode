import {
  DefaultTheme,
  NavigationContainer as RNNavigationContainer
} from "@react-navigation/native";
import type { ReactNode } from "react";

import useTheme from "../hooks/useTheme";

export default function NavigationContainer({
  children
}: {
  children: ReactNode;
}) {
  const { colors } = useTheme();
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: colors.text,
      background: colors.backgrounds.default,
      primary: colors.text
    }
  };
  return (
    <RNNavigationContainer theme={navTheme}>{children}</RNNavigationContainer>
  );
}
