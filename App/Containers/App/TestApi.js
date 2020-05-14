import React, { Component } from 'react'
import { ScrollView, Text, Image, View, FlatList, NativeModules, Platform } from 'react-native'
import { SafeAreaConsumer } from 'react-native-safe-area-context';

import { connect } from 'react-redux'
import { getInfectedKeys,
   editLanguagePreference,
    editAppIntroCompleted,
     editExposureStatus } 
     from '../../Redux/Actions/api'
import RoundedButton from '../../Components/RoundedButton'
import TextButton from '../../Components/TextButton'
import Images from '../../Themes/Images'
// Styles
import styles from './Styles/Home.styles'

class TestApi extends Component {
  state = {
    error: "",
  }
 
 getInfectedKeysCall() {

      this.props.dispatch(getInfectedKeys()).catch((err) => {
          console.log("Handle errors here: " + err);
          this.setState({error: err})
      });
      this.props.dispatch(editLanguagePreference('en'))
     console.log('state in testapi', this.state)
  }

  uploadKeys() {
    // do upload API calls and response handling here

  }

  renderAPIButtons(){
    return (
      <View>
        <RoundedButton text={'DEV Get Infected Keys'} onPress={ ()=> { this.getInfectedKeysCall() } } />
        <RoundedButton text={'DEV Upload Keys'} onPress={ ()=> { this.uploadKeys() } } />
      </View>
    )
  }

  renderApiContent() {
      if (this.props.isLoading === true || this.props.infectedKeys === undefined) {
          return null;
      } else {
          let keysMap = this.props.infectedKeys.map((k, i) => {
              return (
                  <Text key={i}>
                      {k.key}
                  </Text>
              );
          });
          return keysMap;
      }
  }

renderFlatListItem(item){
  this.formatKeyDataForDisplay()
  return (
    <View style={{backgroundColor: item.positive? "#FF0000" : "#7CFC00", borderWidth:1, borderColor: 'grey', padding: 16}}>
      <Text style={styles.itemTop}>{item.date + ' ' + item.length + ' minutes '+ item.distance + ' m ' + item.protocol}</Text>
      <Text style={styles.itemBottom}>{item.key}</Text>
    </View>
  )
}

formatKeyDataForDisplay(){
  let rawData = this.props.infectedKeys
  let data = [] 
  console.log(rawData)
  if(rawData === undefined || rawData.length === 0){return}
  rawData.map((item)=>{
    data.push({key: item.key, date: 'Today', length: 30, distance: 1.2, positive: false, protocol: item.protocol})
  })

  return data
}

renderRNBridgeExamples(){
  const RNContactTracingios = NativeModules.RNContactTracingios
  const RNContactTracingAndroid = NativeModules.RNContactTracingAndroid

  return (
    <View>
      {Platform.OS === 'ios' &&
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>
              {'Native Bridge Examples iOS'}
      </Text>

      <RoundedButton text={'BRIDGE ios Xcode print'} onPress={ ()=> {
          RNContactTracingios.addEvent('Native Event', 'iOS');
        }} styles={{marginTop: 10}} />
      <RoundedButton text={'BRIDGE ios alert'} onPress={ ()=> {
          RNContactTracingios.findEvents(resp=>{
            alert(resp);
          })
        }} styles={{marginTop: 10}} />
    </View>
      }
    
      {Platform.OS === 'android' &&
       <View style={styles.section} >
       <Text style={styles.sectionTitle}>
               {'Native Bridge Examples Android'}
       </Text>
       <RoundedButton text={'BRIDGE Android print'} onPress={ ()=> {
           RNContactTracingAndroid.addEvent('Native Event From Android');
         }} styles={{marginTop: 10}} />
       <RoundedButton text={'BRIDGE Android alert'} onPress={ ()=> {
         RNContactTracingAndroid.findEvents(
           'Hello from native android.',
           err => {
             alert(err);
           },
           message => {
             console.log(message)
             alert(message);
           }
         )
         }} styles={{marginTop: 10}} />
 
     </View>
      }
   
    </View>
  )
}

renderIntroControls() {
return (
  <View>
    <Text style={styles.sectionTitle}>{'Change IntroCompleted (requires app reload)'}</Text>
    <RoundedButton text={'DEV Intro Completed = False'} onPress={ ()=> { this.props.dispatch(editAppIntroCompleted(false))} } styles={{marginTop: 10}} />
  </View>
  )
}

renderExposureControls() {
  return (
    <View>
      <Text style={styles.sectionTitle}>{'Toggle exposure status'}</Text>
      <RoundedButton text={'!ExposureStatus'} onPress={ ()=> { this.props.dispatch(editExposureStatus({status: !this.props.exposureStatus.status, expiry: null}))} } styles={{marginTop: 10}} />
    </View>
  )
}

  render () {
    return (
      <View style={styles.mainContainer}>
         {/* The safeareaconsumer sets padding as per os requires only for the top bar (as bottom is not required when tabs are visible) */}
         <SafeAreaConsumer>
          {insets => <View style={{ paddingTop: insets.top }} />}
        </SafeAreaConsumer>
        <ScrollView style={styles.container}>
       
          <View style={styles.section} >
          <Text style={styles.sectionTitle}>
              
                {'Dev Screen'}
              </Text>

               {this.renderAPIButtons()}
               {this.renderIntroControls()}
               {this.renderExposureControls()}

        <Text style={styles.sectionTitle}>
              
              {'Received Codes'}
            </Text>
            <View >
        <FlatList contentContainerStyle={{borderWidth: 2, borderColor: 'black', borderRadius: 6, padding: 10}}
          data={this.formatKeyDataForDisplay()}
          renderItem={({item}) => this.renderFlatListItem(item)}
        />
        </View>
       

        {this.renderRNBridgeExamples()}

          <Text style={styles.sectionTitle}>
                {'Errors'}
              </Text>
              <Text style={styles.sectionText}>
              {this.state.error === "" ? "No Error Messages": this.state.error}
            </Text>

          <View style={styles.centered}>
            <Image source={Images.GNBLogo} style={styles.logo} />
          </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('api state redux', state)
    return {
        isLoading: state.api.isLoading.isLoadingInfectedKeys,
        isError: state.api.isError,
        infectedKeys: state.api.infectedKeys,
        errorMessage: state.api.errorMessage,
        languagePreference : state.api.languagePreference,
        introCompleted: state.api.introCompleted,
        exposureStatus: state.api.exposureStatus
    }
}

const ConnectedTestApi = connect(
    mapStateToProps,
)(TestApi);
export default ConnectedTestApi;

