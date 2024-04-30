package ch07.ex06.case03;

public class Bowl<T> { // generic class, T타입은 Bowl 클래스 내에서만 유효
	private T val;
	
	public void setVal(T val) {
		this.val = val;
	}
	
	public T getVal() {
		return this.val;
	}
}
