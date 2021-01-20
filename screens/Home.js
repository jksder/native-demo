import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import TitleCard from "../components/TitleCard";

export default function Home({ navigation }) {
  const name = "Created By: Kevin";

  

  const pressEvent = (navPage) => {
    navigation.push(navPage, { name: name });
  };

  return (
    <View style={styles.container}>
      <View style={styles.mid}>
        <TitleCard navPage="Ducks" pressEvent={pressEvent} />
        <TitleCard navPage="Flamingoes" pressEvent={pressEvent} />
        <TitleCard navPage="Turtles" pressEvent={pressEvent} />
        <TitleCard navPage="Flowers" pressEvent={pressEvent} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  mid: {
    width: 350,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  item: {
    width: 150,
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
