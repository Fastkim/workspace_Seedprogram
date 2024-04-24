package ch06.ex02.case01.sub;

import ch06.ex02.case01.A;

public class C extends A {
	public void test() {
		int x = 0;
		
		//x = this.a;
		//x = this.b; 
		x = this.c; // 다른패키지이더라도 상속관계 자식이면 열려있는게 protected, 같은 패키지여도 열림.
		x = this.d;
		
		//this.m1();
		//this.m2();
		this.m3();
		this.m4();
	}
}
