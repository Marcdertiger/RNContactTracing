import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import MenuList from '../../../Components/MenuList'
import { translate } from '../../../I18n/I18n'
import { connect } from 'react-redux'

// Styles
import styles from '../Styles/Privacy.styles'

const ListData = [
  {key: '0', title: 'didNotReceiveCode', target: 'Notify Others', targetType: 'navigate'},
  {key: '1', title: 'didNotReceiveCode', target: 'Notify Others', targetType: 'navigate'},
  {key: '2', title: 'didNotReceiveCode', target: 'Notify Others', targetType: 'navigate'},
  {key: '4', title: 'didNotReceiveCode', target: 'Notify Others', targetType: 'navigate'},
  {key: '5', title: 'didNotReceiveCode', target: 'Notify Others', targetType: 'navigate'},

]

class Help extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
         {/* The safeareaconsumer sets padding as per os requires only for the top bar (as bottom is not required when tabs are visible) */}
         <SafeAreaConsumer>
          {insets => <View style={{ paddingTop: insets.top }} />}
        </SafeAreaConsumer>

        <View style={styles.container}>
      
        <View style={styles.section} >
              <Text style={styles.sectionSubtitle}>
              {translate('help')}
              </Text>
        </View>
    
          <View style={styles.section} >
            <MenuList navigation={this.props.navigation} data={ListData}/>
          </View>

        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('api state redux', state)
    return {
        languagePreference : state.api.languagePreference
    }
}

const ConnectedHelp = connect(
    mapStateToProps,
)(Help);
export default ConnectedHelp;