#  DistanceNB

An incomplete proof of concept contact tracing cross platform mobile application.

## Notes

1. A macos computer is required to run and/or comile the ios version of the app.
2. On windows, you can only run and/or compile the Android version.

## :arrow_up: How to Setup

**Step 0:** Install Xcode AND Android Studio, nodejs

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Run yarn install

**step 4:(First Time Only)** Setup your development environment (both android and iOS) : https://reactnative.dev/docs/environment-setup . See React Native CLI Quickstart procedures

**Step 5** Run npx react-native run-ios or npx react-native run-android

## Setup Notes

Android 

The connection for android emulator may fail when running npx react-native run-android

try: 
1. Check you dev environment as per https://reactnative.dev/docs/environment-setup
2. Make sure adb is installed (android terminal toolkit) : in terminal (adb devices)
3. Open andoid folder of the project in android studio and let it read the project, do not update gradle or anything else. Close it and try npx react-native run-android again
4. In a terminal type: adb devices. Identify which device is the one you want to use. Then run npx react-native run-android --deviceId XXxx

iOS

To open the iOS project in XCode, use the DistanceNB.xcworkspace file (do not use DistanceNB.xcodeproj as it will not build)


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `npx react-native run-ios`
  * for Android
    * Run Genymotion
    * run `npx react-native run-android`

## React Native Bridge 

The android bridge is called RNContactTracingAndroid.
The files used are: 
1. DistanceNB/android/app/src/main/java/com/distancenb/RNContactTracingAndroid.java
2. DistanceNB/android/app/src/main/java/com/distancenb/RNContactTracingAndroidManager.java

The iOS bridge is called RNContactTracingios.
The files are: 
1. DistanceNB/ios/RNContactTracingios.h
2. DistanceNB/ios/RNContactTracingios.m

### Adding to the modules 

1. The functions exposed by the modules should follow the same naming scheme on andoid and ios. As more 
details are known about the API's (Marc-A will check on those), M-A will put together a list of 
functions exposed and their functionality + which native api funcitons they are to use. 

### Logging from native code

1. Android: run adb logcat com.distancenb in a terminal
2. ios: run the distancenb.xcworkspace project in Xcode

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

The .env file exists, however the react-native-config method listed below is not in use currently.

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!

### Managing Fonts

https://medium.com/@mehran.khan/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4

### Integrating ios exposure notification (swift -> obj C Bridge -> RN)

This example seems to cover all corners of what we need to accomplish.

It walks through the steps of exposing swift functions to the obj C bridge,
how to add to the RN module etc. 

note: this article uses different RN version and may differ a bit. This is for help on
getting an idea of how to achieve this.

https://teabreak.e-spres-oh.com/swift-in-react-native-the-ultimate-guide-part-1-modules-9bb8d054db03

### Plan for ios exposure notifications integration with RN

1. Use the sample code as a guide to what needs to be called (added to RN module)
2. Expose functions located in ExposureManager.swift which handles most API calls to ExposureNotification API. 
3. Expose functions used by onboarding to allow RN to programatically request/verify access to the API.
4. DECIDE where data and SERVER API calls live (simpler to use Native from the template and expose call functions to trigger the API calls ?)


### Language support (dynamic change to UI )

To get this to work, a little of wizardry is required.

All pages (ie: privacy, help, more) and their sub pages must connect to the redux store.
Pages connected to the store will refresh when the store is changed. Pages that are not connected
will remain in their initial state until it is re-rendered.

## To dos (so I don't forget)

1. data persistance for redux store (remember languagePreference)
