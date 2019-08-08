import _get from 'lodash/get'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Content, Text } from 'native-base'
import _isUndefined from 'lodash/isUndefined'
import _Action from '../../actions/TechnicalKnowladge'
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native'

class TechnicalKnowledgeContainer extends Component {
  static navigationOptions = ({ navigation }) =>  {
    const {params = {}} = navigation.state
    return {
      title: 'Technical',
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
    this.state = {}

    this.handlePlusNavigation = this.handlePlusNavigation.bind(this)
  }

  handlePlusNavigation () {
    this.props.navigation.navigate('AddTechnicalKnowledge')
  }

  componentDidMount () {
    this.props.handleTechnicalKnowladge()
    this.props.navigation.setParams({
      handlePlusNavigation: this.handlePlusNavigation
    });
  }

  render() {
    const __props   = this.props
    const products  = __props.technical_knowladge.data

    return (
      <Content style={{ backgroundColor: '#f1f2f6' }}> 
        <View style={styles.containerModel}>
          {
            products.map((product, index) => (
              <TouchableHighlight onPress={() => this.props.navigation.navigate('TechnicalKnowledgeCategory', { product_id: product.id })} style={styles.itemModel} underlayColor="white" key={product.id}>
                <View style={styles.wrapModel}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image
                      source={require('../../../assets/img/folder.png')} />
                    <Text style={styles.wrapTitleModel}>{product.name}</Text>
                  </View>
                  <Text style={styles.contentSubTitle}>Total file {product.total}</Text>
                </View>
              </TouchableHighlight>  
            ))
          }
        </View>
      </Content>
    )
  }
}

const mapStateToProps = state => {
  return {
    technical_knowladge: {
      loading: _get(state, 'TechnicalKnowladge.loading', false),
      data: _get(state, 'TechnicalKnowladge.data', []),
      error: _get(state, 'TechnicalKnowladge.error', ''),        
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleTechnicalKnowladge: () => {
      dispatch(_Action.GET_LIST())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnicalKnowledgeContainer)

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
  }
})