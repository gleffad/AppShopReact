import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { images } from "../constants/Images";
import Header from "../components/Header";

export default class Contact extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>
          <Header navigation={this.props.navigation} />
          <Text style={styles.title}>Le bateau de Thibault</Text>
          <Text style={styles.text}>
            Vente en direct de notre bateau Produits selon la saison, Livraisons
            sur Paris 06.63.99.99.78 lebateaudethibault@gmail.com
            www.facebook.com/lebateaudethibault
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

  description: {
    fontSize: 10,
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
    //    marginBottom: "20%",
    marginTop: "10%",
  },

  imageBoat: {
    alignContent: "center",
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

  test: {
    flexDirection: "row",
  },
});
