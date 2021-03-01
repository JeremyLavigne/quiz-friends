import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import backFriends from "../assets/friends.jpg";

export default function App({ setCardIsOnReading, cardIsDrawn, unread, card }) {
  return (
    <>
      {unread ? (
        <TouchableOpacity
          style={styles.cardUnread}
          onPress={() => {
            setCardIsOnReading(true);
            cardIsDrawn(card);
          }}
        >
          <Image source={backFriends} style={styles.image}></Image>
        </TouchableOpacity>
      ) : (
        <View style={card !== null && styles.cardRead}>
          <Text style={styles.question}>{card && card.question}</Text>
          <Text style={styles.answer}>{card && card.answer}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  cardUnread: {
    width: "60%",
    height: "30%",
    borderRadius: 10,
    marginBottom: 30,
    elevation: 5,
  },
  cardRead: {
    width: "60%",
    height: "30%",
    backgroundColor: "white",
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 30,
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
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
