const _ = require('lodash') // utility library

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems);