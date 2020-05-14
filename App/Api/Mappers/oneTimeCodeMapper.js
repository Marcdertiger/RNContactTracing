import OneTimeCode from '../../Model/oneTimeCode'

export function mapOneTimeCodes(data) {
    let oneTimeCodes = [];

    if(data === undefined || data.length === 0) { return []}

    data.forEach((d) => {
        let newCode = new OneTimeCode(d.code, d.expiryTimestamp, d.validDay);
        oneTimeCodes.push(newCode);
    });

    return oneTimeCodes;
}
