import {Pressable, StyleSheet, Switch, Text, View} from 'react-native';
import {spacing} from '../style/theme';
import useTheme from '../hooks/useTheme';
import {SafeAreaView} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingVertical: spacing.gaps.g24,
    paddingHorizontal: spacing.gaps.screen.horizontal,
  },
  header: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    marginBottom: spacing.gaps.g24 * 5,
  },
  body: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
    marginBottom: spacing.gaps.g24,
  },
  btn: {
    borderRadius: spacing.radius.default,
    paddingHorizontal: spacing.gaps.button.horizontal,
    paddingVertical: spacing.gaps.button.vertical,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  group: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
    marginBottom: spacing.gaps.g12,
  },
});

export const HomeScreen = () => {
  const {colors, isSystemTheme, setColorTheme, colorScheme, colorTheme} =
    useTheme();
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.backgrounds.default}]}>
      <Text style={[styles.header, {color: colors.text}]}>
        Header goes here!
      </Text>
      <Text style={[styles.body, {color: colors.text}]}>Body goes here</Text>

      <View style={{flex: 0.8}} />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.group}>
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

        <View style={styles.group}>
          <Text
            style={[
              styles.body,
              {color: colors.text},
              isSystemTheme && {color: colors.textMuted, fontWeight: 'normal'},
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
      </View>
    </SafeAreaView>
  );
};
