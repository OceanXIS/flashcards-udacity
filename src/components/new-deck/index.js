import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
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

class NewDeck extends PureComponent {
  constructor() {
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
                  What's the title of your new deck?
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Form>
            <Item style={styles.input} floatingLabel>
              <Label>Title</Label>
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

export default NewDeck
