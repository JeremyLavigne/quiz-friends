import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

// Own made slider, inspired by https://github.com/callstack/react-native-slider#ref code
// =================================================================================
export default function AnswerRevealer({ answer, cardWidth }) {
  const [value, setValue] = useState(5);
  const [containerWidth, setContainerWidth] = useState(300);

  const containerHeight = 100;
  const thumbSize = containerWidth / 10;

  useEffect(() => {
    cardWidth && setContainerWidth(cardWidth - 20);
  }, [cardWidth]);

  const percentageValue = value / 100;
  const minPercent = percentageValue;
  const maxPercent = 1 - percentageValue;

  const valueOffset = percentageValue * containerWidth;

  const handleRelease = () => {
    if (value > 80) {
      setValue(95);
    } else {
      setValue(5);
    }
  };

  const onMove = (event) => {
    const { locationX: x } = event.nativeEvent;
    const newValue =
      ((minPercent * containerWidth + x - thumbSize / 2) / containerWidth) *
      100;

    if (newValue > 95) {
      setValue(95);
    } else if (newValue < 5) {
      setValue(5);
    } else {
      setValue(newValue);
    }
  };

  // -------------------------------- Style -----------------------

  const containerStyle = {
    width: containerWidth,
    maxHeight: containerHeight,
    justifyContent: "center",
    marginHorizontal: 5, // borderWidth on parent container is 5
    borderRadius: 5,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#777",
  };

  const trackStyle = {
    height: containerHeight,
    borderRadius: 5,
  };

  const minimumTrackStyle = {
    ...trackStyle,
    backgroundColor: "pink",
    opacity: 0,
    flexGrow: minPercent * 100,
  };

  const maximumTrackStyle = {
    ...trackStyle,
    backgroundColor: "blue",
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
  };

  return (
    <View style={containerStyle}>
      <Text style={styles.answer}>{answer}</Text>

      <View style={minimumTrackStyle} />
      <View
        style={thumbViewStyle}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderMove={onMove}
        onResponderRelease={handleRelease}
      />
      <View style={maximumTrackStyle} />
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
