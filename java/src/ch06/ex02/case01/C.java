package ch06.ex02.case01;

public class C extends A {
	public void test() {
		int x = 0;
		
		//x = this.a; // private는 상속도 무효화한다.
		x = this.b; // default
		x = this.c; // protected
		x = this.d; // public
		
		//this.m1();
		this.m2();
		this.m3();
		this.m4();
	}
}
