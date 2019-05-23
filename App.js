import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Permissions } from 'expo';

async function requestCameraPermission() {
  try {
    const granted = await Permissions.askAsync(Permissions.CAMERA);
    if (granted.status === 'granted') {
      return true;
    } else {
      return requestCameraPermission();
    }
  } catch (err) {
    return requestCameraPermission();
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    requestCameraPermission();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
