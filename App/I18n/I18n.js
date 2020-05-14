import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize"; // Use for caching/memoize for better performance
import {AsyncStorage} from 'react-native'
import {refreshForLanguageChange} from '../RootContainer'
import {
  I18nManager
} from "react-native";


export const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require("./Languages/en.json"),
  fr: () => require("./Languages/fr.json")
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

export const changeLanguage = async (tag) => {
  try{
    await AsyncStorage.setItem('LangPref', tag)
    setI18nConfig(tag, false)
    refreshForLanguageChange(tag)
  }
  catch{
    console.log('could not set language preference.')
    //fallback already in effect
  }
}

export const setI18nConfig = (tag, rtl) => {
  // fallback if no available language fits
  console.log('SET I18N CONFIG DATA' ,    tag)
  //testing
  const languageTag = tag
  const isRTL = rtl;

  const fallback = { languageTag: "en", isRTL: false };

  // const { languageTag, isRTL } =
  //   RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
  //   fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};