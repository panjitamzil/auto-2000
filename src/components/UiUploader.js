import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

export default class UIUploaderComponent extends Component {
  render() {
    const { label } =  this.props

    return (
      <View style={styles.container}>
        <Text style={styles.textLabel}>{label}</Text>
        <TouchableHighlight style={styles.btnUpload}>
          <View style={styles.viewUpload}>
            <Text style={styles.textUplaod}>Upload</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  textLabel: {
    fontSize: 17
  },
  btnUpload: {
    marginTop: 5
  },
  viewUpload: {
    padding: 10,
    paddingHorizontal: 20,
    borderColor: '#ecf0f1',
    borderWidth: 1,
    alignSelf: 'flex-start'
  },
  textUplaod: {
    color: '#bdc3c7',
    fontSize: 15
  }
})