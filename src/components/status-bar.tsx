import {StatusBarStyle, StatusBar as ExpoStatusBar} from 'expo-status-bar';
import useTheme from '../hooks/useTheme';

export default function StatusBar({style}: {style?: StatusBarStyle}) {
  const {colorTheme} = useTheme();
  const themedStyle = style ?? colorTheme === 'dark' ? 'light' : 'dark';

  return <ExpoStatusBar style={themedStyle} />;
}
