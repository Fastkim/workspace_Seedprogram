package ch02.ex01;

public class C04Assign {
	public static void main(String[] args) {
		int a = 1; // varable = constant
		int b = 2;
		System.out.printf("%d, %d\n", a, b);
		
		a = b;
		System.out.printf("%d, %d\n", a, b);
		
		a = b + 1; // 3 이란 값은 연산자 +가 return 한것이다.
		System.out.printf("%d, %d\n", a, b);
		
		double d = Math.random();
		System.out.printf("%f", d);
	}
}
