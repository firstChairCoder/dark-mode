import { StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { spacing } from "../style/theme";
import useTheme from "../hooks/useTheme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: spacing.gaps.screen.horizontal,
    paddingVertical: spacing.gaps.g24,
    width: "100%"
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28,
    marginBottom: spacing.gaps.g24 * 5
  },
  body: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 20,
    marginBottom: spacing.gaps.g24
  },
  group: {
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.gaps.g12,
    width: "75%"
  },
  bottom: { flexDirection: "row", justifyContent: "space-between" }
});

export const HomeScreen = () => {
  const { colors, isSystemTheme, setColorTheme, colorScheme, colorTheme } =
    useTheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.backgrounds.default }
      ]}
    >
      <Text style={[styles.header, { color: colors.text }]}>
        Header goes here!
      </Text>
      <Text style={[styles.body, { color: colors.text }]}>Body goes here</Text>

      <View style={{ flex: 0.8 }} />

      <View style={styles.bottom}>
        <View style={styles.group}>
          <Text style={[styles.body, { color: colors.text }]}>Automatic</Text>
          <Switch
            value={isSystemTheme}
            onValueChange={(val) => setColorTheme(val ? null : colorScheme)}
            trackColor={{
              false: colors.backgrounds.soft,
              true: colors.backgrounds.strong
            }}
            thumbColor={colors.backgrounds.default}
            ios_backgroundColor={colors.backgrounds.soft}
          />
        </View>

        <View style={styles.group}>
          <Text
            style={[
              styles.body,
              { color: colors.text },
              isSystemTheme && { color: colors.textMuted, fontWeight: "normal" }
            ]}
          >
            Dark Mode
          </Text>
          <Switch
            value={colorTheme === "dark"}
            onValueChange={(val) => setColorTheme(val ? "dark" : "light")}
            disabled={isSystemTheme}
            trackColor={{
              false: colors.backgrounds.soft,
              true: colors.backgrounds.strong
            }}
            thumbColor={colors.backgrounds.default}
            ios_backgroundColor={colors.backgrounds.soft}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
