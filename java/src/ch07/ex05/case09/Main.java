package ch07.ex05.case09;

public class Main {
	public static void main(String[] args) {
		C c = new C();
		String msg = "";
		if(c instanceof C) msg += "C ";
		if(c instanceof B) msg += "B ";
		if(c instanceof A) msg += "A ";
		if(c instanceof Object) msg += "Object ";
		System.out.println(msg);
		
		B b = new B();
		msg = "";
		if(b instanceof C) msg += "C ";
		if(b instanceof B) msg += "B ";
		if(b instanceof A) msg += "A ";
		if(b instanceof Object) msg += "Object ";
		System.out.println(msg);
		
//		if(b instanceof F) , 상속관계, 구현관계 어디에도 해당이 안되므로 문법이 성립되지않음.
//		if(c instanceof F)
		
		F f = new F();
		msg = "";
		//if(f instanceof C)
		if(f instanceof A) msg += "A "; // instanceof에 interface는 자유롭게 사용할 수 있다.
		System.out.println(msg);
	}
}
