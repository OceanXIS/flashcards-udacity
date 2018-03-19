import * as actions from './actions'
import * as API from '../../../utils/api'

export const getDecks = () => dispatch => (
  API.getDecks()
    .then(decks => dispatch({
      type: actions.GET_DECKS,
      payload: decks
    }))
)

export const addDeck = title => dispatch => (
  API.addDeck(title)
    .then(() => dispatch({
      type: actions.ADD_DECK,
      payload: title
    }))
)

export const removeDeck = title => dispatch => (
  API.removeDeck(title)
    .then(() => dispatch({
      type: actions.REMOVE_DECK,
      payload: title
    }))
)
