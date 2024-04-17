package ch03.ex04;

public class C01Arith {
	public static void main(String[] args) {
		byte a = 3;
		byte b = 2;
		byte c = (byte)(a + b);
		System.out.println(c);
		
//		c = c + 1;
		c++; // int로 바꾸는 작업을 하지 않는다.
		System.out.println(c);
		
		double d = a / b;
		System.out.println(d);
		
		// 과제: d 변수에 1.5가 저장되도록 하라.
		d = (double)a / b;
		System.out.println(d);
		d = 1.0 * a / b;
		System.out.println(d);
		
		d = (double)(a / b); // int로 계산후에 double타입으로 변환
		System.out.println(d);
		d = a / b * 1.0;
		System.out.println(d);
	}
}
