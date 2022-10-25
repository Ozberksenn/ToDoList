import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
const baseStyle = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "300",
  },
});
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultGreenColor,
    ...baseStyle.container,
  },
  text: {
    ...baseStyle.text,
  },
  completedContainer: {
    backgroundColor: "gray",
    ...baseStyle.container,
  },
  completedText: {
    ...baseStyle.text,
    textDecorationLine: "line-through",
  },
});
