package ch07.ex01.case02;

public class Main {
	public static void main(String[] args) {
		C c = new C();
//		B b = c; // 상속의 개념에서는 다형성이 불가능, 부모가 자식의 타입으로 갈아입을순 없다.
//		A a = c; 
		Object o = c;
		
		c = (C)o;
//		c = (C)a;
//		c = (C)b;
		
//		b = (B)a;
	}
}
