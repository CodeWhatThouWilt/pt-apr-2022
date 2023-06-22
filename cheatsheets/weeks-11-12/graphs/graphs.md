# Key Points

## Graphs

- Abstract data type representing a collection of nodes and edges.
- Nodes represent values and can have multiple edges pointing to other nodes.
- Graphs represent relationships between objects.

## Types of Graphs

- **Directed:** Relationships are one-way. Edge direction indicated by arrows.
- **Undirected:** Relationships are mutual. No arrow indicators on edges.
- **Cyclic:** Graphs that have cycles. Traversal can lead to infinite loops if not tracked properly.
- **Acyclic:** Graphs without cycles.
- **Weighted:** Edges have weight to them, like cost or distance.
- **Unweighted:** Every edge has a weight of 1.

## Graph Properties

- Graphs can be represented with adjacency lists in code.
- Adjacency list: Implemented as an object with a key for each node, values being the list of nodes it points to.
- Graphs can be represented in code using Sets or Arrays. Checking neighbor nodes is O(1) in Set and O(n) in Array.

## Graph Terminologies

- **Vertex:** Node in the graph.
- **Directed edge:** One-way connection from one vertex to another.
- **Undirected edge:** Two-way connection between two vertices.
- **Bidirectional edge:** Two-way connection between vertices that can be traversed in either direction.
- **Edge weight:** Cost of traversing an edge.
- **Cyclic/acyclic:** Graphs with/without cycles.
- **Adjacency list:** Way of representing a graph in code with an object.
