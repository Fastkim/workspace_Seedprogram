let a = 1 // global scope
// let a

{
    console.log(a)
}

{   // local scope
    let a = 2 // 로컬에 정의되지 않는다면 global scope를 사용.
    // let a 로컬내에서 중복이므로 불가능
    console.log(a) // 로컬 a를 출력, 면전우대
} // 블록이 닫힘, 객체가 죽는다는건 자신이 사용했던 메모리공간을 반납하고 사라지는것.

console.log(a)