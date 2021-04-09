import React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import Products from "./Products";
import { images } from "../constants/Images";
import Button from "../components/Button";
import Header from "../components/Header";

export default class ProductsList extends React.Component {
    render() {
        let products = this.props.route.params.data
            ? this.props.route.params.data
            : [];
        return (
            <View style={styles.container}>
                <Text style={{ marginVertical: 10, textAlign: "center" }}>
                    Choose your products
                </Text>

                <Header navigation={this.props.navigation}/>

                <View style={{ flex: 1 }}>
                    {products.map((value, index) => {
                        return <Products key={index} item={value} />;
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
});
