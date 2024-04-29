package ch07.ex05.case01;

public class Basket<E> {
	private E e; // generic E 타입은 basket 클래스 블록 내부에서만 유효하다.
	
	public E get() { // return 타입으로 generic을 사용할 수 있다.
		return this.e;
	}
	
	public void set(E e) { // parameter로 generic으로 사용 할 수 있다.
		this.e = e;
	}
}

// generic : 뭐든 아무거나 담을수있는 타입을 말한다.
