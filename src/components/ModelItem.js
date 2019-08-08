import React, { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

export default class ModelItemComponent extends Component {
  render() {
    const { text, onPress, active } = this.props

    let classContainer = [styles.container]
    let classText = [styles.text]
    if (active) {
      classContainer = [styles.container, styles.containerActive]
      classText = [styles.text, styles.textActive]
    }

    return (
      <TouchableHighlight style={classContainer} onPress={onPress} underlayColor="white">
        <View style={styles.wrap}>
          <Text style={classText}>{text}</Text>
        </View> 
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 15
  },
  wrap: {
  },
  text: {
    color: '#7f8c8d',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textActive: {
    color: '#ffaf05'
  },
  containerActive: {
    borderBottomWidth: 4,
    borderBottomColor: '#ffaf05'
  }
})