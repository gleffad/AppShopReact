import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Button from "../components/Button";
import { images } from "../constants/Images";
import Header from "../components/Header";

export default class RestaurantsList extends React.Component {
  state = {
    data: require("../assets/data/restaurants.json"),
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>
          <Header navigation={this.props.navigation} />
          {this.state.data.map((x, index) => {
            return (
              <Button
                text={x.name}
                data={x}
                screen="RestaurantDetails"
                navigation={this.props.navigation}
                key={index}
              ></Button>
            );
          })}
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
