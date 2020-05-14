
import React, { Component } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useBackButton } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import OnboardingRoot from '../Containers/Onboarding/OnboardingRoot'
import Home from '../Containers/App/Home/Home'
import Privacy from '../Containers/App/Privacy/Privacy'
import More from '../Containers/App/More/More'
import Help from '../Containers/App/Help/Help'
import TestApi from '../Containers/App/TestApi'
import NotifyOthersEntry from '../Containers/App/Home/NotifyOthersEntry'
import NotifyOthersCode from '../Containers/App/Home/NotifyOthersCode'
import NotifyOthersCompleted from '../Containers/App/Home/NotifyOthersCompleted'
import BluetoothPermissionsSetup from '../Containers/Setup/BluetoothPermissionsSetup'
import NotificationsPermissionsSetup from '../Containers/Setup/NotificationsPermissionsSetup'

const OnboardingStack = createStackNavigator()

function Onboarding() {
    return (
        <OnboardingStack.Navigator mode={"modal"} initialRouteName="OnboardingRoot" >        
            <OnboardingStack.Screen
             name="OnboardigRoot" 
             component={OnboardingRoot} 
             options={{ headerShown: false}}
            />
            <OnboardingStack.Screen
            name="SetupBluetooth"
            component={BluetoothPermissionsSetup}
            options={{ headerShown: false}}
            />
              <OnboardingStack.Screen
            name="SetupNotifications"
            component={NotificationsPermissionsSetup}
            options={{ headerShown: false}}
            />
        </OnboardingStack.Navigator>
    )
}

const PrivacyTabStack = createStackNavigator()

function PrivacyTab() {
  return (
    <PrivacyTabStack.Navigator initialRouteName="PrivacyTabRoot" >        
        <PrivacyTabStack.Screen
             name="PrivacyTabRoot" 
             component={Privacy} 
             options={{ headerShown: false}}
            />
    </PrivacyTabStack.Navigator>
  )
}

const MoreTabStack = createStackNavigator()

function MoreTab() {
  return (
    <MoreTabStack.Navigator initialRouteName="MoreTabRoot" >        
        <MoreTabStack.Screen
             name="MoreTabRoot" 
             component={More} 
             options={{ headerShown: false}}
            />
    </MoreTabStack.Navigator>
  )
}

const HelpTabStack = createStackNavigator()

function HelpTab() {
  return (
    <HelpTabStack.Navigator initialRouteName="HelpTabRoot" >        
        <HelpTabStack.Screen
             name="HelpTabRoot" 
             component={Help} 
             options={{ headerShown: false}}
            />
    </HelpTabStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

function Tabs() {
    return (
        <Tab.Navigator initialRouteName="Home" 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'Privacy') {
                iconName = 'shield-account-outline' ;
              } else if (route.name === 'Help') {
                iconName = 'help-circle-outline';
              } else if (route.name === 'Notifications') {
                iconName = focused ? 'notifications-none' : 'ios-notifications-outline';
              } else if (route.name === 'More') {
                iconName = 'dots-horizontal-circle-outline';
              } else if (route.name === 'Dev') {
                iconName = 'bug-outline';
              }

              // You can return any component that you like here!
              return <MaterialCommunityIcons name={iconName} size={32} color={color} style={{paddingTop: 4}} />;
            },
          })}
        >
            <Tab.Screen name="Home" component={HomeRoutes}  />
            <Tab.Screen name="Privacy" component={PrivacyTab} />
            <Tab.Screen name="Help" component={HelpTab} />
            <Tab.Screen name="More" component={MoreTab} />
            <Tab.Screen name="Dev" component={TestApi} />
        </Tab.Navigator>
    )
}
function AnonymouslyNotifyOthers() {
  return (
    <HomeRoutesStack.Navigator initialRouteName="Notify Others" >        

      <HomeRoutesStack.Screen
        name="Notify Others" 
        component={NotifyOthersEntry} 
        options={{ headerShown: true}}
      />
      <HomeRoutesStack.Screen
        name="Notify Others Code" 
        component={NotifyOthersCode} 
        options={{ headerShown: true, headerTitle:"Notify Others" }}
      />
      <HomeRoutesStack.Screen
        name="Notify Others Completed" 
        component={NotifyOthersCompleted} 
        options={{ headerShown: true, headerTitle:"Notify Others" }}
      />
    </HomeRoutesStack.Navigator>
  )
}

const HomeRoutesStack = createStackNavigator()

function HomeRoutes() {
    return (
        <HomeRoutesStack.Navigator initialRouteName="Home" >        
          <HomeRoutesStack.Screen
             name="Home" 
             component={Home} 
             options={{ headerShown: false}}
          />
          <HomeRoutesStack.Screen
            name="Notify Others" 
            component={NotifyOthersEntry} 
            options={{ headerShown: true}}
          />
          <HomeRoutesStack.Screen
            name="Notify Others Code" 
            component={NotifyOthersCode} 
            options={{ headerShown: true, headerTitle:"Notify Others" }}
         />
         <HomeRoutesStack.Screen
            name="Notify Others Completed" 
            component={NotifyOthersCompleted} 
            options={{ headerShown: true, headerTitle:"Notify Others" }}
          />
        </HomeRoutesStack.Navigator>
    )
}

const RootStack = createStackNavigator()

class AppNavigator extends Component {

  render () {
    console.log('Navigator state value',this.props.introCompleted)

    return (
      <NavigationContainer >
          <RootStack.Navigator initialRouteName={ this.props.introCompleted ? "Tabs" : "Onboarding"} >
              <RootStack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false}}/>
              <RootStack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          </RootStack.Navigator>
      </NavigationContainer>
  )
  }
}

export default AppNavigator
