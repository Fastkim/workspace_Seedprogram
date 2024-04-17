import {greet, add} from './1.named.mjs'
import * as named from './1.named.mjs'
import div from './2.default.mjs'

console.log(greet, add)
console.log(named.greet, named.add(1,2))

console.log(div(4,2))