/*
Implement a useSet hook that manages a JavaScript Set of items with additional utility methods.

It is more convenient to use useSet over plain useState because in the latter case, you would always have to create a new Set, mutate it, then set state to use the new set, which can be quite cumbersome.

The hook should work generically with items of any types.

Arguments
initialState: The initial Set of items

Returns
The hook returns an object with the following properties:

set: The current set of items
add: (item) => void: A function that adds item to the set
remove: (item) => void: A function that removes item from the set
toggle: (item) => void: A function that toggles the presence of item in the set
reset: () => void: A function that resets the set to initialState
clear: () => void: A function that removes all items in the set

https://www.greatfrontend.com/questions/javascript/use-set?framework=react

*/

import { useState, useMemo, useCallback, useRef } from "react";
export interface UseSetReturn<T> {
	set: Readonly<Set<T>>;
	add: (key: T) => void;
	remove: (key: T) => void;
	toggle: (key: T) => void;
	reset: () => void;
	clear: () => void;
}

export default function useSet<T>(
	initialState = new Set<T>()
): UseSetReturn<T> {
	const initialStateRef = useRef(initialState);

	// IMP: initialize the set state with new Set()
	const [setData, setSetData] = useState(new Set(initialStateRef.current));

	const set = useMemo(() => setData, [setData]);
	const add = useCallback(
		(key: T) => {
			setSetData((prev) => {
				// IMP: Do NOT directly mutate prev. Instead, create a new set from prev and mutate it.
				const next = new Set(prev);
				next.add(key);
				return next;
			});
		},
		[setSetData]
	);

	const remove = useCallback(
		(key: T) => {
			setSetData((prev) => {
				// IMP: Do NOT directly mutate prev. Instead, create a new set from prev and mutate it.
				const next = new Set(prev);
				next.delete(key);
				return next;
			});
		},
		[setSetData]
	);

	const toggle = useCallback(
		(key: T) => {
			setSetData((prev) => {
				const next = new Set(prev);
				if (next.has(key)) {
					next.delete(key);
				} else {
					next.add(key);
				}
				return next;
			});
		},
		[setData]
	);

	const reset = useCallback(() => {
		// ERR: For some reason this is failing below testcase.
		/*
    test('reset must reset to the initial set object', () => {
      const initialValue = new Set([1, 2, 3]);

      const { result } = renderHook(() => useSet(initialValue));

      act(() => {
        result.current.reset();
      });

      expect(result.current.set).toBe(initialValue);
    });
    */

		setSetData(() => new Set(initialStateRef.current));
	}, [setSetData, initialStateRef]);

	const clear = useCallback(() => {
		setSetData(new Set());
	}, [setSetData]);

	return {
		set,
		add,
		remove,
		toggle,
		reset,
		clear,
	};
}
