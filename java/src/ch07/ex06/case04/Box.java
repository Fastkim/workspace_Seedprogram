package ch07.ex06.case04;

public class Box { 
	public <T> T getLastVal(T[] arr) {
		// generic method : 다양한 타입의 원소를 가지고있는 배열을 받겠다는 이유, // 과거에는 generic type 대신 object 타입을 사용
		return arr[arr.length - 1];
	}
}
