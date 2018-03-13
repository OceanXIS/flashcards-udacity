import { TabNavigator, StackNavigator } from 'react-navigation'

import Deck from './deck'
import Decks from './decks'
import NewDeck from './new-deck'
import NewCard from './new-card'

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

export default MainNavigator
