import {
  NavigationContainer as RNNavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';
import useTheme from '../hooks/useTheme';
import {ReactNode} from 'react';

export default function NavigationContainer({children}: {children: ReactNode}) {
  const {colors} = useTheme();
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: colors.text,
      background: colors.backgrounds.default,
      primary: colors.text,
    },
  };
  return (
    <RNNavigationContainer theme={navTheme}>{children}</RNNavigationContainer>
  );
}
