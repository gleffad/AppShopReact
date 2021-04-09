import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Button from "../components/Button";
import { images } from "../constants/Images";
import { getRessources } from "../services/apirest";
import Header from "../components/Header";

export default class Products extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>
          <Header navigation={this.props.navigation} />

          <Text style={{ marginVertical: 10, textAlign: "center" }}>
            Choisissez votre catégorie
          </Text>

          <Button
            text="Poissons"
            screen="ProductsList"
            data={0}
            navigation={this.props.navigation}
            image={images.poulpe.uri}
          />

          <Button
            text="Coquillages"
            screen="ProductsList"
            data={1}
            navigation={this.props.navigation}
            image={images.poulpe.uri}
          />

          <Button
            text="Crustacés"
            screen="ProductsList"
            data={2}
            navigation={this.props.navigation}
            image={images.poulpe.uri}
          />

          <Button
            text="Promotions"
            screen="ProductsList"
            data="sale"
            navigation={this.props.navigation}
            image={images.poulpe.uri}
          />
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
});
