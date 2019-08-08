import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native'

export default class MenuComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductKnowledge')} underlayColor="white" style={styles.boxItem}>
          <View style={styles.boxItemView}>
            <Image
              source={require('../../assets/img/icon_product.png')}
              style={styles.boxItemIMG} />
              <Text style={styles.boxItemTitle}>Product</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('TechnicalKnowledge')} underlayColor="white" style={styles.boxItem}>
          <View style={styles.boxItemView}>
            <Image
              source={require('../../assets/img/icon_technical.png')}
              style={styles.boxItemIMG} />
              <Text style={styles.boxItemTitle}>Technical</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('Technology')} underlayColor="white" style={styles.boxItem}>
          <View style={styles.boxItemView}>
            <Image
              source={require('../../assets/img/icon_technology.png')}
              style={styles.boxItemIMG} />
            <Text style={styles.boxItemTitle}>Technology</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('Diagnose')} underlayColor="white" style={styles.boxItem}>
          <View style={styles.boxItemView}>
            <Image
              source={require('../../assets/img/icon_diagnose.png')}
              style={styles.boxItemIMG} />
            <Text style={styles.boxItemTitle}>Diagnose</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('ModalCar')} underlayColor="white" style={styles.boxItem}>
          <View style={styles.boxItemView}>
            <Image
              source={require('../../assets/img/icon_model_car.png')}
              style={styles.boxItemIMG} />
            <Text style={styles.boxItemTitle}>Model Car</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('Help')} underlayColor="white" style={styles.boxItem}>
          <View style={styles.boxItemView}>
            <Image
              source={require('../../assets/img/icon_help.png')}
              style={styles.boxItemIMG} />
            <Text style={styles.boxItemTitle}>Help</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    flexWrap: 'wrap',
    flex: 1,
    paddingBottom: 30
  },
  boxItem: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 50,
    marginBottom: 13
  },
  boxItemView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxItemIMG: {
    width: 50,
    height: 50
  },
  boxItemTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 13
  }
});
