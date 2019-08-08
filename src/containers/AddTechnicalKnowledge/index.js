import _get from 'lodash/get'
import { connect } from 'react-redux'
import { Content } from 'native-base' 
import React, { Component } from 'react'
import { Button, Text } from 'native-base'
import UIInput from '../../components/UiInput'
import UIPicker from '../../components/UiPicker'
import UITextarea from '../../components/UiTextarea'
import { StyleSheet, View, Image } from 'react-native'

class AddTechnicalKnowladgeContainer extends Component {
  static navigationOptions = ({ navigation }) =>  {
    return {
      title: 'Add Technical',
      headerTitleStyle: styles.navigationHeaderTitle
    }
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
  }

  render() {
    const __props     = this.props

    return (
			<Content style={{ padding: 20, paddingVertical: 5, flex: 1 }}>
				<UIPicker
          attrLabel="name"
					label="Model" 
					options={[{id: 1, name: 'Toyota'},{id: 2, name: 'Yamaha'}]} />

        <UIPicker
          attrLabel="name"
					label="Category" 
					options={[{id: 1, name: 'Toyota'},{id: 2, name: 'Yamaha'}]} />

        <UIInput
          label="Component" />

        <UITextarea
          label="Complain" />

        <UITextarea
          label="Analysis" />

        <UITextarea
          label="Fixing" />

        <UITextarea
          label="Part Changed" />

        <UITextarea
          label="Source" />

        <View>
          <Text style={styles.labelUpload}>Lampiran</Text>
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
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTechnicalKnowladgeContainer)

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