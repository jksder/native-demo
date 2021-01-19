import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

export default function Home({ navigation }) {
  const pressevent = () => {
    navigation.push("Ducks");
  };

  return (
    <View style={styles.container}>
      <View style={styles.mid}>
        <TouchableOpacity onPress={() => navigation.push("Ducks")}>
          <View style={styles.item}>
            <Text style={styles.text}>Ducks</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={pressevent}>
          <View style={styles.item}>
            <Text
              style={styles.text}
              onPress={() => navigation.push("Turtles")}
            >
              Turtles
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={pressevent}>
          <View style={styles.item}>
            <Text
              style={styles.text}
              onPress={() => navigation.push("Flowers")}
            >
              Flowers
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={pressevent}>
          <View style={styles.item}>
            <Text
              style={styles.text}
              onPress={() => navigation.push("Flamingoes")}
            >
              Flamingoes
            </Text>
          </View>
        </TouchableOpacity>
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
    flex: 0.5,
    width: 350,
    height: 350,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

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
