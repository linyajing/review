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
    dsf(child, result); 
    return result;
}
console.log(JSON.stringify(deeptree(tree)));

// json转数组

// 数组转json
let originArray = [{
    name: 1,
    children: [{
        name: 2,
        children: [{
            name: 3
        }]
    }]
}];
function deepArray (arr) {
    let result = {};
    function dsf (list, node) {
        if (list && list[0] && list[0].children) {
            node.name = list[0].name,
            node.children = list[0].children;
            console.log(JSON.stringify(node), JSON.stringify(result));
            deepArray(list[0].children, node.children = {});
        } else {
            node.name = list[0].name;
            console.log(JSON.stringify(node), JSON.stringify(result));
        }
    }
    dsf(arr, result);
    return result;
}
console.log(JSON.stringify(deepArray(originArray)));