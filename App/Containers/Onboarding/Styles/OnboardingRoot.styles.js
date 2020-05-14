import { StyleSheet } from 'react-native'
import  { Metrics, ApplicationStyles }  from '../../../Themes'


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  graphic: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.graphic,
    width: Metrics.images.graphic,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  bottomSection: {
    flexDirection:'row', flex: 1, justifyContent:'center', position:'absolute'
  },
  bottomBackButtonSection: {
    flex: 2,
    justifyContent: 'space-around',
    paddingLeft: 10, paddingRight: 10
  },
  bottomPaginationSection: {
    flex: 3,
    justifyContent: 'space-around',
  },
  bottomNextButtonSecton: {
    flex: 2,
    justifyContent: 'space-around',
    paddingLeft: 10, paddingRight: 10
  }
})
