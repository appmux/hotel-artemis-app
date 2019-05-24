/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { graphql } from 'react-apollo';
import getCurrentProfile from './gql/getCurrentProfile'
import ProfileSelector from "app/components/ProfileSelector";

type Props = {};
class Reservations extends Component<Props> {
  static navigationOptions = {
    headerTitle: 'Reservations'
  };

  render() {
    const {data: {loading, error, currentProfile}} = this.props;

    if (loading) {
      return <Text>Loading...</Text>;
    }

    if (error) {
      return <Text>Something went wrong...</Text>;
    }

    return (
      <View style={styles.container}>
        <ProfileSelector profile={currentProfile}/>

        <Text style={styles.instructions}>Guest: {currentProfile.name}</Text>
        <Text style={styles.instructions}>Reservations</Text>
      </View>
    );
  }
}

export default graphql(getCurrentProfile)(Reservations)

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
