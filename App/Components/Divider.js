import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './Styles/Divider.styles'

export default class Divider extends Component {

  render () {
    return (
     <View style={styles.dividerView} />
    )
  }
}
