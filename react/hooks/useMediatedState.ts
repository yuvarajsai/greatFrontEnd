/*
Implement a useMediatedState hook that is similar to useState, but supports a mediator function that runs on each state set. This mediator function can be used to transform or intercept state updates.

Arguments
mediator: A function that receives the new state and returns the transformed state. This function can have two forms:

(newState: T) => T that receives 1 argument: the new state dispatched by setState, and returns the final state, or
(newState: T, dispatch) => void that receives 2 arguments: the new state dispatched by setState, and a function dispatch that will actually run the state update. It returns nothing.
initialState: The initial state value

Note: mediator should stay the same, even if it's changed into a new and/or different function.

Returns
The hook returns an array with two elements:

The current state
The function setState to update the state. It must be the same as the second element of the array returned by useState
Essentially, the hook returns the same values as useState.

https://www.greatfrontend.com/questions/javascript/use-mediated-state?framework=react

*/

// import { Dispatch, SetStateAction, useState, useCallback } from "react";

// interface StateMediator<S = unknown> {
// 	(newState: S): S;
// 	(newState: S, dispatch: Dispatch<SetStateAction<S>>): void;
// }

// export default function useMediatedState<S = unknown>(
// 	mediator: StateMediator<S>,
// 	initialState: S
// ): [S, Dispatch<SetStateAction<S>>] {
// 	const [state, setState] = useState(initialState);

// 	const mediatedSetter = useCallback((nextState: S) => {
// 		if (mediator.length === 1) {
// 			setState(mediator(nextState));
// 		} else {
// 			(
// 				mediator as (
// 					nextState: S,
// 					setState: Dispatch<SetStateAction<S>>
// 				) => void
// 			)(nextState, setState);
// 		}
// 	}, []);

// 	return [state, mediatedSetter];
// }
