import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Decks from './src/components/decks'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks
  },
})

class App extends Component {
  render() {
    return  (
      <View style={styles.container}>
        <Tabs />
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
