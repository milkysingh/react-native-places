import React from "react";
import { View, Text, Button, Modal, Image, StyleSheet } from "react-native";
export default props => {
  let modelContent = null;
  if (props.selectedSinglePlace !== null) {
    modelContent = (
      <View style={styles.modalContainer}>
        <Image
          source={props.selectedSinglePlace.image}
          style={styles.placeImage}
        />
        <Text style={styles.placeName}>{props.selectedSinglePlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.onModalCloseHandler}
      visible={props.selectedSinglePlace !== null}
      animationType="slide"
    >
      {modelContent}
      <View style={styles.buttonHandler}>
        <Button
          title="Delete"
          color="red"
          onPress={props.onPlaceDeleteHadler}
        />
        <Button title="Close" onPress={props.onModalCloseHandler} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 27
  },
  buttonHandler: {
    padding: 10
  }
});
