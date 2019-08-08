import _get from 'lodash/get'
import React, { Component } from 'react'
import _isUndefined from 'lodash/isUndefined'
import { Content, Text, Icon } from 'native-base'
import { View, StyleSheet, TouchableHighlight , FlatList} from 'react-native';
import CardDiagnose from './components/CardDignose';
import Modal from 'react-native-modal'
import TestDiagnosaApi from './components/TestDiagnosaApi'

class DiagnoseContainer extends Component {
  static navigationOptions = ({ navigation }) =>  {
    const {params = {}} = navigation.state
    return {
      title: 'Diagnose',
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
      modalActionOpen: false
    }

    this.handlePlusNavigation = this.handlePlusNavigation.bind(this)
    this.handleModalAction = this.handleModalAction.bind(this)
  }

  handlePlusNavigation () {
    this.props.navigation.navigate('AddDiagnose')
  }

  componentDidMount () {
    this.props.navigation.setParams({
      handlePlusNavigation: this.handlePlusNavigation
    });
  }

  handleModalAction () {
    this.setState({
      modalActionOpen: !this.state.modalActionOpen
    })
  }

  render() {
    let data = TestDiagnosaApi.DiagnosaApp
    return (
      <Content style={{ padding: 10, paddingVertical: 0, flex: 1 , backgroundColor:'#f5f6fa'}}>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => String(index)}
            renderItem = {
              ({item}) => (
                <CardDiagnose
                  action={this.handleModalAction}
                  data={item} />
              )
            }
          />
        </View>

        <Modal isVisible={this.state.modalActionOpen}>
          <View style={styles.containerModal}>
            <View style={styles.headingModal}>
              <Text style={styles.titleModal}>Action</Text>
              <TouchableHighlight underlayColor="white" onPress={this.handleModalAction} style={{ position: 'absolute', right: 5, top: 5 }}>
                <Icon type='FontAwesome' name='times' style={{ color: '#34495e' }}/>
              </TouchableHighlight>
            </View>
            <View style={styles.bodyModal}>
              {
                ['Customer Form', 'Condition Form', 'Checking Form', 'Summary', 'Result Form', 'Print', 'Delete'].map((text, index) => (
                  <TouchableHighlight underlayColor="white" onPress={this.handleModalAction} key={index}>
                    <View style={styles.itemModal}>
                      {
                        (text === 'Delete') ?
                        <Text style={[styles.textItemModal, styles.textItemDeleteModal]}>{text}</Text>
                        :
                        <Text style={styles.textItemModal}>{text}</Text>
                      }
                      
                    </View>
                  </TouchableHighlight>
                ))
              }
            </View>
          </View>
        </Modal>
      </Content>
    )
  }
}

export default DiagnoseContainer

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
  containerModal: {
    backgroundColor: '#fff',
    flex: 1,
    marginVertical: 100
  },
  headingModal: {
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    padding: 10
  },
  titleModal: {
    fontSize: 15
  },
  bodyModal: {
  },
  itemModal: {
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    padding: 10
  },
  textItemModal: {
    fontSize: 15,
    textAlign: 'center'
  },
  textItemDeleteModal: {
    color: '#e74c3c',
    fontWeight: 'bold'
  }
})