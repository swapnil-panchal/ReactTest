/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import AppNavigation from './../navigation/AppNavigation'

export default class App extends Component {
  render() {
    return (
      <AppNavigation />
    );
  }
}