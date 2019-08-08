import _get from 'lodash/get'
import React, { Component } from 'react'
import _isUndefined from 'lodash/isUndefined'
import UIInput from '../../components/UiInput'
import { View, StyleSheet, Alert } from 'react-native'
import { Content, Text, Button } from 'native-base'
import axios from 'axios';
import { StackActions } from 'react-navigation';


class AddModalCarContainer extends Component {
  

  static navigationOptions = ({ navigation }) =>  {
    return {
      title: 'Add Modal Car',
      headerTitleStyle: styles.navigationHeaderTitle
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  postfordata () {
    const popAction = StackActions.pop({n: 1});
    axios.post('http://auto2000.forcetechnology.id/public/api/car', {
      name: this.state.name
    })
    .then(res => {     
      console.log('sukses', res)
        this.props.navigation.dispatch(popAction);
      }).catch(error => {
        // console.log('error',error)
        Alert.alert('Maaf server maintence')
      }) 
    }
   
  onSubmit() {
    this.postfordata()
  }




  render() {
    return (
      <Content style={{ padding: 20, paddingVertical: 20, flex: 1 }}>
        <View>
          <UIInput
            label="Model Name"
            value={this.state.name}
            onChangeText={(value) => {
              console.log('Change...', value)
              this.setState({ name: value })
            }}
            />

          <Button onPress={() => this.onSubmit()} warning full style={{ marginBottom: 30 }}>
            <Text style={{ color: '#fff' }}>Save</Text>
          </Button>
        </View>
      </Content>
    )
  }
}

export default AddModalCarContainer

const styles = StyleSheet.create({
  navigationHeaderPlus: {
    color: '#7f8c8d',
    fontSize: 30,
    marginRight: 15
  },
  navigationHeaderTitle: {
    color: '#7f8c8d',
    textAlign: 'center',
    width: '80%'
  }
})