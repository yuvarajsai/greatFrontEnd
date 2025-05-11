/*

Implement a useWindowSize hook that returns the current height and width of the window (window.innerHeight and window.innerWidth). It should re-render the component if the screen properties changes.

Arguments:
Nothing.

Returns:
The hook returns an object with the following properties:

height: number: Current height of the screen
width: number: Current width of the screen

https://www.greatfrontend.com/questions/javascript/use-window-size?framework=react

*/

import { useEffect, useState } from "react";

interface WindowSize {
	height: number;
	width: number;
}

export default function useWindowSize(): WindowSize {
	const [windowSize, setWindowSize] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});

	useEffect(() => {
		const callback = () => {
			setWindowSize({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		};
		// IMP: event listener for window size.
		window.addEventListener("resize", callback);

		return () => {
			window.removeEventListener("resize", callback);
		};
	}, []);

	return windowSize;
}
