package ch06.ex02.case01.sub;

import ch06.ex02.case01.A;

public class B {
	// 다른패키지에서 상속을 하지 않았을 경우의 접근범위
	public void test() {
		A a = new A();
		
		int x = 0;
		//x = a.a;
		//x = a.b; // 다른 패키지일경우 default 사용 불가
		//x = a.c; // 다른 패키지일경우 protected 사용 불가
		x = a.d; // public만 가능
		
//		a.m1();
//		a.m2();
//		a.m3();
		a.m4();
	}
}
