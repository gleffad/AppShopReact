import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { images } from "../constants/Images";
import Header from "../components/Header";

export default class ShipDetails extends React.Component {
  render() {
    let restaurant = this.props.route.params.data
      ? this.props.route.params.data
      : "";

    return (
      <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>
          <Header navigation={this.props.navigation} />
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.text}>{restaurant.description}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  header: {
    position: "relative",
    top: "0%",
    textAlign: "center",
    color: "#FFF",
    fontStyle: "italic",
    fontSize: 30,
  },

  title: {
    color: "white",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
  },

  text: {
    color: "#000",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },

  test: {
    flexDirection: "row",
  },
});
