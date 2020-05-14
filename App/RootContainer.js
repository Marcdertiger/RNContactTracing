import React, { Component } from 'react'
import {
  View, StatusBar, AsyncStorage
} from "react-native";
import AppNavigator from './Navigation/AppNavigator'
import * as RNLocalize from "react-native-localize";
import { SafeAreaProvider,
  initialWindowSafeAreaInsets } from 'react-native-safe-area-context';
  import { connect } from 'react-redux'

import { setI18nConfig } from './I18n/I18n'

import styles from './Containers/Styles/RootContainer.styles'

class RootContainer extends Component {

  // componentwillmount has been renamed to UNSAFE_componentwillmount
  // it is required to update before the component mounts (for language to show on initial loading)
  // thus requiring the use of this function
   UNSAFE_componentWillMount = async() => {
      setI18nConfig(this.props.languagePreference, false)
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
          <StatusBar barStyle='dark-content' />
          <AppNavigator {...this.state} {...this.props} />
        </SafeAreaProvider>
      </View>
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

const ConnectedRootContainer = connect(
    mapStateToProps,
)(RootContainer);
export default ConnectedRootContainer;
