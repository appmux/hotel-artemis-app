import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

type Props = {
  profile: any
};
export default class FormButton extends Component<Props> {
  render() {
    const { title, onPress } = this.props;

    return (
      <View>
        <Button
          style={styles.inputField}
          title={title}
          onPress={onPress}
        />
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
