package app;

import pack1.A;
import pack2.B;
// build path : compiler가 library를 찾는위치

public class Main {
	public static void main(String[] args) {
		A a = new A();
		B b = new B();
		
		a.method();
		b.method();
	}
}
