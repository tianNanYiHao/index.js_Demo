/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import RootApp from './reduxReactApp/RootApp'

AppRegistry.registerComponent(appName, () => RootApp);
