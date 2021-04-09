import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Header from "../components/Header";
import { connect } from "react-redux";
import Product from "../components/Product";
import { images } from "../constants/Images";

class Cart extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>

          <Header navigation={this.props.navigation} />

          {
            this.props.products.map((el, index) => {
              return <Product item={el} key={index}></Product>
            })
          }
          
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.cart.products
  }
};

export default connect(mapStateToProps, undefined)(Cart);

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
