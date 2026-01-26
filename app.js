const _=require('loadash')

const items = [1, [2, [3, [4]]]]
const newitems = _.flattenDeep (items)
console.log (newitems)