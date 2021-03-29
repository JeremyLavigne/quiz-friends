import React, { useRef } from "react";
import { View, StyleSheet, Text } from "react-native";

// Own made slider, inspired by https://github.com/callstack/react-native-slider#ref code
// =================================================================================
export default function AnswerRevealer({ answer }) {
  const [value, setValue] = React.useState(30);

  const containerWidth = 300;
  const containerHeight = 100;
  const thumbSize = 20;

  const percentageValue = value / 100;
  const minPercent = percentageValue;
  const maxPercent = 1 - percentageValue;

  const valueOffset = percentageValue * containerWidth;

  // -------------------------------- Style -----------------------

  const containerStyle = {
    width: containerWidth,
    maxHeight: containerHeight,
    justifyContent: "center",
    marginHorizontal: "2%",
    borderRadius: 5,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#777",
  };

  const trackStyle = {
    height: 100,
    borderRadius: 5,
    userSelect: "none",
  };

  const minimumTrackStyle = {
    ...trackStyle,
    backgroundColor: "pink",
    flexGrow: minPercent * 100,
  };

  const maximumTrackStyle = {
    ...trackStyle,
    backgroundColor: "yellow",
    flexGrow: maxPercent * 100,
  };

  const thumbViewStyle = {
    width: thumbSize,
    height: 100,
    left: valueOffset - thumbSize / 2,
    top: 0,
    position: "absolute",
    backgroundColor: "green",
    zIndex: 1,
    borderRadius: thumbSize / 2,
    overflow: "hidden",
    userSelect: "none",
  };

  return (
    <View style={containerStyle} id="answer-revealer">
      <Text style={styles.answer}>{answer}</Text>

      <View pointerEvents="none" style={minimumTrackStyle} />
      <View pointerEvents="none" style={thumbViewStyle} />
      <View pointerEvents="none" style={maximumTrackStyle} />
    </View>
  );
}

// =================================================================================
const styles = StyleSheet.create({
  answer: {
    position: "absolute",
    color: "white",
    textAlign: "center",
    fontSize: 18,
    zIndex: 0,
  },
});
