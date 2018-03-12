import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

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
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cards}>{deck.totalCards} cards</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonAdd}
            onPress={() => navigation.navigate('NewCard')}>
            <Text style={styles.buttonAddText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonQuiz}
            onPress={() => navigation.navigate('QuizDeck')}>
            <Text style={styles.buttonQuizText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 2,
    marginTop: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 30
  },
  cards: {
    fontSize: 15,
    color: 'gray'
  },
  buttonContainer: {
    flex: 1
  },
  buttonAdd: {
    backgroundColor: '#fff',
    borderRadius: 4,
    margin: 8,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    width: 100
  },
  buttonAddText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center'
  },
  buttonQuiz: {
    backgroundColor: '#000',
    borderRadius: 4,
    margin: 8,
    padding: 10,
    width: 100
  },
  buttonQuizText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  }
})

export default Deck
