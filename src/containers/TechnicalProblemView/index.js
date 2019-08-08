import _get from 'lodash/get'
import { connect } from 'react-redux'
import _truncate from 'lodash/truncate'
import React, { Component } from 'react' 
import _isUndefined from 'lodash/isUndefined'
import { Content, Text, Button } from 'native-base'
import UIPaneText from '../../components/UiPaneText'
import _Action from '../../actions/TechnicalProblemView'
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native'

class TechnicalProblemContainer extends Component {
  static navigationOptions = ({ navigation }) =>  {
    const {params = {}} = navigation.state
    return {
      title: 'Problem Detail',
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
    this.props.handleTechnicalKnowladgeView(product_id)
    this.props.navigation.setParams({
      handlePlusNavigation: this.handlePlusNavigation
    });
  }

  render() {
    const __props     = this.props
    const technical   = __props.technical_knowladge_view.data

    return (
      <Content style={{ backgroundColor: '#f1f2f6' }}> 
        {
          !_isUndefined(technical.car_modal) &&
            <View style={styles.containerModel}>
              <UIPaneText
                label="Model"
                text={technical.car_modal.name}
                textBold={true} />

              <UIPaneText
                label="Category"
                text={technical.category.name}
                textBold={true} />

              <UIPaneText
                label="Component"
                text={technical.component} />

              <UIPaneText
                label="Complain"
                text={technical.complaint} />

              <UIPaneText
                label="Analysis"
                text={technical.analysis} />

              <UIPaneText
                label="Fixed"
                text={technical.fixing} />

              <UIPaneText
                label="Part Changed"
                text={technical.changing_part} />

              <UIPaneText
                label="Source"
                text={technical.source}
                textBold={true} />

              <UIPaneText
                label="Filename"
                text={technical.filename}
                textBold={true} />

              <Button danger full style={{ marginBottom: 30 }}>
                <Text style={{ color: '#fff' }}>Delete</Text>
              </Button>
            </View>
        }
      </Content>
    )
  }
}

const mapStateToProps = state => {
  console.log('SU', state)
  return {
    technical_knowladge_view: {
      loading: _get(state, 'TechnicalProblemView.loading', false),
      data: _get(state, 'TechnicalProblemView.data', []),
      error: _get(state, 'TechnicalProblemView.error', ''),        
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleTechnicalKnowladgeView: (product_id) => {
      dispatch(_Action.GET_LIST(product_id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnicalProblemContainer)

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
    padding: 15,
    backgroundColor: 'white'
  }
})