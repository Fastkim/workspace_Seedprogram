package ch07.ex01.case01;

public class Main {
	public static void main(String[] args) {
		C c = new C();
		B b = c; // Promotion : 자식타입이 부모타입으로 casting 되었다.
		A a = c; // Promotion
		
		c = (C)a;
		c = (C)b;
		
		b = (B)a;
		
//		String s = (String)c; // 내가 갖고있는 타입중에 하나로 casting이 되는것이다.
	}
}

// 다형성(polymorphism) : 자식타입이 부모타입으로 casting 하는것을 말한다. 타입의 다변화