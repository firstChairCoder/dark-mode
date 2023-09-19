import {useCallback, useContext, useMemo} from 'react';
import {colors} from '../style/theme';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {ThemeContext} from '../context/theme-context';

export default function useTheme() {
  const context = useContext(ThemeContext);
  const colorScheme = useColorScheme();

  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider.');
  }

  const {theme, setTheme, loading} = context;

  if (loading) {
    throw new Error('Tried to use ThemeContext before initialization.');
  }

  const colorTheme: NonNullable<ColorSchemeName> =
    theme ?? colorScheme ?? 'light';

  return {
    colors: useMemo(() => {
      return colors[colorTheme || 'light'];
    }, [colorTheme]),
    colorTheme,
    isSystemTheme: !theme,
    isDark: theme === 'dark',
    colorScheme,
    setColorTheme: useCallback(
      (themeName: ColorSchemeName) => setTheme(themeName),
      [setTheme],
    ),
  };
}
