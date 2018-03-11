import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Decks from './src/components/decks'
import Deck from './src/components/deck'


const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
  },
}, {
  navigationOptions: {
    header: null
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Deck',
    }
  }
})

class App extends Component {
  render() {
    return  (
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
