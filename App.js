import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Deck from './src/components/deck'
import Decks from './src/components/decks'
import NewDeck from './src/components/new-deck'
import NewCard from './src/components/new-card'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks
  },
  NewDeck: {
    screen: NewDeck
  }
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
      title: 'Deck'
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'Add Card'
    }
  }
})

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
