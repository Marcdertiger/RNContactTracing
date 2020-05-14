import { config } from '../Env/env'

// timeout function.
function timeout(ms, promise) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject(new Error("timeout"))
      }, ms)
      promise.then(resolve, reject)
    })
  }
 

function getInfectedKeys() {
    let headerData = { [config.API_TOKEN_NAME]: config.API_TOKEN }
    let headers = new Headers(headerData);
    var data = { method: 'GET', headers: headers };

    let url = config.API_URL + 'v1/encounter/'; 

    return timeout(config.API_TIMEOUT, fetch(encodeURI(url), data)).then(function(response) {
        return  response.json();
      });
}

function reportOwnKeys(oneTimeCode, exposureKeys) {
    var headerData =  {
        'Content-Type': 'application/json',
        [config.API_TOKEN_NAME]: config.API_TOKEN
    }
    let headers = new Headers(headerData);
    let body = {
        oneTimeCode: oneTimeCode,
        encounters: exposureKeys
    }
    var data = { method: 'POST', headers: headers, body: JSON.stringify(body) }

    let url = config.API_URL + 'v1/encounter/';

    return timeout(config.API_TIMEOUT, fetch(encodeURI(url), data)).then(function(response) {
        return  response.json();
      })

}

function claimSession(sessionToken) {
    let headerData = { [config.API_TOKEN_NAME]: config.API_TOKEN }
    let headers = new Headers(headerData);
    var data = { method: 'GET', headers: headers };

    let url = config.API_URL + 'v1/session/' + sessionToken + "/claim/"; 

    return timeout(config.API_TIMEOUT, fetch(encodeURI(url), data)).then(function(response) {
        return  response.json();
      })

}

export {
    reportOwnKeys,
    getInfectedKeys,
    claimSession,
}
