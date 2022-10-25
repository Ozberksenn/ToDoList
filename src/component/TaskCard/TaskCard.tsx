import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import styles from "./TaskCard.style";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
interface TaskCardProps {
  isCompleted: boolean;
  text: string;
  onDelete: () => void;
}
const TaskCard: FC<TaskCardProps> = ({ isCompleted, text, onDelete }) => {
  return isCompleted ? (
    <TouchableOpacity onPress={onDelete} style={styles.container}>
      <Entypo name="dot-single" size={26} color="white" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  ) : (
    <View style={styles.completedContainer}>
      <Entypo name="dot-single" size={26} color="white" />
      <Text style={styles.completedText}>{text}</Text>
      <TouchableOpacity
        onPress={onDelete}
        style={{ position: "absolute", right: 15 }}
      >
        <Ionicons name="trash-bin" size={26} color="#CF0A0A" />
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
