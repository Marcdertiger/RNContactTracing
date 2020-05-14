import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import RoundedButton from '../../Components/RoundedButton'
import { translate } from '../../I18n/I18n'
import Images from '../../Themes/Images'

// Styles
import styles from './Styles/SetupPages.styles'

export default class BluetoothPermissionsSetup extends Component {

  state = {
    error: false
  }

  allowBluetooth = () => {
    //1. do api request and wait for response

    //2A. if successfully allowed, navigate to notifications

      this.props.navigation.navigate('SetupNotifications')
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
                {translate('turnOnBluetooth')}
              </Text>
              <Text style={styles.bodyText}>
              {translate('bluetoothSetupBody')}
              </Text>
          </View>

         <View style={styles.centered}>
            <Image source={Images.languageSelectImage} style={styles.codeSubmittedThankYouPageImage} />
          </View>
          <View style={styles.section}>
            <RoundedButton onPress={()=>{this.allowBluetooth()}} text={translate('allowBluetooth')} styles={{marginTop: 10}} />
            <Text style={this.state.error ? styles.termsTextCenteredError : styles.termsTextCentered}>
              {translate('bluetoothTermsMessage')}
              </Text>
          </View>

        </ScrollView>
        </SafeAreaView>
    )
  }
}
