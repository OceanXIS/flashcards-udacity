import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import {
  Container,
  Content,
  Text,
  Button,
  Body,
  Badge,
  Card,
  CardItem,
  H2,
  Left
} from 'native-base'

import If from '../common/if'

const cards = [
  { question: 'Hello, I am very good, how are you?', answer: 'I am good too, thanks.' },
  { question: 'Hello, I am very good, how are you?', answer: 'I am good too, thanks.' }
]

class Quiz extends Component {
  constructor () {
    super()
    this.state = {
      deckTitle: '',
      showAnswer: false
    }
    this.showAnswer = this.showAnswer.bind(this)
    this.showQuestion = this.showQuestion.bind(this)
  }

  componentDidMount () {
    const { deckTitle } = this.props.navigation.state.params
    this.setState({ deckTitle })
  }

  showAnswer () {
    this.setState({ showAnswer: true })
  }

  showQuestion () {
    this.setState({ showAnswer: false })
  }

  render () {
    const { deckTitle } = this.state
    const { navigation, decks } = this.props

    const deck = decks[deckTitle] || { title: '', questions: [] }

    return (
      <Container>
        <Content>
          <If test={!this.state.showAnswer}>
            <Card>
              <CardItem header>
                <Left>
                  <Body>
                    <Text>Question</Text>
                    <Text note>1/10</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <H2>Hello, I am very good, how are you?</H2>
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Left>
                  <Button transparent onPress={this.showAnswer}>
                    <Text>Show Answer</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </If>

          <If test={this.state.showAnswer}>
            <Card>
              <CardItem header>
                <Left>
                  <Body>
                    <Text>Answer</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <H2>Im really good.</H2>
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Left>
                  <Button transparent onPress={this.showQuestion}>
                    <Text>Show Question</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>

            <Button
              full
              success
              style={styles.button}
            >
              <Text>Correct</Text>
            </Button>
            <Button
              full
              style={styles.button}
              danger
            >
              <Text>Incorrect</Text>
            </Button>
          </If>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10
  }
})


const mapStateToProps = state => ({
  decks: state.decks
})

export default connect(mapStateToProps)(Quiz)
