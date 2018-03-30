import React, { Component } from 'react'
import { StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import {
  Container,
  Content,
  Text,
  Button,
  List,
  ListItem,
  Body
} from 'native-base'

import { removeDeck } from '../../redux-flow/reducers/decks/actions-creators'

class Deck extends Component {
  constructor () {
    super()
    this.state = {
      isRemoving: false,
      deckTitle: ''
    }
  }

  componentDidMount () {
    const { deckTitle } = this.props.navigation.state.params
    this.setState({ deckTitle })
  }

  handleDelete (title) {
    Alert.alert(
      null,
      'Are you sure you want to remove the deck?',
      [
        { text: 'No' },
        { text: 'Yes', onPress: () => this.removeDeck(title) }
      ]
    )
  }

  removeDeck (title) {
    this.setState({ isRemoving: true })
    this.props.removeDeck(title)
      .then(() => this.props.navigation.navigate('Home'))
  }

  render () {
    const { deckTitle, isRemoving } = this.state
    const { navigation, decks } = this.props

    const deck = decks[deckTitle] || { title: '', questions: [] }
    const noCards = deck.questions.length === 0

    return (
      <Container>
        <Content>
          <List button>
            <ListItem>
              <Body>
                <Text>{deck && deck.title}</Text>
                <Text note>{deck.questions.length} Cards</Text>
              </Body>
            </ListItem>
          </List>
          <Button
            full
            style={styles.input}
            onPress={() => navigation.navigate('NewCard', { deckTitle: deck.title })}
            disabled={isRemoving}
          >
            <Text>Add Card</Text>
          </Button>
          <Button
            full
            style={styles.input}
            onPress={() => navigation.navigate('Quiz', { deckTitle: deck.title })}
            disabled={isRemoving || noCards}
          >
            <Text>Start Quiz</Text>
          </Button>
          <Button
            full
            style={styles.input}
            onPress={() => this.handleDelete(deck.title)}
            disabled={isRemoving}
            danger
          >
            <Text>Remove Deck</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 10
  }
})

const mapStateToProps = state => ({
  decks: state.decks
})

export default connect(
  mapStateToProps,
  { removeDeck }
)(Deck)
