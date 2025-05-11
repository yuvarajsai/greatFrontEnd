import { useEffect, useRef, useState, useMemo } from "react";

export default function useDebounce<T>(value: T, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	const timeoutId = useRef<number | null>(null);

	const clearTimer = () => {
		if (timeoutId.current !== null) {
			clearTimeout(timeoutId.current);
		}
	};

	useEffect(() => {
		// clear already running timers
		clearTimer();

		// start a new timer
		timeoutId.current = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimer();
		};
	}, [value, delay]);
	return useMemo(() => debouncedValue, [debouncedValue]); // memoize the debounced value
}
