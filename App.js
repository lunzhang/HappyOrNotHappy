import React, { Component } from 'react';
import { NativeModules, StyleSheet, Text, View } from 'react-native';
import { Camera, Permissions } from 'expo';

const ToastExample = NativeModules.ToastExample;

export default class App extends Component {
  state = { ratio: '1:1' }

  async askPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      this.askPermission();
    }
  }

  async componentDidMount() {
    // this.askPermission();
    // const ratio = await this.camera.getSupportedRatiosAsync();
    // this.setState({ ratio: ratio[ratio.length - 1] });
    console.log(ToastExample, NativeModules.RNTensorFlowPackage);
  }

  render() {
    return (
      <View

      />
    );
  }
}
