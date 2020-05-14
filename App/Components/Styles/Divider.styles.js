import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
    dividerView: {
        borderBottomColor: Colors.text,
        borderBottomWidth: Metrics.horizontalLineHeight,
        marginLeft: Metrics.doubleBaseMargin,
        marginRight: Metrics.doubleBaseMargin
    }
})
