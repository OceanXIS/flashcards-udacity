import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Container, Content } from 'native-base'

import If from '../common/if'
import Summary from './summary'
import Question from './question'
import Answer from './answer'

import { clearLocalNotification, setLocalNotification } from '../../utils/notification'

class Quiz extends Component {
  constructor () {
    super()
    this.state = {
      deckTitle: '',
      showAnswer: false,
      showSummary: false,
      cards: [],
      cardIndex: 0,
      totalCards: 0,
      totalCorrectAnswers: 0
    }
  }

  componentDidMount () {
    const { deckTitle } = this.props.navigation.state.params
    const questions = this.props.decks[deckTitle].questions
    this.setState({
      deckTitle,
      cards: questions,
      totalCards: questions.length
    })
  }

  showAnswer = () => {
    this.setState({ showAnswer: true })
  }

  showQuestion = () => {
    this.setState({ showAnswer: false })
  }

  handleAnswer = (type) => {
    if (type === 'correct') {
      this.setState({
        totalCorrectAnswers: this.state.totalCorrectAnswers + 1,
        cardIndex: this.state.cardIndex + 1,
        showAnswer: false
      })
      this.showSummaryOrNexQuestion()
      return
    }

    this.setState({
      cardIndex: this.state.cardIndex + 1,
      showAnswer: false
    })

    this.showSummaryOrNexQuestion()
  }

  showSummaryOrNexQuestion = () => {
    const { cardIndex, totalCards } = this.state
    if ((cardIndex + 1) >= totalCards) {
      this.setState({ showSummary: true, showAnswer: false })
      this.resetLocalNotification()
    }
  }

  resetLocalNotification () {
    clearLocalNotification()
      .then(setLocalNotification)
  }

  backToDeck = () => {
    const backAction = NavigationActions.back({ key: null })
    this.props.navigation.dispatch(backAction)
  }

  restartQuiz = () => {
    this.setState({
      showSummary: false,
      cardIndex: 0,
      totalCorrectAnswers: 0
    })
  }

  getPercentageCorrectAnswers = () => {
    const { totalCorrectAnswers, totalCards } = this.state
    const total = totalCorrectAnswers / totalCards * 100
    return parseInt(total, 10)
  }

  render () {
    const { cardIndex, cards, totalCards, showAnswer, showSummary } = this.state
    const card = cards[cardIndex]

    return (
      <Container>
        <Content>
          <If test={!showAnswer && !showSummary}>
            <Question
              cardIndex={cardIndex}
              card={card}
              totalCards={totalCards}
              showAnswer={this.showAnswer}
            />
          </If>
          <If test={showAnswer && !showSummary}>
            <Answer
              card={card}
              showQuestion={this.showQuestion}
              handleAnswer={this.handleAnswer}
            />
          </If>
          <If test={showSummary}>
            <Summary
              backToDeck={this.backToDeck}
              restartQuiz={this.restartQuiz}
              percentageCorrectAnswers={this.getPercentageCorrectAnswers()}
            />
          </If>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  decks: state.decks
})

export default connect(mapStateToProps)(Quiz)
