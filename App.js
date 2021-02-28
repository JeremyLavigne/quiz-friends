import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CardOnPile from "./components/CardOnPile";
import CardOnReading from "./components/CardOnReading";

export default function App() {
  const [cardIsOnReading, setCardIsOnReading] = useState(false);

  return (
    <View style={styles.container}>
      {!cardIsOnReading && (
        <>
          <CardOnPile setCardIsOnReading={setCardIsOnReading} unread={true} />
          <Text>Draw a card !</Text>
          <CardOnPile setCardIsOnReading={setCardIsOnReading} unread={false} />
        </>
      )}
      {cardIsOnReading && (
        <CardOnReading setCardIsOnReading={setCardIsOnReading} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
