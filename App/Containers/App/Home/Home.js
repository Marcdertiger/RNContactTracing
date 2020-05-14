import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View, AsyncStorage } from 'react-native'

import Divider from '../../../Components/Divider'
import RoundedButton from '../../../Components/RoundedButton'
import { translate } from '../../../I18n/I18n'
import ShareApp from '../../../Utils/ShareApp'
import Banner from '../../../Components/Banner'
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import { connect } from 'react-redux'
import { editLanguagePreference } from '../../../Redux/Actions/api'

// Styles
import styles from '../Styles/Home.styles'

class Home extends Component {

  changeLanguageHandler = async() => {
    const newLang = this.props.languagePreference === 'fr' ? 'en' : this.props.languagePreference === 'en' ? 'fr' : 'en'
    this.props.dispatch(editLanguagePreference(newLang))
  }

  renderExposed () {
    return (
      <ScrollView style={styles.container}>

      {/* More menu button */}
    <View style={{position:'absolute', top: 0, right: 50}}>
      <TouchableOpacity onPress={()=> this.changeLanguageHandler()}>  
        {/* <Ionicons  name={'ios-menu'} size={34} color={styles.ButtonColor.color} /> */}
      <Text style={styles.homeButtonText}>{this.props.languagePreference === 'en' ? 'Francais' : this.props.languagePreference === 'fr' && 'English' }</Text>
      </TouchableOpacity>  
    </View>
 
    <View style={styles.section} >
        <Text style={styles.sectionTitle}>
          {translate('welcome')}
          </Text>
          <Text style={styles.sectionSubtitle}>
          {translate('homeNoExposureMessage')}
          </Text>
    </View>
  
    <Divider borderColor="#000000" color="#000000" orientation="center" />  
    
    <View style={styles.section} >
        <Text style={styles.bodyTitle}>
          {translate('shareTheApp')}
          </Text>
          <Text style={styles.bodyText}>
            {translate('shareTheAppMessage')}
          </Text>
          <RoundedButton onPress={ShareApp} text={translate('shareTheApp')} styles={{marginTop: 10}} />
    </View>

    <Divider borderColor="#000000" color="#000000" orientation="center" />  

    <View style={styles.section} >
        <Text style={styles.bodyTitle}>
          {translate('testedPositiveTitle')}
          </Text>
          <RoundedButton secondary={true} text={translate('testedPositiveButton')} onPress={ ()=> { this.props.navigation.navigate('Notify Others')  } } styles={{marginTop: 10}} />
    </View>

    </ScrollView>
    )
  }

  renderNotExposed () {
    return (
      <ScrollView style={styles.container}>

      {/* More menu button */}
    <View style={{position:'absolute', top: 0, right: 50}}>
      <TouchableOpacity onPress={()=> this.changeLanguageHandler()}>  
        {/* <Ionicons  name={'ios-menu'} size={34} color={styles.ButtonColor.color} /> */}
      <Text style={styles.homeButtonText}>{this.props.languagePreference === 'en' ? 'Francais' : this.props.languagePreference === 'fr' && 'English' }</Text>
      </TouchableOpacity>  
    </View>
 
    <View style={styles.section} >
        <Text style={styles.sectionTitle}>
          {translate('welcome')}
          </Text>
          <Text style={styles.sectionSubtitle}>
          {translate('homeNoExposureMessage')}
          </Text>
    </View>
  
    <Divider borderColor="#000000" color="#000000" orientation="center" />  
    
    <View style={styles.section} >
        <Text style={styles.bodyTitle}>
          {translate('shareTheApp')}
          </Text>
          <Text style={styles.bodyText}>
            {translate('shareTheAppMessage')}
          </Text>
          <RoundedButton onPress={ShareApp} text={translate('shareTheApp')} styles={{marginTop: 10}} />
    </View>

    <Divider borderColor="#000000" color="#000000" orientation="center" />  

    <View style={styles.section} >
        <Text style={styles.bodyTitle}>
          {translate('testedPositiveTitle')}
          </Text>
          <RoundedButton secondary={true} text={translate('testedPositiveButton')} onPress={ ()=> { this.props.navigation.navigate('Notify Others')  } } styles={{marginTop: 10}} />
    </View>

    </ScrollView>
    )
  }

  render () {
    
    return (
      <View style={styles.mainContainer}>

        {/* The safeareaconsumer sets padding as per os requires only for the top bar (as bottom is not required when tabs are visible) */}
        <SafeAreaConsumer>
          {insets => <View style={{ paddingTop: insets.top, zIndex: 1}} />}
        </SafeAreaConsumer>
        
        {this.props.exposureStatus.status === true ?
          <View>
            <Banner status={'exposed'} text={'Exposure Alert'} onPress={null} />
            {this.renderExposed()}
          </View>
          :
          <View>
           {this.renderNotExposed()}
          </View>
      }
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('api state redux', state)
    return {
        languagePreference : state.api.languagePreference,
        exposureStatus: state.api.exposureStatus
    }
}

const ConnectedHome = connect(
    mapStateToProps,
)(Home);
export default ConnectedHome;