interface TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

const createNewNode = (val: number): TreeNode => {
	const node: TreeNode = { val, left: null, right: null };
	return node;
};

// Here the plan is to simply create a binary tree.
/**
 * Builds a binary tree from a given array representation.
 *
 * The input array represents a binary tree in level-order traversal,
 * where each element corresponds to a tree node's value. `null` values
 * indicate the absence of a node at that position.
 *
 * @param arr - An array of numbers or nulls representing the binary tree in level-order.
 * @returns The root node of the constructed binary tree, or `null` if the array is empty or the first element is `null`.
 *
 * @example
 * ```typescript
 * // Input: [1, 2, 3, null, 4]
 * // Output: Binary tree:
 * //     1
 * //    / \
 * //   2   3
 * //    \
 * //     4
 * const root = buildBinaryTreeFromArray([1, 2, 3, null, 4]);
 * ```
 */

export const buildBinaryTreeFromArray = (
	arr: (number | null)[]
): TreeNode | null => {
	// if the array is empty or the first node itself is null, return null -> no tree.
	if (!arr.length || arr[0] === null) {
		return null;
	}
	// create a root node.
	const root: TreeNode = createNewNode(arr[0]);
	// Mainatain a queue to know where the new node will be adding to
	const queue: TreeNode[] = [root];
	let i = 1;
	while (i < arr.length) {
		// remove the first node from queue and set it to current
		const current = queue.shift();
		if (!current) continue;

		// check if the we are not accessing out of bunds memory and if the value is not null.
		if (i < arr.length && arr[i] !== null) {
			current.left = createNewNode(arr[i] as number);
			// push the new node to queue
			queue.push(current.left);
		}
		i++;

		if (i < arr.length && arr[i] !== null) {
			// push the node to queue.
			current.right = createNewNode(arr[i] as number);
			queue.push(current.right);
		}
		i++;
	}
	return root;
};
