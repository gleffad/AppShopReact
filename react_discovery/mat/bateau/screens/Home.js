import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import Button from '../components/Button';
import { images } from '../constants/Images'

export default function Home(props) {

    return <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>
            <Text style={styles.header}>Le bateau de Thibault</Text>
            <Text>home</Text>
            <Button image={images.poisson.uri} screen="Products" text="Products" navigation={props.navigation}></Button>
        </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    header: {
        position: 'relative',
        top: '-30%',
        textAlign: 'center',
        color: "white",
        fontStyle: 'italic',
        fontSize: 30,
    },

    text: {
        color: "white",
        fontStyle: 'italic',
        fontFamily: 'normal',
        fontSize: 30,
        fontWeight: "bold"
    }
})