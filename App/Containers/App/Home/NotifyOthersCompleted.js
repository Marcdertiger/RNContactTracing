import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import RoundedButton from '../../../Components/RoundedButton'
import { translate } from '../../../I18n/I18n'
import Images from '../../../Themes/Images'
import ShareApp from '../../../Utils/ShareApp'
import Banner from '../../../Components/Banner'
// Styles
import styles from '../Styles/NotifyOthersCode.styles'

export default class NotifyOthersCompleted extends Component {
    constructor (props) {
        super(props);
        this.state = {
          text: ""
        }
      }

  render () {

    return (
      <View style={styles.mainContainer}>
         <Banner status={'completed'} text={'Complete'} onPress={null} />
        <ScrollView style={styles.container}>
        <View style={styles.section} >
              <Text style={styles.sectionSubtitle}>
              {translate('thankYou!')}
              </Text>
              <Text style={styles.bodyTitle}>
                {translate('enterYourCodeTitle')}
              </Text>
              <Text style={styles.bodyText}>
              {translate('thankYouMessageAfterCodeSubmission')}
              </Text>
              <View style={styles.sectionButton} >
                <RoundedButton text={translate('shareTheApp')} onPress={ ShareApp } styles={{marginTop: 10}} />
              </View>
          </View>

         <View style={styles.centered}>
            <Image source={Images.languageSelectImage} style={styles.codeSubmittedThankYouPageImage} />
          </View>
        
        </ScrollView>
      </View>
    )
  }
}
