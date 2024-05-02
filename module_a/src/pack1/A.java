package pack1;

import pack2.B;
import pack3.C;

public class A {
	public void method() {
		System.out.println("A");
		new B().method();
	}
	
	public C getC() {
		return new C();
	}
}
