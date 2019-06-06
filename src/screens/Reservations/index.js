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
import {graphql, compose} from 'react-apollo';
import ProfileSelector from 'common/components/ProfileSelector';
import currentProfile from '../Auth/gql/profiles';
import reservations from './gql/reservations';

type Props = {
  getCurrentProfile: any,
  getReservations: any
};

class Reservations extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Reservations',
      headerBackTitle: 'Cancel',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('AddReservation')}
          title="+"
        />
      )
    }
  };

  render() {
    const {
      getCurrentProfile: {currentProfile},
      getReservations: {loading, error, reservations}
    } = this.props;

    if (loading) {
      return <Text>Loading...</Text>;
    }

    if (error) {
      return <Text>Something went wrong... Tap to try again.</Text>;
    }

    return (
      <View style={styles.container}>
        <ProfileSelector profile={currentProfile}/>

        <Text style={styles.instructions}>Guest: {currentProfile.name}</Text>
        <Text style={styles.instructions}>Reservations</Text>
        <View style={styles.container}>
          {reservations.map(({id, name}) =>
            <Text
              key={id}
              style={styles.instructions}>Reservation: {name}</Text>
          )}
        </View>
      </View>
    );
  }
}

export default compose(
  graphql(currentProfile.getCurrent, {name: 'getCurrentProfile'}),
  graphql(reservations.get, {name: 'getReservations'})
)(Reservations)

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
