package ch02.ex02;

public class C01Int {
	public static void main(String[] args) {
		int x = 10; // 10진수
		System.out.println(Integer.toBinaryString(x)); // 2진수로 변환하는 method
		
		x = 012; // 8진수표현
		System.out.println(Integer.toBinaryString(x));
		
		x = 0xA; // 16진수
		System.out.println(Integer.toBinaryString(x));
		
		x = 0b1010; // 2진수
		System.out.println(Integer.toBinaryString(x));
		
		x = 1_234_567; // int 타입 표현
		System.out.println(Integer.toBinaryString(x));
		
		double y = 1e1; // 1 * 10의 1승
		System.out.println(y);
	}
}
