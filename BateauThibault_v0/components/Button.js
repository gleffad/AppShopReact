import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";

export default function Button(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        props.navigation.navigate(props.screen, {
          data: props.data ? props.data : [],
        })
      }
    >
      {props.image && (
        <Image
          source={props.image}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
      )}
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8d8ead",
    alignItems: "center",
    margin: 5,
    padding: 10,
    flexDirection: "row",
    opacity: 0.7,
  },

  text: {
    color: "#FFF",
  },
});
