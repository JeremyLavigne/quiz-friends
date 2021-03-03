import React from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import AnswerRevealer from "./AnswerRevealer";

// =================================================================================
export default function App({ setCardIsOnReading, cardIsDiscarded, card }) {
  return (
    <View style={styles.cardOnReading}>
      <Text style={styles.question}>{card && card.question}</Text>

      <AnswerRevealer answer={card ? card.answer : ""} />

      <View style={styles.closeButton}>
        <Button
          onPress={() => {
            setCardIsOnReading(false);
            cardIsDiscarded(card);
          }}
          title="Close"
          color="red"
        />
      </View>
    </View>
  );
}

// =================================================================================
const styles = StyleSheet.create({
  cardOnReading: {
    width: "80%",
    height: "80%",
    backgroundColor: "white",
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between",
  },
  question: {
    margin: 10,
    marginTop: 30,
    textAlign: "justify",
    fontSize: 22,
  },
  closeButton: {
    width: "30%",
    marginLeft: "35%",
    padding: 5,
  },
});
