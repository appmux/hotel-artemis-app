/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {graphql, compose, withApollo} from 'react-apollo';
import {
  FormTextInput,
  FormButton
} from 'common/elements/Form';
import currentProfile from '../Auth/gql/profiles';
import reservations from './gql/reservations';
import currentReservation from './gql/currentReservation';
import moment from 'moment';

type Props = {
  getCurrentProfile: any,
  getCurrentReservation: any,
  createReservation: any,
  updateCurrentReservation: any
};

class AddReservation extends Component<Props> {
  static navigationOptions = {
    headerTitle: 'Reservation'
  };

  onChangeArrivalDate = (value) => {
    if (!this.validateDate(value)) {
      // TODO: Add validation error handling.
    }

    const currentReservation = this.props.getCurrentReservation.currentReservation

    this.props.updateCurrentReservation({variables: {
      ...currentReservation,
      arrivalDate: value
    }})
  }

  onChangeDepartureDate = (value) => {
    if (!this.validateDate(value)) {
      // TODO: Add validation error handling.
    }

    const currentReservation = this.props.getCurrentReservation.currentReservation

    this.props.updateCurrentReservation({variables: {
        ...currentReservation,
      departureDate: value
    }})
  }

  onSubmit = () => {
    const currentProfile = this.props.getCurrentProfile.currentProfile
    const currentReservation = this.props.getCurrentReservation.currentReservation

    this.props.createReservation({variables: {
        name: currentProfile.name,
        hotelName: 'Artemis',
        arrivalDate: moment(currentReservation.arrivalDate, 'DD/MM/YYYY').utc().hour(15).format(),
        departureDate: moment(currentReservation.departureDate, 'DD/MM/YYYY').utc().hour(12).format()
      }});
  }

  validateDate(date) {
    // TODO: Add a better date validation.
    return date.match(/^((0|1)\d{1})\/((0|1|2)\d{1})\/(\d{2})$/);
  }

  render() {
    const {
      getCurrentProfile: {currentProfile},
      getCurrentReservation: {currentReservation},
    } = this.props;

    return (
      <View style={styles.container}>
        <FormTextInput
          label="Check-in date"
          value={currentReservation.arrivalDate}
          error="Something went wrong..."
          onChangeText={this.onChangeArrivalDate}
        />
        <FormTextInput
          label="Check-out date"
          value={currentReservation.departureDate}
          error="Something went wrong..."
          onChangeText={this.onChangeDepartureDate}
        />
        <FormButton
          title="Submit"
          onPress={this.onSubmit}
        />
      </View>
    );
  }
}

export default compose(
  graphql(reservations.create, {
    name: 'createReservation',
    // TODO: Add in progress and on error handling.
    options: (props) => ({
      // onCompleted: (data) => console.log('onCompleted', data, props),
      // onError: (data) => console.log('onError', data, props)
    })
  }),
  graphql(currentProfile.getCurrent, {name: 'getCurrentProfile'}),
  graphql(currentReservation.get, {name: 'getCurrentReservation'}),
  graphql(currentReservation.update, {name: 'updateCurrentReservation'}),
)(withApollo(AddReservation))

// TODO: Add custom styling.
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
