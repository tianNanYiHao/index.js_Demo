/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BannerView from './BannerView';

export default class banner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BannerView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});

AppRegistry.registerComponent('banner', () => banner);
