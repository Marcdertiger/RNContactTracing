import { setI18nConfig } from '../../I18n/I18n'

export const initialState = {
    isError: false,
    infectedKeys: [],
    errorMessage: null,
    isLoading: {
        isLoadingInfectedKeys: false,
        isLoadingClaimSession: false,
        isLoadingReportOwnKeys: false,
    },
    languagePreference: 'en',
    introCompleted: null,
    //status false == no exposure detected, status true == exposure detected, expiry in unix time, null for no expiry
    exposureStatus: {status: false, expiry: null} 

}

export default function api(state = initialState, action) {
    switch(action.type) {
        case "FETCH_INFECTED_KEYS":
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    isLoadingInfectedKeys: true,
                },
                isError: false,
                errorMessage: null,
            }
        case "RECEIVE_INFECTED_KEYS":
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    isLoadingInfectedKeys: false,
                },
                isError: false,
                errorMessage: null,
                infectedKeys: action.data
            }
        case "FETCH_CLAIM_SESSION":
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    isLoadingClaimSession: true,
                },
                isError: false,
                errorMessage: null,
            }
        case "RECEIVE_CLAIM_SESSION":
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    isLoadingClaimSession: false,
                },
                isError: false,
                errorMessage: null,
                oneTimeCodes: action.data
            }
        case "FETCH_REPORT_OWN_KEYS":
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    isLoadingReportOwnKeys: true,
                },
                isError: false,
                errorMessage: null,
            }
        case "RECEIVE_REPORT_OWN_KEYS":
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    isLoadingReportOwnKeys: false,
                },
                isError: false,
                errorMessage: null,
            }
        case "FETCH_ERROR":
            return {
                ...state,
                isLoading: {
                    isLoadingInfectedKeys: false,
                    isLoadingClaimSession: false,
                    isLoadingReportOwnKeys: false,
                },
                isError: true,
                errorMessage: action.data,
            }
        case "EDIT_LANGUAGE_PREFERENCE":
            setI18nConfig(action.payload, false)
            return Object.assign({}, state, {
                languagePreference: action.payload
              })
        case "EDIT_APPINTRO_COMPLETED":
            return Object.assign({}, state, {
                introCompleted: action.payload
            })
        case "EDIT_EXPOSURE_STATUS":
            return Object.assign({}, state, {
                exposureStatus: action.payload
            })
        default:
            return state;
    }
}


