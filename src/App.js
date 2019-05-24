/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import routes from './routes';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";
import seedData from './seed-state-data'

const client = new ApolloClient({
  clientState: {
    defaults: seedData
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
        <AppContainer/>
      </ApolloProvider>
    )
  }
}
