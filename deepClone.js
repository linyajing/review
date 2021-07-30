/**
 * @Desc: 实现js数据拷贝
 * @Auhtor: linyajing02@meituan.com
 * @Date: 2021-05-19 09:52:25
 * 引导思想：递归遍历
 */

function deepClone (target) {
    let result;
    if (typeof target === 'object') {
        if (Array.isArray(result)) {
            result = [];
            for (let i in target) {
                result.push(deepClone(target[i]));
            }
        } else if (target = null) {
            result = null;
        } else if (target.constructor === RegExp) {
            result = target;
        } else {
            result = {};
            for(let i in target) {
                result[i] = deepClone(target[i])
            }
        }
    } else {
        result = target;
    }
    return result;
}
