import { useState, useCallback } from "react";
import type { Dispatch, SetStateAction } from "react";

/**
 * useArray
 *
 * https://www.greatfrontend.com/questions/javascript/use-array?framework=react
 */
interface UseArrayReturn<T> {
	array: T[];
	set: Dispatch<SetStateAction<T[]>>;
	push: (element: T) => void;
	filter: (callback: (value: T, index: number, array: T[]) => boolean) => void;
	update: (index: number, newElement: T) => void;
	remove: (index: number) => void;
	clear: () => void;
}

export default function useArray<T>(defaultValue: T[]): UseArrayReturn<T> {
	const [array, setArray] = useState(defaultValue);
	const push = useCallback(
		(newVal: T) => {
			setArray((items) => [...items, newVal]);
		},
		[setArray]
	);
	const remove = useCallback(
		(index: number) => {
			setArray((items) => items.filter((_, eleIndex) => index !== eleIndex));
		},
		[setArray]
	);
	const filter = useCallback(
		(callback: (value: T, index: number, array: T[]) => boolean) => {
			setArray((items) => items.filter(callback));
		},
		[setArray]
	);
	const update = useCallback(
		(index: number, newItem: T) => {
			setArray((items) => {
				const mutatedArray = [...items];
				mutatedArray[index] = newItem;
				return mutatedArray;
			});
		},
		[setArray]
	);
	const clear = useCallback(() => setArray([]), [setArray]);
	return {
		array,
		set: setArray,
		push,
		remove,
		filter,
		update,
		clear,
	};
}
