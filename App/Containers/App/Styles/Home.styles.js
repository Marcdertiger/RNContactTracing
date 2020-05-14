import { StyleSheet } from 'react-native'
import  { Metrics, ApplicationStyles, Colors, Fonts }  from '../../../Themes'


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    paddingTop: Metrics.LargeBaseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  ButtonColor: {
    color: Colors.blue
  },
  homeButtonText: {
    color: Colors.blue,
    textAlign: 'center',
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.bold,
  },
})
