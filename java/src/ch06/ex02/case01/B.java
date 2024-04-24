package ch06.ex02.case01;

public class B {
	public void test() {
		A a = new A();
		
		int x = 0;
		//x = a.a; // private
		x = a.b; // default
		x = a.c; // protected
		x = a.d; // public 
		
		//a.m1(); // private : 객체내부에서 혼자만 사용할거야!
		a.m2(); // default 
		a.m3(); // protected
		a.m4(); // public
	}
}
