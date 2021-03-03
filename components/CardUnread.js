import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

import backFriends from "../assets/friends.jpg";

// =================================================================================
export default function App({ setCardIsOnReading, cardIsDrawn, card }) {
  return (
    <View style={styles.cardUnread}>
      <TouchableOpacity
        onPress={() => {
          setCardIsOnReading(true);
          cardIsDrawn(card);
        }}
      >
        <Image source={backFriends} style={styles.image}></Image>
      </TouchableOpacity>
    </View>
  );
}

// =================================================================================
const styles = StyleSheet.create({
  cardUnread: {
    width: "60%",
    height: "30%",
    borderRadius: 10,
    marginBottom: 30,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
