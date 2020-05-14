import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import Divider from '../../../Components/Divider'
import RoundedButton from '../../../Components/RoundedButton'
import FullScreenModal from '../../../Components/FullScreenModal'
import { translate } from '../../../I18n/I18n'
import ViewPrivacyPolicy from '../Modals/ViewPrivacyPolicy'
// Styles
import styles from '../Styles/Home.styles'
import TextButton from '../../../Components/TextButton'
import TextNumberedList from '../../../Components/TextNumberedList'

const ListData = [
  {key: 0, index: '1.', text: 'didNotReceiveCode'},
  {key: 1, index: '2.', text: 'shareTheAppMessage'},  
  {key: 2, index: '3.', text: 'didNotReceiveCode'}
]

export default class NotifyOthersEntry extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false
    }
  }
  modalCallback = () => {
    this.setState({modal: false})
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section} >
              <Text style={styles.sectionSubtitle}>
              {translate('testedPositiveButton')}
              </Text>
              <Text style={styles.bodyText}>
                {translate('shareTheAppMessage')}
              </Text>
          {/* </View> */}
          {/* <View style={styles.section} > */}
          <Text style={styles.bodyTitle}>
                {translate('howItWorks')}
              </Text>
               <TextNumberedList data = {ListData} />
         
              <View style={styles.sectionButton}>
              <RoundedButton secondary={false} text={translate('next')} onPress={ ()=> { this.props.navigation.replace('Notify Others Code') } } styles={{marginTop: 10}} />
              
              <TextButton text={translate('privacyPolicyButtonText')} onPress={ ()=> { this.setState({modal: true}) } }  />
              </View> 
          </View>
        </ScrollView>
        <FullScreenModal callback={this.modalCallback} title={translate('privacyPolicyButtonText')} open={this.state.modal} content={<ViewPrivacyPolicy />} />
      </View>
    )
  }
}
