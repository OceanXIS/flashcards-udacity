import React from 'react'
import PropTypes from 'prop-types'

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

const Summary = ({
  backToDeck,
  restartQuiz,
  percentageCorrectAnswers
}) => (
  <Card>
    <CardItem>
      <Body style={{ alignItems: 'center' }}>
        <Text>
          <H2>
            {percentageCorrectAnswers}% Correct answers
          </H2>
        </Text>
      </Body>
    </CardItem>
    <CardItem footer>
      <Left>
        <Button transparent onPress={backToDeck}>
          <Text>Back to Deck</Text>
        </Button>
      </Left>
      <Right>
        <Button transparent onPress={restartQuiz}>
          <Text>Restart Quiz</Text>
        </Button>
      </Right>
    </CardItem>
  </Card>
)

Summary.propTypes = {
  backToDeck: PropTypes.func.isRequired,
  restartQuiz: PropTypes.func.isRequired,
  percentageCorrectAnswers: PropTypes.number.isRequired
}

export default Summary
