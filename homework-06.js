// 1: Parent, id --> create a tree
function buildTree1(nodes) {
  const tree = {};
  for (const node of nodes) {
    if (node.parent === null) {
      tree[node.id] = {};
    } else {
      addNode(tree, node);
    }
  }
  return tree;
}

function addNode(obj, node) {
  for (const key in obj) {
    if (+key === node.parent) {
      obj[key][node.id] = {};
      return;
    }
    addNode(obj[key], node);
  }
}

function buildTree2(nodes, tree = {}, curNode = nodes[0]) {
    tree[curNode.id] = {};

    for(const child of curNode.children) {
        tree[curNode.id][child] = {};
        const childNode = nodes.find((node) => node.id === child);
        buildTree2(nodes, tree[curNode.id], childNode);
    }
    return tree;
}