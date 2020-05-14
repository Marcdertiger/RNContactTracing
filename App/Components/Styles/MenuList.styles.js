import { StyleSheet } from 'react-native'
import { Fonts, ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
       item: {
         padding: 10,
         fontSize: 18,
         height: 44,
       },
       centered: {
        alignItems: 'center',
      },
      menuListItemText: {
        ...Fonts.style.listItemText,
        paddingVertical: Metrics.smallMargin,
        color: Colors.blue,
        marginVertical: Metrics.smallMargin,
        textAlign: 'left'
      },
      dividerViewList: {
        borderBottomColor: Colors.text,
        borderBottomWidth: Metrics.horizontalLineHeight/2,
    }
})

