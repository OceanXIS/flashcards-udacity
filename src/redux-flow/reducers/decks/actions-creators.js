import * as actions from './actions'
import * as API from '../../../utils/api'

export const getDecks = () => dispatch => {
  API.getDecks()
    .then(decks => dispatch({
      type: actions.GET_DECKS,
      payload: decks
    }))
}
