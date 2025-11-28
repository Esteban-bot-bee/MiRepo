import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import AppNavigation from "./src/navigation/Index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <AppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
