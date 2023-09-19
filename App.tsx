import ThemeProvider from './src/context/theme-context';
import NavigationContainer from './src/navigation/NavigationContainer';
import RootNavigator from './src/navigation';
import { StatusBar } from './src/components';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar />
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
