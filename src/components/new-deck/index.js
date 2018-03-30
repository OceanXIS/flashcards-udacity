import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
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

import { addDeck } from '../../redux-flow/reducers/decks/actions-creators'

class NewDeck extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      isSaving: false
    }
  }

  handleSubmit = () => {
    this.setState({ isSaving: true })
    if (this.state.title) {
      return this.props.addDeck(this.state.title)
        .then(() => {
          this.setState({ title: '', isSaving: false })
          alert('Deck added successfully')
        })
    }
    alert('Insert the title of the deck')
  }

  render () {
    const { title, isSaving } = this.state
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
            <Button full style={styles.input} onPress={this.handleSubmit} disabled={isSaving}>
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

export default connect(null, { addDeck })(NewDeck)
