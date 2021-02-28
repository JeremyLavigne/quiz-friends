import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function App({ setCardIsOnReading, unread }) {
  return (
    <TouchableOpacity
      style={unread ? styles.cardBack : styles.cardFront}
      onPress={() => {
        setCardIsOnReading(true);
      }}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardBack: {
    width: "60%",
    height: "30%",
    backgroundColor: "blue",
    borderRadius: 10,
    marginBottom: 30,
  },
  cardFront: {
    width: "60%",
    height: "30%",
    backgroundColor: "green",
    borderRadius: 10,
    marginBottom: 30,
  },
});
