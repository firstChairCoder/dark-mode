import {StyleSheet, Text, View} from 'react-native';
import {spacing} from '../style/theme';
import useTheme from '../hooks/useTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 200,
    paddingHorizontal: spacing.gaps.screen.horizontal,
  },
  header: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    marginBottom: spacing.gaps.g12,
  },
  body: {
    fontSize: 18,
    lineHeight: 20,
	marginBottom: spacing.gaps.g24,
  },
});

export const HomeScreen = () => {
  const {colors} = useTheme();
  return (
    <View
      style={[styles.container, {backgroundColor: colors.backgrounds.default}]}>
      <Text style={[styles.header, {color: colors.text}]}>
        Header goes here!
      </Text>
      <Text style={[styles.body, {color: colors.text}]}>Body goes here</Text>
    </View>
  );
};
