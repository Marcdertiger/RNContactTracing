import { StyleSheet } from 'react-native'
import { Fonts, ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  numberedListContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 14
  },
  numberedListIndexContainer: {
    flex: 1, paddingTop: 5
  },
  numberedListTextContainer: {
    flex: 9,
    justifyContent:'center',
    paddingLeft: 4
  },
  numberedListIndex: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold,
  },
  numberedListText: {
    ...ApplicationStyles.screen.bodyText,
        textAlign: 'left',
  }
})

