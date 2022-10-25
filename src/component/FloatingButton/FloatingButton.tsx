import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import styles from "./FloatingButton.style";
import { AntDesign } from "@expo/vector-icons";
interface FloatingProps {
  onPress: () => void;
}
const FloatingButton: FC<FloatingProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AntDesign name="plus" size={30} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

export default FloatingButton;
