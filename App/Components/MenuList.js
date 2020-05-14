// *************
// *
// * data must be of this format
// *
// * navigate : {key: '0', title: 'more', target: 'Notify Others', targetType: 'navigate'}
// * link : {key: '1', title: 'more', target: 'Notify Others', targetType: 'url', url: 'https://google.ca'}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, Linking } from 'react-native'
import styles from './Styles/MenuList.styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { translate } from '../I18n/I18n'

export default class MenuList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired
  }

  itemPressed = (item) => {
    switch (item.targetType) {
      case 'navigate':
        this.props.navigation.navigate(item.target)
        break;
      case 'url':
        Linking.openURL(item.url)
        break;
      default:
        break;
    }
  }

  render () {
    return (
      <View>
        {this.props.data.map((item)=>{
          return (              
          <TouchableOpacity key={item.key} onPress={()=>{this.itemPressed(item)}}>
            <View style={{height: 66, flexDirection: 'row', alignContent:'center'}}>
              <View style={{flex: 10, justifyContent:'center'}}>
                <Text style={styles.menuListItemText}>{translate(item.title)}</Text>
              </View>
              <View style={{flex: 1, justifyContent:'center', alignContent:'flex-end'}}>
              <MaterialCommunityIcons style={{marginTop: 10}} name={item.targetType === 'url' ? "export" : 'chevron-right'} size={34} color={styles.menuListItemText.color} />
              </View>
            </View>
            <View style={styles.dividerViewList} />
          </TouchableOpacity>
          )
        })}
        </View>
    )
  
  }
}

