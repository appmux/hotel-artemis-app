/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class Auth extends Component<Props> {
  static navigationOptions = {
    title: 'Sign In',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Welcome to Artemis</Text>
        <Button
          title="Reservations"
          onPress={() => this.props.navigation.navigate('Reservations')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
