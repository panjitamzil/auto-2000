import React, { Component } from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'

export default class UIPickerComponent extends Component {
  render() {
    const { label, value, onChange, options, dataCategory } =  this.props
    return (
      <View style={styles.container}>
        <Text style={styles.textLabel}>{label}</Text>
        <View style={{ borderColor: '#dfe4ea', borderWidth: 1, marginTop: 7 }}>
          {
            (dataCategory && dataCategory.length > 0) &&
              <Picker
                style={{ color: '#7f8c8d' }}
                selectedValue={value}
                onValueChange={onChange}>
                  {
                    dataCategory.map((dataCategory, index) => (
                      <Picker.Item label={dataCategory.name} value={dataCategory.id} key={index} />
                    ))
                  }
              </Picker> 
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginBottom: 15
  },
  textLabel: {
    fontSize: 13
  }
})