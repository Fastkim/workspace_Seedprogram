package ch02.ex04;

public class C02Overflow {
	public static void main(String[] args) {
		// byte b = 128;
		byte b = 127;
		// b = b + 1;
		
		b++; // overflow 되고 있다.
		b++; // overflow 되고 있다.
		
		System.out.println(b);
	}
}
