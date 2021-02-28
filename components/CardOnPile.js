import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function App({ setCardIsOnReading, unread, card }) {
  return (
    <>
      {unread ? (
        <TouchableOpacity
          style={styles.cardUnread}
          onPress={() => {
            setCardIsOnReading(true);
          }}
        >
          <Text>{card.id}</Text>
        </TouchableOpacity>
      ) : (
        <View style={card !== null && styles.cardRead}></View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  cardUnread: {
    width: "60%",
    height: "30%",
    backgroundColor: "blue",
    borderRadius: 10,
    marginBottom: 30,
    elevation: 5,
  },
  cardRead: {
    width: "60%",
    height: "30%",
    backgroundColor: "green",
    borderRadius: 10,
    marginTop: 30,
  },
});
