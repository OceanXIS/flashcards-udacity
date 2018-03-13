import React, { PureComponent } from 'react'
import { TouchableNativeFeedback } from 'react-native'
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

const decksList = [
  { id: '1', title: 'PHP', totalCards: 10 },
  { id: '2', title: 'JavaScript', totalCards: 4 },
  { id: '3', title: 'English', totalCards: 20 },
  { id: '4', title: 'German', totalCards: 89 },
  { id: '5', title: 'French', totalCards: 400 },
  { id: '6', title: 'Spanish', totalCards: 39 }
]

class Decks extends PureComponent {
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Content>
          <List button>
            {decksList.map((deck, index) => (
              <ListItem
                useForeground
                key={index}
                onPress={() => navigation.navigate('Deck', { deck })}
              >
                <Body>
                  <Text>{deck.title}</Text>
                  <Text note>{deck.totalCards} Cards</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Decks
