import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import MainNavigator from './src/components/main-navigator'

class App extends Component {
  /* eslint-disable */
  async componentDidMount () {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    })
  }
  /* eslint-enable */

  render () {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
