import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  container: {
    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: '#BBB',
  },
  text: {
    color: "#555",
    textTransform: "uppercase",
    fontFamily: 'Relaway-Bold'
  }
});

export default CustomButton;