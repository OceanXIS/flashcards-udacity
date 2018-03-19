import React, { Component } from 'react'
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

import { connect } from 'react-redux'
import { getDecks } from '../../redux-flow/reducers/decks/actions-creators'

class Decks extends Component {
  componentDidMount () {
    this.props.getDecks()
  }

  render () {
    const { navigation } = this.props
    const { decks } = this.props
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
                  <Text note>{deck.questions && deck.questions.length} Cards</Text>
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

function normalizeDecks (data) {
  return Object.keys(data)
    .map(item => ({
      ...data[item]
    }))
}

const mapStateToProps = state => ({
  decks: normalizeDecks(state.decks)
})

const mapDispatchToProps = { getDecks }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Decks)
