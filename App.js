import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnterGoalText] = useState("");
  const [goalText, setGoal] = useState([]);

  let goalKey = 0;

  const enterTextHandler = (enteredText) => {
    setEnterGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setGoal((currentGoals) => [...currentGoals, enteredGoalText]);
  };

  return (
    <View>
      <View style={styles.screen}>
        <TextInput
          placeholder="Goals"
          style={styles.inputBox}
          onChangeText={enterTextHandler}
          value={enteredGoalText}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {goalText.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal} </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: "15%",
  },

  inputBox: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  listItem: {
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    borderWidth: 1,
    padding: 20,
    marginVertical: 10,
  },
});
