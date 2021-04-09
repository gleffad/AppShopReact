import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import { images } from '../constants/Images';


export default function Header(props) {

    return <View style={styles.container}>
        <TouchableOpacity
            onPress={() => props.navigation.navigate('Home')}>
            {'home' && (
                <Image source={images.home.uri} style={{ width: 50, height: 50, marginRight: 10 }} />
            )}
        </TouchableOpacity>

        <Image source={images.iTunesArtwork.uri} style={{ width: 50, height: 50, marginRight: 10 }}></Image>

        <TouchableOpacity 
            onPress={() => props.navigation.navigate('Cart')}>
            {'cartLogo' && (
                <Image source={images.cartLogo.uri} style={{ width: 50, height: 50, marginRight: 10 }} />
            )}
        </TouchableOpacity>
    </View>


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8d8ead',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        opacity: 0.8,
    },

    text: {
        color: '#FFF'
    },
})