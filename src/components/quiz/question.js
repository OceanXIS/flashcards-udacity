import React from 'react'

import {
  Text,
  Button,
  Body,
  Card,
  CardItem,
  H2,
  Left,
  Right
} from 'native-base'

const Question = ({
  cardIndex,
  totalCards,
  card,
  showAnswer
}) => (
  <Card>
    <CardItem header>
      <Left>
        <Body>
          <Text>Question</Text>
          <Text note>{cardIndex + 1}/{totalCards}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Body>
        <Text>
          <H2>{card && card.question}</H2>
        </Text>
      </Body>
    </CardItem>
    <CardItem footer>
      <Left>
        <Button transparent onPress={showAnswer}>
          <Text>Show Answer</Text>
        </Button>
      </Left>
    </CardItem>
  </Card>
)

export default Question
