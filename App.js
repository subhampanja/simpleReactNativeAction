import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Rectangel from "./app/Rectangel";

export default function App() {
  const [color, setColor] = useState("red");

  const colorChange = () => {
    color === "red" ? setColor("green") : setColor("red");
  };
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={styles.textSize}>HELLO</Text>
        <Text style={styles.textSize}>HELLO HELLO</Text>
        <Text style={styles.textSize}>HELLO HELLO HELLO</Text>
        <Text style={styles.textSize}>HELLO HELLO HELLO HELLO</Text>
        <Text style={styles.textSize}>HELLO HELLO HELLO HELLO HELLO</Text>
      </View>
      <View style={styles.container}>
        <Rectangel colorPass={color} />
        <Button
          onPress={() => colorChange()}
          title={color === "red" ? "Press" : "Button Clicked"}
          color={color === "red" ? "red" : "green"}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textSize: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
