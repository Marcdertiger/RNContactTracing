import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RoundedButton.styles'

export default class RoundedButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object,
    secondary: PropTypes.bool,
    allCaps: PropTypes.bool,
    disabled: PropTypes.bool
  }

  getText () {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

  render () {
    if(this.props.secondary){
      return (
        <TouchableOpacity disabled={this.props.disabled} style={this.props.disabled ? styles.disabledButtonSecondary : styles.buttonSecondary} onPress={this.props.onPress}>
          <Text style={styles.buttonTextSecondary}>{this.props.allCaps? this.getText() : this.props.text}</Text>
        </TouchableOpacity>
      )
    }
    else {
      return (
        <TouchableOpacity disabled={this.props.disabled}  style={this.props.disabled? styles.disabledButton : styles.button} onPress={this.props.onPress}>
          <Text style={styles.buttonText}>{this.props.allCaps? this.getText() : this.props.text}</Text>
        </TouchableOpacity>
      )
    }
  
  }
}
