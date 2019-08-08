import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'

import NavbarComponent from '../../components/Navbar'
import MenuComponent from '../../components/Menu'

export default class HomeContainer extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#f1f2f6' }}>
          <NavbarComponent />
          <View style={{ marginTop: -60 }}>
            <MenuComponent
              navigation={this.props.navigation} />
          </View>
        </View>
      </ScrollView>
    )
  }
}