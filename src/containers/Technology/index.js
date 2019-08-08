import _get from 'lodash/get'
import { connect } from 'react-redux'
import _truncate from 'lodash/truncate'
import React, { Component } from 'react'
import { Content, Text } from 'native-base'
import _isUndefined from 'lodash/isUndefined'
import _Action from '../../actions/Technology'
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import axios from 'axios';

class TechnologyContainer extends Component {
  static navigationOptions = ({ navigation }) =>  {
    const {params = {}} = navigation.state
    return {
      title: 'Technology',
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
      Techdata: []
    }

    this.handlePlusNavigation = this.handlePlusNavigation.bind(this)
  }

  handlePlusNavigation () {
    this.props.navigation.navigate('AddTechnology')
  }

  componentDidMount () {
    this.props.handleTechnology()
    this.props.navigation.setParams({
      handlePlusNavigation: this.handlePlusNavigation
    });
    this.getfordata();
  }

  getfordata () {
    axios.get('http://auto2000.forcetechnology.id/public/api/technology-knowledge-categories')
    .then(res => 
    {
        this.setState({
          Techdata: res.data
        });
      }); 
    }

  render() {
    // const __props   = this.props
    // const products  = __props.technology.data
    let collection = this.state.Techdata
    console.log('data', collection)

    return (
      <Content style={{ backgroundColor: '#f1f2f6' }}> 
        <View style={styles.containerModel}>
          {
          (collection.data) &&
            collection.data.map((product, index) => (
              <TouchableHighlight onPress={() => this.props.navigation.navigate('TechnologyDetail', { 
                product_id: product.id })} 
                style={styles.itemModel} 
                underlayColor="white" 
                key={product.id}
              >
                <View style={styles.wrapModel}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image
                      source={require('../../../assets/img/folder.png')} />
                    <Text style={styles.wrapTitleModel}>{_truncate(product.name, { length: 30 })}</Text>
                  </View>
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
    technology: {
      loading: _get(state, 'Technology.loading', false),
      data: _get(state, 'Technology.data', []),
      error: _get(state, 'Technology.error', ''),        
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleTechnology: () => {
      dispatch(_Action.GET_LIST())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyContainer)

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