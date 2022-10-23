export default class Validator {
	constructor(nickname) {
		this.nickname = nickname;
	}

	validateUsername() {
		const testNick = /^[^_^0-9^-][\w-]*[^_^0-9^-]$/.test(this.nickname);
		if (testNick) {
			return !/[\d]{4,}/.test(this.nickname);
		}
		return false;
	}
}
