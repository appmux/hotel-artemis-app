/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import localStateSeedData from './local-state-seed-data'
import routes from './routes';

const client = new ApolloClient({
  clientState: {
    defaults: localStateSeedData,
    resolvers: {
      Mutation: {
        selectProfile: (_, {name, avatar}, {cache}) => {
          const query = gql`
            query getCurrentProfile {
              currentProfile @client {
                __typename,
                name,
                avatar
              }
            }
          `;

          const prevState = cache.readQuery({query});

          const data = {
            ...prevState,
            currentProfile: {
              ...prevState.currentProfile,
              name,
              avatar
            }
          };

          cache.writeData({query, data});
        }
      }
    }
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
