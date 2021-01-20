import React from "react";
import { Text, View } from "react-native";
import CustomButton from "./CustomButton";

import { globalStyles } from "../styles/global";

export default function Description({ title, para, navigation }) {
  const handler = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.paragraph}>{para}</Text>
      <CustomButton title="Home" handler={handler} />
    </View>
  );
}
