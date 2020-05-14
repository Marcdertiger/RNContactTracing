import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './Styles/Banner.styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Banner extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired, //exposed, completed, 
  }

  render () {
    let icon = ""
    let bannerStyle = null

    switch (this.props.status) {
      case 'completed':
        icon = "check-circle-outline"
        bannerStyle = styles.bannerCompleted
        break;
      case 'exposed':
        icon = "alert-circle-outline"
        bannerStyle = styles.bannerExposure
      break;
      case 'permissions':
        icon = "alert-circle-outline"
        bannerStyle = styles.bannerPermissions
        break;
      default:
        icon = "information-outline"
        bannerStyle = styles.bannerDefault
        break;
    }
    return (
        <TouchableOpacity disabled={this.props.onPress ? false : true} onPress={this.props.onPress}>
            <View style={bannerStyle}>
                <View style={styles.bannerIconContainer}>
                    <MaterialCommunityIcons style={styles.bannerIcon} name={icon} size={26} color={'#fff'} />
                </View>
                <View style={styles.bannerTextContainer}>
                    <Text style={styles.bannerText}>{this.props.text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
  }
}
