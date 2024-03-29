import { StyleSheet } from 'react-native'
import  { Metrics, ApplicationStyles }  from '../../../Themes'


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  flexContainer: {
    flex:1
  },
  flexSectionTitle: {
    flex: 1
  },
  flexSectionBody: {
    flex: 8
  },
  centered: {
    alignItems: 'center'
  }
})
