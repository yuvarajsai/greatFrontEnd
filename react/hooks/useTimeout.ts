/*
Implement a useTimeout hook that invokes a callback function after a specified delay.

Note that the hooks can be called again with different values since the initial call:

Different callback: The pending timer should invoke the latest callback. If the timer has already expired, the callback is not executed and no new timer will be set.

Different delay: The previous timeout should be cancelled if the timer hasn't expired, a new timer is set with the new delay value.

The primary benefit of useTimeout is so that you don't have to manually clear call clearTimeout() if the component unmounts before the timer expires.

Arguments:
callback: () => void: A function to be called after the specified delay
delay: number | null: The delay in milliseconds before the invocation of the callback function. If null, the timeout is cleared

Returns:
Nothing.

https://www.greatfrontend.com/questions/javascript/use-timeout?framework=react

*/
import { useEffect, useRef } from "react";

export default function useTimeout(callback: () => void, delay: number | null) {
	const callbackRef = useRef(callback);

	// IMP: Based on the requirement, we should call the updated callback. This effect effect takes care of keeping the ref updated with latest callback.
	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		if (delay === null) return;

		const id = setTimeout(() => {
			callbackRef.current();
		}, delay);

		return () => clearTimeout(id);
	}, [delay]);
}
