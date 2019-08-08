import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class NavbarComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHi}>Hello</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textWelcome}>
            Welcome to 
          </Text>
          <View style={{ borderBottomWidth: 4, borderBottomColor: '#ffaf05' }}>
            <Text style={[styles.textWelcome, styles.textAuto]}>
              Auto2000
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 107, 107, .9)',
    paddingVertical: 50,
    paddingBottom: 70,
    paddingHorizontal: 15
  },
  textHi: {
    color: '#fff',
    fontSize: 14
  },
  textWelcome: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textAuto: {
    marginLeft: 5
  }
});
