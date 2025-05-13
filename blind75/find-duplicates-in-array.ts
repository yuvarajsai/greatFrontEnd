/*

Find Duplicates in Array

Given an array of integers numbers, determine whether the array contains any duplicate values. A duplicate is defined as any number that appears more than once in the array.

https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-find-duplicate

*/

export default function findDuplicates(numbers: number[]): boolean {
	// const set1 = new Set(numbers);
	// return set1.size !== numbers.length;
	const numbersObj: Record<number, true> = {};
	for (let i = 0; i < numbers.length; i++) {
		const num = numbers[i];
		if (numbersObj[num]) {
			return true; // early exit when duplicate found
		}
		numbersObj[num] = true;
	}

	return false; // no duplicates found
}
