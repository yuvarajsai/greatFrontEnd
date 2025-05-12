/*

Array.prototype.reduce is a way of "reducing" elements in an array by calling a "reducer" callback function on each element of the array in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

Implement Array.prototype.reduce. To avoid overwriting the actual Array.prototype.reduce which is being used by the autograder, we shall instead implement it as Array.prototype.myReduce.

There are some nuances regarding how the Array.prototype.reduce function works and what values are being passed to the reducer callback. You are recommended to read the specification for Array.prototype.reduce on MDN Docs before attempting.

*/

interface Array<T> {
	myReduce<U>(
		callbackFn: (
			previousValue: U,
			currentValue: T,
			currentIndex: number,
			array: T[]
		) => U,
		initialValue?: U
	): U;
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
	// if the initial value is not defined and array is empty
	if (initialValue === undefined && this.length === 0) {
		throw new Error(" no initial value provided and array is empty");
	}

	// type safe
	let computedValue = initialValue ?? this[0];

	// IMP: Array can be accessed using this.
	this.forEach((ele, index) => {
		// edge case where initial value is not defined, the set the first value of the array
		if (initialValue === undefined && index === 0) {
			computedValue = this[0];
		} else {
			computedValue = callbackFn(computedValue, ele, index, this);
		}
	});
	return computedValue;
};
