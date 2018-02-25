import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import PlaceList from "./src/components/PlaceList/PlaceList";
import InputContainer from "./src/components/Input/InputContainer";
import placeImage from "./assests/desktop-year-of-the-tiger-images-wallpaper.jpg";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
export default class App extends React.Component {
  state = {
    selectedPlace: "",
    places: [],
    selectedSinglePlace: null
  };
  changePlaceHandler = e => {
    this.setState({ selectedPlace: e });
  };
  onAddPlaceHandler = () => {
    if (this.state.selectedPlace.trim() === "") {
      return;
    }
    this.setState(prevState => ({
      places: prevState.places.concat({
        key: Math.random(),
        name: prevState.selectedPlace,
        image: placeImage
      }),
      selectedPlace: ""
    }));
  };

  onPlaceSelected = key => {
    this.setState(prevState => {
      return {
        selectedSinglePlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter((place, i) => place.key !== key)
    //   };
    // });
  };
  onPlaceDeleteHadler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(
          (place, i) => place.key !== prevState.selectedSinglePlace.key
        ),
        selectedSinglePlace: null
      };
    });
  };
  onModalCloseHandler = () => {
    this.setState({
      selectedSinglePlace: null
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedSinglePlace={this.state.selectedSinglePlace}
          onPlaceDeleteHadler={this.onPlaceDeleteHadler}
          onModalCloseHandler={this.onModalCloseHandler}
        />
        <InputContainer
          changePlaceHandler={this.changePlaceHandler}
          onAddPlaceHandler={this.onAddPlaceHandler}
          selectedPlace={this.state.selectedPlace}
        />
        <PlaceList
          places={this.state.places}
          onPlaceSelected={this.onPlaceSelected}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: "#62B769",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
