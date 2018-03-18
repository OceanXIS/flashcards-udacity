import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
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

class NewCard extends Component {
  constructor () {
    super()
    this.state = {
      deckTitle: '',
      question: '',
      answer: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.setState({ deckTitle: this.props.navigation.state.params.deckTitle })
  }

  handleSubmit () {
    const { question, answer, deckTitle } = this.state
    if (question && answer) {
      return Api.addCardToDeck({ question, answer }, deckTitle)
        .then(() => alert('Card added successfully'))
    }

    alert('Insert the question and the answer')
  }

  render () {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Enter the data of the card.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Form>
            <Item floatingLabel style={styles.input}>
              <Label>Question</Label>
              <Input onChangeText={question => this.setState({ question })} />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label>Answer</Label>
              <Input onChangeText={answer => this.setState({ answer })} />
            </Item>
          </Form>
          <Button full style={styles.input} onPress={this.handleSubmit}>
            <Text>Save</Text>
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

export default NewCard
