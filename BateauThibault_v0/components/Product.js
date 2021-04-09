import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { images } from '../constants/Images';
import { addProduct, removeProduct } from '../store/actions/cartActions';
import { connect } from 'react-redux';

class Product extends React.Component {


    isInCart() {
        let result = this.props.products.filter(value => {
            return value.name == this.props.item.name;
        })
        return result.length > 0;
    }

    render() {
        return <TouchableOpacity style={styles.container}
            onPress={() => {
                if (!this.isInCart()) {
                    this.props.addProduct(this.props.item);
                }
                else {
                    this.props.removeProduct(this.props.item);
                }
            }}>

            <Image source={images.poulpe.uri} style={{width: 50, height: 50, marginRight: 10}}/>
            <Text style={styles.text}>{this.props.item.name}</Text>
            <Text style={styles.text}>
                {this.isInCart() && "OK "}
                {this.props.item.price}€
            </Text>

        </TouchableOpacity>
    }

}

const mapStateToProps = state => {
    return {
        products: state.cart.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addProduct: data => {dispatch(addProduct(data));},
        removeProduct: data => {dispatch(removeProduct(data));},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#8d8ead",
      alignItems: "center",
      margin: 5,
      padding: 10,
      flexDirection: "row",
      opacity: 0.7,
    },
  
    text: {
      color: "#FFF",
    },
  });