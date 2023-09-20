import {StyleSheet, Switch, Text, View} from 'react-native';
import {spacing} from '../style/theme';
import useTheme from '../hooks/useTheme';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: spacing.gaps.g24,
    paddingHorizontal: spacing.gaps.screen.horizontal,
  },
  heading: {
    borderBottomWidth: 1,
    marginBottom: spacing.gaps.g12,
  },
  headingText: {
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: spacing.gaps.g12,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  header: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    borderBottomWidth: 1,
  },
  body: {
    fontSize: 18,
    lineHeight: 20,
  },
});

export const SettingsScreen = () => {
  const {colors, colorScheme, isSystemTheme, setColorTheme, colorTheme} =
    useTheme();
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.backgrounds.default}]}>
      <View style={[styles.heading, {borderColor: colors.textMuted}]}>
        <Text style={[styles.header, {color: colors.text}]}>Dark Mode</Text>
      </View>

      <View style={styles.row}>
        <Text style={[styles.body, {color: colors.text}]}>Automatic</Text>
        <Switch
          value={isSystemTheme}
          onValueChange={val => setColorTheme(val ? null : colorScheme)}
          trackColor={{
            false: colors.backgrounds.soft,
            true: colors.backgrounds.strong,
          }}
          thumbColor={colors.backgrounds.default}
          ios_backgroundColor={colors.backgrounds.soft}
        />
      </View>

      <View style={styles.row}>
        <Text
          style={[
            styles.body,
            {color: colors.text},
            isSystemTheme && {color: colors.textMuted},
          ]}>
          Dark Mode
        </Text>
        <Switch
          value={colorTheme === 'dark'}
          onValueChange={val => setColorTheme(val ? 'dark' : 'light')}
          disabled={isSystemTheme}
          trackColor={{
            false: colors.backgrounds.soft,
            true: colors.backgrounds.strong,
          }}
          thumbColor={colors.backgrounds.default}
          ios_backgroundColor={colors.backgrounds.soft}
        />
      </View>
    </SafeAreaView>
  );
};
