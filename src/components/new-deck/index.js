import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import PubSub from 'pubsub-js'
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Card,
  CardItem,
  Body,
  Label
} from 'native-base'

import * as Api from '../../utils/api'

class NewDeck extends PureComponent {
  constructor () {
    super()
    this.state = {
      title: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit () {
    if (this.state.title) {
      return Api.saveDeckTitle(this.state.title)
        .then(() => {
          PubSub.publish('UPDATE_DECKS')
          this.setState({ title: '' })
          alert('Deck added successfully')
        })
    }
    alert('Insert the title of the deck')
  }

  render () {
    const { title } = this.state
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  What's the title of your new deck?
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Form>
            <Item style={styles.input} floatingLabel>
              <Label>Title</Label>
              <Input onChangeText={title => this.setState({ title })} value={title} />
            </Item>
            <Button full style={styles.input} onPress={this.handleSubmit}>
              <Text>Save</Text>
            </Button>
          </Form>
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

export default NewDeck
