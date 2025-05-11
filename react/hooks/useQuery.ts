import { DependencyList, useState, useEffect } from "react";

type AsyncState<T> =
	| { status: "loading" }
	| { status: "success"; data: T }
	| { status: "error"; error: Error };

export default function useQuery<T>(
	fn: () => Promise<T>,
	deps: DependencyList = []
): AsyncState<T> {
	const [status, setStatus] = useState<AsyncState<T>>({ status: "loading" });

	useEffect(() => {
		// IMP: we should have a variable which handled the race conditions by ignoring the resolved and rejected values.
		let cancelled = false;

		// IMP: It is important to reset the state to loading when promise is about to start.
		setStatus({ status: "loading" });

		fn()
			.then((data) => {
				if (cancelled) return;
				setStatus({
					status: "success",
					data,
				});
			})
			.catch((error) => {
				if (cancelled) return;
				setStatus({
					status: "error",
					error,
				});
			});

		return () => {
			cancelled = true;
		};
	}, deps); // IMP: since deps itself is a dependency array,no need to add a over an array like [deps]

	return status;
}
