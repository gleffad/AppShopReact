import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Button from "../components/Button";
import { images } from "../constants/Images";
import Header from "../components/Header";

export default class RecetteList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>
          <Header navigation={this.props.navigation} />

          <Text style={styles.title}>Nos Recettes</Text>

          <Text style={styles.text}>
            Vente en direct de notre bateau Produits selon la saison, Livraisons
            sur Paris 06.63.99.99.78 lebateaudethibault@gmail.com
            www.facebook.com/lebateaudethibault
          </Text>

          <View style={styles.test}>
            <Button
              image={images.homard.uri}
              data="homard"
              screen="RecetteDetails"
              navigation={this.props.navigation}
              text="Homard"
            ></Button>
            <Button
              image={images.stJacques.uri}
              data="stJacques"
              screen="RecetteDetails"
              navigation={this.props.navigation}
              text="St Jacques"
            ></Button>
          </View>

          <View style={styles.test}>
            <Button
              image={images.bar.uri}
              data="bar"
              screen="RecetteDetails"
              navigation={this.props.navigation}
              text="Bar"
            ></Button>
            <Button
              image={images.poulpe.uri}
              data="tourteau"
              screen="RecetteDetails"
              navigation={this.props.navigation}
              text="Tourteau"
            ></Button>
          </View>

          <View style={styles.test}>
            <Button image={images.poulpe.uri} text="Recette"></Button>
            <Button image={images.poulpe.uri} text="Recette"></Button>
          </View>
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
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: "10%",
    marginTop: "10%",
  },

  test: {
    flexDirection: "row",
  },
});
