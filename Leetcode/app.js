//Two sum

var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] == target) {
				return [i, j];
			}
		}
	}
};

// Palindrome number

var isPalindrome = function (x) {
	const isNegatif = x < 0 ? true : false;
	if (isNegatif) {
		return false;
	} else {
		let palindrom = Number(x.toString().split("").reverse().join(""));
		if (x === palindrom) return true;
		else return false;
	}
};
