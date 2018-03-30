import React from 'react'
import { StyleSheet } from 'react-native'

import {
  Text,
  Button,
  Body,
  Card,
  CardItem,
  H2,
  Left,
  View
} from 'native-base'

const Answer = ({
  card,
  showQuestion,
  handleAnswer
}) => (
  <View>
    <Card>
      <CardItem header>
        <Left>
          <Body>
            <Text>Answer</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Text>
            <H2>{card && card.answer}</H2>
          </Text>
        </Body>
      </CardItem>
      <CardItem footer>
        <Left>
          <Button transparent onPress={showQuestion}>
            <Text>Show Question</Text>
          </Button>
        </Left>
      </CardItem>
    </Card>

    <Button
      full
      success
      style={styles.button}
      onPress={() => handleAnswer('correct')}
    >
      <Text>Correct</Text>
    </Button>
    <Button
      full
      style={styles.button}
      danger
      onPress={() => handleAnswer('incorrect')}
    >
      <Text>Incorrect</Text>
    </Button>
  </View>
)

const styles = StyleSheet.create({
  button: {
    margin: 10
  }
})

export default Answer
