import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CardOnReading from "./components/CardOnReading";
import CardUnread from "./components/CardUnread";
import CardAlreadyRead from "./components/CardAlreadyRead";

import listOfCards from "./friends.json";
import { pickRandomCard } from "./utils/functions";

// =================================================================================
export default function App() {
  // ------------------- Variables -------------------------

  const [cardIsOnReading, setCardIsOnReading] = useState(false);
  // true : card on screen / false : pile on screen
  const [unreadCards, setUnreadCards] = useState(listOfCards);
  // All non-read cards
  const [alreadyReadCards, setAlreadyReadCards] = useState([]);
  // All read cards
  const [activeUnreadCard, setActiveUnreadCard] = useState(
    pickRandomCard(listOfCards)
  ); // Card on top of non-read pile
  const [activeAlreadyReadCard, setActiveAlreadyReadCard] = useState(null);
  // Card on top of read pile
  const [activeOnReadingCard, setActiveOnReadingCard] = useState(null);
  // Card on reading

  // ----------------- Functions -------------------------

  const cardIsDrawn = (card) => {
    setActiveOnReadingCard(card);
  };

  const cardIsDiscarded = (card) => {
    if (card === null) {
      return;
    }
    const newUnreadCards = unreadCards.filter((c) => c.id !== card.id);
    const newAlreadyReadCards = alreadyReadCards.concat(card);

    setUnreadCards(newUnreadCards);
    setAlreadyReadCards(newAlreadyReadCards);
    setActiveUnreadCard(pickRandomCard(newUnreadCards));
    setActiveAlreadyReadCard(card);
  };

  // ---------------------- Rendering --------------------------
  return (
    <View style={styles.container}>
      {!cardIsOnReading && (
        <>
          <CardUnread
            setCardIsOnReading={setCardIsOnReading}
            cardIsDrawn={cardIsDrawn}
            card={activeUnreadCard}
          />
          <Text>Draw a card !</Text>
          <CardAlreadyRead card={activeAlreadyReadCard} />
        </>
      )}
      {cardIsOnReading && (
        <CardOnReading
          setCardIsOnReading={setCardIsOnReading}
          card={activeOnReadingCard}
          cardIsDiscarded={cardIsDiscarded}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

// =================================================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
