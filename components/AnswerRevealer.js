import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

// =================================================================================
export default function AnswerRevealer({ answer }) {
  const [displayAnswer, setDisplayAnswer] = useState(false);

  // const pan = useRef(new Animated.ValueXY()).current;
  // const panResponder = useRef(
  //   PanResponder.create({
  //     onMoveShouldSetPanResponder: () => true,
  //     onPanResponderMove: Animated.event([null, { dx: pan.x }]),
  //     onPanResponderRelease: () => {
  //       Animated.spring(pan, { toValue: { x: 0 } }).start();
  //     },
  //   })
  // ).current;

  return (
    <View style={styles.container}>
      {/* <Animated.View
        style={{
          transform: [{ translateX: pan.x }],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>  */}
      <Text style={styles.answer}>{answer}</Text>
    </View>
  );
}

// =================================================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "96%",
    maxHeight: 100,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "2%",
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  box: {
    height: 100,
    width: 30,
    backgroundColor: "blue",
    borderRadius: 5,
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
});

/*
        <TouchableOpacity
          style={styles.revealContainer}
          onPress={() => setDisplayAnswer(true)}
        >
          <Text style={styles.reveal}>Reveal Answer</Text>
        </TouchableOpacity>
*/
