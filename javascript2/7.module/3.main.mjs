import {greet, add} from './1.named.mjs' // 여러개의 멤버 가져오기
import * as named from './1.named.mjs' // 모듈 전체 가져오기
import plu from './2.default.mjs' // default값만 export하므로 어떤 variable 이름이더라도 default값을 사용

console.log(greet, add)
console.log(named.greet, named.add(1,2))

console.log(plu(4,2))