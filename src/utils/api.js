import { AsyncStorage } from 'react-native'

export const KEY = 'flash-cards'

export const getDecks = () => {
  return AsyncStorage.getItem(KEY)
    .then(data => JSON.parse(data))
}

export const getDeck = () => {}

export const saveDeckTitle = title => {
  return AsyncStorage.mergeItem(
    KEY, JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  )
}

export const addCardToDeck = () => {}
