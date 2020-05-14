import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import RoundedButton from '../../../Components/RoundedButton'
import FullScreenModal from '../../../Components/FullScreenModal'
import { translate } from '../../../I18n/I18n'
import TextButton from '../../../Components/TextButton'
import InputScrollView from 'react-native-input-scroll-view'
import DidNotReceiveCode from '../Modals/DidNotReceiveCode'

// Styles
import styles from '../Styles/NotifyOthersCode.styles'

export default class NotifyOthersCode extends Component {
    constructor (props) {
        super(props);
        this.state = {
          text: "",
          modal: false

        }
      }
      modalCallback = () => {
        this.setState({modal: false})
      }
      changeText(text){
        this.setState({text})
      }

  render () {

    return (
      <View style={styles.mainContainer}>
        <InputScrollView style={styles.container} topOffset={180}>
        <View style={styles.section} >
              <Text style={styles.sectionSubtitle}>
              {translate('testedPositiveButton')}
              </Text>
              <Text style={styles.bodyTitle}>
                {translate('enterYourCodeTitle')}
              </Text>
              <Text style={styles.bodyText}>
              {translate('enterYourCodeBody')}
              </Text>

                <View style={styles.textBox}>
                    <TextInput
                        maxLength={4}
                        textAlignVertical={'center'}
                        textAlign = {'center'}
                        style={{height: 80, fontSize: 30, alignContent:'center'}}
                        allowFontScaling={true}
                        maxFontSizeMultiplier={80}
                        placeholder="Your code here!"
                        onChangeText={text => this.changeText(text)}
                        defaultValue={this.state.text}
                    />
                </View>
                     
              <RoundedButton disabled={this.state.text.length === 4 ? false : true} secondary={false} text={translate('next')} onPress={ ()=> { this.props.navigation.replace('Notify Others Completed') } } styles={{marginTop: 10}} />
              <TextButton text={translate('didNotReceiveCode')} onPress={ ()=> { this.setState({modal: true})} }  />
        </View>
        </InputScrollView>
        <FullScreenModal callback={this.modalCallback} title={translate('didNotReceiveCode')} open={this.state.modal} content={<DidNotReceiveCode />} />
      </View>
    )
  }
}
