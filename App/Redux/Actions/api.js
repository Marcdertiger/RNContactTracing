import { mapOneTimeCodes } from '../../Api/Mappers/oneTimeCodeMapper';
import { mapExposureKeys } from '../../Api/Mappers/exposureKeysMapper';
import * as api from '../../Api/api'

export const fetchInfectedKeys = () => {
    return {
        type: "FETCH_INFECTED_KEYS",
    }
}

export const receiveInfectedKeys = (data) => {
    return {
        type: "RECEIVE_INFECTED_KEYS",
        data: data,
    }
}

export const fetchClaimSession= () => {
    return {
        type: "FETCH_CLAIM_SESSION",
    }
}

export const receiveClaimSession = (data) => {
    return {
        type: "RECEIVE_CLAIM_SESSION",
        data: data,
    }
}

export const fetchReportOwnKeys = () => {
    return {
        type: "FETCH_REPORT_OWN_KEYS",
    }
}

export const receiveReportOwnKeys = () => {
    return {
        type: "RECEIVE_REPORT_OWN_KEYS",
    }
}

export const errorFetching = (data) => {
    return {
        type: "FETCH_ERROR",
        error: data,
    }
}

export const editLanguagePreference = (data) => {
    return {
        type: "EDIT_LANGUAGE_PREFERENCE",
        payload: data,
    }
}

export const editAppIntroCompleted = (data) => {
    return {
        type: "EDIT_APPINTRO_COMPLETED",
        payload: data,
    }
}

export const editExposureStatus = (data) => {
    return {
        type: "EDIT_EXPOSURE_STATUS",
        payload: data,
    }
}

// Make api request to fetch infected keys
// Returns a promise
// This is a "thunk"
export const getInfectedKeys = () => {
    return function(dispatch, getState) {
        let fetching = getState().api.isLoading.isLoadingInfectedKeys;
        if (fetching !== true) {
            dispatch(fetchInfectedKeys());
            // Fetch the data...
            return api.getInfectedKeys()
                .then(results => {
                    console.log("results:..");
                    console.log(results);
                    // Map whatever comes from the api into local model objects
                    // Useful process for language strings and combining objects
                    // Can use multiple mappers etc.
                    let infectedKeys = mapExposureKeys(results);

                    // Put models in redux state
                    // Models are now available to any connected components
                    dispatch(receiveInfectedKeys(infectedKeys))
                        
                })
        }
    }
}


// Claim session
export const claimSession = (sessionToken) => {
    return function(dispatch, getState) {
        let fetching = getState().api.isLoading.isLoadingClaimSession;
        if (fetching !== true) {
            dispatch(fetchClaimSession());
            // Fetch the data...
            return api.claimSession(sessionToken)
                .then(results => {
                    // Map whatever comes from the api into local model objects
                    // Useful process for language strings and combining objects
                    // Can use multiple mappers etc.
                    let oneTimeCodes = mapOneTimeCodes(results);

                    // Put models in redux state
                    // Models are now available to any connected components
                    dispatch(receiveClaimSession(oneTimeCodes))
                })
        }
    }
}

// Report keys to our server
export const reportOwnKeys = (oneTimeCode, keys) => {
    return function(dispatch, getState) {
        let fetching = getState().api.isLoading.isLoadingReportOwnKeys;
        if (fetching !== true) {
            dispatch(fetchReportOwnKeys());
            // Fetch the data...
            return api.reportOwnKeys(oneTimeCode, keys)
                .then(results => {
                    // Result is empty if success.

                    // Put models in redux state
                    // Models are now available to any connected components
                    dispatch(receiveReportOwnKeys())
                })
        }
    }
}
