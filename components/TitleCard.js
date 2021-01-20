import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function TitleCard({ navPage, pressEvent }) {
  const press = () => {
    pressEvent(navPage);
  };
  return (
    <TouchableOpacity onPress={press}>
      <View style={styles.item}>
        <Text style={styles.text}>{navPage}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 150,
    height: 150,
    borderWidth: 2,
    backgroundColor: "dodgerblue",
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: "white",
  },
});
