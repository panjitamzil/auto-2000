import React, { Component } from 'react'
import _isUndefined from 'lodash/isUndefined'
import { View, Text, StyleSheet } from 'react-native'

export default class UiPaneText extends Component {
  render() {
    let styleTextinText   = {}
    const __props         = this.props
    const {
      label,
      text,
      textBold
    } = __props

    if (!_isUndefined(textBold) && textBold) {
      styleTextinText['fontWeight'] = 'bold'
    }

    return (
      <View style={styles.conatiner}>
        <Text style={styles.textLabel}>{label}</Text>
        <Text style={[styles.textText, styleTextinText]}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conatiner: {
    marginBottom: 20
  },
  textLabel: {
  },
  textText: {
  }
})