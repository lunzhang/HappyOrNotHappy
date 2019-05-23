import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class App extends Component {
  state = { ratio: '1:1' }

  async askPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      this.askPermission();
    }
  }

  async componentDidMount() {
    this.askPermission();
    const ratio = await this.camera.getSupportedRatiosAsync();
    this.setState({ ratio: ratio[ratio.length - 1] });
  }

  render() {
    return (
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.front}
        ratio={this.state.ratio}
        ref={ref => { this.camera = ref; }}
      />
    );
  }
}
