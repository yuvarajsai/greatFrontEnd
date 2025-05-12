import { useState, useCallback } from "react";

/**
 * Custom hook to manage a boolean state with utility functions.
 *
 * @param {boolean} [initialValue=false] - The initial boolean value. Defaults to false.
 * @returns {[boolean, () => void, () => void, () => void]} - An array containing:
 * - The current boolean value.
 * - A function to set the boolean value to true.
 * - A function to set the boolean value to false.
 * - A function to toggle the boolean value.
 */
const useBoolean = (
	initialValue: boolean = false
): [boolean, () => void, () => void, () => void] => {
	const [value, setValue] = useState<boolean>(initialValue);

	const setTrue = useCallback(() => {
		setValue(true);
	}, []);

	const setFalse = useCallback(() => {
		setValue(false);
	}, []);

	const toggle = useCallback(() => {
		setValue((currentValue) => !currentValue);
	}, []);

	return [value, setTrue, setFalse, toggle];
};

export default useBoolean;
