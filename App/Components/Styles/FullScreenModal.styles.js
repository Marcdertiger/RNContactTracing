import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
    dividerView: {
        borderBottomColor: Colors.text,
        borderBottomWidth: Metrics.horizontalLineHeight,
        marginLeft: Metrics.doubleBaseMargin,
        marginRight: Metrics.doubleBaseMargin
    },
    modalButtonText: {
        color: Colors.blue,
        textAlign: 'center',
        fontSize: Fonts.size.h6,
        marginVertical: Metrics.baseMargin,
        fontFamily: Fonts.type.bold,

      },
      modalTitleBarTitle: {
        color: Colors.black,
        textAlign: 'center',
        fontFamily: Fonts.type.base,
        fontSize: Fonts.size.h6,
        marginVertical: Metrics.baseMargin
      }
})
