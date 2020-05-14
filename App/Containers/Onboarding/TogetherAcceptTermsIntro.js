import React, { Component } from 'react'
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import RoundedButton from '../../Components/RoundedButton'
import Checkbox from '../../Components/Checkbox'
import FullScreenModal from '../../Components/FullScreenModal'
import { translate } from '../../I18n/I18n'
import Images from '../../Themes/Images'

import NotifyOthersEntry from '../App/Home/NotifyOthersEntry'

// Styles
import styles from './Styles/OnboardingPages.styles'

export default class TogetherAcceptTermsIntro extends Component {
  state = {
    acceptedTerms: false,
    modal: false
  }
  modalCallback = () => {
    this.setState({modal: false})
  }
  render () {

    return (
      <ScrollView style={styles.container}>
      <View style={styles.section} >
        <Text style={styles.sectionTitle}>
        {translate('howItWorks')}
        </Text>
        <Text style={styles.sectionSubtitle}>
          {translate('togetherAcceptTermsTitle')}
        </Text>
        <Text style={styles.bodyText}>
        {translate('togetherAcceptTermsMessage')}
        </Text>
    </View>

   <View style={styles.centered}>
      <Image source={Images.togetherAcceptTermsIntroImage} style={styles.codeSubmittedThankYouPageImage} />
    </View>
    <View style={styles.section}>
      <View style={{flexDirection:'row', padding: 10}}>
          <Checkbox 
            selected={this.state.acceptedTerms} 
            onPress={()=>{this.setState({acceptedTerms: !this.state.acceptedTerms})}}
            text={translate('togetherAcceptTermsCheckboxMessage')}
            />
          
          <TouchableOpacity onPress={()=>{ this.setState({modal: true}) 
        
        this.forceUpdate()}} >
              <Text style={styles.termsText}>
                { translate('togetherAcceptTermsCheckboxMessage')}
              </Text>    
         </TouchableOpacity>
      </View>
      <RoundedButton disabled={!this.state.acceptedTerms}  onPress={()=>{this.props.navigation.navigate('SetupBluetooth')}} text={translate('letsGetStarted')} styles={{marginTop: 10}} />
    </View>
    
    <FullScreenModal callback={this.modalCallback} title={translate('termsOfUseModalTitle')} open={this.state.modal} content={<NotifyOthersEntry />} />
  
  </ScrollView>
    )
  }
}
