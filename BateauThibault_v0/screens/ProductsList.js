import React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { images } from "../constants/Images";
import Product from "../components/Product";
import Header from "../components/Header";

export default class ProductsList extends React.Component {
    state = {
        data: require("../assets/data/products.json"),
    };

    render() {
        let products = this.props.route.params.data
            ? this.props.route.params.data
            : [];

        return (
            <View style={styles.container}>
                <ImageBackground source={images.background.uri} style={styles.image}>
                    
                    <Header navigation={this.props.navigation} />

                    {
                        products != "sale"
                            ? this.state.data
                                .filter((el) => el.category == products)
                                .map((x, index) => {
                                    return (
                                        <Product
                                            item={x} key={index}
                                        />
                                    );
                                })
                            : this.state.data
                                .filter((el) => el.sale)
                                .map((x, index) => {
                                    return (
                                        <Product
                                            item={x} key={index}
                                        />
                                    );
                                })
                    }
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
