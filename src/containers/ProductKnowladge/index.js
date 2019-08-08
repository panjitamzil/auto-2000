import _get from 'lodash/get'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Content, Text } from 'native-base'
import _isUndefined from 'lodash/isUndefined'
import ModelItem from '../../components/ModelItem'
import _Action from '../../actions/ProductKnowladge'
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native'

class ProductKnowladgeContainer extends Component {
  static navigationOptions = ({ navigation }) =>  {
    const {params = {}} = navigation.state
    return {
      title: 'Product',
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
      category_id: 0,
      car_models: []
    }

    this.handlePlusNavigation = this.handlePlusNavigation.bind(this)
  }

  handlePlusNavigation () {
    this.props.navigation.navigate('AddProductKnowladge', { category_id: this.state.category_id })
  }

  componentDidMount () {
    this.props.handleProductKnowladgeCategories()
    this.props.navigation.setParams({
      handlePlusNavigation: this.handlePlusNavigation
    });
  }

  componentDidUpdate (prevProps) {
    const __props     = this.props
    let car_models    = []
    let category_id   = this.state.category_id

    if (__props.product_categories !== prevProps.product_categories) {
      const param_category_id   = __props.navigation.getParam('category_id')
      const product_categories  = __props.product_categories.data
  
      if (!_isUndefined(param_category_id)) {
        this.setState({
          category_id: param_category_id
        })
        category_id = param_category_id
      } else {
        if (product_categories.length > 0) {
          this.setState({
            category_id: product_categories[0].id
          })
          category_id = product_categories[0].id
        }
      }


      if (product_categories.length > 0) {
        const activeCategory = product_categories.find(category => category.id === category_id)
        if (!_isUndefined(activeCategory)) {
          car_models = _get(activeCategory, 'car_models', [])
        }
      }

      this.setState({
        car_models: car_models
      })
    }
  }

  render() {
    const {
      category_id,
      car_models
    } = this.state

    const {
      product_categories,
      navigation
    } = this.props

    const __navigation  = navigation

    return (
       <Content style={{ backgroundColor: '#f1f2f6' }}>
        <View style={styles.containerCategory}>
          {
            (product_categories.data && product_categories.data.length > 0) &&
            product_categories.data.map((category, index) => {              
              const active = (category_id === category.id) ? true : false
              return (
                <ModelItem
                  key={category.id}
                  text={category.name}
                  active={active}
                  onPress={() => __navigation.navigate({
                    routeName: 'ProductKnowledge',
                    params: {
                      category_id: category.id
                    },
                    key: `ProductKnowladge-${category.id}`
                  })} />
              )
            })
          }
        </View>

        <View style={styles.containerModel}>
          {
            car_models.map((model, index) => (
              <TouchableHighlight style={styles.itemModel} underlayColor="white" key={model.id} onPress={() => this.props.navigation.navigate('ProductKnowladgeHistory', { product_id: model.id, category_id: this.state.category_id })}>
                <View style={styles.wrapModel}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image
                      source={require('../../../assets/img/folder.png')} />

                    <Text style={styles.wrapTitleModel}>{model.name}</Text>
                  </View>
                  <Text style={styles.contentSubTitle}>Total file 2</Text>
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
    product_categories: {
      loading: _get(state, 'ProductKnowladge.loading', false),
      data: _get(state, 'ProductKnowladge.data', []),
      error: _get(state, 'ProductKnowladge.error', ''),        
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleProductKnowladgeCategories: () => {
      dispatch(_Action.GET_LIST())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductKnowladgeContainer)

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
  containerCategory: {
    flexDirection: 'row',
    flexWrap: 'wrap'
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