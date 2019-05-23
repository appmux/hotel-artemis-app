/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import routes from './routes';

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
      <AppContainer/>
    )
  }
}
