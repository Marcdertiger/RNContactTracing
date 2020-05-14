import { StyleSheet } from 'react-native'
import { Fonts, ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  bannerCompleted: {
      backgroundColor: Colors.green,
      height: 80,
      position:'relative',
      top: 0,
      flexDirection:'row'
  },
  bannerExposure: {
    backgroundColor: Colors.red,
    height: 80,
    position:'relative',
    top: 0,
    flexDirection:'row'
  },
  bannerPermissions: {
    backgroundColor: Colors.bloodOrange,
    height: 80,
    position:'relative',
    top: 0,
    flexDirection:'row'
  },
  bannerDefault: {
    backgroundColor: Colors.transparent,
    height: 0,
    position:'relative',
    top: 0,
    flexDirection:'row'
  },
  bannerText: {
    color: Colors.snow,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h5,
    textAlignVertical:'center'
  },
  bannerIcon: {
    color: Colors.snow,
},
  bannerIconContainer: {
    paddingLeft: Metrics.screenWidth/12,
    justifyContent:'center',
    flex: 1
  },
  bannerTextContainer: {
    justifyContent:'center',
    flex: 10, 
  }

})

