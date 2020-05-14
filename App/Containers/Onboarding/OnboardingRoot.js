import React, { Component } from 'react'
import { AsyncStorage, View } from 'react-native'

import Images from '../../Themes/Images'
import { translate } from '../../I18n/I18n'
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux'
import { editLanguagePreference } from '../../Redux/Actions/api'
//Components
import RoundedButton from '../../Components/RoundedButton'
import TextButton from '../../Components/TextButton'
import PaginationDots from '../../Components/PaginationDots'

import Language from './LanguageIntro'
import ProtectPrivacyIntro from './ProtectPrivacyIntro'
import APIUseIntro from './APIUseIntro'
import ExposureAlertIntro from './ExposureAlertIntro'
import TogetherAcceptTermsIntro from './TogetherAcceptTermsIntro'


// Styles
import styles from './Styles/OnboardingRoot.styles'

class OnboardingRoot extends React.Component {
  state = {
    languageSelection: "",
    step: -1,
    maxStep: 3,
    minStep: 0
  }

  onNext() {
    if(this.state.step < this.state.maxStep){
      this.setState({step: this.state.step + 1})
    }
    else if (this.state.step === this.state.maxStep){
      // move to setup pages
      
    }
  }

  onBack() {
    if(this.state.step > 0){
      this.setState({step: this.state.step - 1})
    }
  }

  onLanguageSelect = async(lang) => {
      //set new language in redux
      this.props.dispatch(editLanguagePreference(lang))
    
      this.onNext()
  }

  renderIntroNav(){
    return (
      <View style={styles.bottomContainer}>
        <View style={styles.bottomSection}>
          
        <View style={styles.bottomBackButtonSection}>
          {this.state.step > 0 &&
              <TextButton text={translate('back')} onPress={ ()=> { this.onBack() } } styles={{marginTop: 10}} />
          }
        </View>

        <View style={styles.bottomPaginationSection}>
          <PaginationDots length={this.state.maxStep + 1} active={this.state.step} />
        </View>

         <View style={styles.bottomNextButtonSecton}> 
         {this.state.step < this.state.maxStep &&
              <TextButton text={translate('next')} onPress={ ()=> { this.onNext() } } styles={{marginTop: 10}} />
         }
         </View>
        </View>
      </View>
    )
  }

  render () {
    console.log(this.props.languagePreference )
    switch (this.state.step) {
      case -1:
        return (
          <SafeAreaView style={styles.mainContainer}>
            <Language onLanguageSelect={ this.onLanguageSelect } navigation = { this.props.navigation }/>
          </SafeAreaView>
        )
      case 0: 
          return (
            <SafeAreaView style={styles.mainContainer}>
              <ProtectPrivacyIntro/>
              {this.renderIntroNav()}
            </SafeAreaView>
          )
      case 1: 
          return (
            <SafeAreaView style={styles.mainContainer}>
              <APIUseIntro onLanguageSelect={ this.onLanguageSelect } navigation = { this.props.navigation }/>
              {this.renderIntroNav()}
            </SafeAreaView>
          )
       case 2: 
          return (
            <SafeAreaView style={styles.mainContainer}>
              <ExposureAlertIntro onLanguageSelect={ this.onLanguageSelect } navigation = { this.props.navigation }/>
              {this.renderIntroNav()}
            </SafeAreaView>
          )
        case 3: 
          return (
            <SafeAreaView style={styles.mainContainer}>
              <TogetherAcceptTermsIntro onLanguageSelect={ this.onLanguageSelect } navigation = { this.props.navigation }/>
              {this.renderIntroNav()}
            </SafeAreaView>
          )
      default:
        return (
          <View>
            {this.props.navigation.navigate('Onboarding')}
          </View>
        )
        break;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('api state redux', state)
    return {
        languagePreference : state.api.languagePreference
    }
}

const ConnectedOnboardingRoot = connect(
    mapStateToProps,
)(OnboardingRoot);
export default ConnectedOnboardingRoot;