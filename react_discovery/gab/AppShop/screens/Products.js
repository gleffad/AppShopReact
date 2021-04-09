import React from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import { images } from "../constants/Images";

export default class Products extends React.Component {
  state = { data: [] };

  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button
          text="poisson"
          image={images.poisson.uri}
          screen={"ProductsList"}
          navigation={this.props.navigation}
          data={this.state.data.filter((value) => value.category == 0)}
        ></Button>
      </View>
    );
  }
}
