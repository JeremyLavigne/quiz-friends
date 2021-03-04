import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

// =================================================================================
export default function AnswerRevealer({ answer }) {
  const [openerRightWidth, setOpenerRightWidth] = useState("96%");

  const handleOnPanResponderMove = (Xpos) => {
    const widthTry = 275; // Should be the View total width
    let percent = 96;
    const XposStr = JSON.stringify(Xpos);
    const XposNum = parseInt(XposStr);

    if (Xpos !== 0) {
      percent = Math.floor(((widthTry - XposNum) / widthTry) * 100);
    }
    const cssWidth = percent.toString() + "%";
    console.log(
      widthTry,
      widthTry - XposNum,
      (widthTry - XposNum) / widthTry,
      Math.floor((widthTry - XposNum) / widthTry) * 100
    );

    if (cssWidth !== openerRightWidth) {
      setOpenerRightWidth(cssWidth);
    }
  };

  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        // useNativeDriver: true,
        listener: () => handleOnPanResponderMove(pan.x),
      }),
      // onPanResponderRelease: () => {
      //   Animated.spring(pan, {
      //     toValue: { x: 0, y: 0 },
      //     listener: () => {
      //       setOpenerRightWidth("96%");
      //     },
      //   }).start();
      // },
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
      />
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
    zIndex: -1,
  },
  opener: {
    height: 106,
    width: 40,
    backgroundColor: "blue",
    borderRadius: 5,
    zIndex: 3,
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
