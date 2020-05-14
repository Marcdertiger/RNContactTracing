import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors } from '../Themes/'

import styles from './Styles/Checkbox.styles'

import { TouchableOpacity, Text } from 'react-native'

const Checkbox = ({ selected, onPress, style, textStyle, size = 30, color = Colors.blue, text = '', ...props}) => (
    <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
        <Icon
            size={size}
            color={color}
            name={ selected ? 'check-box' : 'check-box-outline-blank'}
        />
    </TouchableOpacity>
)

export default Checkbox