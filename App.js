import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import MainNavigator from './src/components/main-navigator'
import { Provider } from 'react-redux'

import configureStore from './src/redux-flow/configure-store'
import { setLocalNotification } from './src/utils/notification'

const store = configureStore()

class App extends Component {
  /* eslint-disable */
  async componentDidMount () {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    })
    setLocalNotification()
  }
  /* eslint-enable */

  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
