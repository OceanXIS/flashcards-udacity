import React, { PureComponent } from 'react'
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

class Decks extends PureComponent {
  constructor () {
    super()
    this.state = {
      decks: []
    }
  }

  componentDidMount () {
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
