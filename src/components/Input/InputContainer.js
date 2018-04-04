import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class InputContainer extends Component {
  state = {
    placeName: ''
  };

  inputChangeHandler = e => {
    // console.log(e);
    this.setState({ placeName: e });
  };

  inputSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.inputPlace(this.state.placeName);
    this.setState({ placeName: '' });
  };
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          value={this.state.placeName}
          onChangeText={e => this.inputChangeHandler(e)}
        />
        <Button
          onPress={this.inputSubmitHandler}
          title="ADD "
          style={styles.inputButton}
        />
      </View>
    );
  }
}
export default InputContainer;
const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'space-between',
    padding: 10
  },
  inputText: {
    width: '70%',
    paddingBottom: 5
  },
  inputButton: {
    width: '30%'
  }
});
