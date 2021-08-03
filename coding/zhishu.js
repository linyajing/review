function getIndex () {
    let i = 1;
    function aa () {
        i++;
        while (!isIndex(i)) {
          i++; 
        }
        return i;
    }
    return aa;
}

function isIndex (i) {
    let j = i - 1;
    while ( j !== 1) {
        if (i % j !== 0) {
            j--;
        } else {
            return false;
        }
    }
    return true;
}
let a = getIndex();
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());