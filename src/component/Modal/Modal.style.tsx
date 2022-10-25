import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../assets/Colors";

export default StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },
  innerContainer: {
    height: Dimensions.get("screen").height / 3,
    backgroundColor: "#2a282a",
    borderRadius: 10,
    marginBottom: 30,
  },
  title: {
    marginTop: 15,
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 50,
  },
  button: {
    backgroundColor: Colors.defaultGreenColor,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    padding: 10,
    textAlign: "center",
  },
});
