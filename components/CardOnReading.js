import React from "react";
import { Button, Text, StyleSheet, View } from "react-native";

export default function App({ setCardIsOnReading, cardIsDiscarded, card }) {
  return (
    <View style={styles.cardOnReading}>
      <Text>{card.question}</Text>
      <Text>{card.answer}</Text>
      <Button
        onPress={() => {
          setCardIsOnReading(false);
          cardIsDiscarded(card);
        }}
        title="Close"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardOnReading: {
    width: "80%",
    height: "80%",
    backgroundColor: "red",
    borderRadius: 10,
    marginTop: 30,
  },
});
