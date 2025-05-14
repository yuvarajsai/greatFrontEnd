/*

https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-balanced-brackets

*/

export default function isBalancedBrackets(str: string): boolean {
	const OPEN_BRACES = ["{", "(", "["];
	const pairs: Record<string, string> = {
		"{": "}",
		"(": ")",
		"[": "]",
	};
	const accumulator: string[] = [];
	const length = str.length;
	for (let i = 0; i < length; i++) {
		if (OPEN_BRACES.includes(str[i])) {
			accumulator.push(str[i]);
		} else {
			if (accumulator.length === 0) {
				return false;
			}
			if (pairs[accumulator[accumulator.length - 1]] === str[i]) {
				accumulator.pop();
			}
		}
	}
	return !accumulator.length;
}
