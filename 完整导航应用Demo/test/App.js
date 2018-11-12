/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


import RootNav from './TestDemo/Navigation/RootNav'
import RouteManager from "./TestDemo/Navigation/RouteManager";


export default class App extends Component {
    render() {
        return (
            <RootNav
                ref={navigationRef => {
                    RouteManager.setTopLevelNaivgator(navigationRef)
                }}
            />
        );
    }
}



