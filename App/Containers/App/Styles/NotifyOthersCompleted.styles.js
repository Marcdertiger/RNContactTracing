import { StyleSheet } from 'react-native'
import  { Metrics, ApplicationStyles }  from '../../../Themes'


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
  codeSubmittedThankYouPageImage: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.codeSubmittedThankYouPageImageW,
    width: Metrics.images.codeSubmittedThankYouPageImageH,
    resizeMode: 'contain'
  },
})
