import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const DeckItem = ({ item }) => (
  <View style={styles.container}>
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.deckTitle}>
          {item.item.title}
        </Text>
        <Text style={styles.deckTotal}>
          {item.item.totalCards} {item.item.totalCards === 1 ? 'Card' : 'Cards'}
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
