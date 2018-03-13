import React, { PureComponent } from 'react'
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

class NewCard extends PureComponent {
  constructor () {
    super()
    this.state = {
      deck: {}
    }
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
            <Item style={styles.input} floatingLabel>
              <Label>Question</Label>
              <Input />
            </Item>
            <Item style={styles.input} floatingLabel>
              <Label>Answer</Label>
              <Input />
            </Item>
          </Form>
          <Button full style={styles.input}>
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
