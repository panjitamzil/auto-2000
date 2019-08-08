import _get from 'lodash/get'
import { connect } from 'react-redux'
import { Content } from 'native-base' 
import React, { Component } from 'react'
import { StyleSheet, View, Image , Alert} from 'react-native'
import { Button, Text } from 'native-base'

import UIPicker from '../../components/UiPicker'
import _Action from '../../actions/TechnologyCategory'
import axios from 'axios';
import { StackActions } from 'react-navigation';

class AddTechnologyContainer extends Component {
  static navigationOptions = ({ navigation }) =>  {
    return {
      title: 'Add Technology',
      headerTitleStyle: styles.navigationHeaderTitle
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      payload: {
        model: 1,
        json: {},
        techno:'',
        dataCategory:[]
      }
    }
  }

  componentDidMount () {
    this.props.handleTechnologyCategories()
    this.getfordata();
  }

  postfordata () {
    const popAction = StackActions.pop({n: 1});
    axios.post('http://auto2000.forcetechnology.id/public/api/technology-knowledge-categories', {
      techno: this.state.techno
    })
    .then(res => {     
      console.log('sukses', res)
        this.props.navigation.dispatch(popAction);
      }).catch(error => {
        Alert.alert('Maaf server maintence')
      }) 
    }

    getfordata() {
      axios.get('http://auto2000.forcetechnology.id/public/api/technology-knowledge-categories')
      .then(res => {
        this.setState({
          dataCategory: res.data
        }).catch(error => {
          console.log(error)
        })
      })
    }
   
  onSubmit() {
    this.postfordata()
  }



  render() {
    const __props     = this.props
    const categories  = _get(__props.technology_category, 'data', [])
    let datakategory = this.state.dataCategory
    console.log('apa ini', datakategory)

    return (
			<Content style={{ padding: 20, paddingVertical: 5, flex: 1 }}>
        {
          (datakategory && datakategory.data) && 
          <UIPicker
            attrLabel="name"
            label="Technology" 
            // options={categories}
            dataCategory= {datakategory.data}
            onValueChange={(value) => {
              this.setState({
                techno:value
              })
            }}
            />

        }

          <View>
            <Text style={styles.labelUpload}>File</Text>
            <View style={styles.paneUploader}>
              <Image
                source={require('../../../assets/img/upload.png')}
                style={{ width: 20, height: 20, marginBottom: 10 }} />

              <Text style={styles.textUploader}>Choose File</Text>
            </View>
          </View>
          
          <Button onPress={() => this.onSubmit()} warning full style={{ marginBottom: 30 }}>
            <Text style={{ color: '#fff' }}>Save</Text>
          </Button>
			</Content>
    )
  }
}

const mapStateToProps = state => {
  return {
    technology_category: {
      loading: _get(state, 'TechnologyCategory.loading', false),
      data: _get(state, 'TechnologyCategory.data', []),
      error: _get(state, 'TechnologyCategory.error', ''),        
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleTechnologyCategories: () => {
      dispatch(_Action.GET_LIST())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTechnologyContainer)

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