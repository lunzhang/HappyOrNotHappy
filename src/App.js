import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TfImageRecognition } from 'react-native-tensorflow';

const tfImageRecognition = new TfImageRecognition({
  model: require('./model.pb'),
  labels: requre('./labels.txt'),
  imageMean: 117, // Optional, defaults to 117
  imageStd: 1 // Optional, defaults to 1
})

// const results = await tfImageRecognition.recognize({
//   image: require('./assets/apple.jpg'),
//   inputName: "input", //Optional, defaults to "input"
//   inputSize: 224, //Optional, defaults to 224
//   outputName: "output", //Optional, defaults to "output"
//   maxResults: 3, //Optional, defaults to 3
//   threshold: 0.1, //Optional, defaults to 0.1
// })
//
// results.forEach(result =>
//   console.log(
//     result.id, // Id of the result
//     result.name, // Name of the result
//     result.confidence // Confidence value between 0 - 1
//   )
// )
//
// await tfImageRecognition.close() // Necessary in order to release objects on native side

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
