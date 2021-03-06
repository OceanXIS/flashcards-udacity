import createReducer from '../create-reducer'
import * as actions from './actions'

const decks = createReducer({}, {
  [actions.GET_DECKS]: (state, action) => ({
    ...state,
    ...action.payload
  }),
  [actions.ADD_DECK]: (state, action) => ({
    ...state,
    [action.payload]: {
      title: action.payload,
      questions: []
    }
  }),
  [actions.REMOVE_DECK]: (state, action) => {
    const decks = { ...state }
    delete decks[action.payload]
    return decks
  },
  [actions.ADD_CARD]: (state, action) => {
    const { card, deckTitle } = action.payload
    return {
      ...state,
      [deckTitle]: {
        title: state[deckTitle].title,
        questions: [
          ...state[deckTitle].questions,
          card
        ]
      }
    }
  }
})

export default decks
