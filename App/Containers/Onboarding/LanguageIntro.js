import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { translate } from '../../I18n/I18n'
import Images from '../../Themes/Images'
import PropTypes from 'prop-types';


//Components
import RoundedButton from '../../Components/RoundedButton'

// Styles
import styles from './Styles/Language.styles'

export default class Language extends React.Component {
  static get propTypes() {
    return {
      navigation: PropTypes.object,
      onLanguageSelect: PropTypes.func
    };
  }
  render () {
    
    return (
        <ScrollView style={styles.container}>
          <View style={styles.section} >
              <View style={styles.centered}>
                <Image source={Images.languageSelectImage} style={styles.languagePageImage} />
              </View>
              <View style={{paddingTop: 30}}>
                <Text style={styles.sectionText}>
                  English or French - It's your choice!
                </Text>
                <Text style={styles.sectionText}>
                    Français ou anglais - C'est votre choix!
                </Text>
              </View>
              <View style={styles.sectionButtonGroup} >
                <View style={{flex: 1, paddingRight: 10}}>
                  <RoundedButton text={"English"} onPress={ ()=> { this.props.onLanguageSelect('en') } } styles={{marginTop: 10}} />
                </View>
                <View style={{ flex: 1, paddingLeft: 10}}>
                  <RoundedButton text={"Français"} onPress={ ()=> { this.props.onLanguageSelect('fr') } } styles={{marginTop: 10}} />
                </View>
            </View>
            <View style={styles.centered}>
              <Image source={Images.GNBLogo} style={styles.logo} />
            </View>
          </View>
        </ScrollView>
    )
  }
}
