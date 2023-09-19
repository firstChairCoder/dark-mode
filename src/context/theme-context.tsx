import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {ColorSchemeName} from 'react-native';

const ASYNC_THEME_KEY = 'THEME_STATE';

export interface IThemeContext {
  theme: ColorSchemeName;
  setTheme: Dispatch<SetStateAction<ColorSchemeName>>;
  loading: boolean;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export default function ThemeProvider({children}: {children: ReactNode}) {
  const [theme, setTheme] = useState<ColorSchemeName>();
  const [loading, setLoading] = useState(true);

  void AsyncStorage.removeItem(ASYNC_THEME_KEY);

  useEffect(() => {
    const onLoad = async () => {
      const storedTheme = (await AsyncStorage.getItem(
        ASYNC_THEME_KEY,
      )) as ColorSchemeName;
      setTheme(storedTheme);
      setLoading(false);
    };
    onLoad();
  }, []);

  // useEffect((), )

  const values = useMemo(
    () => ({
      theme,
      setTheme,
      loading,
    }),
    [theme, loading],
  );

  if (loading) {
    return null;
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}
