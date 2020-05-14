import { StyleSheet } from 'react-native'
import  { Metrics, ApplicationStyles, Colors }  from '../../../Themes'


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  textBox: {
    borderWidth: Metrics.borderWidth,
    borderColor: Colors.text,
    borderRadius: Metrics.buttonRadius * 2,
    marginTop: Metrics.section,
    marginBottom: Metrics.section,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin
  },
  thankYouImage: {
    
  }
})
