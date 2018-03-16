import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  Icon,
  Right
} from 'native-base'

import * as Api from '../../utils/api'

class Decks extends Component {
  constructor () {
    super()
    this.state = {
      decks: []
    }
  }

  componentDidMount () {
    PubSub.subscribe('UPDATE_DECKS', () => {
      this.getDecks()
    })
    this.getDecks()
  }

  getDecks () {
    Api.getDecks()
      .then(data => this.setDecks(data))
  }

  setDecks (data) {
    const decks = Object.keys(data)
      .map(item => ({
        ...data[item]
      }))

    this.setState({ decks })
  }

  render () {
    const { navigation } = this.props
    const { decks } = this.state
    return (
      <Container>
        <Content>
          <List button>
            {decks.map((deck, index) => (
              <ListItem
                useForeground
                key={index}
                onPress={() => navigation.navigate('Deck', { deck })}
              >
                <Body>
                  <Text>{deck.title}</Text>
                  <Text note>{deck.questions.length} Cards</Text>
                </Body>
                <Right>
                  <Icon name='arrow-forward' />
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    )
  }
}

export default Decks
