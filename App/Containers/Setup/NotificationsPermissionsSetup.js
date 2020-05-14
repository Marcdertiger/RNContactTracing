import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import RoundedButton from '../../Components/RoundedButton'
import TextButton from '../../Components/TextButton'
import { translate } from '../../I18n/I18n'
import Images from '../../Themes/Images'
import { connect } from 'react-redux'
import { editAppIntroCompleted } from '../../Redux/Actions/api'

// Styles
import styles from './Styles/SetupPages.styles'

class NotificationsPermissionsSetup extends Component {

  state = {
    error: false
  }

  allowNotifications = () => {
    //1. do api request and wait for response

    //2A. if successfully allowed, navigate to Home (Tabs) and set introcompleted to true
    this.props.dispatch(editAppIntroCompleted(true))

    this.props.navigation.navigate('Tabs')
    //2B. if unsucessful, make bottom text red and stay on page

  }

  render () {

    return (
        <SafeAreaView style={styles.mainContainer}>
        <ScrollView style={styles.container}>
            <View style={styles.section} >
              <Text style={styles.sectionTitle}>
              {translate('setupAppSectionTitle')}
              </Text>
              <Text style={styles.sectionSubtitle}>
                {translate('turnOnNotifications')}
              </Text>
              <Text style={styles.bodyText}>
              {translate('notificationsSetupBody')}
              </Text>
          </View>

         <View style={styles.centered}>
            <Image source={Images.languageSelectImage} style={styles.codeSubmittedThankYouPageImage} />
          </View>
          <View style={styles.section}>
            <RoundedButton onPress={()=>{this.allowNotifications()}} text={translate('allowNotifications')} styles={{marginTop: 10}} />
            <TextButton redButton={true} onPress={()=>{this.props.navigation.navigate('Tabs')}} text={translate('skip')} styles={{marginTop: 10}} />

            <Text style={this.state.error ? styles.termsTextCenteredError : styles.termsTextCentered}>
              {translate('notificationsTermsMessage')}
              </Text>
          </View>

        </ScrollView>
        </SafeAreaView>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('api state redux', state)
    return {
        languagePreference : state.api.languagePreference,
        introCompleted: state.api.introCompleted
    }
}

const ConnectedNotificationsPermissionsSetup = connect(
    mapStateToProps,
)(NotificationsPermissionsSetup);
export default ConnectedNotificationsPermissionsSetup;