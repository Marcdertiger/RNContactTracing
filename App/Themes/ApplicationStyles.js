import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background,
      zIndex: 5
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    section: {
      margin: Metrics.baseMargin,
      padding: Metrics.baseMargin
    },
    sectionButton: {
      paddingTop: Metrics.sectionButton,
      paddingBottom: Metrics.baseMargin,
    },
    sectionButtonGroup: {
      paddingTop: Metrics.sectionButton,
      paddingBottom: Metrics.baseMargin,
      flexDirection:'row',
      display:'flex'
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.smallMargin,
      color: Colors.black,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.black,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    sectionSubtitle: {
      color: Colors.black,
     // padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
    //  marginHorizontal: Metrics.smallMargin,
      ...Fonts.style.h2
    },
    sectionTitle: {
      ...Fonts.style.h4,
      paddingVertical: Metrics.smallMargin,
      color: Colors.black,
      marginVertical: Metrics.smallMargin,
      textAlign: 'left'
    },
    bodyText: {
      color: Colors.black,
       marginTop: Metrics.smallMargin,
       marginBottom: Metrics.smallMargin,
      // marginHorizontal: Metrics.smallMargin,
       ...Fonts.style.h5
    },
    bodyTitle: {
      ...Fonts.style.h3,
      paddingVertical: Metrics.smallMargin,
      color: Colors.black,
      marginVertical: Metrics.smallMargin,
      textAlign: 'left'
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    },
    termsText: {
      color: Colors.black,
      marginTop: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.LargeBaseMargin,
      ...Fonts.style.h6
    },
    termsTextCentered: {
      color: Colors.black,
      marginTop: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.LargeBaseMargin,
      ...Fonts.style.h6,
      textAlign: 'center'
    },
    termsTextCenteredError: {
      color: Colors.bloodOrange,
      marginTop: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.LargeBaseMargin,
      ...Fonts.style.h6,
      textAlign: 'center'
    }
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  // sectionTitle: {
  //   ...Fonts.style.h4,
  //   color: Colors.coal,
  //   backgroundColor: Colors.ricePaper,
  //   padding: Metrics.smallMargin,
  //   marginTop: Metrics.smallMargin,
  //   marginHorizontal: Metrics.baseMargin,
  //   borderWidth: 1,
  //   borderColor: Colors.ember,
  //   alignItems: 'center',
  //   textAlign: 'center'
  // }
}

export default ApplicationStyles
