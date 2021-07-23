let tree = {
    name: 1,
    children: {
        name: 2,
        children: {
            name: 3
        }
    },
};
// [{name, children: [{name: 2, children: [{ name: 3 }]}]}]

// const deeptree = (tree) => {
//     if(tree && !tree.children) {
//       return [tree]
//     }
//     let node = tree;
//     tree = [tree]
//     node.children = deeptree(node.children)

//     return tree
// }
// console.log(deeptree(tree));


const deeptree = (child) => {
    let result = []
    function dsf (child, list) {
        if (child && child.children) {
            list.push({
                name: child.name,
                children: [child.children]
            });
            dsf(child.children, list[0].children = [])
        } else {
            list.push({
                ...child
            }); 
        }
    }
    dsf(child, result) 
    return result;
}
console.log(JSON.stringify(deeptree(tree)));