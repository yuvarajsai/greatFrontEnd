interface TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}
// Here the plan is to simply create a binary tree.
export const buildBinaryTreeFromArray = (
	arr: number[] | null
): TreeNode | null => {
	if (!arr || !arr.length) {
		return null;
	}
	const root: TreeNode = {
		val: arr[0],
		left: null,
		right: null,
	};
	// const queue;
	for (let i = 1; i < arr.length; i++) {
		const newNode: TreeNode = { val: arr[i], left: null, right: null };
		if (arr[i] < root.val) {
		}
	}
	return null;
};
