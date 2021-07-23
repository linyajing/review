function namespace(oNamespace, sPackage) {
    var pointer = oNamespace;
    function fn(oNamespace, sPackage) {
        let attrList = sPackage.split('.');
        if (attrList[0] === '') return;
        let key = attrList.shift();
        if (typeof oNamespace[key] !== 'object') {
            oNamespace[key] = {};
        }
        fn(oNamespace[key], attrList.join('.'));   
    }
    fn(oNamespace, sPackage);
    return pointer;  
}
console.log(namespace({}, 'a.b.c.d.e.f.g'));