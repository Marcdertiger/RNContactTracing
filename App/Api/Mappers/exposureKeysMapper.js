import ExposureKey from '../../Model/exposureKey'

export function mapExposureKeys(data) {
    let exposureKeys = [];

    if(data === undefined || data.length === 0) { return []}
    
    data.forEach((d) => {
        let newKey = new ExposureKey(d.temporaryEncounterKey, d.protocolName);
        exposureKeys.push(newKey);
    });

    return exposureKeys;
}
