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
  })
})

export default decks
