/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import ProfileSelector from 'app/components/ProfileSelector'
import {graphql, compose} from 'react-apollo';
import getProfiles from './gql/getProfiles'
import selectProfile from './gql/selectProfile'

type Props = {};

class Auth extends Component<Props> {
  static navigationOptions = {
    title: 'Log In',
    headerBackTitle: 'Log Out'
  };

  onPress = (profile) => {
    this.props.selectProfile({variables: {...profile}})
    this.props.navigation.navigate('Reservations')
  }

  render() {
    const {getProfiles: {profiles}} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Welcome to Artemis</Text>

        {profiles.map((profile) =>
          <TouchableOpacity
            onPress={() => this.onPress(profile)}
            key={profile.name}
          >
            <ProfileSelector profile={profile}/>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default compose(
  graphql(selectProfile, {name: "selectProfile"}),
  graphql(getProfiles, {name: "getProfiles"})
)(Auth)

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
