import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CardOnPile from "./components/CardOnPile";
import CardOnReading from "./components/CardOnReading";
import listOfCards from "./friends.json";

export default function App() {
  const pickRandomCard = (list) => {
    const randNumber = Math.floor(Math.random() * list.length - 1);
    return list[randNumber];
  };

  const [cardIsOnReading, setCardIsOnReading] = useState(false);
  const [unreadCards, setUnreadCards] = useState(listOfCards);
  const [alreadyReadCards, setAlreadyReadCards] = useState([]);
  const [activeUnreadCard, setActiveUnreadCard] = useState(
    pickRandomCard(listOfCards)
  );
  const [activeAlreadyReadCard, setActiveAlreadyReadCard] = useState(null);
  const [activeReadCard, setActiveReadCard] = useState(null);

  const cardIsDrawn = () => {};

  const cardIdDiscarded = () => {};

  return (
    <View style={styles.container}>
      {!cardIsOnReading && (
        <>
          <CardOnPile
            setCardIsOnReading={setCardIsOnReading}
            unread={true}
            card={activeUnreadCard}
          />
          <Text>Draw a card !</Text>
          <CardOnPile
            setCardIsOnReading={setCardIsOnReading}
            unread={false}
            card={activeAlreadyReadCard}
          />
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
