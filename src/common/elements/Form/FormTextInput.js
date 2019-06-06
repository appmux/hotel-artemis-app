import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

type Props = {
  profile: any
};

export default class FormTextInput extends Component<Props> {
  render() {
    const { label, value, error, onChangeText } = this.props;

    return (
      <View>
        <Text>{label}</Text>
        <TextInput
          style={styles.inputField}
          placeholder="MM/DD/YY"
          value={value}
          onChangeText={onChangeText}
        />
        <Text>{error}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white"
  },
  inputField: {
    margin: 15,
    height: 40,
    borderColor: "black",
    borderWidth: 1
  }
});
