import React from "react";
import { View, Text } from "react-native";

const Rectangel = ({ colorPass }) => {
  return (
    <View
      style={{
        height: "50%",
        width: "50%",
        backgroundColor: [colorPass == "red" ? "red" : "green"],
        marginBottom: 20,
      }}
    ></View>
  );
};

export default Rectangel;
