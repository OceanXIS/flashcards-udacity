import { AsyncStorage } from 'react-native'

export const KEY = 'flash-cards'

export const getDecks = () => {
  return AsyncStorage.getItem(KEY)
    .then(data => JSON.parse(data))
}

export const getDeck = () => {}

export const saveDeckTitle = () => {}

export const addCardToDeck = () => {}
