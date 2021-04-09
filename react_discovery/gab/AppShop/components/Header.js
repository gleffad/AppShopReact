import React from "react";
import { Text, View } from "react-native";
import { images } from "../constants/Images";
import Button from "./Button";

export default function Header(props) {
  return (
    <Button
      text=""
      image={images.home.uri}
      screen="Home"
      navigation={props.navigation}
    ></Button>
  );
}
