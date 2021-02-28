import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function App({ setCardIsOnReading }) {
  return (
    <View style={styles.cardOnReading}>
      <Button
        onPress={() => {
          setCardIsOnReading(false);
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
