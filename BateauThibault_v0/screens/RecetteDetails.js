import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import Button from "../components/Button";
import { images } from "../constants/Images";
import Header from "../components/Header";
import { recette } from "../constants/Recettes";

export default class RecetteDetails extends React.Component {
  render() {
    let RecetteName = this.props.route.params.data
      ? this.props.route.params.data
      : "";

    return (
      <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>
          <Header navigation={this.props.navigation} />

          <Text style={styles.title}>{recette[RecetteName].name}</Text>
          <Image
            style={styles.imageRecette}
            source={recette[RecetteName].image}
          ></Image>

          <Text style={styles.description}>
            {recette[RecetteName].description}
          </Text>
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

  imageRecette: {
    alignContent: "center",
    resizeMode: "cover",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "6%",
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
    marginBottom: "10%",
  },

  text: {
    color: "#000",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },

  description: {
    fontSize: 10,
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
    // marginBottom: "20%",
    marginTop: "10%",
  },

  test: {
    flexDirection: "row",
  },
});
