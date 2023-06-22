/*
  Graphs: Abstract data type representing a collection of nodes (vertices) and edges.
*/

// A simple representation of a directed graph in JavaScript using an adjacency list (Object)
const directedGraph = {
	A: ["B", "C"], // A points to B and C
	B: ["C"], // B points to C
	C: [], // C points to no one
};

// A simple representation of an undirected graph using an adjacency list (Object)
const undirectedGraph = {
	A: ["B", "C"], // A is connected to B and C
	B: ["A", "C"], // B is connected to A and C
	C: ["A", "B"], // C is connected to A and B
};

// Weighted graph: Edges have weights (Cost or Distance)
const weightedGraph = {
	A: [
		{ node: "B", weight: 1 },
		{ node: "C", weight: 2 },
	], // A is connected to B and C with weights 1 and 2 respectively
	B: [
		{ node: "A", weight: 1 },
		{ node: "C", weight: 3 },
	], // B is connected to A and C with weights 1 and 3 respectively
	C: [
		{ node: "A", weight: 2 },
		{ node: "B", weight: 3 },
	], // C is connected to A and B with weights 2 and 3 respectively
};

/*
    Cyclic vs Acyclic Graphs
    - In cyclic graphs, there are cycles. Traversal can lead to infinite loops if not properly tracked.
    - In acyclic graphs, there are no cycles.
  */

// Representation of a graph using Sets
const setGraph = {
	A: new Set(["B", "C"]), // A points to B and C
	B: new Set(["C"]), // B points to C
	C: new Set([]), // C points to no one
};

/*
    This implementation makes checking if two nodes are neighbors O(1) instead of O(n)
    Use it if your graph is large and you frequently need to check if two nodes are neighbors
  */
