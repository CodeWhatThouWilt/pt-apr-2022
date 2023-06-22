preOrderTraversal(currentNode = this.root) {
    // root, left, right
    if (currentNode) {
        console.log(currentNode.val); // Do the thing (visitation)
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);
    }
}

inOrderTraversal(currentNode = this.root) {
    // left, root, right
    if (currentNode) {
        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val); // Do the thing (visitation)
        this.inOrderTraversal(currentNode.right);
    }
}

postOrderTraversal(currentNode = this.root) {
    // left, right, root
    if (currentNode) {
        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val); // Do the thing (visitation)
    }
}

// Breadth First Traversal - Iterative
breadthFirstTraversal() {
    const queue = [this.root];

    while (queue.length) {
        const currNode = queue.shift();

        // Do the thing (visitation)
        console.log(currNode.val);

        if (currNode.left) {
            queue.push(currNode.left);
        }

        if (currNode.right) {
            queue.push(currNode.right);
        }
    }
}

// Depth First Traversal - Iterative
depthFirstTraversal() {
    const stack = [this.root];

    while (stack.length) {
        const currNode = stack.pop();

        // Do the thing (visitation)
        console.log(currNode.val);

        if (currNode.left) {
            stack.push(currNode.left);
        }

        if (currNode.right) {
            stack.push(currNode.right);
        }
    }
}