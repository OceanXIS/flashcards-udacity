import decks from '../index'
import * as actions from '../actions'

const initialState = {
  React: {
    title: 'React',
    questions: []
  }
}

describe('decks reducer', () => {
  it('...', () => {
    const action = {
      type: actions.ADD_CARD,
      payload: {
        card: {
          question: 'quest',
          answer: 'ans'
        },
        deckTitle: 'React'
      }
    }
    const after = {
      React: {
        title: 'React',
        questions: [{
          question: 'quest',
          answer: 'ans'
        }]
      }
    }
    expect(decks(initialState, action)).toEqual(after)
  })
})
