import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";
import styles from "./Modal.style";
import Modall from "react-native-modal";
interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  onAddTask: (text: string) => void;
}
const Modal: FC<ModalProps> = ({ isVisible, onClose, onAddTask }) => {
  const [text, setText] = useState<string>();
  const handleButton = () => {
    if (text) {
      onAddTask(text);
      setText("");
    }
  };
  return (
    <Modall
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Add a task to your list</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ color: "#fff" }}
            value={text}
            onChangeText={(value) => setText(value)}
            placeholder="Task..."
            placeholderTextColor={"white"}
          />
        </View>
        <TouchableOpacity onPress={handleButton} style={styles.button}>
          <Text style={styles.buttonText}>Add The Task</Text>
        </TouchableOpacity>
      </View>
    </Modall>
  );
};

export default Modal;
