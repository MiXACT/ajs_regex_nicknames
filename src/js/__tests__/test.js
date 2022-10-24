import Validator from '../app';

test('testing Nickname', () => {
	function checkNickname(nickname) {
		const tester = new Validator(nickname);
		return tester.validateUsername();
	}

	expect(checkNickname('_notGoodName')).toBeFalsy();
	expect(checkNickname('notGoodName-')).toBeFalsy();
	expect(checkNickname('1_more_Bad_Name_1')).toBeFalsy();
	expect(checkNickname('not_Good_1111_Name')).toBeFalsy();
	expect(checkNickname('ыUSERы')).toBeFalsy();

	expect(checkNickname('Good_111_Name')).toBeTruthy();
	expect(checkNickname('GoodName')).toBeTruthy();
});
