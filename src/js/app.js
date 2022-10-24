export default class Validator {
	constructor(nickname) {
		this.nickname = nickname;
	}

	validateUsername() {
		const testNick = /^[A-Za-z][\w-]*[A-Za-z]$/.test(this.nickname);
		if (testNick) {
			return !/[\d]{4,}/.test(this.nickname);
		}
		return false;
	}
}
