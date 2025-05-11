/*
Implement a useInputControl hook that manages a controlled input value and tracks additional form input states like:

Property	Tracks	When it becomes true	When it becomes false
Touched	If input has been focused then blurred	When the user blurs the input (focus -> blur)	Never resets automatically
Dirty	If value has been changed before	When the user types something Never resets automatically	
Different	If value is different from the original	When the value is different from the initial	When the value is same as the initial
The handleX functions returned by the hook are meant to be called on the relevant event handlers of <input> in order for the hook to work as intended.

Arguments
initialValue: string: The initial value of the input

Returns
The hook returns an object with the following properties:

- value: string: The current value of the input
- dirty: boolean: Whether the user has been modified at least once
- touched: boolean: Whether the input was focused and blurred
- different: boolean: Whether the value is different from the initial value
- handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void: A function that updates the value of the input
- handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void: A function that to be called when the input is blurred
- reset: () => void: A function to reset to the initial value as well as the value of all states
*/

import {
	ChangeEvent,
	FocusEvent,
	useState,
	useMemo,
	useCallback,
	useRef,
} from "react";

interface UseInputValueReturn {
	value: string;
	dirty: boolean;
	touched: boolean;
	different: boolean;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	handleBlur: (event: FocusEvent<HTMLInputElement>) => void;
	reset: () => void;
}

export default function useInputControl(
	initialValue: string
): UseInputValueReturn {
	const initialValueRef = useRef(initialValue);
	const [value, setValue] = useState(initialValueRef.current);
	const [dirty, setDirty] = useState(false);
	const [touched, setTouched] = useState(false);

	const different = useMemo(
		() => value !== initialValueRef.current,
		[value, initialValueRef]
	);

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setDirty(true);
		setValue(event.target.value);
	}, []);

	const handleBlur = useCallback(() => {
		setTouched(true);
	}, []);

	const reset = useCallback(() => {
		setValue(initialValueRef.current);
		setDirty(false);
		setTouched(false);
	}, [initialValueRef]);

	return {
		value,
		dirty,
		touched,
		different,
		handleChange,
		handleBlur,
		reset,
	};
}
