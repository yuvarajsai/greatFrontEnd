// https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-find-missing-number-in-sequence

export default function findMissingNumberInSequence(numbers: number[]): number {
	const highestNumber = numbers.length;
	const countOfAllNumbers = (highestNumber * (highestNumber + 1)) / 2;
	const currentSum = numbers.reduce((acc, curr) => acc + curr, 0);
	return countOfAllNumbers - currentSum;
}
