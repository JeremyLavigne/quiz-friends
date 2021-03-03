import React, { useState } from "react";
import { Button, Text, StyleSheet, View, TouchableOpacity } from "react-native";

// =================================================================================
export default function App({ setCardIsOnReading, cardIsDiscarded, card }) {
  const [displayAnswer, setDisplayAnswer] = useState(false);

  return (
    <View style={styles.cardOnReading}>
      <Text style={styles.question}>{card && card.question}</Text>

      {displayAnswer ? (
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{card && card.answer}</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.revealContainer}
          onPress={() => setDisplayAnswer(true)}
        >
          <Text style={styles.reveal}>Reveal Answer</Text>
        </TouchableOpacity>
      )}
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
  answerContainer: {
    margin: 10,
    paddingLeft: 5,
    paddingVertical: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  revealContainer: {
    margin: 10,
    paddingLeft: 5,
    paddingVertical: 10,
    backgroundColor: "grey",
  },
  reveal: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  answer: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
  },
  closeButton: {
    width: "30%",
    marginLeft: "35%",
    padding: 5,
  },
});
