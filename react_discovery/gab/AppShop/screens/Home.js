import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";
import { images } from "../constants/Images";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>
          <Header style={styles.header} navigation={this.props.navigation}></Header>
          <Text style={styles.header}>Le bateau de Thibault</Text>
          <Text>Vente en direct de notre bateau</Text>
          <Text>Produits selon la saison, Livraison sur Paris</Text>
          <Text>06.63.99.99.78</Text>
          <Text>lebateaudethibault@gmail.com</Text>
          <Text>www.facebook.com/lebateaudethibault</Text>
          <Button
            image={images.poisson.uri}
            screen="Products"
            text="Produits et promotions"
            navigation={this.props.navigation}
          ></Button>
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
    top: "-30%",
    textAlign: "center",
    color: "white",
    fontStyle: "italic",
    fontSize: 30,
  },

  text: {
    color: "black",
    fontStyle: "italic",
    fontSize: 30,
    fontWeight: "bold",
  },
});
