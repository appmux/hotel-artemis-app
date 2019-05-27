/**
 * @format
 * @flow
 */

/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ARTEMIS_API_URL } from './config/artemis-api';
import defaults from './local-state-seed-data';
import resolvers from './resolvers';
import routes from './routes';

const client = new ApolloClient({
  uri: ARTEMIS_API_URL,
  clientState: {
    defaults,
    resolvers
  }
});

const AppNavigator = createStackNavigator(
  routes,
  {
    initialRouteName: 'Auth'
  }
);

const AppContainer = createAppContainer(AppNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}
