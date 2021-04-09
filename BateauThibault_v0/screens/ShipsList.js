import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Button from "../components/Button";
import { images } from "../constants/Images";
import Header from "../components/Header";

export default class ShipsList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>
          <Header navigation={this.props.navigation} />

          <Text style={styles.title}>Nos bateaux partenaires</Text>

          <Text style={styles.text}>
            Tous les eaux mènent à Thibault 06.63.99.99.78
            lebateaudethibault@gmail.com www.facebook.com/lebateaudethibault
          </Text>

          <View style={styles.test}>
            <Button
              image={images.deLaBrise.uri}
              data="deLaBrise"
              screen="ShipDetails"
              navigation={this.props.navigation}
              text="De la Brise"
            ></Button>
            <Button
              image={images.saphir.uri}
              data="saphir"
              screen="ShipDetails"
              navigation={this.props.navigation}
              text="Saphir"
            ></Button>
          </View>

          <View style={styles.test}>
            <Button
              image={images.gastMicher.uri}
              data="gastMicher"
              screen="ShipDetails"
              navigation={this.props.navigation}
              text="Gast Micher"
            ></Button>
            <Button
              image={images.aquilon.uri}
              data="aquilon"
              screen="ShipDetails"
              navigation={this.props.navigation}
              text="Aquilon"
            ></Button>
          </View>

          <View style={styles.test}>
            <Button image={images.ancre.uri} text="Contact"></Button>
            <Button image={images.ancre.uri} text="Contact"></Button>
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
    marginTop: "10%",
    marginBottom: "15%",
    marginRight: "auto",
    marginLeft: "auto",
    fontWeight: "bold",
  },

  test: {
    flexDirection: "row",
  },
});
