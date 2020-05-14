import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { translate } from '../../../I18n/I18n'

// Styles
import styles from '../Styles/Home.styles'

export default class DidNotReceiveCode extends Component {
  
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
        <View style={styles.section} >
              <Text style={styles.sectionSubtitle}>
              {'What to do? Where is my code?'}
              </Text>
              <Text style={styles.bodyText}>
                {translate('shareTheAppMessage')}
              </Text>
              <Text style={styles.bodyTitle}>
              {translate('shareTheApp')}
              </Text>
              <Text style={styles.bodyText}>
                {translate('shareTheAppMessage')}
              </Text>
              <View style={styles.sectionButton}>
              </View>
        </View>
        </ScrollView>
      </View>
    )
  }
}
