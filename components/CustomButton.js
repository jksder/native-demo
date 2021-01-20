import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function CustomButton({ title, handler }) {
  return (
    <View style={styles.containerB}>
      <Button onPress={handler} title={title} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerB: {
    backgroundColor: "dodgerblue",
    borderWidth: 1,
    borderRadius: 4,
  },
});
