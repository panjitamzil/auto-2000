import _get from 'lodash/get'
import { Input } from 'native-base'
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class InputComponent extends Component {
  render() {
    const __props         = this.props

    const label           = _get(__props, 'label', '')
    const placeholder     = _get(__props, 'placeholder', '.....')

    const containerStyle  = _get(__props, 'containerStyle', {})
    const inputStyle      = _get(__props, 'inputStyle', {})

    return (
      <View style={[styles.containerInput, containerStyle]}>
        <Text style={styles.textInput}>{label}</Text>
        <View style={styles.wrapInput}>
          <Input
            placeholder="Nama Model"
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            style={styles.componentInput} />
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
    borderWidth: 1,
    borderColor: '#dfe4ea',
    marginTop: 10
  },
  componentInput: {
    color: '#dfe4ea'
  }
})