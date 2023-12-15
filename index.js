/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import './global'

const App = require('./src/App').default;
AppRegistry.registerComponent(appName, () => App);
