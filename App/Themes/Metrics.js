import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  sectionButton: 15,
  baseMargin: 10,
  doubleBaseMargin: 20,
  LargeBaseMargin: 30,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 2,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  borderWidth: 3,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logoH: 86,
    logoW: 200,
    languagePageImageH: 350,
    languagePageImageW: 310,
    codeSubmittedThankYouPageImageH: 320,
    codeSubmittedThankYouPageImageW: 259
  }
}

export default metrics
