import _get from 'lodash/get'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Content, Text } from 'native-base'
import _isUndefined from 'lodash/isUndefined'
import _Action from '../../actions/TechnicalKnowladgeCategory'
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native'

class TechnicalKnowledgeCategoryContainer extends Component {
  static navigationOptions = ({ navigation }) =>  {
    const {params = {}} = navigation.state
    return {
      title: 'Problem',
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
    const product_id = this.props.navigation.getParam('product_id')
    this.props.handleTechnicalKnowladge(product_id)
    this.props.navigation.setParams({
      handlePlusNavigation: this.handlePlusNavigation
    });
  }

  render() {
    const product_id  = this.props.navigation.getParam('product_id')
    const __props     = this.props
    const product     = __props.technical_knowladge_categories.data

    return (
      <Content style={{ backgroundColor: '#f1f2f6' }}> 
        <View style={styles.containerModel}>
          {
            !_isUndefined(product.categories) &&
              product.categories.map((category, index) => (
                <TouchableHighlight style={styles.itemModel} underlayColor="white" key={category.id} onPress={() => this.props.navigation.navigate('TechnicalKnowledgeHistory', { product_id: product_id, category_id: category.id })}>
                  <View style={styles.wrapModel}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Image
                        source={require('../../../assets/img/completed-task.png')}
                        style={{ width: 30, height: 30 }} />
                      <Text style={styles.wrapTitleModel}>{category.name}</Text>
                    </View>
                    <Text style={styles.contentSubTitle}>Total file {category.total}</Text>
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
    technical_knowladge_categories: {
      loading: _get(state, 'TechnicalKnowladgeCategory.loading', false),
      data: _get(state, 'TechnicalKnowladgeCategory.data', []),
      error: _get(state, 'TechnicalKnowladgeCategory.error', ''),        
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleTechnicalKnowladge: (product_id) => {
      dispatch(_Action.GET_LIST(product_id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnicalKnowledgeCategoryContainer)

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