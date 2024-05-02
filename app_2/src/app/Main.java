package app;

import pack1.A;
//import pack2.B;
import pack3.C;

public class Main {
	public static void main(String[] args) {
		A a = new A(); // A안에 B를 넣어주면 같이 쓸수있다.
//		B b = new B();
		C c = new C();
		
		a.method();
//		b.method();
		c.method();
		
		a.getC().method();
	}
}
