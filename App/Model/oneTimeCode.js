export default class OneTimeCode {
    constructor(code, expiryTimestamp, validDay) {
        this.code = code;
        this.expiryTimestamp = expiryTimestamp;
        this.validDay = validDay;
    }
}
