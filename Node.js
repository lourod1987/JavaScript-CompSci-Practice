class Node {
    constructor(data) {
      this.data = data;
      this.link = null;
    }
  
    setNextNode(node) {
      if (node === null || node instanceof Node) {
        this.link = node;
      } else {
        throw new Error('The value passed in is not an instance of Node or null.');
      }
    }

    getNextNode() {
        return this.link;
    }
  }
  
  const strawberryNode = new Node('Berry Tasty');
  const vanillaNode = new Node('Vanilla');
  const coconutNode = new Node('Coconuts for Coconut');
  
  vanillaNode.setNextNode(strawberryNode);
  strawberryNode.setNextNode(coconutNode);
  
  let currentNode = vanillaNode;
  
  function iterateNodes() {
      while(currentNode !== null) {
        console.log(currentNode.data);
        currentNode = currentNode.getNextNode();
      }
  }

iterateNodes();

module.exports = Node;