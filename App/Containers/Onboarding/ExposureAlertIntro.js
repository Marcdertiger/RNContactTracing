import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import RoundedButton from '../../Components/RoundedButton'
import { translate } from '../../I18n/I18n'
import Images from '../../Themes/Images'

// Styles
import styles from './Styles/OnboardingPages.styles'

export default class ExposureAlertIntro extends Component {

  render () {

    return (
      <ScrollView style={styles.container}>
      <View style={styles.section} >
        <Text style={styles.sectionTitle}>
        {translate('howItWorks')}
        </Text>
        <Text style={styles.sectionSubtitle}>
          {translate('exposureAlertTitle')}
        </Text>
        <Text style={styles.bodyText}>
        {translate('exposureAlertMessage')}
        </Text>
    </View>

   <View style={styles.centered}>
      <Image source={Images.exposureAlertIntroImage} style={styles.codeSubmittedThankYouPageImage} />
    </View>
  </ScrollView>
    )
  }
}
