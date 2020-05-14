import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.blue,
    textAlign: 'center',
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.bold,
    marginVertical: Metrics.baseMargin
  },
  buttonTextRed: {
    color: Colors.bloodOrange,
    textAlign: 'center',
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.bold,
    marginVertical: Metrics.baseMargin
  }
})

