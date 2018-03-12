import React from 'react'
import { View, StyleSheet } from 'react-native'

const Hr = () => (
  <View style={styles.hr} />
)

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
})

export default Hr
