import { SafeAreaView, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./src/App.style";
import FloatingButton from "./src/component/FloatingButton/FloatingButton";
import { FontAwesome5 } from "@expo/vector-icons";
import Modal from "./src/component/Modal/Modal";
import TaskCard from "./src/component/TaskCard/TaskCard";
export default function App() {
  const [visible, setVisible] = useState<boolean>(false);
  const [list, setList] = useState<any>([]);

  const handleVisible = () => {
    setVisible(!visible);
  };
  const task = (text: string) => {
    const newTask = {
      id: list.length + 1,
      task: text,
      isCompleted: true,
    };
    setList((oldList: any) => [...oldList, newTask]);
    setVisible(false);
  };
  const deleteTask = (task: any) => {
    if (task.isCompleted === true) {
      const newList = list.map((item: any) => {
        if (item.id === task.id) {
          item.isCompleted = false;
        }
        return item;
      });
      setList(newList);
    } else {
      setList(list.filter((item: any) => item.id !== task.id));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        onAddTask={task}
        onClose={handleVisible}
        isVisible={visible}
      ></Modal>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <FontAwesome5 name="clipboard-list" style={styles.icon} />
        <Text style={styles.title}>My To Do List </Text>
      </View>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <TaskCard
            onDelete={() => deleteTask(item)}
            text={item.task}
            isCompleted={item.isCompleted}
          />
        )}
      />
      <View>{/* <TaskCard isCompleted={true} /> */}</View>
      <View style={styles.buttonContainer}>
        <FloatingButton onPress={handleVisible} />
      </View>
    </SafeAreaView>
  );
}
