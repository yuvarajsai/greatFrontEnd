/*

https://www.greatfrontend.com/interviews/study/blind75/questions/algo/binary-search-tree-kth-smallest

Given the root node of a binary search tree (BST) and an integer k, write a function to find and return the k-th smallest value in the BST. The smallest value in the tree is 1.

The binary tree is represented by a collection of TreeNodes, where each node has optional left and right child nodes, which are also TreeNodes.

A TreeNode has the following interface:

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
  
Input
root: TreeNode: Root node of the tree. Examples display a level-order traversal of the tree
k: number: A positive integer

Input: root = [7,3,10,1,5,8,12], k = 2
Output: 3
Explanation: In this BST, the second smallest value is 3.

*/

interface TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

export default function kthSmallestElementInABst(
	root: TreeNode | null,
	k: number
): number {
	throw "Not implemented!";
}
