import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Textarea } from 'native-base'

export default class TextareaComponent extends Component {
  render() {
    const __props     = this.props
    const {
      label
    } = __props

    return (
      <View style={styles.containerInput}>
        <Text style={styles.textInput}>{label}</Text>
        <View style={styles.wrapInput}>
          <Textarea rowSpan={5} bordered placeholder="....." style={styles.componentInput} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerInput: {
    marginBottom: 20
  },
  textInput: {
    color: '#7f8c8d',
    fontSize: 13
  },
  wrapInput: {
    // borderWidth: 1,
    // borderColor: '#dfe4ea',
    marginTop: 10
  },
  componentInput: {
    color: '#dfe4ea'
  }
})