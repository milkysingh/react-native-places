import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';
class FindPlace extends Component {
  render() {
    return (
      <View>
        <PlaceList places={this.props.places} />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  places: state.places.places
});
export default connect(mapStateToProps)(FindPlace);
