import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class App extends React.Component {
  componentDidMount() {
    this.askPermission();
  }

  async askPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      this.askPermission();
    }
  }

  render() {
    return (
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.front}
      />
    );
  }
}
