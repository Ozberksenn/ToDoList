import { StyleSheet } from "react-native";
import Colors from "./assets/Colors";
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.defaultGrayColor,
    flex: 1,
  },
  title: {
    fontSize: 26,
    color: "#fff",
  },
  icon: {
    color: "#fff",
    fontSize: 26,
    marginRight: 15,
  },
  buttonContainer: {
    position: "absolute",
    flex: 1,
    bottom: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4.8,

    elevation: 10,
  },
});
