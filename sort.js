
/** 
 * 1. 冒泡排序 复杂度O(n^2)
 * 冒泡排序也成为沉淀排序(sinking sort)
 * 冒泡排序得名于其排序方式，它遍历整个数组，将数组的每一项与其后一项进行对比，
 * 如果不符合要求就交换位置，一共遍历n轮，n为数组的长度。n轮之后，数组得以完全排序。
 * 整个过程符合要求的数组项就像气泡从水底冒到水面一样泡到数组末端，所以叫做冒泡排序。
 * 冒泡排序是最简单的排序方法，容易理解、实现简单，但是冒泡排序是效率最低的排序算法，
 * 由于算法嵌套了两轮循环（将数组遍历了n遍），所以时间复杂度为O(n^2)。
 * 最好的情况下，给出一个已经排序的数组进行冒泡排序，时间复杂度也为O(n)。
*/
const list = [4,3,5,6,0,2,3,1,0];
function bubbleSort(arr) {
    let len = arr.length;
    // 遍历数组len次，以确保数组被完全排序。
    for(let i = 0; i < len; i++) {
        // 遍历数组的前len-i项，忽略后面的i项（已排序部分）。
        for(let j = i + 1; j < len; j++) {
            // 将每一项与后一项进行对比，不符合要求的就换位。
            if(arr[i] > arr[j]) {
                let a = arr[i];
                arr[i] = arr[j];
                arr[j] = a;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort(list));


/** 
 * 2. 选择排序 O(n^2)
 * 选择排序是一种原址比较排序法，大致思路：
 * 找到数组中的最小（大）值，并将其放到第一位，然后找到第二小的值放到第二位……以此类推。
 * JavaScript实现（从小到大排序）：
*/
function selectionSort(arr) {
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        let min = i;
        for(let j = i + 1; j < len; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }
    return arr;
}
// console.log(selectionSort(list));


/** 
 * 
 * 3. 插入排序: 是最接近生活的排序，因为我们打牌时就差不多是采用的这种排序方法。
 * 该方法从数组的第二项开始遍历数组的n-1项（n为数组长度）
 * 遍历过程中对于当前项的左边数组项，依次从右到左进行对比，
 * 如果左边选项大于（或小于）当前项，则左边选项向右移动，
 * 然后继续对比前一项，直到找到不大于（不小于）自身的选项为止，
 * 对于所有大于当前项的选项，都在原来位置的基础上向右移动了一项
 * O(n^2)
*/
// 对于如下数组
// var arr = [2,1,3,5,4,3];
// 从第二项（即arr[1]）开始遍历，
// 第一轮：
// a[0] >= 1为true，a[0]右移，
// arr = [2,2,3,5,4,3];
// 然后1赋给a[0]，
// arr = [1,2,3,5,4,3];
// 然后第二轮：
// a[1] >= 3不成立，该轮遍历结束。
// 第三轮;
// a[2] >= 5不成立，该轮遍历结束。
// 第四轮：
// a[3] >= 4为true，a[3]右移，
// arr = [1,2,3,5,5,3];
// a[2] >= 4不成立，将4赋给a[3]，然后结束该轮遍历。
// arr = [1,2,3,4,5,3];
// a[4] >= 3成立，a[4]右移一位，
// arr = [1,2,3,4,5,5];
// arr[3] >= 3成立，arr[3]右移一位，
// arr = [1,2,3,4,4,5];
// arr[2] >= 3成立，arr[2]右移一位，
// arr = [1,2,3,3,4,5];
// arr[1] >= 3不成立，将3赋给a[2]，结束该轮。
// arr = [1,2,3,3,4,5];
// 遍历完成，排序结束。

function insertionSort(arr) {
    //console.time('InsertionSort');
    let len = arr.length;
    for(let i=1; i<len; i++) {
        let j = i;
        let tmp = arr[i];
        while(j > 0 && arr[j-1] > tmp) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = tmp;
    }
    //console.timeEnd('InsertionSort');
    return arr;
}
// console.log(insertionSort(list));


/** 
 * 4. 归并排序
*/
function mergeSort(arr) {
    //console.time('MergeSort');
    //let count = 0;
    console.log(main(arr));
    //console.timeEnd('MergeSort');
    //return count;
    // 主函数。
    function main(arr) {
        // 记得添加判断，防止无穷递归导致callstack溢出，此外也是将数组进行分解的终止条件。
        if(arr.length === 1) return arr;
        // 从中间开始分解，并构造左边数组和右边数组。
        let mid = Math.floor(arr.length/2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        // 开始递归调用。
        return merge(arguments.callee(left), arguments.callee(right));
    }
    // 数组的合并函数，left是左边的有序数组，right是右边的有序数组。
    function merge(left, right) {
        // il是左边数组的一个指针，rl是右边数组的一个指针。
        let il = 0,
            rl = 0,
            result = [];
        // 同时遍历左右两个数组，直到有一个指针超出范围。
        while(il < left.length && rl < right.length) {
            //count++;
            // 左边数组的当前项如果小于右边数组的当前项，那么将左边数组的当前项推入result，反之亦然，同时将推入过的指针右移。
            if(left[il] < right[rl]) {
                result.push(left[il++]);
            }
            else {
                result.push(right[rl++]);
            }
        }
        // 记得要将未读完的数组的多余部分读到result。
        return result.concat(left.slice(il)).concat(right.slice(rl));
    }
}

/** 
 * 5.快速排序
 * （1）首先，选取数组的中间项作为参考点pivot。
 *（2）创建左右两个指针left和right，left指向数组的第一项，right指向最后一项，然后移动左指针，直到其值不小于pivot，然后移动右指针，直到其值不大于pivot。
 *（3）如果left仍然不大于right，交换左右指针的值（指针不交换），然后左指针右移，右指针左移，继续循环直到left大于right才结束，返回left指针的值。
 *（4）根据上一轮分解的结果（left的值），切割数组得到left和right两个数组，然后分别再分解。
 *（5）重复以上过程，直到数组长度为1才结束分解。
 * O(nlogn)
*/
function quickSort1(arr) {
    // 两个指针，一个指向第一个元素，一个指向最后一个元素
    let left = 0, right = arr.length - 1;
    main(arr, left, right);
    return arr;

    function main(arr, left, right) {
        // 递归结束的条件，直到数组只包含一个元素。
        if(arr.length === 1) return;
        // 获取left指针，准备下一轮分解。
        let index = partition(arr, left, right);
        // 继续分解左边数组
        if(left < index - 1) {
            main(arr, left, index - 1);
        }
        // 分解右边数组
        if(index < right) {
            main(arr, index, right);
        }
    }
    // 数组分解函数。
    function partition(arr, left, right) {
        // 选取中间项为参考点。
        let pivot = arr[Math.floor((left + right) / 2)];
        // 循环直到left > right。
        while(left <= right) {
            // 持续右移左指针直到其值不小于pivot。
            while(arr[left] < pivot) {
                left++;
            }
            // 持续左移右指针直到其值不大于pivot。
            while(arr[right] > pivot) {
                right--;
            }
            // 此时左指针的值不小于pivot，右指针的值不大于pivot。
            // 如果left仍然不大于right。
            if(left <= right) {
                // 交换两者的值，使得不大于pivot的值在其左侧，不小于pivot的值在其右侧。
                [arr[left], arr[right]] = [arr[right], arr[left]];
                // 左指针右移，右指针左移准备开始下一轮，防止arr[left]和arr[right]都等于pivot然后导致死循环。
                left++;
                right--;
            }
        }
        // 返回左指针作为下一轮分解的依据。
        return left;
    }
}
function quickSort2 (arr) {
    if (arr.length <= 1) {
      return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort2(left).concat([pivot], quickSort2(right));
};


/** 
 * 6.堆排序
*/
function heapSort(arr) {
    //console.time('HeapSort');
    buildHeap(arr);
    for(let i=arr.length-1; i>0; i--) {
        // 从最右侧的叶子节点开始，依次与根节点的值交换。
        [arr[i], arr[0]] = [arr[0], arr[i]];
        // 每次交换之后都要重新构建堆结构，记得传入i限制范围，防止已经交换的值仍然被重新构建。
        heapify(arr, i, 0);
    }
    //console.timeEnd('HeapSort');
    return arr;
    function buildHeap(arr) {
        // 可以观察到中间下标对应最右边叶子节点的父节点。
        let mid = Math.floor(arr.length / 2);
        for(let i=mid; i>=0; i--) {
            // 将整个数组构建成堆结构以便初始化。
            heapify(arr, arr.length, i);
        }
        return arr;
    }
    // 从i节点开始下标在heapSize内进行堆结构构建的函数。
    function heapify(arr, heapSize, i) {
        // 左子节点下标。
        let left = 2 * i + 1,
            // 右子节点下标。
            right = 2 * i + 2,
            // 假设当前父节点满足要求（比子节点都大）。
            largest = i;
        // 如果左子节点在heapSize内，并且值大于其父节点，那么left赋给largest。
        if(left < heapSize && arr[left] > arr[largest]) {
            largest = left;
        }
        // 如果右子节点在heapSize内，并且值大于其父节点，那么right赋给largest。
        if(right < heapSize && arr[right] > arr[largest]) {
            largest = right;
        }
        if(largest !== i) {
            // 如果largest被修改了，那么交换两者的值使得构造成一个合格的堆结构。
            [arr[largest], arr[i]] = [arr[i], arr[largest]];
            // 递归调用自身，将节点i所有的子节点都构建成堆结构。
            arguments.callee(arr, heapSize, largest);
        }
        return arr;
    }
}


