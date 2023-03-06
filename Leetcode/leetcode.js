/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	result = 0;
	s.split('').forEach((num, index) => {
		if (map[num] < map[s[index + 1]]) {
			result -= map[num];
		} else {
			result += map[num];
		}
	});

	return result;
};
