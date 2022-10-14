import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f08984",
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
})

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>わーいししーーーー</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen
