import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, List, ListItem, Body  } from 'native-base'

class Deck extends PureComponent {
  constructor () {
    super()
    this.state = {
      deck: {}
    }
  }

  componentDidMount () {
    this.setState({ deck: this.props.navigation.state.params.deck })
  }

  render () {
    const { deck } = this.state
    const { navigation } = this.props
    return (
      <Container>
        <Content>
          <List button>
            <ListItem>
              <Body>
                <Text>{deck.title}</Text>
                <Text note>{deck.totalCards} Cards</Text>
              </Body>
            </ListItem>
          </List>
          <Button
            full
            style={styles.input}
            onPress={() => navigation.navigate('NewCard')}
            >
            <Text>Add Card</Text>
          </Button>
          <Button
            full
            style={styles.input}
            onPress={() => navigation.navigate('NewCard')}
          >
            <Text>Start Quiz</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 10
  },
})

export default Deck
