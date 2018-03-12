import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import DeckItem from '../deck-item'
import Hr from '../common/hr'

const decksList = [
  { id: '1', title: 'PHP', totalCards: 10 },
  { id: '2', title: 'JavaScript', totalCards: 4 },
  { id: '3', title: 'English', totalCards: 20 },
  { id: '4', title: 'German', totalCards: 89 },
  { id: '5', title: 'French', totalCards: 400 },
  { id: '6', title: 'Spanish', totalCards: 39 }
]

const Decks = ({ navigation }) => (
  <View style={styles.container}>
    <FlatList
      keyExtractor={(item, index) => index}
      data={decksList}
      renderItem={({ item }) => {
        return (
          <View>
            <DeckItem navigation={navigation} deck={item} />
            <Hr />
          </View>
        )
      }}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  }
})

export default Decks
