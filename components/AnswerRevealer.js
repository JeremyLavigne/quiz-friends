import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

// =================================================================================
export default function AnswerRevealer({ answer }) {
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [openerRightWidth, setOpenerRightWidth] = useState("96%");

  // const handleOnPanResponderMove = (Xpos) => {
  //   const widthTry = 800; // Should be the View total width
  //   alert("here");

  //   const percent = Math.floor(widthTry - widthTry / Xpos);
  //   const cssWidth = percent.toString() + "%";
  //   if (cssWidth !== openerRightWidth) {
  //     setOpenerRightWidth(cssWidth);
  //   }

  //   return Animated.event([null, { dx: pan.x, dy: pan.y }], {});
  // };

  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {}),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
        }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          zIndex: 3,
          transform: [{ translateX: pan.x }],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.opener} />
      </Animated.View>

      <Text style={styles.answer}>{answer}</Text>
      <View
        style={{
          position: "absolute",
          right: 0,
          width: openerRightWidth,
          height: "100%",
          backgroundColor: "green",
          zIndex: 1,
        }}
      ></View>
    </View>
  );
}

// =================================================================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "96%",
    maxHeight: 100,
    backgroundColor: "grey",
    justifyContent: "center",
    marginHorizontal: "2%",
    borderRadius: 5,
  },
  opener: {
    height: 106,
    width: 40,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  answer: {
    position: "absolute",
    left: 10,
    color: "white",
    textAlign: "center",
    fontSize: 18,
    zIndex: 0,
  },
});
