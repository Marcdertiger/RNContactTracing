import React from 'react';
import { Share, Platform } from 'react-native';

const options = Platform.select({
    ios: {
        subject: "Share DistanceNB subject",
    },
    default: {
        dialogTitle: "Share DistanceNB dialog title",
    }
})

const content = Platform.select({
    ios: {
        message: "Share DistanceNB",
        url: "www.google.ca"
    },
    default: {
        message: "Share DistanceNB",
        url: "www.google.com"
    }
})

export default async function ShareExample() {
    try {
      const result = await Share.share(content, options);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
};
