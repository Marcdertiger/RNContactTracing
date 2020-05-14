import { StyleSheet } from 'react-native'
import  { Metrics, ApplicationStyles }  from '../../../Themes'


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: Metrics.section,
    height: Metrics.images.logoH,
    width: Metrics.images.logoW,
    resizeMode: 'contain',
    zIndex: 5
  },
  languagePageImage: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.languagePageImageW,
    width: Metrics.images.languagePageImageH,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  bottomItem: {
    position: 'relative',
    bottom: 50,
    alignItems: 'center'
  }
})
