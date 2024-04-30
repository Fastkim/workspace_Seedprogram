package ch07.ex06.case05;

public class Cabinet<T extends A> { // A이하.. generic type의 범위 설정 // new할때 T 결정
	public T getLastVal(T[] arr) {
		return arr[arr.length - 1];
	}
	
	public <S extends C> S getFinalVal(S[] arr) { // call 할때 S결정
		return arr[arr.length - 1];
	}
}
