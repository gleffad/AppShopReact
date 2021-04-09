import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

export default class Cart extends React.Component {
    render() {
        return <View style={styles.container}>
            <Header navigation={this.props.navigation} />
            <Text>cart</Text>
        </View>;
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbb',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        flexDirection: 'column',
        opacity: 0.8
    },
});