import _get from 'lodash/get'
import { connect } from 'react-redux'
import { Content } from 'native-base' 
import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Button, Text } from 'native-base'

import UIPicker from '../../components/UiPicker'
import _Action from '../../actions/ProductKnowladgeCategory'

class AddProductKnowladgeContainer extends Component {
  static navigationOptions = ({ navigation }) =>  {
    return {
      title: 'Add Product',
      headerTitleStyle: styles.navigationHeaderTitle
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      payload: {
        model: 1,
        json: {}
      }
    }
  }

  componentDidMount () {
    const category_id = this.props.navigation.getParam('category_id')
    this.props.handleProductKnowladgeCategories(category_id)
  }

  render() {
    const __props     = this.props
    const models      = _get(__props.product_categories.data, 'car_models', [])

    return (
			<Content style={{ padding: 20, paddingVertical: 5, flex: 1 }}>
				<UIPicker
          attrLabel="name"
					label="Select Knowladge" 
					options={models} />

          <View>
            <Text style={styles.labelUpload}>File</Text>
            <View style={styles.paneUploader}>
              <Image
                source={require('../../../assets/img/upload.png')}
                style={{ width: 20, height: 20, marginBottom: 10 }} />

              <Text style={styles.textUploader}>Choose File</Text>
            </View>
          </View>
          
          <Button warning full style={{ marginBottom: 30 }}>
            <Text style={{ color: '#fff' }}>Save</Text>
          </Button>
			</Content>
    )
  }
}

const mapStateToProps = state => {
  return {
    product_categories: {
      loading: _get(state, 'ProductKnowladgeCategory.loading', false),
      data: _get(state, 'ProductKnowladgeCategory.data', []),
      error: _get(state, 'ProductKnowladgeCategory.error', ''),        
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleProductKnowladgeCategories: (category_id) => {
      dispatch(_Action.GET_LIST(category_id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductKnowladgeContainer)

const styles = StyleSheet.create({
  navigationHeaderTitle: {
    color: '#7f8c8d',
    textAlign: 'center',
    width: '80%'
  },
  paneUploader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    borderColor: '#dfe4ea',
    borderWidth: 1,
    marginBottom: 20
  },
  textUploader: {
    color: '#7f8c8d',
    fontSize: 13
  },
  labelUpload: {
    marginBottom: 5,
    color: '#7f8c8d'
  }
})