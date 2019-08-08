
import React, { Component } from 'react'
import { View, 
  StyleSheet, 
  Text,
  TouchableHighlight } from 'react-native'
import _get from 'lodash/get'
import _isUndefined from 'lodash/isUndefined'
import { Icon } from 'native-base'

class CardDiagnose extends Component {
  render(){
    const __props   = this.props
    const data      = __props.data
    const __action  = __props.action

    return(
      <View style={styles.container}>
        <View style={{flexDirection:'row' ,flex:1 }}>
          <View style={{width:10, height:10, borderRadius:50, backgroundColor:'orange', marginRight:10,justifyContent:'center', marginTop:5}}></View>
          <Text style={{color:'grey', fontSize:15, fontWeight:'bold', fontFamily:'Roboto', letterSpacing:1}}>{data.namaMobil}</Text>
          <TouchableHighlight underlayColor="white" onPress={() => __action()} style={{ position: 'absolute', right: 0 }}>
            <Icon type='FontAwesome' name='ellipsis-h' style={{ color: '#dcdde1' }}/>
          </TouchableHighlight>
        </View>

        <View style={{flexDirection:'row', marginTop:10}}>
          <Text style={{color:'black', fontSize:12, marginRight:10, width:'30%'}}>{data.type}</Text>
          <Text style={{color:'black', fontSize:14, width:'25%'}}>{data.PlatNumber}</Text>
          <Text style={{color:'black', fontSize:14, alignContent:'flex-end',width:"45%", marginLeft:55}}>12/12/2019</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    padding: 10,
    backgroundColor: 'white',
    marginTop:10,
    height: 70,
    borderRadius: 6
  }
})

export default CardDiagnose;