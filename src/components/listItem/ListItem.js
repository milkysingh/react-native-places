import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
export default props => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Image
          resizeMode="contain"
          source={props.placeImage}
          style={styles.imageItem}
        />
        <Text style={styles.nameItem}>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  imageItem: {
    marginRight: 8,
    width: 50,
    height: 50
  },
  nameItem: {
    fontSize: 20
  }
});
