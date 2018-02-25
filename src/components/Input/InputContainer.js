import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
export default props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        value={props.selectedPlace}
        onChangeText={props.changePlaceHandler}
      />
      <Button
        onPress={props.onAddPlaceHandler}
        title="ADD "
        style={styles.inputButton}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    justifyContent: "space-between",
    padding: 10
  },
  inputText: {
    width: "70%",
    paddingBottom: 5
  },
  inputButton: {
    width: "30%"
  }
});
