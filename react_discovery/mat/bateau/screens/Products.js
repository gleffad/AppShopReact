import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Button from "../components/Button";
import { images } from "../constants/Images";
import { getRessources } from "../services/apirest";

export default class Products extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        getRessources("products").then(response => {
            this.setState({ data: response })
        });
    }
    render() {
        return <View style={styles.container}>
                <ImageBackground source={images.background.uri} style={styles.image}>

                <Text style={{ marginVertical: 10, textAlign: "center" }}>Choisissez vos Produits</Text>
                    <View style={{ flex: 1 }}>
                        <Button style={styles.buttons} text="Poissons" screen="ProductsList" data="0" navigation={this.props.navigation}>
                            image = {images.poulpe.uri}
                        </Button>

                        <Button style={styles.buttons} text="Coquillages" screen="ProductsList" data="1" navigation={this.props.navigation}>
                            image = {images.poulpe.uri}
                        </Button>

                        <Button style={styles.buttons} text="Crustacés"  screen="ProductsList" data="2" navigation={this.props.navigation} >
                            image = {images.poulpe.uri}
                        </Button>

                        <Button style={styles.buttons} text="Promotions"  screen="ProductsList" data="sale" navigation={this.props.navigation}>
                            image = {images.poulpe.uri}
                        </Button>
                    </View>
            </ImageBackground>
        </View>
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbb',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        opacity: 0.8
    },

    buttons:{
        width: "100%",
        flexDirection: "row",
        height: "20%",
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})