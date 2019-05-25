/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {graphql, compose} from 'react-apollo';
import ProfileSelector from "app/components/ProfileSelector";
import getCurrentProfile from './gql/getCurrentProfile';

type Props = {};

class AddReservation extends Component<Props> {
  static navigationOptions = {
    headerTitle: 'Reservation'
  };

  render() {
    const {
      getCurrentProfile: {currentProfile},
    } = this.props;

    return (
      <View style={styles.container}>
        <ProfileSelector profile={currentProfile}/>
      </View>
    );
  }
}

export default compose(
  graphql(getCurrentProfile, {name: "getCurrentProfile"}),
)(AddReservation)

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
