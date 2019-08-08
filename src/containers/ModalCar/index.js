import _get from 'lodash/get'
import React, { Component } from 'react'
import { Content, Text } from 'native-base'
import _isUndefined from 'lodash/isUndefined'
import { View, 
      StyleSheet, 
      TouchableHighlight, 
      Image ,
      FlatList
    } from 'react-native';
import axios from 'axios';

class ModalCarContainer extends Component {
  static navigationOptions = ({ navigation }) =>  {
    const {params = {}} = navigation.state
    return {
      title: 'Modal Car',
      headerRight: (
        <View>
          <TouchableHighlight
            onPress={() => params.handlePlusNavigation()}
            underlayColor="white">
            <View>
              <Text style={styles.navigationHeaderPlus}>+</Text>
            </View>
          </TouchableHighlight>
        </View>
      ),
      headerTitleStyle: styles.navigationHeaderTitle
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      cars: []
    }

    this.handlePlusNavigation = this.handlePlusNavigation.bind(this)
  }

  componentDidMount () {
    this.props.navigation.setParams({
      handlePlusNavigation: this.handlePlusNavigation
    });
    this.getfordata();
  }

  getfordata () {
    axios.get('http://auto2000.forcetechnology.id/public/api/cars')
    .then(res => 
    {
        this.setState({
          cars: res.data});
      }); 
    } 


  handlePlusNavigation () {
    this.props.navigation.navigate('AddModalCar')
  }

  render() {
    let collection = this.state.cars
    return (
      <Content style={{ backgroundColor: '#f1f2f6' }}>
        <View style={styles.containerModel}>
        {
          (collection.data) &&
              collection.data.map((model, index) => (
                <View style={styles.itemModel} key={model.id}>
                  <View style={styles.wrapModel}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Image
                        source={require('../../../assets/img/car.png')}
                        style={{ height: 30, width: 30 }} />

                      <Text style={styles.wrapTitleModel}>{model.name}</Text>
                    </View>
                  </View>
                </View>  
              ))
            } 
        </View>
      </Content>

    )
  }
}

export default ModalCarContainer

const styles = StyleSheet.create({
  navigationHeaderPlus: {
    color: '#7f8c8d',
    fontSize: 30,
    marginRight: 15
  },
  navigationHeaderTitle: {
    color: '#7f8c8d',
    textAlign: 'center',
    width: '90%'
  },
  containerModel: {
    height: '100%',
    padding: 15
  },
  itemModel: {
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10
  },
  wrapModel: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center'
  },
  wrapTitleModel: {
    fontWeight: 'normal',
    color: '#7f8c8d',
    marginLeft: 10,
    marginTop: 5
  },
  contentTitle: {
    fontSize: 17.5,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#34495e'
  },
  contentSubTitle: {
    textAlign: 'right',
    flex: 1,
    fontSize: 13,
    color: '#34495e'
  },
  btnSubmit: {
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#ffaf05'
  }
})