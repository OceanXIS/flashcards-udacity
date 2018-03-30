import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
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

import { addCard } from '../../redux-flow/reducers/decks/actions-creators'

class NewCard extends PureComponent {
  constructor () {
    super()
    this.state = {
      deckTitle: '',
      question: '',
      answer: '',
      isSaving: false
    }
  }

  componentDidMount () {
    this.setState({ deckTitle: this.props.navigation.state.params.deckTitle })
  }

  handleSubmit = () => {
    const { question, answer, deckTitle } = this.state
    if (question && answer) {
      this.setState({ isSaving: true })
      return this.props
        .addCard({ question, answer }, deckTitle)
        .then(() => {
          this.setState({
            deckTitle: '',
            question: '',
            answer: '',
            isSaving: false
          })
          alert('Card added successfully')
        })
    }
    alert('Insert the question and the answer')
  }

  render () {
    const { question, answer, isSaving } = this.state
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
              <Input onChangeText={question => this.setState({ question })} value={question} />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label>Answer</Label>
              <Input onChangeText={answer => this.setState({ answer })} value={answer} />
            </Item>
          </Form>
          <Button
            full
            style={styles.input}
            onPress={this.handleSubmit}
            disabled={isSaving}
          >
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

export default connect(null, { addCard })(NewCard)
