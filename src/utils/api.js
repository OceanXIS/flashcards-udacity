import { AsyncStorage } from 'react-native'

export const KEY = 'flash-cards'

export const getDecks = () => {
  return AsyncStorage.getItem(KEY)
    .then(data => JSON.parse(data))
}

export const addDeck = title => {
  return AsyncStorage.mergeItem(
    KEY, JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  )
}

export const addCardToDeck = async (card, deckTitle) => {
  const decks = await getDecks()
  if (decks.hasOwnProperty(deckTitle)) {
    return AsyncStorage.mergeItem(KEY,
      JSON.stringify({
        [deckTitle]: {
          questions: [
            ...decks[deckTitle].questions,
            card
          ]
        }
      })
    )
  }
}

export const removeDeck = async deckTitle => {
  const decks = await getDecks()
  if (decks && decks.hasOwnProperty(deckTitle)) {
    const newdecks = { ...decks }
    delete newdecks[deckTitle]
    await AsyncStorage.removeItem(KEY)
    return AsyncStorage.mergeItem(KEY, JSON.stringify(newdecks))
  }
}
