import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import Button from '../components/Button';
import { images } from '../constants/Images'
import Header from "../components/Header";

export default function Home(props) {

    return <View style={styles.container}>
        <ImageBackground source={images.background.uri} style={styles.image}>

            <Header navigation={props.navigation} />

            <Text style={styles.title}>Le bateau de Thibault</Text>

            <Text style={styles.text}>
                Vente en direct de notre bateau
                Produits selon la saison, Livraisons sur Paris
                06.63.99.99.78
                lebateaudethibault@gmail.com
                www.facebook.com/lebateaudethibault
            </Text>

            <Button image={images.poisson.uri} screen="Products" text="Produits et Promotions" navigation={props.navigation}></Button>

            <View style={styles.test}>
                <Button image={images.ancre.uri} screen="ProductsList" text="Liste produits" navigation={props.navigation}></Button>
                <Button image={images.ancre.uri} screen="Cart" text="Bateaux" navigation={props.navigation}></Button>
            </View>

            <View style={styles.test}>
                <Button image={images.ancre.uri} screen="Cart" text="Bateaux" navigation={props.navigation}></Button>
                <Button image={images.ancre.uri} screen="Cart" text="Bateaux" navigation={props.navigation}></Button>
            </View>

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
        top: '0%',
        textAlign: 'center',
        color: "#FFF",
        fontStyle: 'italic',
        fontSize: 30,
    },

    title: {
        color: "white",
        fontStyle: 'italic',
        textAlign: "center",
        fontSize: 35,
        fontWeight: "bold"
    },

    text: {
        color: "#000",
        fontStyle: "italic",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    },

    test: {
        flexDirection: "row",
    },
})