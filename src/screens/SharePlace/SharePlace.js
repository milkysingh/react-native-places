import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/places';
import InputPlace from '../../components/Input/InputContainer';

class SharePlace extends Component {
  placeInputHandler = placeName => {
    this.props.onAddPlace(placeName);
  };
  render() {
    return (
      <View>
        <InputPlace inputPlace={this.placeInputHandler} />
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  onAddPlace: placeName => dispatch(addPlace(placeName))
});
export default connect(null, mapDispatchToProps)(SharePlace);
