import { SafeAreaProvider } from "react-native-safe-area-context";

import ThemeProvider from "./src/context/theme-context";
import NavigationContainer from "./src/navigation/NavigationContainer";
import RootNavigator from "./src/navigation";
import { StatusBar } from "./src/components";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar />
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
