// *************
// *
// * data must be of this format
// *
// *
// *

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './Styles/TextNumberedList.styles'
import { translate } from '../I18n/I18n'

export default class TextNumberedList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render () {
    return (
      <View>
        {this.props.data.map((item)=>{
          return (              
            <View key={item.key} style={styles.numberedListContainer}>
              <View style={styles.numberedListIndexContainer}>
                <Text style={styles.numberedListIndex}>{item.index}</Text>
              </View>
              <View style={styles.numberedListTextContainer}>
                <Text style={styles.numberedListText}>{translate(item.text)}</Text>
              </View>
            </View>

          )
        })}
        </View>
    )
  
  }
}

