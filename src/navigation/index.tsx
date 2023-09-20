import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useTheme from '../hooks/useTheme';
import {HomeScreen, SettingsScreen} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();
export default function RootNavigator({}) {
  const {colors} = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.backgrounds.default,
        },
      }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
}
