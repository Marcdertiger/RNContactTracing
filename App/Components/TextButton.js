import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/TextButton.styles'

export default class TextButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object,
    border: PropTypes.bool,
    allCaps: PropTypes.bool,
    redButton: PropTypes.bool
  }

  getText () {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

  render () {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={this.props.redButton ? styles.buttonTextRed : styles.buttonText}>{this.props.allCaps ? this.getText() : this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
