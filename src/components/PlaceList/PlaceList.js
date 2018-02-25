import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../listItem/ListItem";

export default props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => {
            props.onPlaceSelected(info.item.key);
          }}
        />
      )}
    />
  );
};
const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
