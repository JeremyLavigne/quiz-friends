import React from "react";
import { StyleSheet, View, Text } from "react-native";

// =================================================================================
export default function App({ card }) {
  return (
    <View style={card && styles.cardAlreadyRead}>
      <Text style={styles.question}>{card && card.question}</Text>
      <Text style={styles.answer}>{card && card.answer}</Text>
    </View>
  );
}

// =================================================================================
const styles = StyleSheet.create({
  cardAlreadyRead: {
    width: "60%",
    height: "30%",
    borderRadius: 10,
    marginTop: 30,
    borderWidth: 5,
    borderColor: "black",
    display: "flex",
    justifyContent: "space-between",
  },
  question: {
    margin: 10,
    marginTop: 20,
    textAlign: "justify",
    fontSize: 18,
  },
  answer: {
    margin: 10,
    fontSize: 14,
    textAlign: "right",
  },
});
