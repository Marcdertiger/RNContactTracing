import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import MenuList from '../../../Components/MenuList'
import { translate } from '../../../I18n/I18n'
import { connect } from 'react-redux'

import Images from '../../../Themes/Images'

// Styles
import styles from '../Styles/Privacy.styles'

const ListData = [
  {key: '0', title: 'more', target: 'Notify Others', targetType: 'navigate'},
  {key: '1', title: 'more', target: 'Notify Others', targetType: 'url', url: 'https://google.ca'},
  {key: '2', title: 'more', target: 'Notify Others', targetType: 'navigate'},
  {key: '3', title: 'more', target: 'Notify Others', targetType: 'navigate'},
]
class More extends Component {

  // componentDidMount = async() =>{
  //   const tag
  // }

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
              {translate('more')}
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

const ConnectedMore = connect(
    mapStateToProps,
)(More);
export default ConnectedMore;