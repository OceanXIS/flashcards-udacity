import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const DeckItem = ({ deck, navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Deck', { deck })}>
      <View style={styles.container}>
        <Text style={styles.deckTitle}>
          {deck.title}
        </Text>
        <Text style={styles.deckTotal}>
          {deck.totalCards} {deck.totalCards === 1 ? 'Card' : 'Cards'}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  deckTitle: {
    padding: 20,
    paddingBottom: 5,
    fontSize: 20,
  },
  deckTotal: {
    paddingBottom: 20,
    fontSize: 14,
    color: 'gray'
  },
})

export default DeckItem
